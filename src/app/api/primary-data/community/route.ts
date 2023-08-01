import { NextResponse } from "next/server";
import { prisma } from "@/prisma/db";
import { logActivity } from "@/utils/log";

import { district } from '../../../../../prisma/seed/district';

export async function POST(request: Request) {
  try {
    const res = await request.json();

    const data = {
      name: res.communityName,
      districtId:  Number(res.districtId),
      electoralAreaId: Number(res.electoralAreaId),
    };

    const response = await prisma.community.create({ data });

    return NextResponse.json(response);
  } catch (error: any) {
    console.log(error);

    return NextResponse.json(error, { status: 500 });
  }
}

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const districtId = Number(searchParams.get("districtId"));
    const mobile = Number(searchParams.get("mobile"));


    if (districtId & mobile) {



      const data = await prisma.community.findMany({
        where: { deleted: 0, districtId: Number(districtId) },
      });
      return NextResponse.json(data);

    }
    const data = await prisma.community.findMany({
      where: { deleted: 0 },
      include: {
        ElectoralArea: {
          include: {
            District: {
              include: {
                Region: true,
              },
            },
          },
        },
      },
    });
    return NextResponse.json(data);

  } catch (error) {
    return NextResponse.json(error);
  }
}

export async function PUT(request: Request) {
  try {
    const res = await request.json();

    let id = res.communityId;
    const data = {
      name: res.communityName,
      electoralAreaId: Number(res.electoralAreaId),
    };

    const response = await prisma.community.update({ where: { id }, data });

    return NextResponse.json(response);
  } catch (error: any) {
    console.error(error);
    return NextResponse.json(error);
  }
}
