import { NextResponse } from "next/server";
import { prisma } from "@/prisma/db";
import { logActivity } from "@/utils/log";
import {  uploadBase64ImageV2 } from "@/utils/upload-base64";
import { AWS_S3_ESICAPPS_IMAGES } from "@/config";
import { logger } from "@/logger";
// import { AWS_S3_ESICAPPS_IMAGES } from "@/config";

export async function POST(request: Request) {
  try {
    const res = await request.json();

    const inspectionId = res?.inspectionId;

    const formSectionImageId = res.formSectionImageId;
    let encodedImage: string = res.encodedImage;

    let imageName = `${formSectionImageId}${inspectionId}.jpg`

    let fileName = await uploadBase64ImageV2(
      imageName,
      encodedImage,
      AWS_S3_ESICAPPS_IMAGES
    );

    const data = {
      inspectionId: inspectionId,
      imagePath: fileName,
      formSectionImageId:
        formSectionImageId == "null" ? 1 : Number(formSectionImageId),
    };

    const ip = await prisma.inspectionPictures.create({ data } as any);

    return NextResponse.json({ data: fileName }, { status: 200 });
  } catch (error) {
    return NextResponse.json(error, { status: 500 });
  }
}

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const userId = Number(searchParams.get("userId"));
    const inspectionIds = searchParams.get("inspectionIds");

    const response = await prisma.inspectionPictures.findMany({
      where: { inspectionId: "fe23af00-c93e-113e-8989-731b33ea58e6" },
    });

    console.log("getting images");
    
    return NextResponse.json(response, {
      status: 200,
    });
  } catch (error) {
    logger.error("INSTITUTION_PREM==>", error);

    return NextResponse.json(error);
  }
}
