import prisma from "../../../../prisma/MyPrismaClient";
import moment from "moment";

const post = async (req, res) => {
  try {
    console.log(req.body);
    const data = {
      id: req.body.id,
      inspectionId: req.body.inspectionId,
      userId: Number(req.body.userId),
      facilityName: req.body.facilityName,
      industryPremisesTypeId:
        req.body.industryPremisesTypeId == "null"
          ? null
          : Number(req.body.industryPremisesTypeId),
      industryPremisesSubtypeId:
        req.body.industryPremisesSubtypeId == "null"
          ? null
          : Number(req.body.industryPremisesSubtypeId),
      physicalStructureTypeId:
        req.body.physicalStructureTypeId == "null"
          ? null
          : Number(req.body.physicalStructureTypeId),

      otherIndustryFacility:
        req.body.otherIndustryFacility == "null"
          ? null
          : Number(req.body.otherIndustryFacility),

      protectiveClothingId:
        req.body.protectiveClothingId == "null"
          ? null
          : Number(req.body.protectiveClothingId),

      productionRoomConditionId:
        req.body.productionRoomConditionId == "null"
          ? null
          : Number(req.body.productionRoomConditionId),

      flyScreenNetAvailabilityId:
        req.body.flyScreenNetAvailabilityId == "null"
          ? null
          : Number(req.body.flyScreenNetAvailabilityId),

      storeRoomAvailabilityId:
        req.body.storeRoomAvailabilityId == "null"
          ? null
          : Number(req.body.storeRoomAvailabilityId),

      medicalCertificateAvailabilityId:
        req.body.medicalCertificateAvailabilityId == "null"
          ? null
          : Number(req.body.medicalCertificateAvailabilityId),

      toiletAvailabilityId:
        req.body.toiletAvailabilityId == "null"
          ? null
          : Number(req.body.toiletAvailabilityId),

      urinalAvailabilityId:
        req.body.urinalAvailabilityId == "null"
          ? null
          : Number(req.body.urinalAvailabilityId),
      drainsAvailabilityId:
        req.body.drainsAvailabilityId == "null"
          ? null
          : Number(req.body.drainsAvailabilityId),
      bathRoomAvailabilityId:
        req.body.bathRoomAvailabilityId == "null"
          ? null
          : Number(req.body.bathRoomAvailabilityId),
      approvedHandwashingFacilityAvailabilityId:
        req.body.approvedHandwashingFacilityAvailabilityId == "null"
          ? null
          : Number(req.body.approvedHandwashingFacilityAvailabilityId),

      firstAidAvailabilityId:
        req.body.firstAidAvailabilityId == "null"
          ? null
          : Number(req.body.firstAidAvailabilityId),

      staffChangingRoomId:
        req.body.staffChangingRoomId == "null"
          ? null
          : Number(req.body.staffChangingRoomId),
      manufacturedServices: req.body.manufacturedServices,

      majorByProducts: req.body.majorByProducts,

      numberWorkers:
        req.body.numberWorkers == "null"
          ? null
          : Number(req.body.numberWorkers),

      byProductsStorageAreaCondId:
        req.body.byProductsStorageAreaCondId == "null"
          ? null
          : Number(req.body.byProductsStorageAreaCondId),
    };
    const response = await prisma.industryPremisesInfoSection.create({
      data,
    });

    res.status(200).json({ statusCode: 1, message: "Data saved" });
  } catch (error) {
    console.log("Error: " + error);
    if (error.code === "P2002")
      return res
        .status(400)
        .json({ statusCode: 0, message: "dataVersion s should be unique" });
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
