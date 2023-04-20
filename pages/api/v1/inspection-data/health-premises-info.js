import prisma from "../../../../prisma/MyPrismaClient";
import moment from "moment";

const post = async (req, res) => {
  try {
    const data = {
      id: req.body.id,
      inspectionId: req.body.inspectionId,
      userId: Number(req.body.userId),
      facilityName: req.body.facilityName,
      healthPremisesTypeId:
        req.body.healthPremisesTypeId == "null"
          ? null
          : Number(req.body.healthPremisesTypeId),
      separateWardId:
        req.body.separateWardId == "null"
          ? null
          : Number(req.body.separateWardId),

      toiletAvailabilityId:
        req.body.toiletAvailabilityId == "null"
          ? null
          : Number(req.body.toiletAvailabilityId),
      ownershipTypeId:
        req.body.ownershipTypeId == "null"
          ? null
          : Number(req.body.ownershipTypeId),
      urinalAvailabilityId:
        req.body.urinalAvailabilityId == "null"
          ? null
          : Number(req.body.urinalAvailabilityId),
      drainsAvailabilityId:
        req.body.drainsAvailabilityId == "null"
          ? null
          : Number(req.body.drainsAvailabilityId),
      bathroomAvailabilityId:
        req.body.bathroomAvailabilityId == "null"
          ? null
          : Number(req.body.bathroomAvailabilityId),
      approvedHandwashingFacilityAvailabilityId:
        req.body.approvedHandwashingFacilityAvailabilityId == "null"
          ? null
          : Number(req.body.approvedHandwashingFacilityAvailabilityId),
      ehoAvailabilityId:
        req.body.ehoAvailabilityId == "null"
          ? null
          : Number(req.body.ehoAvailabilityId),
      numberWards:
        req.body.numberWards == "null" ? null : Number(req.body.numberWards),

      numberBeds:
        req.body.numberBeds == "null" ? null : Number(req.body.numberBeds),

      placentaPitAvailabilityId:
        req.body.placentaPitAvailabilityId == "null"
          ? null
          : Number(req.body.placentaPitAvailabilityId),

      incineratorAvailabilityId:
        req.body.incineratorAvailabilityId == "null"
          ? null
          : Number(req.body.incineratorAvailabilityId),

      ////////////////////////NEW/////////////
      embalmingAreaConditionId:
        req.body.embalmingAreaConditionId == "null"
          ? null
          : Number(req.body.embalmingAreaConditionId),
      embalmingAreaAvailabilityId:
        req.body.embalmingAreaAvailabilityId == "null"
          ? null
          : Number(req.body.embalmingAreaAvailabilityId),
      bodyTraysAdequateId:
        req.body.bodyTraysAdequateId == "null"
          ? null
          : Number(req.body.bodyTraysAdequateId),

      coldRoomAvailabilityId:
        req.body.coldRoomAvailabilityId == "null"
          ? null
          : Number(req.body.coldRoomAvailabilityId),

      coldRoomConditionId:
        req.body.coldRoomConditionId == "null"
          ? null
          : Number(req.body.coldRoomConditionId),
    };

    const response = await prisma.healthPremisesInfoSection.create({
      data,
    });

    if (response) {
      return res.status(200).json({ statusCode: 1, message: "Data saved" });
    }

    return res.status(500).json({ statusCode: 0, message: "Data skipped" });
  } catch (error) {
    console.log("Error: " + error);
    // if (error.code === "P2002")
    //   return res
    //     .status(400)
    //     .json({ statusCode: 0, message: "dataVersion s should be unique" });
    res.status(500).json({ statusCode: 0, message: "Data skipped" });
  }
};

const get = async (req, res) => {
  try {
    let userId = Number(req.query.userId);
    if (!userId) return res.status(200).json();

    const response = await prisma.healthPremisesInfoSection.findMany({
      where: { userId: userId, deleted: 0 },
    });

    return res.status(200).json(response);
  } catch (error) {
    console.log(error);
  }
};
export default (req, res) => {
  req.method === "POST"
    ? post(req, res)
    : req.method === "PUT"
    ? console.log("PUT")
    : req.method === "DELETE"
    ? console.log("DELETE")
    : req.method === "GET"
    ? get(req, res)
    : res.status(404).send("");
};
