import prisma from "../../../../prisma/MyPrismaClient";

const post = async (req, res) => {
  try {
    const inspection = await saveInspection(req.body.inspection);
    const inspectionId = inspection.id;
    const population = await savePopulation(req.body.population, inspectionId);
    const facility = await saveFacility(req.body.facilitySection, inspectionId);

    const waterSection = await saveWaterSection(
      req.body.waterSection,
      inspectionId
    );

    const sanitationSection = await saveSanitation(
      req.body.sanitationSection,
      inspectionId
    );

    const hygieneSection = await saveHygiene(
      req.body.hygieneSection,
      inspectionId
    );

    // const conclusionSection = await saveConclusion(req.body.conclusionSection);
    // const premisesActionTaken = await savePremisesActionTaken(
    //   req.body.premisesActionTaken
    // );
    // const premisesNuisances = await savePremisesNuisancesObserved(
    //   req.body.premisesActionTaken
    // );

    // res
    //   .status(200)
    //   .json({ statusCode: 1, message: "Data saved", data: { action } });
  } catch (error) {
    if (error.code === "P2002")
      return res
        .status(200)
        .json({ statusCode: 0, message: "action prefix should be unique" });
  }
};
const saveInspection = async (data) => {
  try {
    let _ = {
      inspectionCode: data.inspectionCode,
      inspectionFormId: data.inspectionFormId,
      inspectionTypeId: data.inspectionTypeId,
      submittedById: data.userId,
    };
    const response = await prisma.inspection.create({
      data: _,
    });
    return response;
  } catch (error) {
    console.log("Error: ", error);
    return;
  }
};
const savePopulation = async (data, inspectionId) => {
  try {
    let _ = {
      numberMales: data.numberMales,
      numberFemales: data.numberFemales,
      numberHousehold: data.numberHousehold,
      inspectionId,
    };
    const response = await prisma.PopulationSection.create({ data: _ });
    return response;
  } catch (error) {
    return;
  }
};
const saveFacility = async (data, inspectionId) => {
  try {
    let _ = {
      name: data.name,
      districtId: data.districtId,
      communityId: data.communityId,
      community: data.community,
      ghanaPostGps: data.ghanaPostGps,
      latitude: data.latitude,
      longitude: data.longitude,
      respondentName: data.respondentName,
      phoneNumber: data.phoneNumber,
      premiseTypeId: data.premiseTypeId,
      respondentDesignationId: data.respondentDesignationId,
      approvedHandwashingFacilityAvailabilityId:
        data.approvedHandwashingFacilityAvailabilityId,
      drainsAvailabilityId: data.drainsAvailabilityId,
      toiletAvailabilityId: data.toiletAvailabilityId,
      urinalAvailabilityId: data.urinalAvailabilityId,
      bathRoomAvailabilityId: data.bathRoomAvailabilityId,
      buildingPermitId: data.buildingPermitId,
      habitationCertificateAvailabilityId:
        data.habitationCertificateAvailabilityId,
      inspectionId,
    };

    const response = await prisma.facilitySection.create({ data: _ });
    return response;
  } catch (error) {
    console.log("SaveFacility Error:", error);
    return;
  }
};
const saveWaterSection = async (data, inspectionId) => {
  try {
    let _ = {
      inspectionId,
      waterConditionId: data.waterConditionId,
      waterFlowFrequencyId: data.waterFlowFrequencyId,
      waterStorageConditionSafeId: data.waterStorageConditionSafeId,
      waterStorageTypeId: data.waterStorageTypeId,
      waterSupplyTypeId: data.waterSupplyTypeId,
      waterTreatmentTypeId: data.waterTreatmentTypeId,
      waterGeneralRating: 4,
    };
    const waterSection = await prisma.waterSection.create({ data: _ });

    let premisesWaterSources = data.premisesWaterSources;
    let waterSectionId = waterSection.id;
    const waterSources = await saveWaterSources(
      premisesWaterSources,
      waterSectionId
    );

    return;
  } catch (error) {
    console.log("saveWaterSection error: ", error);
    return;
  }
};

