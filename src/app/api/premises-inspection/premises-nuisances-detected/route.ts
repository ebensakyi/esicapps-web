import { NextResponse } from "next/server";
import { prisma } from "@/prisma/db";
import { logActivity } from "@/utils/log";
import { logger } from "@/logger";
import { convertStringToArray } from "@/utils/array-converter";


export async function POST(request: Request) {
  try {
    const res = await request.json();

    const data = {
        id: res.id,
  
        inspectionId: res.inspectionId,
        userId: Number(res.userId),
        nuisanceId:
          Number(res.nuisanceId) ,
  
          conclusionSectionId:
          res.conclusionSectionId == "null"
            ? null
            : res.conclusionSectionId,
      };
  
      const response = await prisma.premisesNuisanceDetected.create({ data });
    return NextResponse.json(response);
  } catch (error) {
    logger.error("PREM_NUISANCE==>",error);

    return NextResponse.json(error,{status:500});
  }
}

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const userId = Number(searchParams.get("userId"));
    const inspectionIds = searchParams.get("inspectionIds");

   const array = inspectionIds ? convertStringToArray(inspectionIds) : [];

    if (!userId) {
      return NextResponse.json({ status: 200 });
    }

    const whereClause: {
      userId: number;
      deleted: number;
      inspectionId?: { in: string[] };
    } = { userId: userId, deleted: 0 };

    if (array.length > 0) {
      whereClause.inspectionId = { in: array };
    }


    const response = await prisma.premisesNuisanceDetected.findMany({
      where: whereClause,
    });

    return NextResponse.json(response, {
      status: 200,
    });
  } catch (error) {
    logger.error("PREM_NUISANCE==>",error);

    return NextResponse.json(error,{
        status: 500,
      });
  }
}
