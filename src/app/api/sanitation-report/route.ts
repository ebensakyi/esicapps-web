import { NextResponse } from "next/server";
import { prisma } from "@/prisma/db";
import { logActivity } from "@/utils/log";
import { upload2S3, saveFileOnDisk } from "@/utils/upload";

export async function POST(request: Request) {
  try {
    const data = await request.formData();

    const file: File | null = data.get("nuisancePicture") as unknown as File;
    const sanitationReportUserId = data?.get("userId");

    const description = data?.get("description");

    const reportType = Number(data?.get("reportType"));
    const districtId = Number(data?.get("districtId"));

    const latitude = data?.get("latitude");
    const longitude = data?.get("longitude");
    const communityLandmark = data?.get("communityLandmark");
    const address = data?.get("address");

    let fileName = await saveFileOnDisk(file);

    if (fileName != "0") {
      const data = {
        image: fileName,
        description: description,
        reportTypeId: reportType,
        latitude: latitude,
        longitude: longitude,
        districtId: districtId == 0 ? null : districtId,
        community: communityLandmark,
        address: address,
        sanitationReportUserId:
          sanitationReportUserId == "null"
            ? null
            : Number(sanitationReportUserId),
      };

      const ip = await prisma.sanitationReport.create({ data } as any);
      await upload2S3(fileName, "esicapps-images");

      return NextResponse.json({ data: fileName }, { status: 200 });
    }

    return NextResponse.json({ message: "An error occurred" }, { status: 500 });
  } catch (error) {
    console.log("error===>", error);

    return NextResponse.json(error, { status: 500 });
  }
}

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const districtId = Number(searchParams.get("districtId"));

    let searchText =
      searchParams.get("searchText") == "undefined"
        ? ""
        : searchParams.get("searchText");
    let status = searchParams.get("status");
    const filterBy = searchParams.get("filterBy");
    const filterValue = searchParams.get("filterValue");
    let curPage = Number.isNaN(Number(searchParams.get("page")))
      ? 1
      : Number(searchParams.get("page"));

    let perPage = 10;
    let skip =
      Number((curPage - 1) * perPage) < 0 ? 0 : Number((curPage - 1) * perPage);

    const response = await prisma.sanitationReport.findMany({
      where:
        searchText != ""
          ? {
              OR: [
                {
                  District: {
                    name: {
                      contains: searchText,
                      mode: "insensitive",
                    },
                  },
                },
                {
                  description: { contains: searchText, mode: "insensitive" },
                },
                {
                  community: { contains: searchText, mode: "insensitive" },
                },
              ],
              deleted: 0,
            }
          : {
              deleted: 0,
            },
      include: {
        District: true,
        SanitationReportUser: true,
      },
      skip: skip,
      take: perPage,
      orderBy: {
        createdAt: "desc",
      },
    } as any);

    const count = await prisma.sanitationReport.count({
      where:
        searchText != ""
          ? {
              OR: [
                {
                  District: {
                    name: {
                      contains: searchText,
                      mode: "insensitive",
                    },
                  },
                },
                {
                  description: { contains: searchText, mode: "insensitive" },
                },
              ],
              deleted: 0,
            }
          : {
              deleted: 0,
            },
    } as any);

    return NextResponse.json({
      response,
      curPage: curPage,
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
    await prisma.sanitationReport.update({
      where: {
        id: Number(res?.reportId),
      },
      data: {
        status: Number(res?.reportStatus),
        statusMessage: res?.statusMessage,
      },
    });

    return NextResponse.json({});
  } catch (error) {
    console.log(error);

    return NextResponse.json(error, { status: 500 });
  }
}
