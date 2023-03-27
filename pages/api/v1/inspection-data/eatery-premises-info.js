import prisma from "../../../../prisma/MyPrismaClient";
import moment from "moment";

const post = async (req, res) => {
  try {
    console.log("req.body.bathroomAvailabilityId: ",req.body.bathroomAvailabilityId);

    const data = {
      id: req.body.id,
      inspectionId: req.body.inspectionId,
      userId: Number(req.body.userId),
      facilityName: req.body.facilityName,
      physicalStructureTypeId:
        req.body.physicalStructureTypeId == "null"
          ? null
          : Number(req.body.physicalStructureTypeId),
      eateryPremisesTypeId:
        req.body.eateryPremisesTypeId == "null"
          ? null
          : Number(req.body.eateryPremisesTypeId),
      eateryPremisesSubTypeId:
        req.body.eateryPremisesSubTypeId == "null"
          ? null
          : Number(req.body.eateryPremisesSubTypeId),
      designatedSmokingAreaId:
        req.body.designatedSmokingAreaId == "null"
          ? null
          : Number(req.body.designatedSmokingAreaId),

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
      kitchenAvailabilityId:
        req.body.kitchenAvailabilityId == "null"
          ? null
          : Number(req.body.kitchenAvailabilityId),

      protectiveClothingId:
        req.body.protectiveClothingId == "null"
          ? null
          : Number(req.body.protectiveClothingId),

      numberFoodHandling:
        req.body.numberFoodHandling == "null"
          ? null
          : Number(req.body.numberFoodHandling),

      numberFoodHandlingMedical:
        req.body.numberFoodHandlingMedical == "null"
          ? null
          : Number(req.body.numberFoodHandlingMedical),

      uncookedFoodStorageCondtionSafeId:
        req.body.uncookedFoodStorageCondtionSafeId == "null"
          ? null
          : Number(req.body.uncookedFoodStorageCondtionSafeId),

      cookedFoodStorageCondtionSafeId:
        req.body.cookedFoodStorageCondtionSafeId == "null"
          ? null
          : Number(req.body.cookedFoodStorageCondtionSafeId),
      disinfestationId:
        req.body.disinfestationId == "null"
          ? null
          : Number(req.body.disinfestationId),
      disinfestationFrequencyId:
        req.body.disinfestationFrequencyId == "null"
          ? null
          : Number(req.body.disinfestationFrequencyId),
      disinfectionId:
        req.body.disinfectionId == "null"
          ? null
          : Number(req.body.disinfectionId),

      disinfectionFrequencyId:
        req.body.disinfectionFrequencyId == "null"
          ? null
          : Number(req.body.disinfectionFrequencyId),
    };

   console.log(data);
   const response = await prisma.eateryPremisesInfoSection.create({ data });

   if(response){
    return  res.status(200).json({ statusCode: 1, message: "Data saved" });
    }

    return  res.status(500).json({ statusCode: 0, message: "Data skipped" });  } catch (error) {
    // console.log("Error: " + error);
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
    if(!userId) return res.status(200).json()

    
    const response = await prisma.eateryPremisesInfoSection.findMany({
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