const saveWaterSources = async (premisesWaterSources, waterSectionId) => {
  try {
    let newPremiseWaterSources = await premisesWaterSources.map((pws) => {
      return { waterSectionId: waterSectionId, waterSourceId: pws };
    });

    const response = await prisma.premisesWaterSources.createMany({
      data: newPremiseWaterSources,
    });
    return response;
  } catch (error) {
    console.log("saveWaterSources error: ", error);

    return;
  }
};

const saveSanitation = async (data, inspectionId) => {
  try {
    let _ = {
      inspectionId,
      sanitaryFacilityTypeId: data.sanitaryFacilityTypeId,
      wasteCollectorRegistrationId: data.wasteCollectorRegistrationId,
      wasteCollectorName: data.wasteCollectorName,

      wasteSortingId: data.wasteSortingId,
      drainTypeId: data.drainTypeId,
      drainsConditionId: data.drainsConditionId,
      receiptsUpToDateId: data.receiptsUpToDateId,
      sanitationGeneralRating: data.sanitationGeneralRating,

      wasteCollectionFrequencyId: data.wasteCollectionFrequencyId,
      approvedWasteStorageReceptacleId: data.approvedWasteStorageReceptacleId,
    };

    const sanitationSection = await prisma.sanitationSection.create({
      data: _,
    });

    let sanitationSectionId = sanitationSection.id;

    let premisesWashroomFacility = {
      toiletAdequacyId: data.toiletAdequacyId,
      urinalAdequacyId: data.urinalAdequacyId,
      numberToiletPots: data.numberToiletPots,
      sanitationSectionId: sanitationSectionId,
    };
    console.log("premisesWashroomFacility===>", premisesWashroomFacility);

    let premisesWasteReceptacle = data.premisesWasteReceptacle;

    let premisesEffluentManagement = data.premisesEffluentManagement;
    let premisesToiletType = data.premisesToiletType;

    let premisesExcretaContainment = data.premisesExcretaContainment;
    let premisesExcretaDisposalMethod = data.premisesExcretaDisposalMethod;

    let premisesGreyWaterDisposal = data.premisesGreyWaterDisposal;

    await savePremisesWashroomFacility(
      premisesWashroomFacility,
      premisesToiletType,
      premisesEffluentManagement,
      premisesExcretaContainment,
      premisesExcretaDisposalMethod
    );

    await savePremisesWasteReceptacle(
      premisesWasteReceptacle,
      sanitationSectionId
    );
    await savePremisesGreyWaterDisposal(
      premisesGreyWaterDisposal,
      sanitationSectionId
    );

    //   	"premisesWasteReceptacle":[1,3],
    // 	"premisesGreyWaterDisposal":[2,3],
    return;
  } catch (error) {
    console.log("saveSanitation Error: ", error);

    return;
  }
};

const savePremisesWashroomFacility = async (
  data,
  premisesToiletType,
  premisesEffluentManagement,
  premisesExcretaContainment,
  premisesExcretaDisposalMethod
) => {
  try {
    const premisesWashroomFacility =
      await prisma.premisesWashroomFacility.create({
        data: data,
      });

    let premisesWashroomFacilityId = premisesWashroomFacility.id;
    await savePremisesToiletType(
      premisesToiletType,
      premisesWashroomFacilityId
    );

    await savePremisesEffluentManagement(
      premisesEffluentManagement,
      premisesWashroomFacilityId
    );

    await savePremisesExcretaContainment(
      premisesExcretaContainment,
      premisesWashroomFacilityId
    );

    await savePremisesExcretaDisposalMethod(
      premisesExcretaDisposalMethod,
      premisesWashroomFacilityId
    );

    return;
  } catch (error) {
    console.log("Error savePremisesWashroomFacility: " + error);
    return;
  }
};
const savePremisesToiletType = async (data, premisesWashroomFacilityId) => {
  try {
    if (data == null || data.length == 0) return;
    let _ = await data.map((tt) => {
      return {
        premisesWashroomFacilityId: premisesWashroomFacilityId,
        toiletTypeId: tt,
      };
    });
    const response = await prisma.premisesToiletType.createMany({ data: _ });
    return response;
  } catch (error) {
    return;
  }
};
const savePremisesEffluentManagement = async (
  data,
  premisesWashroomFacilityId
) => {
  try {
    let _ = await data.map((id) => {
      return {
        premisesWashroomFacilityId: premisesWashroomFacilityId,
        effluentManagementId: id,
      };
    });
    const response = await prisma.premisesEffluentManagement.createMany({
      data: _,
    });
    return response;
  } catch (error) {
    console.log("savePremisesEffluentManagement Error:", error);
    return;
  }
};

