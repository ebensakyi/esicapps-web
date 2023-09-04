import { prisma } from "@/prisma/db";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    let { searchParams } = new URL(request.url);

    let formId = Number(searchParams.get("formId")) || undefined;


    const data = await prisma.inspection.findMany({
      where: {
        isPublished: 1,
        inspectionFormId: formId,
      },
      include: {
        BasicInfoSection: true,
      },
    });

   
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(error);
  }
}
