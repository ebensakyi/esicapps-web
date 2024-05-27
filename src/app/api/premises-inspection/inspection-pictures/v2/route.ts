import { NextResponse } from "next/server";
import { prisma } from "@/prisma/db";
import { logActivity } from "@/utils/log";
import { uploadBase64Image } from "@/utils/upload-base64";
import { AWS_S3_ESICAPPS_IMAGES } from "@/config";
// import { AWS_S3_ESICAPPS_IMAGES } from "@/config";

export async function POST(request: Request) {
  try {

    const res = await request.json();
    

    // const file: File | null = data.get("imageFile") as unknown as File;
    const inspectionId = res?.inspectionId;

    const formSectionImageId = res.formSectionImageId;
    let encodedImage: string = res.encodedImage;


    // let fileName = await uploadBase64toS3(buffer);

    let fileName = await uploadBase64Image(encodedImage,AWS_S3_ESICAPPS_IMAGES);

    const data = {
      inspectionId: inspectionId,
      imagePath: fileName,
      formSectionImageId:
        formSectionImageId == "null" ? 1 : Number(formSectionImageId),
    };

    const ip = await prisma.inspectionPictures.create({ data } as any);

    return NextResponse.json({ data: fileName }, { status: 200 });

  } catch (error) {
    console.log(error);

    return NextResponse.json(error, { status: 500 });
  }
}
