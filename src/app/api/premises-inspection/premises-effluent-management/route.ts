import { NextResponse } from "next/server";
import { prisma } from "@/prisma/db";
import { logActivity } from "@/utils/log";
import { logger } from "@/logger";


export async function POST(request: Request) {
  try {
    const res = await request.json();

    const data:any = {
        id: res.id,
  
        inspectionId: res.inspectionId,
        userId: Number(res.userId),
        liquidWasteSectionId:
          res.liquidWasteSectionId == "null" ? null : res.liquidWasteSectionId,
  
          effluentManagementId:
          res.effluentManagementId == "null"
            ? null
            : Number(res.effluentManagementId),
      };
  
      const response = await prisma.premisesEffluentManagement.create({ data });


    return NextResponse.json(response);
  } catch (error: any) {
    logger.error("PREM_EFFLUENT==>",error);

    return NextResponse.json(error);
  }
}

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const userId = Number(searchParams.get("userId"));



    if (!userId) return NextResponse.json({});

    const response = await prisma.premisesEffluentManagement.findMany({
      where: { userId: userId, deleted: 0 },
    });

    return NextResponse.json(response);
  } catch (error) {
    logger.error("PREM_EFFLUENT==>",error);

    return NextResponse.json(error,{status:500});
  }
}
