import { prisma } from "../../../../../../prisma/db";
import { logActivity } from "../../../../../../utils/log";
import { getSession } from "../../../../../../utils/session-manager";

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

    return new Response(
      JSON.stringify({
        action: 0,
        message: [],
      })
    );
  } catch (error: any) {
    console.log(error);
    return new Response(JSON.stringify({ message: error.message }));
  }
}

export async function GET(request: Request) {
  try {
    const res = await request.json();

    const data = await prisma.basicInfoSection.findMany({
      where: { deleted: 0, userId: Number(res.userId) },
    });

    return new Response(JSON.stringify([{data}]));
  } catch (error) {}
}
