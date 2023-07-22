import { NextResponse } from "next/server";
import { prisma } from "@/prisma/db";
import { logActivity } from "@/utils/log";
import { getSession } from "@/utils/session-manager";
import { district } from "../../../../../prisma/seed/district";

export async function POST(request: Request) {
  try {
    const res = await request.json();
    const data = {
      name: res.data.name,
      districtId: res.districtId,
    };
    const response = await prisma.electoralArea.create({ data });

    return NextResponse.json(response);
  } catch (error: any) {
    return NextResponse.json(error);
  }
}

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const selectedDistrict =
      searchParams.get("districtId") == null || ""
        ? "undefined"
        : searchParams.get("districtId");

        

    const data = await prisma.electoralArea.findMany({
      where: { deleted: 0, districtId: Number(selectedDistrict) },
    });


    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(error);
  }
}
