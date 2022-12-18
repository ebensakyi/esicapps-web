import prisma from "../../../../prisma/MyPrismaClient";
import moment from "moment";

const post = async (req, res) => {
  try {
    const data = {
      id: req.body.id,
      inspectionId: req.body.inspectionId,
      userId: Number(req.body.userId),
      facilityName: req.body.facilityName,
      industryPremisesTypeId:
        req.body.industryPremisesTypeId == "null"
          ? ""
          : Number(req.body.industryPremisesTypeId),
      industryPremisesSubtypeId:
        req.body.industryPremisesSubtypeId == "null"
          ? ""
          : Number(req.body.industryPremisesSubtypeId),
      physicalStructureTypeId:
        req.body.physicalStructureTypeId == "null"
          ? ""
          : Number(req.body.physicalStructureTypeId),

      otherIndustryFacility:
        req.body.otherIndustryFacility == "null"
          ? ""
          : Number(req.body.otherIndustryFacility),

      protectiveClothingId:
        req.body.protectiveClothingId == "null"
          ? ""
          : Number(req.body.protectiveClothingId),

      productionRoomConditionId:
        req.body.productionRoomConditionId == "null"
          ? ""
          : Number(req.body.productionRoomConditionId),

      flyScreenNetAvailabilityId:
        req.body.flyScreenNetAvailabilityId == "null"
          ? ""
          : Number(req.body.flyScreenNetAvailabilityId),

      storeRoomAvailabilityId:
        req.body.storeRoomAvailabilityId == "null"
          ? ""
          : Number(req.body.storeRoomAvailabilityId),

      medicalCertificateAvailabilityId:
        req.body.medicalCertificateAvailabilityId == "null"
          ? ""
          : Number(req.body.medicalCertificateAvailabilityId),

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
          ? ""
          : Number(req.body.firstAidAvailabilityId),

      staffChangingRoomId:
        req.body.staffChangingRoomId == "null"
          ? null
          : Number(req.body.staffChangingRoomId),
      manufacturedServices:
        req.body.manufacturedServices == "null"
          ? null
          : Number(req.body.manufacturedServices),

      majorByProducts:
        req.body.majorByProducts == "null"
          ? null
          : Number(req.body.majorByProducts),

      firstAidAvailabilityId:
        req.body.firstAidAvailabilityId == "null"
          ? null
          : Number(req.body.firstAidAvailabilityId),

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

var data = {
  id: await generateId(),

  inspectionId: inspectionId.toString(),
  userId: int.tryParse(userId.toString()),
  facilityName: facilityNameController.text,

  industryPremisesTypeId:
    int.tryParse(selectedIndustryPremisesType.value) ?? null,
  industryPremisesSubtypeId:
    int.tryParse(selectedIndustryPremisesSubtype.value) ?? null,
  physicalStructureTypeId:
    int.tryParse(selectedPhysicalStructure.value) ?? null,
  otherIndustryFacility: otherIndustryFacilityController.text,
  protectiveClothingId: int.tryParse(selectedProtectiveClothing.value) ?? null,
  productionRoomConditionId:
    int.tryParse(selectedProductionRoomCondition.value) ?? null,
  flyScreenNetAvailabilityId:
    int.tryParse(selectedFlyScreenNetAvailability.value) ?? null,

  storeRoomAvailabilityId:
    int.tryParse(selectedStoreRoomAvailability.value) ?? null,
  medicalCertificateAvailabilityId:
    int.tryParse(selectedMedicalCertificateAvailability.value) ?? null,
  toiletAvailabilityId: int.tryParse(selectedToiletAvailability.value) ?? null,
  urinalAvailabilityId: int.tryParse(selectedUrinalAvailability.value) ?? null,
  bathRoomAvailabilityId:
    int.tryParse(selectedBathRoomAvailability.value) ?? null,
  drainsAvailabilityId: int.tryParse(selectedDrainsAvailability.value) ?? null,
  approvedHandwashingFacilityAvailabilityId:
    int.tryParse(selectedApprovedHandwashingFacilityAvailability.value) ?? null,

  firstAidAvailabilityId:
    int.tryParse(selectedFirstAidAvailability.value) ?? null,
  staffChangingRoomId: int.tryParse(selectedStaffChangingRoom.value) ?? null,
  manufacturedServices: manufacturedServicesController.text,
  majorByProducts: manufacturedServicesController.text,
  numberWorkers: int.tryParse(workersNumberController.text) ?? null,
  byProductsStorageAreaCondId:
    int.tryParse(selectedStoreRoomAvailability.value) ?? null,

  ////////////////////
  deleted: 0,
  isSubmitted: 0,
  createdAt: DateTime.now().toIso8601String(),
  updatedAt: DateTime.now().toIso8601String(),
};
