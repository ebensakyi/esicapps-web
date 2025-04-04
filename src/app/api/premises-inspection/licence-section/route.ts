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
        animalsPermitAvailabilityId:
          res.animalsPermitAvailabilityId == "null"
            ? null
            : Number(res.animalsPermitAvailabilityId),
        propertyRateAvailabilityId:
          res.propertyRateAvailabilityId == "null"
            ? null
            : Number(res.propertyRateAvailabilityId),
        buildingPermitAvailabilityId:
          res.buildingPermitAvailabilityId == "null"
            ? null
            : Number(res.buildingPermitAvailabilityId),
        businessLicenceAvailabilityId:
          res.businessLicenceAvailabilityId == "null"
            ? null
            : Number(res.businessLicenceAvailabilityId),
        habitationCertificateAvailabilityId:
          res.habitationCertificateAvailabilityId == "null"
            ? null
            : Number(res.habitationCertificateAvailabilityId),
        operatingLicenceAvailabilityId:
          res.operatingLicenceAvailabilityId == "null"
            ? null
            : Number(res.operatingLicenceAvailabilityId),
        structurePermitAvailabilityId:
          res.structurePermitAvailabilityId == "null"
            ? null
            : Number(res.structurePermitAvailabilityId),
        fumigationCertificateAvailabilityId:
          res.fumigationCertificateAvailabilityId == "null"
            ? null
            : Number(res.fumigationCertificateAvailabilityId),
       
        gtaOperatingLicenceAvailabilityId:
          res.gtaOperatingLicenceAvailabilityId == "null"
            ? null
            : Number(res.gtaOperatingLicenceAvailabilityId),
        suitabilityCertificateAvailabilityId:
          res.suitabilityCertificateAvailabilityId == "null"
            ? null
            : Number(res.suitabilityCertificateAvailabilityId),
        waterAnalysisReportId:
          res.waterAnalysisReportId == "null"
            ? null
            : Number(res.waterAnalysisReportId),
        regGeneralCertAvailabilityId:
          res.regGeneralCertAvailabilityId == "null"
            ? null
            : Number(res.regGeneralCertAvailabilityId),
        pharmacyCertAvailabilityId:
          res.pharmacyCertAvailabilityId == "null"
            ? null
            : Number(res.pharmacyCertAvailabilityId),
      };

      

      const response = await prisma.licencePermitSection.create({ data });


    return NextResponse.json(response);
  } catch (error: any) {
    logger.error("LICENCE_PREM==>",error);

    return NextResponse.json(error,{ status: 500 });
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


    const response = await prisma.licencePermitSection.findMany({
      where: whereClause,
    });

    return NextResponse.json(response, {
      status: 200,
    });
  } catch (error) {
    logger.error("LICENCE_PREM==>",error);

    return NextResponse.json(error);
  }
}
