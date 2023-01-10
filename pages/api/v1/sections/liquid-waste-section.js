import prisma from "../../../../prisma/MyPrismaClient";

const post = async (req, res) => {
  try {
 


    const data = {
      id: req.body.id,

      inspectionId: req.body.inspectionId,
      userId: Number(req.body.userId),
      numberToiletSeats: req.body.numberToiletSeats == "null" ? null : Number(req.body.numberToiletSeats),
      numberUrinalCubicle: req.body.numberUrinalCubicle == "null" ? null : Number(req.body.numberUrinalCubicle),
      urinalCubicleConditionId: req.body.urinalCubicleConditionId == "null" ? null : Number(req.body.urinalCubicleConditionId),
      toiletAdequacyId: req.body.toiletAdequacyId == "null" ? null : Number(req.body.toiletAdequacyId),
      urinalAdequacyId: req.body.urinalAdequacyId == "null" ? null : Number(req.body.urinalAdequacyId),
      urinalGenderSensivityId: req.body.urinalGenderSensivityId == "null" ? null : Number(req.body.urinalGenderSensivityId),
      effluentManagementReportId: req.body.effluentManagementReportId == "null" ? null : Number(req.body.effluentManagementReportId),

      toiletConditionId: req.body.toiletConditionId == "null" ? null : Number(req.body.toiletConditionId),
      toiletGenderSensivityId: req.body.toiletGenderSensivityId == "null" ? null : Number(req.body.toiletGenderSensivityId),
      toiletDisabilityFriendlyId: req.body.toiletDisabilityFriendlyId == "null" ? null : Number(req.body.toiletDisabilityFriendlyId),
      urinalDisabilityFriendlyId: req.body.urinalDisabilityFriendlyId == "null" ? null : Number(req.body.urinalDisabilityFriendlyId),
      toiletDischargeId: req.body.toiletDischargeId == "null" ? null : Number(req.body.toiletDischargeId),
      toiletPitPositionId: req.body.toiletPitPositionId == "null" ? null : Number(req.body.toiletPitPositionId),
      containmentEmptiedId: req.body.containmentEmptiedId == "null" ? null : Number(req.body.containmentEmptiedId),
      sewerSystemId: req.body.sewerSystemId == "null" ? null : Number(req.body.sewerSystemId),
      wasteWaterContainmentId: req.body.wasteWaterContainmentId == "null" ? null : Number(req.body.wasteWaterContainmentId),
      easeYourselfWhereId: req.body.easeYourselfWhereId == "null" ? null : Number(req.body.easeYourselfWhereId),
      areaSeweredId: req.body.areaSeweredId == "null" ? null : Number(req.body.areaSeweredId),
      facilityConnectedSewerId: req.body.facilityConnectedSewerId == "null" ? null : Number(req.body.facilityConnectedSewerId),
      bathroomAdequacyId: req.body.bathroomAdequacyId == "null" ? null : Number(req.body.bathroomAdequacyId),
      drainsConditionId: req.body.drainsConditionId == "null" ? null : Number(req.body.drainsConditionId),
      desiltingFrequencyId: req.body.desiltingFrequencyId == "null" ? null : Number(req.body.desiltingFrequencyId),
      stagnationEvidenceId: req.body.stagnationEvidenceId == "null" ? null : Number(req.body.stagnationEvidenceId),
      rating: req.body.rating == "null" ? null : Number(req.body.rating),
      toiletHouseholdNumberId: req.body.toiletHouseholdNumberId == "null" ?null : Number(req.body.toiletHouseholdNumberId),
    };

    console.log(data)

 const response = await prisma.liquidWasteSection.create({ data });

     res.status(200).json({ statusCode: 1, message: "Data saved" });
  } catch (error) {
    console.log("Error: " + error);
    if (error.code === "P2002")
      return res
        .status(400)
        .json({ statusCode: 0, message: "dataVersion s should be unique" });
  }
};

const get = async (req, res) => {
  try {
    const dataVersion = await prisma.dataVersion.findMany({
      where: { deleted: 0 },
    });
    //return res.status(200).json({ statusCode: 1, data: dataVersion });
    return res.status(200).json(dataVersion);
  } catch (error) {
    console.log("Error: " + error);
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
