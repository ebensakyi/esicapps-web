import { NextResponse } from "next/server";
import { prisma } from "@/prisma/db";
import { logActivity } from "@/utils/log";

export async function POST(request: Request) {
  try {
    const res = await request.json();

    const data = {
      premisesName: res.premisesName.trim(),
      inspectionFormId: Number(res.inspectionForm),
    };

    const response = await prisma.premisesAndForms.create({ data });

    return NextResponse.json(response);
  } catch (error: any) {
    return NextResponse.json(error);
  }
}

export async function PUT(request: Request) {
  try {
    const res = await request.json();

    let id = Number(res.id);

    const response = await prisma.premisesAndForms.update({
      data: {
        premisesName: res.premisesName.trim(),
        inspectionFormId: Number(res.inspectionForm),
      },
      where: { id },
    });

    return NextResponse.json(response);
  } catch (error: any) {
    return NextResponse.json(error);
  }
}


export async function DELETE(request: Request) {
  try {
    const res = await request.json();

    console.log(res);
    

    let id = Number(res);

    const response = await prisma.premisesAndForms.update({
      data: {
       deleted:1
      },
      where: { id },
    });

    return NextResponse.json(response);
  } catch (error: any) {
    return NextResponse.json(error);
  }
}

export async function GET(request: Request) {
  try {
    const response = await prisma.premisesAndForms.findMany({
      where: { deleted: 0 },
      include: {
        InspectionForm: true,
      },
    });

    const data = response.map((item) => ({
      id: item.id,
      premisesName: item.premisesName,
      inspectionFormName: item.InspectionForm.name,
      inspectionFormId: item.InspectionForm.id,
      deleted: item.deleted,
      createdAt: item.createdAt,
    }));

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(error);
  }
}
