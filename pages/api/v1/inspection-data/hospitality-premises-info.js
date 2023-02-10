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
      hospitalityPremisesTypeId:
        req.body.hospitalityPremisesTypeId == "null"
          ? null
          : Number(req.body.hospitalityPremisesTypeId),
      physicalStructureTypeId:
        req.body.physicalStructureTypeId == "null"
          ? null
          : Number(req.body.physicalStructureTypeId),

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

      cookedFoodStorageCondtionSafeId:
        req.body.cookedFoodStorageCondtionSafeId == "null"
          ? null
          : Number(req.body.cookedFoodStorageCondtionSafeId),

      uncookedFoodStorageCondtionSafeId:
        req.body.uncookedFoodStorageCondtionSafeId == "null"
          ? null
          : Number(req.body.uncookedFoodStorageCondtionSafeId),
      designatedSmokingAreaId:
        req.body.designatedSmokingAreaId == "null"
          ? null
          : Number(req.body.designatedSmokingAreaId),

      protectiveClothingUsedId:
        req.body.protectiveClothingUsedId == "null"
          ? null
          : Number(req.body.protectiveClothingUsedId),

      firstAidAvailabilityId:
        req.body.firstAidAvailabilityId == "null"
          ? null
          : Number(req.body.firstAidAvailabilityId),

      kitchenAvailabilityId:
        req.body.kitchenAvailabilityId == "null"
          ? null
          : Number(req.body.kitchenAvailabilityId),

      numberMaleWorkers:
        req.body.numberMaleWorkers == "null"
          ? null
          : Number(req.body.numberMaleWorkers),

      numberFemaleWorkers:
        req.body.numberFemaleWorkers == "null"
          ? null
          : Number(req.body.numberFemaleWorkers),

      numberFoodHandlingMedical:
        req.body.numberFoodHandlingMedical == "null"
          ? null
          : Number(req.body.numberFoodHandlingMedical),

      numberFoodHandling:
        req.body.numberFoodHandling == "null"
          ? null
          : Number(req.body.numberFoodHandling),

      numberRooms:
        req.body.numberRooms == "null" ? null : Number(req.body.numberRooms),

      facilityCapacity:
        req.body.facilityCapacity == "null"
          ? null
          : Number(req.body.facilityCapacity),
    };

    const response = await prisma.hospitalityPremisesInfoSection.create({
      data,
    });

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


const get = async (req, res) => {
  try {
    let userId = Number(req.query.userId);
    if(!userId) return res.status(200).json()

    
    const response = await prisma.hospitalityPremisesInfoSection.findMany({
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
