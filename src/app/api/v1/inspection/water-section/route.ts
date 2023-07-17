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
      waterStorageConditionId:
        res.waterStorageConditionId == "null"
          ? null
          : Number(res.waterStorageConditionId),
      waterFlowFrequencyId:
        res.waterFlowFrequencyId == "null"
          ? null
          : Number(res.waterFlowFrequencyId),
      waterSourceConditionId:
        res.waterSourceConditionId == "null"
          ? null
          : Number(res.waterSourceConditionId),
      safeDistanceWaterStorageSanitaryId:
        res.safeDistanceWaterStorageSanitaryId == "null"
          ? null
          : Number(res.safeDistanceWaterStorageSanitaryId),
      rating: res.rating == "null" ? null : Number(Math.ceil(res.rating)),
    };

    const response = await prisma.waterSection.create({ data });
    return NextResponse.json(response);
  } catch (error) {
    return NextResponse.json(error, { status: 500 });
  }
}

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const userId = Number(searchParams.get("userId"));

    const res = await request.json();

    if (!userId) return res.status(200).json();

    const response = await prisma.waterSection.findMany({
      where: { userId: userId, deleted: 0 },
    });

    return NextResponse.json(response, {
      status: 200,
    });
  } catch (error) {
    return NextResponse.json(error, {
      status: 500,
    });
  }
}