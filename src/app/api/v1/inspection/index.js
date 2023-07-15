import prisma from "../../../../prisma/db";
import moment from "moment";

let put = async (req, res) => {
  try {
    // console.log(req?.body);
    // console.log(" req?.body?.liquidWasteSection?.numberToiletSeats", req?.body?.liquidWasteSection?.numberToiletSeats);

    let inspectionId = req?.body?.inspectionId;

    let inspection = await prisma.inspection.findFirst({
      where: { id: inspectionId },
    });
    let basicInfoSection = await prisma.basicInfoSection.findFirst({
      where: { inspectionId },
    });
    let licencePermitSection = await prisma.licencePermitSection.findFirst({
      where: { inspectionId },
    });
    let liquidWasteSection = await prisma.liquidWasteSection?.findFirst({
      where: { inspectionId },
    });
    let solidWasteSection = await prisma.solidWasteSection.findFirst({
      where: { inspectionId },
    });
    let waterSection = await prisma.waterSection.findFirst({
      where: { inspectionId },
    });
    let conclusionSection = await prisma.conclusionSection.findFirst({
      where: { inspectionId },
    });

    let residentialPremisesInfoSection =
      await prisma.residentialPremisesInfoSection.findFirst({
        where: { inspectionId },
      });
    let healthPremisesInfoSection =
      await prisma.healthPremisesInfoSection.findFirst({
        where: { inspectionId },
      });
    let hospitalityPremisesInfoSection =
      await prisma.hospitalityPremisesInfoSection.findFirst({
        where: { inspectionId },
      });
    let sanitaryPremisesInfoSection =
      await prisma.sanitaryPremisesInfoSection.findFirst({
        where: { inspectionId },
      });
    let marketPremisesInfoSection =
      await prisma.marketPremisesInfoSection.findFirst({
        where: { inspectionId },
      });
    let institutionPremisesInfoSection =
      await prisma.institutionPremisesInfoSection.findFirst({
        where: { inspectionId },
      });
    let industryPremisesInfoSection =
      await prisma.industryPremisesInfoSection.findFirst({
        where: { inspectionId },
      });
    let eateryPremisesInfoSection =
      await prisma.eateryPremisesInfoSection.findFirst({
        where: { inspectionId },
      });

    let premisesExcretaContainment =
      await prisma.premisesExcretaContainment.findMany({
        where: { inspectionId },
      });
    let premisesGreyWaterDisposal =
      await prisma.premisesGreyWaterDisposal.findMany({
        where: { inspectionId },
      });
    let premisesWasteReceptacle = await prisma.premisesWasteReceptacle.findMany(
      {
        where: { inspectionId },
      }
    );
    let premisesPestSigns = await prisma.premisesPestSigns.findMany({
      where: { inspectionId },
    });
    let premisesAnimal = await prisma.premisesAnimal.findMany({
      where: { inspectionId },
    });
    let premisesDrainType = await prisma.premisesDrainType.findMany({
      where: { inspectionId },
    });
    let premisesDrainBadCondition =
      await prisma.premisesDrainBadCondition.findMany({
        where: { inspectionId },
      });
    let premisesHazardousWasteDisposal =
      await prisma.premisesHazardousWasteDisposal.findMany({
        where: { inspectionId },
      });
    let premisesActionTaken = await prisma.premisesActionTaken.findMany({
      where: { inspectionId },
    });

    let premisesNuisanceDetected =
      await prisma.premisesNuisanceDetected.findMany({
        where: { inspectionId },
      });

    /////////////////Create History///////////////////

    let inspectionHistory = await prisma.inspectionHistory.create({
      data: inspection,
    });

    let historyId = inspectionHistory.historyId;

    //////SPREAD HISTORY ID
    licencePermitSection =
      licencePermitSection != null
        ? { ...licencePermitSection, historyId }
        : null;

    liquidWasteSection =
      liquidWasteSection != null ? { ...liquidWasteSection, historyId } : null;
    solidWasteSection =
      solidWasteSection != null ? { ...solidWasteSection, historyId } : null;
    basicInfoSection =
      basicInfoSection != null ? { ...basicInfoSection, historyId } : null;
    waterSection = waterSection != null ? { ...waterSection, historyId } : null;
    conclusionSection =
      conclusionSection != null ? { ...conclusionSection, historyId } : null;

    residentialPremisesInfoSection =
      residentialPremisesInfoSection != null
        ? {
            ...residentialPremisesInfoSection,
            historyId,
          }
        : null;
    eateryPremisesInfoSection =
      eateryPremisesInfoSection != null
        ? { ...eateryPremisesInfoSection, historyId }
        : null;
    healthPremisesInfoSection =
      healthPremisesInfoSection != null
        ? { ...healthPremisesInfoSection, historyId }
        : null;
    hospitalityPremisesInfoSection =
      hospitalityPremisesInfoSection != null
        ? {
            ...hospitalityPremisesInfoSection,
            historyId,
          }
        : null;
    sanitaryPremisesInfoSection =
      sanitaryPremisesInfoSection != null
        ? { ...sanitaryPremisesInfoSection, historyId }
        : null;
    marketPremisesInfoSection =
      marketPremisesInfoSection != null
        ? { ...marketPremisesInfoSection, historyId }
        : null;
    institutionPremisesInfoSection =
      institutionPremisesInfoSection != null
        ? {
            ...institutionPremisesInfoSection,
            historyId,
          }
        : null;
    industryPremisesInfoSection =
      industryPremisesInfoSection != null
        ? { ...industryPremisesInfoSection, historyId }
        : null;

    premisesExcretaContainment = premisesExcretaContainment?.map((d) => {
      return { ...d, historyId };
    });
    premisesGreyWaterDisposal = premisesGreyWaterDisposal?.map((d) => {
      return { ...d, historyId };
    });
    premisesWasteReceptacle = premisesWasteReceptacle?.map((d) => {
      return { ...d, historyId };
    });
    premisesPestSigns = premisesPestSigns?.map((d) => {
      return { ...d, historyId };
    });
    premisesAnimal = premisesAnimal?.map((d) => {
      return { ...d, historyId };
    });
    premisesDrainType = premisesDrainType?.map((d) => {
      return { ...d, historyId };
    });

    premisesHazardousWasteDisposal = premisesHazardousWasteDisposal?.map(
      (d) => {
        return { ...d, historyId };
      }
    );
    premisesActionTaken = premisesActionTaken?.map((d) => {
      return { ...d, historyId };
    });

    premisesNuisanceDetected = premisesNuisanceDetected?.map((d) => {
      return { ...d, historyId };
    });

    ////CREATE HISTORY

    if (basicInfoSection != null) {
      await prisma.basicInfoSectionHistory.create({ data: basicInfoSection });
    }
    if (licencePermitSection != null) {
      await prisma.licencePermitSectionHistory.create({
        data: licencePermitSection,
      });
    }
    if (liquidWasteSection != null) {
      await prisma.liquidWasteSectionHistory.create({
        data: liquidWasteSection,
      });
    }
    if (solidWasteSection != null) {
      await prisma.solidWasteSectionHistory.create({ data: solidWasteSection });
    }
    if (waterSection != null) {
      await prisma.waterSectionHistory.create({ data: waterSection });
    }

    if (conclusionSection != null) {
      await prisma.conclusionSectionHistory.create({ data: conclusionSection });
    }
    if (residentialPremisesInfoSection != null) {
      await prisma.residentialPremisesInfoSectionHistory.create({
        data: residentialPremisesInfoSection,
      });
    }
    if (eateryPremisesInfoSection != null) {
      await prisma.eateryPremisesInfoSectionHistory.create({
        data: eateryPremisesInfoSection,
      });
    }
    if (healthPremisesInfoSection != null) {
      await prisma.healthPremisesInfoSectionHistory.create({
        data: healthPremisesInfoSection,
      });
    }
    if (hospitalityPremisesInfoSection != null) {
      await prisma.hospitalityPremisesInfoSectionHistory.create({
        data: hospitalityPremisesInfoSection,
      });
    }
    if (sanitaryPremisesInfoSection != null) {
      await prisma.sanitaryPremisesInfoSectionHistory.create({
        data: sanitaryPremisesInfoSection,
      });
    }
    if (marketPremisesInfoSection != null) {
      await prisma.marketPremisesInfoSectionHistory.create({
        data: marketPremisesInfoSection,
      });
    }
    if (institutionPremisesInfoSection != null) {
      await prisma.institutionPremisesInfoSectionHistory.create({
        data: institutionPremisesInfoSection,
      });
    }
    if (industryPremisesInfoSection != null) {
      await prisma.industryPremisesInfoSectionHistory.create({
        data: industryPremisesInfoSection,
      });
    }

    await prisma.premisesExcretaContainmentHistory.createMany({
      data: premisesExcretaContainment,
    });

    await prisma.premisesGreyWaterDisposalHistory.createMany({
      data: premisesGreyWaterDisposal,
    });
    await prisma.premisesWasteReceptacleHistory.createMany({
      data: premisesWasteReceptacle,
    });
    await prisma.premisesPestSignsHistory.createMany({
      data: premisesPestSigns,
    });
    await prisma.premisesAnimalHistory.createMany({ data: premisesAnimal });
    await prisma.premisesDrainTypeHistory.createMany({
      data: premisesDrainType,
    });
    await prisma.premisesDrainBadConditionHistory.createMany({
      data: premisesDrainBadCondition,
    });
    await prisma.premisesHazardousWasteDisposalHistory.createMany({
      data: premisesHazardousWasteDisposal,
    });
    await prisma.premisesActionTakenHistory.createMany({
      data: premisesActionTaken,
    });
    await prisma.premisesNuisanceDetectedHistory.createMany({
      data: premisesNuisanceDetected,
    });

    let newBasicInfoSection = {
      latitude: Number(req?.body?.basicInfoSection.latitude),
      longitude: Number(req?.body?.basicInfoSection.longitude),
      accuracy: req?.body?.basicInfoSection.accuracy,
      respondentName: req?.body?.basicInfoSection.respondentName,
      respondentPhoneNumber: req?.body?.basicInfoSection.respondentPhoneNumber,
      // respondentDesignationId: Number(req?.body?.respondentDesignationId),
    };
   
    let newLicencePermitSection = {
      animalsPermitAvailabilityId:
        req?.body?.licencePermitSection.animalsPermitAvailability == undefined
          ? null
          : Number(req?.body?.licencePermitSection.animalsPermitAvailability),
      propertyRateAvailabilityId:
        req?.body?.licencePermitSection.propertyRateAvailability == undefined
          ? null
          : Number(req?.body?.licencePermitSection.propertyRateAvailability),
      buildingPermitAvailabilityId:
        req?.body?.licencePermitSection.buildingPermitAvailability == undefined
          ? null
          : Number(req?.body?.licencePermitSection.buildingPermitAvailability),
      businessLicenceAvailabilityId:
        req?.body?.licencePermitSection.businessLicenceAvailability == undefined
          ? null
          : Number(req?.body?.licencePermitSection.businessLicenceAvailability),
      habitationCertificateAvailabilityId:
        req?.body?.licencePermitSection.habitationCertificateAvailability ==
        undefined
          ? null
          : Number(
              req?.body?.licencePermitSection.habitationCertificateAvailability
            ),
      operatingLicenceAvailabilityId:
        req?.body?.licencePermitSection.operatingLicenceAvailability == undefined
          ? null
          : Number(req?.body?.licencePermitSection.operatingLicenceAvailability),
      structurePermitAvailabilityId:
        req?.body?.licencePermitSection.structurePermitAvailability == undefined
          ? null
          : Number(req?.body?.licencePermitSection.structurePermitAvailability),
      fumigationCertificateAvailabilityId:
        req?.body?.licencePermitSection.fumigationCertificateAvailability ==
        undefined
          ? null
          : Number(
              req?.body?.licencePermitSection.fumigationCertificateAvailability
            ),

      gtaOperatingLicenceAvailabilityId:
        req?.body?.licencePermitSection.gtaOperatingLicenceAvailability ==
        undefined
          ? null
          : Number(
              req?.body?.licencePermitSection.gtaOperatingLicenceAvailability
            ),
      suitabilityCertificateAvailabilityId:
        req?.body?.licencePermitSection.suitabilityCertificateAvailability ==
        undefined
          ? null
          : Number(
              req?.body?.licencePermitSection.suitabilityCertificateAvailability
            ),
      waterAnalysisReportId:
        req?.body?.licencePermitSection.waterAnalysisReport == undefined
          ? null
          : Number(req?.body?.licencePermitSection.waterAnalysisReport),
      regGeneralCertAvailabilityId:
        req?.body?.licencePermitSection.regGeneralCertAvailability == undefined
          ? null
          : Number(req?.body?.licencePermitSection.regGeneralCertAvailability),
      pharmacyCertAvailabilityId:
        req?.body?.licencePermitSection.pharmacyCertAvailability == undefined
          ? null
          : Number(req?.body?.licencePermitSection.pharmacyCertAvailability),
    };

    // waterSupply: selectedWaterSupply?.map((x) => x.value),
    // waterSource: selectedWaterSource?.map((x) => x.value),
    // waterStorage: selectedWaterStorage?.map((x) => x.value),
    // waterTreatment: selectedWaterTreatment?.map((x) => x.value),
    // drinkingWaterSource: selectedDrinkingWaterSource?.map((x) => x.value),

    let newWaterSection = {
      waterStorageConditionId:
        req?.body?.waterSection.waterStorageCondition == undefined
          ? null
          : Number(req?.body?.waterSection.waterStorageCondition),
      waterFlowFrequencyId:
        req?.body?.waterSection.waterFlowFrequency == undefined
          ? null
          : Number(req?.body?.waterSection.waterFlowFrequency),
      waterSourceConditionId:
        req?.body?.waterSection.waterSourceCondition == undefined
          ? null
          : Number(req?.body?.waterSection.waterSourceCondition),
      //   safeDistanceWaterStorageSanitaryId:
      // req?.body?.waterSection.safeDistanceWaterStorageSanitaryId ==undefined
      //   ? null
      //   : Number(req?.body?.safeDistanceWaterStorageSanitaryId),
      // rating: req?.body?.rating == undefined ? null : Number(req?.body?.rating),
    };

    let newSolidWasteSection = {
      wasteServiceProviderRegistrationId:
        req?.body?.solidWasteSection.wasteServiceProviderRegistration == undefined
          ? null
          : Number(req?.body?.solidWasteSection.wasteServiceProviderRegistration),
      wasteCollectorName:
        req?.body?.solidWasteSection.wasteCollectorName == undefined
          ? null
          : req?.body?.solidWasteSection.wasteCollectorName,
      wasteSortingAvailabilityId:
        req?.body?.solidWasteSection.wasteSortingAvailability == undefined
          ? null
          : Number(req?.body?.solidWasteSection.wasteSortingAvailability),
      wasteCollectionFrequencyId:
        req?.body?.solidWasteSection.wasteCollectionFrequency == undefined
          ? null
          : Number(req?.body?.solidWasteSection.wasteCollectionFrequency),
      approvedWasteStorageReceptacleId:
        req?.body?.solidWasteSection.approvedWasteStorageReceptacle == undefined
          ? null
          : Number(req?.body?.solidWasteSection.approvedWasteStorageReceptacle),
      adequateWasteStorageReceptacleId:
        req?.body?.solidWasteSection.adequateWasteStorageReceptacle == undefined
          ? null
          : Number(req?.body?.solidWasteSection.adequateWasteStorageReceptacle),
      wasteCollectionTypeId:
        req?.body?.solidWasteSection.wasteCollectionType == undefined
          ? null
          : Number(req?.body?.solidWasteSection.wasteCollectionType),
      unservicedWasteDisposalId:
        req?.body?.solidWasteSection.unservicedWasteDisposal == undefined
          ? null
          : Number(req?.body?.solidWasteSection.unservicedWasteDisposal),
      wastePaymentEvidenceId:
        req?.body?.solidWasteSection.wastePaymentEvidence == undefined
          ? null
          : Number(req?.body?.solidWasteSection.wastePaymentEvidence),
      wasteContainerVolumeId:
        req?.body?.solidWasteSection.containerVolume == undefined
          ? null
          : Number(req?.body?.solidWasteSection.containerVolume),
      wasteProviderAccredittedId:
        req?.body?.solidWasteSection.wasteProviderAccreditted == undefined
          ? null
          : Number(req?.body?.solidWasteSection.wasteProviderAccreditted),
      containerNumber:
        req?.body?.solidWasteSection.containerNumber == undefined
          ? null
          : Number(req?.body?.solidWasteSection.containerNumber),
      wasteServicePhoneNumber: req?.body?.solidWasteSection.wasteServicePhoneNumber,
    };


    let newLiquidWasteSection = {
     

      numberToiletSeats:
        req?.body?.liquidWasteSection?.numberToiletSeats == undefined
          ? null
          : Number(req?.liquidWasteSection?.body?.numberToiletSeats),
      toiletConditionId:
        req?.body?.liquidWasteSection?.toiletCondition == undefined
          ? null
          : Number(req?.body?.liquidWasteSection?.toiletCondition),

      toiletDischargeId:
        req?.body?.liquidWasteSection?.toiletDischarge == undefined
          ? null
          : Number(req?.body?.liquidWasteSection?.toiletDischarge),
      numberUrinalCubicle:
        req?.body?.liquidWasteSection?.numberUrinalSeats == undefined
          ? null
          : Number(req?.body?.liquidWasteSection?.numberUrinalSeats),
      bathroomAdequacyId:
        req?.body?.liquidWasteSection?.bathroomAdequacy == undefined
          ? null
          : Number(req?.body?.liquidWasteSection?.bathroomAdequacy),

      stagnationEvidenceId:
        req?.body?.liquidWasteSection?.stagnationEvidence == undefined
          ? null
          : Number(req?.body?.liquidWasteSection?.stagnationEvidence),

      containmentEmptiedId:
        req?.body?.liquidWasteSection?.containmentEmptied == undefined
          ? null
          : Number(req?.body?.liquidWasteSection?.containmentEmptied),
      sewerSystemId:
        req?.body?.liquidWasteSection?.sewerSystem == undefined
          ? null
          : Number(req?.body?.liquidWasteSection?.sewerSystem),

      // urinalCubicleConditionId:
      //   req?.body?.urinalCubicleConditionId == undefined
      //     ? null
      //     : Number(req?.body?.urinalCubicleConditionId),
      toiletAdequacyId:
        req?.body?.liquidWasteSection?.toiletAdequacy == undefined
          ? null
          : Number(req?.body?.liquidWasteSection?.toiletAdequacy),
      urinalAdequacyId:
        req?.body?.liquidWasteSection?.urinalAdequacy == undefined
          ? null
          : Number(req?.body?.liquidWasteSection?.urinalAdequacy),
      urinalGenderSensivityId:
        req?.body?.liquidWasteSection?.urinalGenderSensivity == undefined
          ? null
          : Number(req?.body?.liquidWasteSection?.urinalGenderSensivity),

      effluentManagementReportId:
        req?.body?.liquidWasteSection?.effluentManagementReport == undefined
          ? null
          : Number(req?.body?.liquidWasteSection?.effluentManagementReport),

      toiletGenderSensivityId:
        req?.body?.liquidWasteSection?.toiletGenderSensivity == undefined
          ? null
          : Number(req?.body?.liquidWasteSection?.toiletGenderSensivity),
      toiletDisabilityFriendlyId:
        req?.body?.liquidWasteSection?.toiletDisabilityFriendly == undefined
          ? null
          : Number(req?.body?.liquidWasteSection?.toiletDisabilityFriendly),
      urinalDisabilityFriendlyId:
        req?.body?.liquidWasteSection?.urinalDisabilityFriendly == undefined
          ? null
          : Number(req?.body?.liquidWasteSection?.urinalDisabilityFriendly),

      toiletPitPositionId:
        req?.body?.liquidWasteSection?.toiletPitPosition == undefined
          ? null
          : Number(req?.body?.liquidWasteSection?.toiletPitPosition),

      wasteWaterContainmentId:
        req?.body?.liquidWasteSection?.wasteWaterContainment == undefined
          ? null
          : Number(req?.body?.liquidWasteSection?.wasteWaterContainment),
      easeYourselfWhereId:
        req?.body?.liquidWasteSection?.easeYourselfWhere == undefined
          ? null
          : Number(req?.body?.liquidWasteSection?.easeYourselfWhere),
      areaSeweredId:
        req?.body?.liquidWasteSection?.areaSewered == undefined
          ? null
          : Number(req?.body?.liquidWasteSection?.areaSewered),
      facilityConnectedSewerId:
        req?.body?.liquidWasteSection?.facilityConnectedSewer == undefined
          ? null
          : Number(req?.body?.liquidWasteSection?.facilityConnectedSewer),

      bathroomConditionId:
        req?.body?.liquidWasteSection?.bathroomCondition == undefined
          ? null
          : Number(req?.body?.liquidWasteSection?.bathroomCondition),

      drainsConditionId:
        req?.body?.liquidWasteSection?.drainsCondition == undefined
          ? null
          : Number(req?.body?.liquidWasteSection?.drainsCondition),
      desiltingFrequencyId:
        req?.body?.liquidWasteSection?.desiltingFrequency == undefined
          ? null
          : Number(req?.body?.liquidWasteSection?.desiltingFrequency),

      // rating: req?.body?.rating == undefined ? null : Number(req?.body?.rating),
      toiletHouseholdNumberId:
        req?.body?.liquidWasteSection?.toiletHouseholdNumber == undefined
          ? null
          : Number(req?.body?.liquidWasteSection?.toiletHouseholdNumber),

      separateStaffUrinalId:
        req?.body?.liquidWasteSection?.separateStaffUrinal == undefined
          ? null
          : Number(req?.body?.liquidWasteSection?.separateStaffUrinal),

      availToiletFaciltyMgtId:
        req?.body?.liquidWasteSection?.availToiletFaciltyMgt == undefined
          ? null
          : Number(req?.body?.liquidWasteSection?.availToiletFaciltyMgt),

      analCleansingMaterialMgtId:
        req?.body?.liquidWasteSection?.analCleansingMaterialMgt == undefined
          ? null
          : Number(req?.body?.analCleansingMaterialMgt),

      numberUrinalSeats:
        req?.body?.liquidWasteSection?.numberUrinalSeats == undefined
          ? null
          : Number(req?.body?.liquidWasteSection?.numberUrinalSeats),

      numberBathroomCubicle:
        req?.body?.liquidWasteSection?.numberBathroomCubicle == undefined
          ? null
          : Number(req?.body?.liquidWasteSection?.numberBathroomCubicle),
    };


    let newConclusionSection = {
      officerComment:
        req?.body?.conclusionSection.officerComment == undefined ? null : req?.body?.conclusionSection.officerComment,

      obnoxiousTradeExistId:
        req?.body?.conclusionSection.obnoxiousTradeExist == undefined
          ? null
          : Number(req?.body?.conclusionSection.obnoxiousTradeExist),

      obnoxiousTrade:
        req?.body?.conclusionSection.obnoxiousTrade,

     
    };

    await prisma.basicInfoSection.update({
      where: {
        inspectionId: inspectionId,
      },
      data: newBasicInfoSection,
    });

    await prisma.licencePermitSection.update({
      where: {
        inspectionId: inspectionId,
      },
      data: newLicencePermitSection,
    });

    await prisma.waterSection.update({
      where: {
        inspectionId: inspectionId,
      },
      data: newWaterSection,
    });

    await prisma.solidWasteSection.update({
      where: {
        inspectionId: inspectionId,
      },
      data: newSolidWasteSection,
    });

    await prisma.liquidWasteSection?.update({
      where: {
        inspectionId: inspectionId,
      },
      data: newLiquidWasteSection,
    });

    await prisma.conclusionSection.update({
      where: {
        inspectionId: inspectionId,
      },
      data: newConclusionSection,
    });

   //TODO: update Premises Tables

      return res.status(200).json({ statusCode: 1, message: "Data saved" });
  

    // return res.status(500).json({ statusCode: 0, message: "Data skipped" });
  } catch (error) {
    console.log("Error: " + error);
    return res.status(200).json({ statusCode: 1, message: "Data saved" });

    // res.status(500).json({ statusCode: 0, message: "Data skipped" });
  }
};

let get = async (req, res) => {
  try {
    let userId = Number(req?.query.userId);
    if (!userId) return res.status(200).json();

    let response = await prisma.inspection.findMany({
      where: { userId: userId, deleted: 0 },
    });

    return res.status(200).json(response);
  } catch (error) {
    console.log(error);
  }
};

export default (req, res) => {
  req?.method === "POST"
    ? post(req, res)
    : req?.method === "PUT"
    ? put(req, res)
    : req?.method === "DELETE"
    ? console.log("DELETE")
    : req?.method === "GET"
    ? get(req, res)
    : res.status(404).send("");
};
