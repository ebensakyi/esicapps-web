import { NextResponse } from "next/server";
import { prisma } from "@/prisma/db";
import { logActivity } from "@/utils/log";
import { logger } from "@/logger";
import { convertStringToArray } from "@/utils/array-converter";

export async function POST(request: Request) {
  try {
    const res = await request.json();

    let latitude = res.latitude;
    let longitude = res.longitude;

    var point = {
      type: "Point",
      coordinates: [longitude, latitude],
      crs: {
        type: "name",
        properties: {
          name: "EPSG:4326",
        },
      },
    };
    const data = {
      id: res.id,
      inspectionId: res.inspectionId,
      userId: Number(res.userId),
      geom: point,
      //coords: point,
      communityId: res.communityId == "null" ? null : Number(res.communityId),
      community: res.community == "null" ? null : res.community,
      electoralAreaId:
        res.electoralAreaId == "null" ? null : Number(res.electoralAreaId),
      electoralArea: res.electoralArea == "null" ? null : res.electoralArea,
      ghanaPostGps: res.ghanaPostGps,
      latitude: res.latitude,
      longitude: res.longitude,
      accuracy: res.accuracy,
      respondentName: res.respondentName,
      respondentPhoneNumber: res.respondentPhoneNumber,
      respondentDesignationId: Number(res.respondentDesignationId),
    };

    const response = await prisma.basicInfoSection.create({ data });

    return NextResponse.json(response);
  } catch (error: any) {
    console.log(error);
    logger.error("BASIC_INFO==>", error);

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


    const response = await prisma.basicInfoSection.findMany({
      where: whereClause,
    });

    return NextResponse.json(response, {
      status: 200,
    });
  } catch (error: any) {
    logger.error("BASIC_INFO==>", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
