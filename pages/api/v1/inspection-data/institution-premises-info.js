import prisma from "../../../../prisma/MyPrismaClient";
import moment from "moment";

const post = async (req, res) => {
  try {
    const data = {
      id: req.body.id,
      inspectionId: req.body.inspectionId,
      userId: Number(req.body.userId),
      facilityName: req.body.facilityName,
      institutionPremisesTypeId:
        req.body.institutionPremisesTypeId == "null"
          ? ""
          : Number(req.body.institutionPremisesTypeId),
      institutionPremisesSubtypeId:
        req.body.institutionPremisesSubtypeId == "null"
          ? ""
          : Number(req.body.institutionPremisesSubtypeId),

      toiletAvailabilityId:
        req.body.toiletAvailabilityId == "null"
          ? ""
          : Number(req.body.toiletAvailabilityId),

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

      firstAidAvailabilityId:
        req.body.firstAidAvailabilityId == "null"
          ? ""
          : Number(req.body.firstAidAvailabilityId),

      numberTeachingStaff:
        req.body.numberTeachingStaff == "null"
          ? null
          : Number(req.body.numberTeachingStaff),
      numberNonTeachingStaff:
        req.body.numberNonTeachingStaff == "null"
          ? null
          : Number(req.body.numberNonTeachingStaff),

      numberMaleStudents:
        req.body.numberMaleStudents == "null"
          ? null
          : Number(req.body.numberMaleStudents),

      numberFemaleStudents:
        req.body.numberFemaleStudents == "null"
          ? null
          : Number(req.body.numberFemaleStudents),

      kitchenAvailabilityId:
        req.body.kitchenAvailabilityId == "null"
          ? null
          : Number(req.body.kitchenAvailabilityId),

      uncookedFoodStorageCondtionSafeId:
        req.body.uncookedFoodStorageCondtionSafeId == "null"
          ? null
          : Number(req.body.uncookedFoodStorageCondtionSafeId),

      cookedFoodStorageCondtionSafeId:
        req.body.cookedFoodStorageCondtionSafeId == "null"
          ? null
          : Number(req.body.cookedFoodStorageCondtionSafeId),
      kitchenConditionId:
        req.body.kitchenConditionId == "null"
          ? null
          : Number(req.body.kitchenConditionId),
      protectiveClothingId:
        req.body.protectiveClothingId == "null"
          ? null
          : Number(req.body.protectiveClothingId),
      numberFoodHandling:
        req.body.numberFoodHandling == "null"
          ? null
          : Number(req.body.numberFoodHandling),
      numberFoodHandlingMedicalId:
        req.body.numberFoodHandlingMedicalId == "null"
          ? null
          : Number(req.body.numberFoodHandlingMedicalId),
      numberClassRoomsId:
        req.body.numberClassRoomsId == "null"
          ? null
          : Number(req.body.numberClassRoomsId),
      shepClubExistenceId:
        req.body.shepClubExistenceId == "null"
          ? null
          : Number(req.body.shepClubExistenceId),

      numberOtherRooms:
        req.body.numberOtherRooms == "null"
          ? null
          : Number(req.body.numberOtherRooms),
      animalSpaceConditionId:
        req.body.animalSpaceConditionId == "null"
          ? null
          : Number(req.body.animalSpaceConditionId),
      animalSpaceAvailabilityId:
        req.body.animalSpaceAvailabilityId == "null"
          ? null
          : Number(req.body.animalSpaceAvailabilityId),
      shrinePremisesConditionId:
        req.body.shrinePremisesConditionId == "null"
          ? null
          : Number(req.body.shrinePremisesConditionId),
      slaughterAreaAvailabilityId:
        req.body.slaughterAreaAvailabilityId == "null"
          ? null
          : Number(req.body.slaughterAreaAvailabilityId),
      slaughterAreaConditionId:
        req.body.slaughterAreaConditionId == "null"
          ? null
          : Number(req.body.slaughterAreaConditionId),
      soundProofId:
        req.body.soundProofId == "null" ? null : Number(req.body.soundProofId),
      ablutionSlabId:
        req.body.ablutionSlabId == "null"
          ? null
          : Number(req.body.ablutionSlabId),
      ablutionSlabConditionId:
        req.body.ablutionSlabConditionId == "null"
          ? null
          : Number(req.body.ablutionSlabConditionId),

      facilityCapacity:
        req.body.facilityCapacity == "null"
          ? null
          : Number(req.body.facilityCapacity),
      multipleExitId:
        req.body.multipleExitId == "null"
          ? null
          : Number(req.body.multipleExitId),
      disabilityFriendlyId:
        req.body.disabilityFriendlyId == "null"
          ? null
          : Number(req.body.disabilityFriendlyId),
      emergencyExitId:
        req.body.emergencyExitId == "null"
          ? null
          : Number(req.body.emergencyExitId),
      emergencyAssemblyPointId:
        req.body.emergencyAssemblyPointId == "null"
          ? null
          : Number(req.body.emergencyAssemblyPointId),
      overcrowdingId:
        req.body.overcrowdingId == "null"
          ? null
          : Number(req.body.overcrowdingId),
      adequateLighteningId:
        req.body.adequateLighteningId == "null"
          ? null
          : Number(req.body.adequateLighteningId),

      adequateVentilationId:
        req.body.adequateVentilationId == "null"
          ? null
          : Number(req.body.adequateVentilationId),
      numberCompoundFoodVendor:
        req.body.numberCompoundFoodVendor == "null"
          ? null
          : Number(req.body.numberCompoundFoodVendor),
      numberFoodVendorMedicallyCertified:
        req.body.numberFoodVendorMedicallyCertified == "null"
          ? null
          : Number(req.body.numberFoodVendorMedicallyCertified),
      fireExtinguisherId:
        req.body.fireExtinguisherId == "null"
          ? null
          : Number(req.body.fireExtinguisherId),
      numberFireExtinguisher:
        req.body.numberFireExtinguisher == "null"
          ? null
          : Number(req.body.numberFireExtinguisher),
      buildingStructureConditionId:
        req.body.buildingStructureConditionId == "null"
          ? null
          : Number(req.body.buildingStructureConditionId),

      physicalStructureTypeId:
        req.body.physicalStructureTypeId == "null"
          ? null
          : Number(req.body.physicalStructureTypeId),
      foodVendorAvailabilityId:
        req.body.foodVendorAvailabilityId == "null"
          ? null
          : Number(req.body.foodVendorAvailabilityId),
    };
    const response = await prisma.institutionPremisesInfoSection.create({
      data,
    });

    if(response){
    return  res.status(200).json({ statusCode: 1, message: "Data saved" });
    }

    return  res.status(500).json({ statusCode: 0, message: "Data skipped" });
  } catch (error) {
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
    const response = await prisma.institutionPremisesInfoSection.findMany({
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
