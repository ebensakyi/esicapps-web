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
      facilityName: res.facilityName,
      industryPremisesTypeId:
        res.industryPremisesTypeId == "null"
          ? null
          : Number(res.industryPremisesTypeId),
      industryPremisesSubtypeId:
        res.industryPremisesSubtypeId == "null"
          ? null
          : Number(res.industryPremisesSubtypeId),
      physicalStructureTypeId:
        res.physicalStructureTypeId == "null"
          ? null
          : Number(res.physicalStructureTypeId),

      otherIndustryFacility: res.otherIndustryFacility,

      protectiveClothingUsedId:
        res.protectiveClothingUsedId == "null"
          ? null
          : Number(res.protectiveClothingUsedId),

      productionRoomConditionId:
        res.productionRoomConditionId == "null"
          ? null
          : Number(res.productionRoomConditionId),

      flyScreenNetAvailabilityId:
        res.flyScreenNetAvailabilityId == "null"
          ? null
          : Number(res.flyScreenNetAvailabilityId),

      storeRoomAvailabilityId:
        res.storeRoomAvailabilityId == "null"
          ? null
          : Number(res.storeRoomAvailabilityId),

      toiletAvailabilityId:
        res.toiletAvailabilityId == "null"
          ? null
          : Number(res.toiletAvailabilityId),

      urinalAvailabilityId:
        res.urinalAvailabilityId == "null"
          ? null
          : Number(res.urinalAvailabilityId),
      drainsAvailabilityId:
        res.drainsAvailabilityId == "null"
          ? null
          : Number(res.drainsAvailabilityId),
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

      staffChangingRoomId:
        res.staffChangingRoomId == "null"
          ? null
          : Number(res.staffChangingRoomId),
      manufacturedServices: res.manufacturedServices,

      majorByProducts: res.majorByProducts,

      numberWorkers:
        res.numberWorkers == "null" ? null : Number(res.numberWorkers),

      byProductsStorageAreaCondId:
        res.byProductsStorageAreaCondId == "null"
          ? null
          : Number(res.byProductsStorageAreaCondId),

      numberFoodHandlers:
        res.numberFoodHandlers == "null"
          ? null
          : Number(res.numberFoodHandlers),
      numberFoodHandlersCert:
        res.numberFoodHandlersCert == "null"
          ? null
          : Number(res.numberFoodHandlersCert),
    };
    const response = await prisma.industryPremisesInfoSection.create({
      data,
    });

    return NextResponse.json(response);
  } catch (error: any) {
    logger.error("INDUSTRY_PREM==>",error);

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


    const response = await prisma.industryPremisesInfoSection.findMany({
      where: whereClause,
    });

    return NextResponse.json(response, {
      status: 200,
    });
  } catch (error) {
    logger.error("INDUSTRY_PREM==>",error);

    return NextResponse.json( error );
  }
}
