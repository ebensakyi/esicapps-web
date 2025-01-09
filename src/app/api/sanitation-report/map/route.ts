import { prisma } from "@/prisma/db";
import { logActivity } from "@/utils/log";
import { getServerSession } from "next-auth";

import { NextResponse } from "next/server";
import { authOptions } from "../../auth/[...nextauth]/options";

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
    const session: any = await getServerSession(authOptions);

    let userId = session?.user?.id;
    // let surname = session?.user?.surname;
    let loginUserDistrictId = session?.user?.districtId;
    let loginUserRegionId = session?.user?.regionId;
    let loginUserLevel = session?.user?.userLevelId;
    let { searchParams } = new URL(request.url);

    let status =
      searchParams.get("status") == "2" ||
      searchParams.get("status") == "1" ||
      searchParams.get("status") == "0"
        ? Number(searchParams.get("status"))
        : undefined;

        

    if (loginUserLevel == 3) {
      const data = await prisma.sanitationReport.findMany({
        where: {
          deleted: 0,
          statusId: Number(status),
          districtId: Number(loginUserDistrictId),
        },
        include: {
          District: true,
        },
      });

      

      return NextResponse.json(data);
    }
    if (loginUserLevel == 2) {
      const data = await prisma.sanitationReport.findMany({
        where: {
          deleted: 0,
          statusId: Number(status),
          regionId: Number(loginUserRegionId),
        },
        include: {
          District: true,
        },
        
      });
      return NextResponse.json(data);
    }
    if (loginUserLevel == 1) {
      const data = await prisma.sanitationReport.findMany({
        where: {
          deleted: 0,
          statusId: Number(status),
        },
        include: {
          District: true,
        },
       
      });
      return NextResponse.json(data);
    }

    return NextResponse.json({});

  } catch (error) {
    console.log(error);

    return NextResponse.json(error);
  }
}
