import { NextResponse } from "next/server";
import { prisma } from "@/prisma/db";
import { logActivity } from "@/utils/log";
import { getSession } from "@/utils/session-manager";

export async function POST(request: Request) {
  try {
    const res = await request.json();
    const data = {
      name: res.data.name,
      inspectionFormId: res.data.inspectionFormId

    };
    const response = await prisma.pestSign.create({ data });

    return NextResponse.json(response);
  } catch (error: any) {
    return NextResponse.json(error);
  }
}

export async function GET(request: Request) {
  try {
    const data = await prisma.pestSign.findMany({
      where: { deleted: 0 },
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(error);
  }
}