import { NextResponse } from "next/server";
import { prisma } from "@/prisma/db";
import { logActivity } from "@/utils/log";


export async function POST(request: Request) {
  try {
    const res = await request.json();
    const data = {
      name: res.name,
    };
    const response = await prisma.toiletDischarge.create({ data });

    return NextResponse.json(response);
  } catch (error: any) {
    return NextResponse.json(error);
  }
}

export async function GET(request: Request) {
  try {
    const data = await prisma.toiletDischarge.findMany({
      where: { deleted: 0 },
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(error);
  }
}

export async function PUT(request: Request) {
  try {
    const res = await request.json();

    const data = {
      name: res.name,
    };
    const response = await prisma.toiletDischarge.update({
      where: {
        id: Number(res?.id),
      },
      data,
    });

    return NextResponse.json(response);
  } catch (error: any) {
    console.error(error);

    return NextResponse.json(error, { status: 500 });
  }
}