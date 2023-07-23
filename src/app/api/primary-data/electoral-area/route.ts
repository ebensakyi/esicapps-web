import { NextResponse } from "next/server";
import { prisma } from "@/prisma/db";
import { logActivity } from "@/utils/log";
import { getSession } from "@/utils/session-manager";
import { district } from "../../../../../prisma/seed/district";
import { getServerSession } from "next-auth";
import { authOptions } from "../../auth/[...nextauth]/options";

export async function POST(request: Request) {
  try {
    const res = await request.json();
    const data = {
      name: res.electoralAreaName,
      districtId: Number(res.districtId),
    };

    const response = await prisma.electoralArea.create({ data });

    return NextResponse.json(response);
  } catch (error: any) {
    console.error(error);
    return NextResponse.json(error);
  }
}

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const session = await getServerSession(authOptions);
    const selectedDistrict =
      searchParams.get("districtId") == null || ""
        ? undefined
        : Number(searchParams.get("districtId"));

    const userLevel = session?.user?.userLevelId;
    const userDistrict = session?.user?.districtId;
    const userRegion = session?.user?.regionId;
    let query = {};

    // const data = await prisma.electoralArea.findMany({
    //   where: { deleted: 0, districtId: Number(selectedDistrict) },
    // });

    if (userLevel == 1) {
      query = {
        where: { deleted: 0, districtId: selectedDistrict },
        include: {
          District: {
            include: {
              Region: true,
            },
          },
        },
      };
    } else if (userLevel == 2) {
      query = {
        where: { deleted: 0, districtId: Number(userRegion) },
        include: {
          District: {
            include: {
              Region: true,
            },
          },
        },
      };
    } else if (userLevel == 3) {
      query = {
        where: { deleted: 0, id: Number(userDistrict) },
        include: {
          District: {
            include: {
              Region: true,
            },
          },
        },
      };
    } else {
      query = { where: { deleted: 0 } };
    }


    const data = await prisma.electoralArea.findMany(query);

    


    return NextResponse.json(data);
  } catch (error) {
    console.error(error);
    return NextResponse.json(error);
  }
}


export async function PUT(request: Request) {
  try {
    const res = await request.json();

    let id = res.electoralAreaId
    const data = {
      name: res.electoralAreaName,
      districtId: Number(res.districtId),
    };

    const response = await prisma.electoralArea.update({where:{id}, data });

    return NextResponse.json(response);
  } catch (error: any) {
    console.error(error);
    return NextResponse.json(error,{status:500});
  }
}
