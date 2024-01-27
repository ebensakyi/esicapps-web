import { prisma } from "@/prisma/db";
import { logActivity } from "@/utils/log";

import { NextResponse } from "next/server";
import { authOptions } from "../auth/[...nextauth]/options";
import { getServerSession } from "next-auth";

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

    let formId = Number(searchParams.get("formId")) || undefined;

    if (loginUserLevel == 3) {
      const data = await prisma.inspection.findMany({
        where: {
          isPublished: 1,
          inspectionFormId: formId,
          districtId: Number(loginUserDistrictId),
        },
        include: {
          InspectionPictures: true,
          BasicInfoSection: true,
          District: true,
          Region: true,

          User: true,
          Community: {
            include: {
              ElectoralArea: true,
            },
          },
        },
      });

      return NextResponse.json(data);
    }
    if (loginUserLevel == 2) {
      const data = await prisma.inspection.findMany({
        where: {
          isPublished: 1,
          inspectionFormId: formId,
          regionId: Number(loginUserRegionId),
        },
        include: {
          InspectionPictures: true,
          BasicInfoSection: true,
          District: true,
          Region: true,

          User: true,
          Community: {
            include: {
              ElectoralArea: true,
            },
          },
        },
      });

      return NextResponse.json(data);
    }
    if (loginUserLevel == 1) {
      const data = await prisma.inspection.findMany({
        where: {
          isPublished: 1,
          inspectionFormId: formId,
        },
        include: {
          InspectionPictures: true,
          BasicInfoSection: true,
          District: true,
          Region: true,

          User: true,
          Community: {
            include: {
              ElectoralArea: true,
            },
          },
        },
      });

      return NextResponse.json(data);
    }
  } catch (error) {
    return NextResponse.json(error);
  }
}
