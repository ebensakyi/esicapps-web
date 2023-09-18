import { prisma } from "@/prisma/db";
import { NextResponse } from "next/server";

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const id = params.id;

    await prisma.sanitationReport.update({
      where: {
        id: Number(id),
      },
      data:{
        deleted:1
      }
    });
    return NextResponse.json({});
  } catch (error) {
    console.log("error===>", error);
    return NextResponse.json(error);
  }
}
