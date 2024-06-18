import { NextResponse } from "next/server";
import { prisma } from "@/prisma/db";
import { logActivity } from "@/utils/log";
import { logger } from "@/logger";
import { convertStringToArray } from "@/utils/array-converter";

export async function POST(request: Request) {
  try {
    const res = await request.json();

    const user: any = await prisma.user.findFirst({
      where: { id: Number(res.userId) },
    });
    const district = user?.districtId;
    const districtData = await prisma.district.findFirst({
      where: { id: Number(district) },
    });
    let region = Number(districtData?.regionId);

    const data: any = {
      inspectionKind:  Number(res.inspectionKind),
      id: res.id,
      userId: Number(res.userId),
      totalRating: Number(res.totalRating),
      districtId: district,
      regionId: region,
      communityId: Number(res.communityId),
      electoralAreaId: Number(res.electoralAreaId),

      premisesCode: res.premisesCode,
      inspectionFormId:
        res.inspectionFormId == "null" ? null : Number(res.inspectionFormId),
      prevInspectionId:
        res.prevInspectionId == "null" || res.prevInspectionId == ""
          ? null
          : res.prevInspectionId,
      inspectionTypeId:
        res.inspectionTypeId == "null" ? null : Number(res.inspectionTypeId),
      followUpDate: res.followUpDate == null ? "" : res.followUpDate,
      doFollowUp: res.doFollowUp == "null" ? 0 : Number(res.doFollowUp),
      startedAt: new Date(res.startedAt),
      completedAt: new Date(res.completedAt),
      isReinspected:
        res.isReinspected == "null" ? 0 : Number(res.isReinspected),
    };

    const response = await prisma.inspection.create({ data });
    return NextResponse.json(response);
  } catch (error) {
    console.log(error);
    logger.error("INSPECTION_PREM==>", error);

    return NextResponse.json(error, { status: 500 });
  }
}
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const userId = Number(searchParams.get("userId"));
    const inspectionIds = searchParams.get("inspectionIds");

    const array = inspectionIds ? convertStringToArray(inspectionIds) : [];


    if (!userId) {
      return NextResponse.json({
        status: 200,
      });
    }

    let whereClause: { userId: number, deleted: number, id?: { in: string[] } } = { userId: userId, deleted: 0 };
    if (array.length > 0) {
      whereClause.id = { in: array };
    }


    const response = await prisma.inspection.findMany({
      where: whereClause,
    });

    return NextResponse.json(response, {
      status: 200,
    });
  } catch (error) {
    logger.error("INSPECTION_PREM==>", error);

    return NextResponse.json(error, {
      status: 500,
    });
  }
}

