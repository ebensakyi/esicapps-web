import { NextResponse } from "next/server";
import { prisma } from "@/prisma/db";
import { logActivity } from "@/utils/log";
import { getSession } from "@/utils/session-manager";

export async function POST(request: Request) {
  try {
    const res = await request.json();

    const data :any= {
        id: res.id,
  
        inspectionId: res.inspectionId,
        userId: Number(res.userId),
        waterSectionId:
          res.waterSectionId == "null" ? null : res.waterSectionId,
  
        drinkingWaterSourceId:
          res.drinkingWaterSourceId == "null"
            ? null
            : Number(res.drinkingWaterSourceId),
      };

      const response = await prisma.premisesDrinkingWaterSources.create({ data });


    return NextResponse.json(response);
  } catch (error: any) {
    return NextResponse.json(error);
  }
}

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const userId = Number(searchParams.get("userId"));

    const res = await request.json();

    if (!userId) return res.status(200).json();

    const response = await prisma.premisesDrinkingWaterSources.findMany({
      where: { userId: userId, deleted: 0 },
    });

    return NextResponse.json(response);
  } catch (error) {
    return NextResponse.json({ message: error });
  }
}
