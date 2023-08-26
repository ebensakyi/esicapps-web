import { prisma } from "@/prisma/db";

export async function POST(request: Request) {
  try {
    const res = await request.json();

    const user : any = await prisma.user.findFirst({
      where: { id: Number(res.userId) },
    });
    const district = user?.districtId;
    const districtData = await prisma.district.findFirst({
      where: { id: Number(district) },
    });
    let region = Number(districtData?.regionId);

    const data:any = {
      id: res.id,

      prevInspectionId: res.prevInspectionId,
      inspectionFormId: Number(res.inspectionFormId),
      premisesCode: res.premisesCode,
      districtId: Number(district),
      regionId: region,
      userId: Number(res.userId),
      communityId: Number(res.communityId),
      community: res.community == "null" ? "" : res.community,
      electoralAreaId: Number(res.electoralAreaId),
      electoralArea: res.electoralArea == "null" ? null : res.electoralArea,
      ghanaPostGps: res.ghanaPostGps == "null" ? "" : res.ghanaPostGps,
      latitude: res.latitude == "null" ? null : res.latitude,
      longitude: res.longitude == "null" ? null : res.longitude,
      accuracy: res.accuracy == "null" ? null : res.accuracy,
      respondentName: res.respondentName == "null" ? null : res.respondentName,
      respondentPhoneNumber:
        res.respondentPhoneNumber == "null" ? null : res.respondentPhoneNumber,
      respondentDesignationId:
       Number(res.respondentDesignationId),

      waterRating: Number(res.waterRating),
      solidWasteRating: Number(res.solidWasteRating),
      liquidWasteRating: Number(res.liquidWasteRating),
      totalRating: Number(res.totalRating),

      officerComment: res.officerComment == "null" ? null : res.officerComment,

      obnoxiousTradeExistFollowUpId:
        res.obnoxiousTradeExistId == "null"
          ? null
          : Number(res.obnoxiousTradeExistId),

      obnoxiousTrade: res.obnoxiousTrade == "null" ? null : res.obnoxiousTrade,

      isNuisanceObservedId:
        res.isNuisanceObservedId == "null"
          ? null
          : Number(res.isNuisanceObservedId),
    };

    const response = await prisma.followUpInspection.create( data );

    return new Response(
      JSON.stringify({
        response,
      })
    );
  } catch (error: any) {
    return new Response(JSON.stringify({ message: error.message }));
  }
}

export async function GET(request: Request) {
  try {
    const res = await request.json();

    let userId = Number(res.userId);
    if (!userId) return res.status(200).json();

    const data = await prisma.eateryPremisesInfoSection.findMany({
      where: { userId: userId, deleted: 0 },
    });

    return new Response(JSON.stringify([{ data }]));
  } catch (error) {}
}
