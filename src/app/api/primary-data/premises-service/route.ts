import { NextResponse } from "next/server";
import { prisma } from "../../../../../prisma/db";
import { logActivity } from "../../../../../utils/log";
import { getSession } from "../../../../../utils/session-manager";

export async function POST(request: Request) {
  try {
    const res = await request.json();

  

    return NextResponse.json(response);
  } catch (error: any) {
    return NextResponse.json(error);
  }
}

export async function GET(request: Request) {
  try {
    const res = await request.json();

    const data = await prisma.xxxxx.findMany({
      where: { deleted: 0, userId: Number(res.userId) },
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(error);
  }
}
