import { NextResponse } from "next/server";
import { prisma } from "@/prisma/db";
import { logActivity } from "@/utils/log";
import { generateCode } from "@/utils/generate-code";

import bcrypt from "bcryptjs";
import { getServerSession } from "next-auth";
import { upload2S3, uploadFile } from "@/utils/upload";
import formidable from "formidable";

export async function POST(request: Request) {
  try {
    const data = await request.formData();

    // console.log("DATA===> ",data);

    // const form = new formidable.IncomingForm({ multiples: true });

    // console.log("FORM======> ",form);

    const file: File | null = data.get("imageFile") as unknown as File;
    const userId = Number(data?.get("userId"));

    let fileName = await uploadFile(file);

    if (fileName != "0") {
      const data = {
        imagePath: fileName,
      };
      const ui = await prisma.user.update({
        data,
        where: { id: Number(userId) },
      });

      await upload2S3(fileName);

      return NextResponse.json({ data: fileName }, { status: 200 });
    }

    return NextResponse.json({ message: "An error occurred" }, { status: 500 });
  } catch (error) {
    console.log(error);

    return NextResponse.json(error, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  try {
    const res = await request.json();

    return NextResponse.json({});
  } catch (error) {
    console.log(error);

    return NextResponse.json(error);
  }
}
