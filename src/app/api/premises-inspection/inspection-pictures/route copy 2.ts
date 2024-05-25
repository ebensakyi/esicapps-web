import { NextResponse } from "next/server";
import { prisma } from "@/prisma/db";
import { logActivity } from "@/utils/log";
import { uploadBase64Image } from "@/utils/upload-base64";

export async function POST(request: Request) {
  try {
    const formData = await request.formData();

    console.log("FORM DATA", formData);
    

    // const file: File | null = data.get("imageFile") as unknown as File;
    const inspectionId = formData?.get("inspectionId");

    const formSectionImageId = formData?.get("formSectionImageId");
    let encodedImage: string = formData?.get("encodedImage")?.toString() ?? "";


    // let fileName = await uploadBase64toS3(buffer);

    let fileName = await uploadBase64Image(encodedImage, "esicapps-images");

    const data = {
      inspectionId: inspectionId,
      imagePath: fileName,
      formSectionImageId:
        formSectionImageId == "null" ? 1 : Number(formSectionImageId),
    };

    const ip = await prisma.inspectionPictures.create({ data } as any);

    return NextResponse.json({ data: fileName }, { status: 200 });

    return NextResponse.json({ message: "An error occurred" }, { status: 500 });
  } catch (error) {
    console.log(error);

    return NextResponse.json(error, { status: 500 });
  }
}
