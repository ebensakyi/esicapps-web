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
      physicalStructureTypeId:
        req.body.physicalStructureTypeId == "null"
          ? null
          : Number(req.body.physicalStructureTypeId),
      sanitaryPremisesSubtypeId:
        req.body.sanitaryPremisesSubtypeId == "null"
          ? null
          : Number(req.body.sanitaryPremisesSubtypeId),

      sanitaryPremisesTypeId:
        req.body.sanitaryPremisesTypeId == "null"
          ? null
          : Number(req.body.sanitaryPremisesTypeId),
      toiletAvailabilityId:
        req.body.toiletAvailabilityId == "null"
          ? ""
          : Number(req.body.toiletAvailabilityId),
      staffChangingRoomId:
        req.body.staffChangingRoomId == "null"
          ? null
          : Number(req.body.staffChangingRoomId),

          ownershipTypeId:
        req.body.ownershipTypeId == "null"
          ? null
          : Number(req.body.ownershipTypeId),

      sanitaryFacilityMgtId:
        req.body.sanitaryFacilityMgtId == "null"
          ? null
          : Number(req.body.sanitaryFacilityMgtId),

      disinfectionFrequencyId:
        req.body.disinfectionFrequencyId == "null"
          ? null
          : Number(req.body.disinfectionFrequencyId),

      disinfestationQuarterlyId:
        req.body.disinfestationQuarterlyId == "null"
          ? null
          : Number(req.body.disinfestationQuarterlyId),

      protectiveClothingId:
        req.body.protectiveClothingId == "null"
          ? null
          : Number(req.body.protectiveClothingId),

      slaughterRoomAvailabilityId:
        req.body.slaughterRoomAvailabilityId == "null"
          ? null
          : Number(req.body.slaughterRoomAvailabilityId),

      storeRoomAvailabilityId:
        req.body.storeRoomAvailabilityId == "null"
          ? null
          : Number(req.body.storeRoomAvailabilityId),

      condemnationRoomAvailabilityId:
        req.body.condemnationRoomAvailabilityId == "null"
          ? null
          : Number(req.body.condemnationRoomAvailabilityId),

          cloakRoomAvailabilityId:
        req.body.cloakRoomAvailabilityId == "null"
          ? null
          : Number(req.body.cloakRoomAvailabilityId),
      comfortRoomAvailabilityId:
        req.body.comfortRoomAvailabilityId == "null"
          ? null
          : Number(req.body.comfortRoomAvailabilityId),
          wheelbathAvailabilityId:
        req.body.wheelbathAvailabilityId == "null"
          ? null
          : Number(req.body.wheelbathAvailabilityId),
      footbathAvailabilityId:
        req.body.footbathAvailabilityId == "null"
          ? null
          : Number(req.body.footbathAvailabilityId),

      wasteSortingId:
        req.body.wasteSortingId == "null"
          ? null
          : Number(req.body.wasteSortingId),

      leachateMgtId:
        req.body.leachateMgtId == "null"
          ? null
          : Number(req.body.leachateMgtId),
      safeHazardousWasteMgtId:
        req.body.safeHazardousWasteMgtId == "null"
          ? null
          : Number(req.body.safeHazardousWasteMgtId),
      sextonManagementId:
        req.body.sextonManagementId == "null"
          ? null
          : Number(req.body.sextonManagementId),

      sextonOfficeId:
        req.body.sextonOfficeId == "null"
          ? null
          : Number(req.body.sextonOfficeId),
      properLayoutId:
        req.body.properLayoutId == "null"
          ? null
          : Number(req.body.properLayoutId),
      fencedId: req.body.fencedId == "null" ? null : Number(req.body.fencedId),

      cremationPracticedId: req.body.cremationPracticedId == "null" ? null : Number(req.body.cremationPracticedId),
      workersOfficeAvailabilityId: req.body.workersOfficeAvailabilityId == "null" ? null : Number(req.body.workersOfficeAvailabilityId),
      sanitaryContainerId: req.body.sanitaryContainerId == "null" ? null : Number(req.body.sanitaryContainerId),
      transferStationCapacity: req.body.transferStationCapacity == "null" ? null : Number(req.body.transferStationCapacity),
      numberContainer: req.body.numberContainer == "null" ? null : Number(req.body.numberContainer),
      containerAttendantName: req.body.containerAttendantName == "null" ? null : Number(req.body.containerAttendantName),
      containerAttendantPhoneNumber: req.body.containerAttendantPhoneNumber== "null" ? null :  req.body.containerAttendantPhoneNumber== ""?null: req.body.containerAttendantPhoneNumber,

    };

    // console.log(data);
    const response = await prisma.sanitaryPremisesInfoSection.create({ data });

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
    const response = await prisma.sanitaryPremisesInfoSection.findMany({
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

