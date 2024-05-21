import { NextResponse } from "next/server";
import { prisma } from "@/prisma/db";
import { logActivity } from "@/utils/log";
import { getServerSession } from "next-auth";
import { authOptions } from "../../auth/[...nextauth]/options";

export async function GET(request: Request) {
  try {
    let { searchParams } = new URL(request.url);
    

    let userId = Number(searchParams.get("userId"));

    const session: any = await getServerSession(authOptions);

    await logActivity("Visited data assignment page", session?.user?.id);

    if (userId) {
      const _data = await prisma.inspection.findMany({
       // where: { userId: Number(userId) },
        include: {
          InspectionForm: true,
          InspectionPictures: true,
          District: true,
          ElectoralArea: true,
          Community: true,
          ResidentialPremisesInfoSection: true,
          EateryPremisesInfoSection: true,
          HealthPremisesInfoSection: true,
          HospitalityPremisesInfoSection: true,
          SanitaryPremisesInfoSection: true,
          IndustryPremisesInfoSection: true,
          InstitutionPremisesInfoSection: true,
          MarketPremisesInfoSection: true,
        },
      });

      
      const data = _data.map((item) => ({
        formName: item.InspectionForm.name,
        picture: item.InspectionPictures[0]?.imagePath ?? "",
        districtName: item.District.name,
        electoralAreaName: item.ElectoralArea.name,
        communityName: item.Community.name,
        createdAt: item.createdAt,
        facilityName:
          [
            // item.ResidentialPremisesInfoSection?.facilityName,
            item.EateryPremisesInfoSection?.facilityName,
            item.HealthPremisesInfoSection?.facilityName,
            item.HospitalityPremisesInfoSection?.facilityName,
            item.SanitaryPremisesInfoSection?.facilityName,
            item.IndustryPremisesInfoSection?.facilityName,
            item.InstitutionPremisesInfoSection?.facilityName,
            item.MarketPremisesInfoSection?.facilityName,
          ].find((name) => name) ?? "Residential Premises", // Get the first non-null facilityName
        inspectionId: item.id,
      }));

      return NextResponse.json(data);
    }

    return NextResponse.json([]);
  } catch (error) {
    console.log(error);

    return NextResponse.json(error);
  }
}
