import { NextResponse } from "next/server";
import { prisma } from "@/prisma/db";
import { logActivity } from "@/utils/log";
import { uploadBase64Image } from "@/utils/upload-base64";
import { AWS_S3_ESICAPPS_IMAGES } from "@/config";
import { logger } from "@/logger";
// import { AWS_S3_ESICAPPS_IMAGES } from "@/config";

export async function POST(request: Request) {
  try {
    const res = await request.json();

    const inspectionId = res?.inspectionId;

    const formSectionImageId = res.formSectionImageId;
    let encodedImage: string = res.encodedImage;

    let fileName = await uploadBase64Image(
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
    let inspectionId: any = searchParams.get("inspectionId");



    const response = await prisma.inspectionPictures.findMany({
      where: { inspectionId },
    });


    return NextResponse.json(response, {
      status: 200,
    });
  } catch (error) {
    logger.error("INSTITUTION_PREM==>", error);

    return NextResponse.json(error);
  }
}
