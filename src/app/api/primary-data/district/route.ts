import { NextResponse } from "next/server";
import { prisma } from "@/prisma/db";
import { logActivity } from "@/utils/log";
import { getSession } from "@/utils/session-manager";
import { useSession } from "next-auth/react";
import { getServerSession } from "next-auth";
import { options } from "../../auth/[...nextauth]/options";

export async function POST(request: Request) {
  try {
    const res = await request.json();
    const data = {
      name: res.data.name,
      regionId: res.regionId,
      abbrv: res.abbrv,
    };
    const response = await prisma.district.create({ data });

    return NextResponse.json(response);
  } catch (error: any) {
    return NextResponse.json(error);
  }
}

export async function GET(request: Request) {
  try {

    const res = await request.json();
    const session = await getServerSession(options);


    

    const { searchParams } = new URL(request.url);
    const regionId = Number(searchParams.get('regionId'))


    const data = await prisma.district.findMany({
      where: { deleted: 0,regionId:regionId },
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(error);
  }
}
