import { NextResponse } from "next/server";
import { prisma } from "../../../../../../prisma/db";
import { logActivity } from "../../../../../../utils/log";
import { getSession } from "../../../../../../utils/session-manager";

export async function POST(request: Request) {
  try {
    const res = await request.json();

    const data = {
      id: res.id,

      inspectionId: res.inspectionId,
      userId: Number(res.userId),
      solidWasteReceptacleId: Number(res.solidWasteReceptacleId),

      solidWasteSectionId: res.solidWasteSectionId,
    };

    const response = await prisma.premisesWasteReceptacle.create({ data });
    return NextResponse.json(response);
  } catch (error) {
    return NextResponse.json(error,{status:500});
  }
}

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const userId = Number(searchParams.get("userId"));

    const res = await request.json();

    if (!userId) return res.status(200).json();

    const response = await prisma.premisesWasteReceptacle.findMany({
      where: { userId: userId, deleted: 0 },
    });

    return NextResponse.json(response,{
        status: 200,
      });
  } catch (error) {
    return NextResponse.json(error,{
        status: 500,
      });
  }
}
