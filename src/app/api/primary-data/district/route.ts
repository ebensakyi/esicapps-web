import { NextResponse } from "next/server";
import { prisma } from "@/prisma/db";
import { logActivity } from "@/utils/log";
import { authOptions } from "../../auth/[...nextauth]/options";
import { getServerSession } from "next-auth";
import { district } from "../../../../../prisma/seed/district";

export async function POST(request: Request) {
  try {
    const res = await request.json();
    const session :any= await getServerSession(authOptions);


    const data = {
      name: res.districtName,
      regionId: Number(res.regionId),
      abbrv: res.abbrv,
    };
    const response = await prisma.district.create({ data });

    return NextResponse.json(response);
  } catch (error: any) {
    console.log(error);
    return NextResponse.json(error);
  }
}

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const selectedRegion =
      searchParams.get("regionId") == null
        ? undefined
        : Number(searchParams.get("regionId"));

    const session :any= await getServerSession(authOptions);

    const userLevel = session?.user?.userLevelId;
    const userDistrict = session?.user?.districtId;
    const userRegion = session?.user?.regionId;
    let query = {};

    if (userLevel == 1) {
      query = {
        where: { deleted: 0, regionId: selectedRegion },
        include: { Region: true },
      };
    } else if (userLevel == 2) {
      query = {
        where: { deleted: 0, regionId: Number(userRegion) },
        include: { Region: true },
      };
    } else if (userLevel == 3) {
      query = {
        where: { deleted: 0, id: Number(userDistrict) },
        include: { Region: true },
      };
    } else {
      query = { where: { deleted: 0 } };
    }

    const data = await prisma.district.findMany(query);

    return NextResponse.json(data);
  } catch (error) {
    console.log(error);
    return NextResponse.json(error);
  }
}

export async function PUT(request: Request) {
  try {
    const res = await request.json();
    const session :any= await getServerSession(authOptions);

    let districtId = res.districtId;

    const data = {
      name: res.districtName,
      regionId: Number(res.regionId),
      abbrv: res.abbrv,
    };

    
    const response = await prisma.district.update({
      where: { id: Number(districtId) },
      data,
    });

    return NextResponse.json(response);
  } catch (error: any) {
    console.log(error);
    return NextResponse.json(error);
  }
}
