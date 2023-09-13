import { NextResponse } from "next/server";
import { prisma } from "@/prisma/db";
import { logActivity } from "@/utils/log";
import { upload2S3, saveFileOnDisk } from "@/utils/upload";

export async function POST(request: Request) {
  try {
    // fcmId: fields.fcmId,
    // fullName: fields.fullName,
    // email: fields.email,
    // phoneNumber: fields.phoneNumber,
    // description: fields.description,
    // community: fields.community,

    // districtId: Number(fields.district),
    // latitude: Number(fields.latitude),
    // longitude: Number(fields.longitude),
    // reportTypeId: Number(fields.reportType),
    // image: image,

    const data = await request.formData();

    const file: File | null = data.get("nuisancePicture") as unknown as File;
    const fcmId = data?.get("fcmId");
    const fullName = data?.get("fullName");
    const email = data?.get("email");
    const phoneNumber = data?.get("phoneNumber");
    const description = data?.get("description");

    const reportType = data?.get("reportType");
    const latitude = data?.get("latitude");
    const longitude = data?.get("longitude");
    const communityLandmark = data?.get("communityLandmark");
    const placeMark = data?.get("placeMark");

    let fileName = await saveFileOnDisk(file);

    if (fileName != "0") {
      const data = {
        fcmId: fcmId,
        imagePath: fileName,
        fullName: fullName,
        email: email,
        phoneNumber: phoneNumber,
        description: description,
        reportType: reportType,
        latitude: latitude,
        longitude: longitude,
        communityLandmark: communityLandmark,
        placeMark: placeMark,

      };

      const ip = await prisma.sanitationReport.create({ data } as any);
      await upload2S3(fileName, "esicapps-images");

      return NextResponse.json({ data: fileName }, { status: 200 });
    }

    return NextResponse.json({ message: "An error occurred" }, { status: 500 });
  } catch (error) {
    console.log(error);

    return NextResponse.json(error, { status: 500 });
  }
}