const savePremisesExcretaContainment = async (
  data,
  premisesWashroomFacilityId
) => {
  try {
    let _ = await data.map((id) => {
      return {
        premisesWashroomFacilityId: premisesWashroomFacilityId,
        excretaContainmentId: id,
      };
    });

    const response = await prisma.premisesExcretaContainment.createMany({
      data: _,
    });
    return response;
  } catch (error) {
    console.log("savePremisesExcretaContainment Error:", error);
    return;
  }
};

const savePremisesExcretaDisposalMethod = async (
  data,
  premisesWashroomFacilityId
) => {
  try {
    let _ = await data.map((id) => {
      return {
        premisesWashroomFacilityId: premisesWashroomFacilityId,
        excretaDisposalMethodId: id,
      };
    });
    const response = await prisma.premisesExcretaDisposalMethod.createMany({
      data: _,
    });
    return response;
  } catch (error) {
    console.log("savePremisesExcretaDisposalMethod Error:", error);

    return;
  }
};
const savePremisesWasteReceptacle = async (data, sanitationSectionId) => {
  try {
    let _ = await data.map((id) => {
      return {
        sanitationSectionId: sanitationSectionId,
        solidWasteReceptacleId: id,
      };
    });
    const response = await prisma.premisesWasteReceptacle.createMany({
      data: _,
    });
    return response;
  } catch (error) {
    return;
  }
};

const savePremisesGreyWaterDisposal = async (data, sanitationSectionId) => {
  try {
    let _ = await data.map((id) => {
      return {
        sanitationSectionId: sanitationSectionId,
        greyWaterDisposalId: id,
      };
    });
    const response = await prisma.premisesGreyWaterDisposal.createMany({
      data: _,
    });
    return response;
  } catch (error) {
    return;
  }
};

const saveHygiene = async (data, inspectionId) => {
  try {
    console.log(data);

    let _ = {
      inspectionId: inspectionId,
      pondingEvidenceId: data.pondingEvidenceId,
      approvedHandwashingFacilityAvailabilityId:
        data.approvedHandwashingFacilityAvailabilityId,
      evidenceStagnationId: data.evidenceStagnationId,
    };

    const hygieneSection = await prisma.hygieneSection.create({ data });

    let premisesPestSigns = data.premisesPestSigns;
    let hygieneSectionId = hygieneSection.id;

    //await savePremisesPestSigns(premisesPestSigns, hygieneSectionId);
    return response;
  } catch (error) {
    console.log("saveHygiene Error:", error);
    return;
  }
};

const savePremisesPestSigns = async (data) => {
  try {
    const response = await prisma.premisesPestSigns.create({ data });
    return response;
  } catch (error) {
    return;
  }
};

const saveConclusion = async (data) => {
  try {
    const response = await prisma.conclusionSection.create({ data });
    return response;
  } catch (error) {
    return;
  }
};
const savePremisesActionTaken = async (data) => {
  try {
    const response = await prisma.premisesActionTaken.create({ data });
    return response;
  } catch (error) {
    return;
  }
};
const savePremisesNuisancesObserved = async (data) => {
  try {
    const response = await prisma.premisesNuisancesDetected.create({ data });
    return response;
  } catch (error) {
    return;
  }
};

const get = async (req, res) => {
  try {
    //     const action = await prisma.action.findMany({ where: { deleted: 0 } });
    //     //return res.status(200).json({ statusCode: 1, data: action });
    //     return res.status(200).json( action);
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
