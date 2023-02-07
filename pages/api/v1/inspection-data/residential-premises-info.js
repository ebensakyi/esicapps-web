import prisma from "../../../../prisma/MyPrismaClient";
import moment from "moment";

const post = async (req, res) => {
  try {

    const data = {
      id: req.body.id,
      inspectionId: req.body.inspectionId,
      userId: Number(req.body.userId),
      drainsAvailabilityId:
        req.body.drainsAvailabilityId == "null"
          ? null
          : Number(req.body.drainsAvailabilityId),
      toiletAvailabilityId:
        req.body.toiletAvailabilityId == "null"
          ? ""
          : Number(req.body.toiletAvailabilityId),
      urinalAvailabilityId:
        req.body.urinalAvailabilityId == "null"
          ? null
          : Number(req.body.urinalAvailabilityId),

      bathRoomAvailabilityId:
        req.body.bathRoomAvailabilityId == "null"
          ? null
          : Number(req.body.bathRoomAvailabilityId),
      approvedHandwashingFacilityAvailabilityId:
        req.body.approvedHandwashingFacilityAvailabilityId == "null"
          ? null
          : Number(req.body.approvedHandwashingFacilityAvailabilityId),
      householdNumber:
        req.body.householdNumber ,
      maleOccupantNumber:
        req.body.maleOccupantNumber == "null"
          ? null
          : Number(req.body.maleOccupantNumber),
      femaleOccupantNumber:
        req.body.femaleOccupantNumber == "null"
          ? null
          : Number(req.body.femaleOccupantNumber),

      animalNumber:
        req.body.animalNumber == "null" ? null : Number(req.body.animalNumber),

      animalAvailabilityId:
        req.body.animalAvailabilityId == "null"
          ? null
          : Number(req.body.animalAvailabilityId),

      otherAnimal: req.body.otherAnimal,
      animalSpaceConditionId:
        req.body.animalSpaceConditionId == "null"
          ? null
          : Number(req.body.animalSpaceConditionId),

      vaccinationProofId:
        req.body.vaccinationProofId == "null"
          ? null
          : Number(req.body.vaccinationProofId),
    };

    const response = await prisma.residentialPremisesInfoSection.create({ data });

    res.status(200).json({ statusCode: 1, message: "Data saved" });
  } catch (error) {
    // console.log("Error: " + error);
    // if (error.code === "P2002")
    //   return res
    //     .status(400)
    //     .json({ statusCode: 0, message: "dataVersion s should be unique" });
    res.status(200).json({ statusCode: 1, message: "Data skipped" });

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
