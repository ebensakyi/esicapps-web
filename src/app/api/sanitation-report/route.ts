import { NextResponse } from "next/server";
import { prisma } from "@/prisma/db";
import { logActivity } from "@/utils/log";
import { upload2S3, saveFileOnDisk } from "@/utils/upload";
import { sendSMS } from "@/utils/send-hubtel-sms";
import { authOptions } from "../auth/[...nextauth]/options";
import { getServerSession } from "next-auth";

// export async function POST(request: Request) {
//   try {
//     const data = await request.formData();
// console.log(data);

//     const sanitationReportUserId = data?.get("userId");

//     const description = data?.get("description");

//     const reportType = Number(data?.get("reportType"));
//     const districtId = Number(data?.get("districtId"));
//     const reportCategoryId = Number(data?.get("reportCategoryId"));

//     const latitude = data?.get("latitude");
//     const longitude = data?.get("longitude");
//     const communityLandmark = data?.get("communityLandmark");
//     const address = data?.get("address");
//     const mediaType = data?.get("mediaType");
//     let file: any;

//     console.log("mediaType======> ",mediaType);

//     if (mediaType == "1") {
//       file = data.get("nuisancePicture") as unknown as File;
//     } else if (mediaType == "2") {
//       file = data.get("nuisanceVideo") as unknown as File;
//     }

//     let district = await prisma.district.findFirst({
//       where: {
//         id: Number(districtId),
//       },
//     });

//     console.log("file======> ",file);
    

//     let region = Number(district?.regionId);

//     let fileName = await saveFileOnDisk(file);

//     if (fileName != "0") {
//       const data = {
//         image: fileName,
//         description: description,
//         reportTypeId: reportType,
//         reportCategoryId: reportCategoryId,
//         latitude: latitude,
//         longitude: longitude,
//         districtId: districtId == 0 ? null : districtId,
//         regionId: region,
//         community: communityLandmark,
//         address: address,
//         sanitationReportUserId:
//           sanitationReportUserId == "null"
//             ? null
//             : Number(sanitationReportUserId),
//       };

//       let reportCount = await prisma.sanitationReport.count({
//         where: {
//           image: fileName,
//           description: description,
//           reportTypeId: reportType,
//           reportCategoryId: reportCategoryId,
//           latitude: latitude,
//           longitude: longitude,
//         },
//       } as any);
//       if (reportCount != 0) {
//         return NextResponse.json({});
//       }

//       const ip = await prisma.sanitationReport.create({ data } as any);

//       await upload2S3(fileName, "esicapps-images");

//       return NextResponse.json({ data: fileName }, { status: 200 });
//     }

//     return NextResponse.json({ message: "An error occurred" }, { status: 500 });
//   } catch (error) {
//     console.log("error===>", error);

//     return NextResponse.json(error, { status: 500 });
//   }
// }

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const session: any = await getServerSession(authOptions);

    const loginUserUserId = session?.user?.id;
    const loginUserDistrictId = session?.user?.districtId;
    const loginUserRegionId = session?.user?.regionId;
    const loginUserLevel = session?.user?.userLevelId;

    // Default query parameters
    let searchText =
      searchParams.get("searchText") === "undefined"
        ? ""
        : searchParams.get("searchText");

    let _status: any = searchParams.get("status");
    let status: any = ["2", "1", "0"].includes(_status)
      ? Number(searchParams.get("status"))
      : undefined;

    let curPage = Number.isNaN(Number(searchParams.get("page")))
      ? 1
      : Number(searchParams.get("page"));

    let perPage = 10;
    let skip = Math.max(0, (curPage - 1) * perPage);

    // Construct where conditions based on user level
    let whereConditions: any = { deleted: 0, status };

    if (loginUserLevel === 3 && loginUserDistrictId) {
      // User level 3: Filter by district
      whereConditions = {
        ...whereConditions,
        District: {
          id: loginUserDistrictId,
        },
      };
    } else if (loginUserLevel === 2 && loginUserRegionId) {
      // User level 2: Filter by region
      whereConditions = {
        ...whereConditions,
        District: {
          Region: {
            id: loginUserRegionId,
          },
        },
      };
    } else if (loginUserLevel === 1) {
      // User level 1: No additional filters
      whereConditions = { deleted: 0, status };
    }

    // Fetch sanitation reports
    const response = await prisma.sanitationReport.findMany({
      where: searchText
        ? {
            OR: [
              {
                District: {
                  name: { contains: searchText, mode: "insensitive" },
                },
              },
              { description: { contains: searchText, mode: "insensitive" } },
              { community: { contains: searchText, mode: "insensitive" } },
            ],
            ...whereConditions,
          }
        : whereConditions,
      include: {
        District: true,
        SanitationReportUser: true,
        ReportCategory: true,
        AssignedByUser: true,
        AssignedToUser: true,
      },
      skip,
      take: perPage,
      orderBy: {
        createdAt: "desc",
      },
    });

    // Count total records
    const count = await prisma.sanitationReport.count({
      where: whereConditions,
    });

    // Return paginated response
    return NextResponse.json({
      response,
      curPage,
      maxPage: Math.ceil(count / perPage),
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json(error, { status: 500 });
  }
}

export async function PUT(request: Request) {
  try {
    const res = await request.json();

    let statuses = ["pending", "resolved", "in progress"];

    let sendSMSReporter = res?.sendsms;
    let phoneNumber = res?.phoneNumber;
    let statusMessage = res?.statusMessage;
    const now = new Date();
    await prisma.sanitationReport.update({
      where: {
        id: Number(res?.reportId),
      },
      data: {
        status: Number(res?.reportStatus),
        statusMessage: statusMessage,
        completedAt: now.toISOString(),
      },
    });

    if (sendSMSReporter) {
      await sendSMS(
        phoneNumber,
        `Your reported nuisance is ${statuses[Number(res?.reportStatus)]}`
      );
    }

    return NextResponse.json({});
  } catch (error) {
    console.log(error);

    return NextResponse.json(error, { status: 500 });
  }
}
