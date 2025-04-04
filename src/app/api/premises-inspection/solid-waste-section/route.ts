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
      wasteServiceProviderRegistrationId:
        res.wasteServiceProviderRegistrationId == "null"
          ? null
          : Number(res.wasteServiceProviderRegistrationId),
      wasteCollectorName:
        res.containerServiceProviderName == "null" ? null : res.containerServiceProviderName,
      wasteSortingAvailabilityId:
        res.wasteSortingAvailabilityId == "null"
          ? null
          : Number(res.wasteSortingAvailabilityId),
      wasteCollectionFrequencyId:
        res.wasteCollectionFrequencyId == "null"
          ? null
          : Number(res.wasteCollectionFrequencyId),
      approvedWasteStorageReceptacleId:
        res.approvedWasteStorageReceptacleId == "null"
          ? null
          : Number(res.approvedWasteStorageReceptacleId),
      adequateWasteStorageReceptacleId:
        res.adequateWasteStorageReceptacleId == "null"
          ? null
          : Number(res.adequateWasteStorageReceptacleId),
      wasteCollectionTypeId:
        res.wasteCollectionTypeId == "null"
          ? null
          : Number(res.wasteCollectionTypeId),
      unservicedWasteDisposalId:
        res.unservicedWasteDisposalId == "null"
          ? null
          : Number(res.unservicedWasteDisposalId),
      wastePaymentEvidenceId:
        res.wastePaymentEvidenceId == "null"
          ? null
          : Number(res.wastePaymentEvidenceId),
      wasteContainerVolumeId:
        res.wasteContainerVolumeId == "null"
          ? null
          : Number(res.wasteContainerVolumeId),
      wasteProviderAccredittedId:
        res.wasteProviderAccredittedId == "null"
          ? null
          : Number(res.wasteProviderAccredittedId),
      containerNumber:
        res.containerNumber == "null" ? null : Number(res.containerNumber),

      wasteServicePhoneNumber: res.wasteServicePhoneNumber,
      rating: res.rating == "null" ? null : Number(Math.ceil(res.rating)),
    };

    const response = await prisma.solidWasteSection.create({ data });

    return NextResponse.json(response);
  } catch (error) {
    logger.error("SOLID_WASTE`==>",error);

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


    const response = await prisma.solidWasteSection.findMany({
      where: whereClause,
    });

    return NextResponse.json(response, {
      status: 200,
    });
  } catch (error) {
    logger.error("SOLID_WASTE`==>",error);

    return NextResponse.json(error, {
      status: 500,
    });
  }
}
