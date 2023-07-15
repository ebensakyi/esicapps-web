import prisma from "../../../../prisma/db";
import moment from "moment";

const post = async (req, res) => {
  try {

    const data = {
      id: req.body.id,
      inspectionId: req.body.inspectionId,
      userId: Number(req.body.userId),
      facilityName: req.body.facilityName== "null"
      ? null:req.body.facilityName,
      physicalStructureTypeId:
        req.body.physicalStructureTypeId == "null"
          ? null
          : Number(req.body.physicalStructureTypeId),
      marketPremisesTypeId:
        req.body.marketPremisesTypeId == "null"
          ? null
          : Number(req.body.marketPremisesTypeId),

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

      bathroomAvailabilityId:
        req.body.bathroomAvailabilityId == "null"
          ? null
          : Number(req.body.bathroomAvailabilityId),

      approvedHandwashingFacilityAvailabilityId:
        req.body.approvedHandwashingFacilityAvailabilityId == "null"
          ? null
          : Number(req.body.approvedHandwashingFacilityAvailabilityId),

      firstAidAvailabilityId:
        req.body.firstAidAvailabilityId == "null"
          ? null
          : Number(req.body.firstAidAvailabilityId),
      ownershipTypeId:
        req.body.ownershipTypeId == "null"
          ? null
          : Number(req.body.ownershipTypeId),

      numberStores:
        req.body.numberStores == "null" ? null : Number(req.body.numberStores),

      numberSheds:
        req.body.numberSheds == "null" ? null : Number(req.body.numberSheds),

      numberStalls:
        req.body.numberStalls == "null" ? null : Number(req.body.numberStalls),

      numberTraders:
        req.body.numberTraders == "null"
          ? null
          : Number(req.body.numberTraders),

      numberMeatShops:
        req.body.numberMeatShops == "null"
          ? null
          : Number(req.body.numberMeatShops),
      numberColdStores:
        req.body.numberColdStores == "null"
          ? null
          : Number(req.body.numberColdStores),
      numberMills:
        req.body.numberMills == "null" ? null : Number(req.body.numberMills),
      numberChopbars:
        req.body.numberChopbars == "null"
          ? null
          : Number(req.body.numberChopbars),

      generalSanitaryConditionId:
        req.body.generalSanitaryConditionId == "null"
          ? null
          : Number(req.body.generalSanitaryConditionId),

      derattingFrequencyId:
        req.body.derattingFrequencyId == "null"
          ? null
          : Number(req.body.derattingFrequencyId),
      cleanupFrequencyId:
        req.body.cleanupFrequencyId == "null"
          ? null
          : Number(req.body.cleanupFrequencyId),
      numberLorrySheds:
        req.body.numberLorrySheds == "null"
          ? null
          : Number(req.body.numberLorrySheds),
      numberVehicles:
        req.body.numberVehicles == "null"
          ? null
          : Number(req.body.numberVehicles),
      numberDrivers:
        req.body.numberDrivers == "null"
          ? null
          : Number(req.body.numberDrivers),
      numberFoodVendors:
        req.body.numberFoodVendors == "null"
          ? null
          : Number(req.body.numberFoodVendors),
    };

    const response = await prisma.marketPremisesInfoSection.create({ data });

    res.status(200).json({ statusCode: 1, message: "Data saved" });
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
    const response = await prisma.marketPremisesInfoSection.findMany({
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

