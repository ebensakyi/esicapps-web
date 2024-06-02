import { NextResponse } from "next/server";
import { prisma } from "@/prisma/db";
import { logActivity } from "@/utils/log";
import { logger } from "@/logger";
import { convertStringToArray } from "@/utils/array-converter";


export async function POST(request: Request) {
  try {
    const res = await request.json();
    const data: any = {
      id: res.id,
      inspectionId: res.inspectionId,
      userId: Number(res.userId),
      facilityName: res.facilityName == "null" ? null : res.facilityName,
      physicalStructureTypeId:
        res.physicalStructureTypeId == "null"
          ? null
          : Number(res.physicalStructureTypeId),
      marketPremisesTypeId:
        res.marketPremisesTypeId == "null"
          ? null
          : Number(res.marketPremisesTypeId),

      drainsAvailabilityId:
        res.drainsAvailabilityId == "null"
          ? null
          : Number(res.drainsAvailabilityId),
      toiletAvailabilityId:
        res.toiletAvailabilityId == "null"
          ? ""
          : Number(res.toiletAvailabilityId),
      urinalAvailabilityId:
        res.urinalAvailabilityId == "null"
          ? null
          : Number(res.urinalAvailabilityId),

      bathroomAvailabilityId:
        res.bathroomAvailabilityId == "null"
          ? null
          : Number(res.bathroomAvailabilityId),

      approvedHandwashingFacilityAvailabilityId:
        res.approvedHandwashingFacilityAvailabilityId == "null"
          ? null
          : Number(res.approvedHandwashingFacilityAvailabilityId),

      firstAidAvailabilityId:
        res.firstAidAvailabilityId == "null"
          ? null
          : Number(res.firstAidAvailabilityId),
      ownershipTypeId:
        res.ownershipTypeId == "null" ? null : Number(res.ownershipTypeId),

      numberStores:
        res.numberStores == "null" ? null : Number(res.numberStores),

      numberSheds: res.numberSheds == "null" ? null : Number(res.numberSheds),

      numberStalls:
        res.numberStalls == "null" ? null : Number(res.numberStalls),

      numberTraders:
        res.numberTraders == "null" ? null : Number(res.numberTraders),

      numberMeatShops:
        res.numberMeatShops == "null" ? null : Number(res.numberMeatShops),
      numberColdStores:
        res.numberColdStores == "null" ? null : Number(res.numberColdStores),
      numberMills: res.numberMills == "null" ? null : Number(res.numberMills),
      numberChopbars:
        res.numberChopbars == "null" ? null : Number(res.numberChopbars),

      generalSanitaryConditionId:
        res.generalSanitaryConditionId == "null"
          ? null
          : Number(res.generalSanitaryConditionId),

      derattingFrequencyId:
        res.derattingFrequencyId == "null"
          ? null
          : Number(res.derattingFrequencyId),
      cleanupFrequencyId:
        res.cleanupFrequencyId == "null"
          ? null
          : Number(res.cleanupFrequencyId),
      numberLorrySheds:
        res.numberLorrySheds == "null" ? null : Number(res.numberLorrySheds),
      numberVehicles:
        res.numberVehicles == "null" ? null : Number(res.numberVehicles),
      numberDrivers:
        res.numberDrivers == "null" ? null : Number(res.numberDrivers),
      numberFoodVendors:
        res.numberFoodVendors == "null" ? null : Number(res.numberFoodVendors),
    };

    const response = await prisma.marketPremisesInfoSection.create({ data });

    return NextResponse.json(response);
  } catch (error: any) {
    logger.error("MARKET_PREM==>",error);

    return NextResponse.json(error);
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


    const response = await prisma.marketPremisesInfoSection.findMany({
      where: whereClause,
    });

    return NextResponse.json(response, {
      status: 200,
    });
  } catch (error) {
    logger.error("MARKET_PREM==>",error);

    return NextResponse.json(error);
  }
}
