import { logger } from "@/logger";
import { prisma } from "@/prisma/db";
import { convertStringToArray } from "@/utils/array-converter";
import { logActivity } from "@/utils/log";

import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const res = await request.json();

    const data = {
      id: res.id,

      inspectionId: res.inspectionId,
      userId: Number(res.userId),
      officerComment:
        res.officerComment == "null" ? null : res.officerComment,

      obnoxiousTradeExistId:
        res.obnoxiousTradeExistId == "null"
          ? null
          : Number(res.obnoxiousTradeExistId),

      obnoxiousTrade:
        res.obnoxiousTrade == "null" ? null : res.obnoxiousTrade,

      isNuisanceObservedId:
        res.isNuisanceObservedId == "null"
          ? null
          : Number(res.isNuisanceObservedId),
     
    };

    const response = await prisma.conclusionSection.create({ data });

    return NextResponse.json(response);

  } catch (error: any) {
    console.log(error);
    logger.error("CONCLUSION==>",error);

    return NextResponse.json(error,{ status: 500 });

  }
}

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const userId = Number(searchParams.get("userId"));
    const inspectionIds = searchParams.get("inspectionIds");

    const array = convertStringToArray(inspectionIds);

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


    const response = await prisma.conclusionSection.findMany({
      where: whereClause,
    });

    return NextResponse.json(response, {
      status: 200,
    });
  } catch (error) {
    logger.error("CONCLUSION==>",error);

    return NextResponse.json(error,{ status: 500 });

  }
}
