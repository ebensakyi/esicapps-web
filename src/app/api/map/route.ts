import { prisma } from "@/prisma/db";
import { logActivity } from "@/utils/log";

import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const res = await request.json();

    return NextResponse.json([]);
  } catch (error: any) {
    console.log(error);
    return NextResponse.json(error);
  }
}

export async function GET(request: Request) {
  try {
    const data = await prisma.basicInfoSection.findMany({
      where: { deleted: 0 },
      include: {
        Inspection: true

      },
    //   orderBy: {
    //     id: "desc",
    //   },
    });

    
    return NextResponse.json(data);
  } catch (error) {
    
    return NextResponse.json(error);
  }
}
