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

    const response = await prisma.sanitationReport.findMany({
      where: { deleted: 0 },
      orderBy: {
        id: "desc",
      },
    });

    return NextResponse.json(response);
  } catch (error) {
    return NextResponse.json(error, { status: 500 });
  }
}
