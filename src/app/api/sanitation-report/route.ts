import { NextResponse } from "next/server";
import { prisma } from "@/prisma/db";
import { logActivity } from "@/utils/log";
import { upload2S3, saveFileOnDisk } from "@/utils/upload";
import { sendSMS } from "@/utils/send-hubtel-sms";
import { authOptions } from "../auth/[...nextauth]/options";
import { getServerSession } from "next-auth";
import { MyConstants } from "@/src/constants";


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

    let sendSMSReporter = res?.sendsms;
    let phoneNumber = res?.phoneNumber;
    let statusMessage = res?.statusMessage;
    const now = new Date();
    await prisma.sanitationReport.update({
      where: {
        id: Number(res?.reportId),
      },
      data: {
        statusId: Number(res?.reportStatus),
        statusMessage: statusMessage,
        completedAt: now.toISOString(),
      },
    });
    let sanitationReport = await prisma.sanitationReport.findFirst({
      where: {
        id: Number(res?.reportId),
      },
      include: { Status: true },
    });
    if (sendSMSReporter) {
      await sendSMS(
        phoneNumber,
        `Your reported nuisance is ${
          sanitationReport?.Status.name
        }`
      );
    }

    return NextResponse.json({});
  } catch (error) {
    console.log(error);

    return NextResponse.json(error, { status: 500 });
  }
}
