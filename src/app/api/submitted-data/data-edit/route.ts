import { prisma } from "@/prisma/db";
import { logActivity } from "@/utils/log";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../../auth/[...nextauth]/options";
import { NextResponse } from "next/server";
import { log } from 'util';

export async function GET(request: Request) {
  try {
    const session = await getServerSession(authOptions);

    // console.log("Session ", session);
    let userId  = session?.user?.id 
    let surname = session?.user?.surname;

    let { searchParams } = new URL(request.url);
    let inspectionId: any = searchParams.get("id")?.toString();
    // let published: string | undefined = searchParams
    //   .get("published")
    //   ?.toString();

    // let inspectionFormId: string | undefined = searchParams
    //   .get("inspectionFormId")
    //   ?.toString();
    await logActivity(`Visited data edit page for ${inspectionId}`, userId);

    const data = await prisma.inspection.findFirst({
      where: {
        // deleted: 0,

        id: inspectionId,
      },

      include: {
        User: true,
        ElectoralArea: true,

        BasicInfoSection: {
          include: {
            Community: { include: { District: { include: { Region: true } } } },
            RespondentDesignation: true,
          },
        },

        LicencePermitSection: {
          include: {
            animalsPermitAvailability: true,
            buildingPermitAvailability: true,

            businessLicenceAvailability: true,
            fumigationCertificateAvailability: true,
            habitationCertificateAvailability: true,
            operatingLicenceAvailability: true,
            propertyRateAvailability: true,
            structurePermitAvailability: true,
            gtaOperatingLicenceAvailability: true,
            waterAnalysisReport: true,
            regGeneralCertAvailability: true,
            suitabilityCertificateAvailability: true,
            pharmacyCertAvailability: true,
          },
        },
        ResidentialPremisesInfoSection: {
          include: {
            PremisesAnimal: {
              include: {
                AnimalType: true,
              },
            },
            animalAvailability: true,
            toiletAvailability: true,
            vaccinationProof: true,
            drainsAvailability: true,
            approvedHandwashingFacilityAvailability: true,
            bathroomAvailability: true,
            animalSpaceCondition: true,
          },
        },
        EateryPremisesInfoSection: {
          include: {
            toiletAvailability: true,
            urinalAvailability: true,
            drainsAvailability: true,
            eateryPremisesSubType: true,
            eateryPremisesType: true,
            firstAidAvailability: true,
            kitchenAvailability: true,
            approvedHandwashingFacilityAvailability: true,
            bathroomAvailability: true,
            physicalStructureType: true,
            cookedFoodStorageCondtionSafe: true,
            uncookedFoodStorageCondtionSafe: true,
            disinfestation: true,
            disinfestationFrequency: true,
            disinfection: true,
            disinfectionFrequency: true,
            protectiveClothingUsed: true,
          },
        },
        HealthPremisesInfoSection: {
          include: {
            toiletAvailability: true,
            urinalAvailability: true,
            drainsAvailability: true,
            approvedHandwashingFacilityAvailability: true,
            bathroomAvailability: true,

            /////////
            ehoAvailability: true,
            incineratorAvailability: true,
            placentaPitAvailability: true,
            healthPremisesType: true,
            separateWard: true,
            ownershipType: true,
            embalmingAreaCondition: true,
            embalmingAreaAvailability: true,
            bodyTraysAdequate: true,
            coldRoomAvailability: true,
            coldRoomCondition: true,
          },
        },
        HospitalityPremisesInfoSection: {
          include: {
            toiletAvailability: true,
            urinalAvailability: true,
            drainsAvailability: true,
            approvedHandwashingFacilityAvailability: true,
            bathroomAvailability: true,
            hospitalityPremisesType: true,
            physicalStructureType: true,
            cookedFoodStorageCondtionSafe: true,
            uncookedFoodStorageCondtionSafe: true,
            ////////
            designatedSmokingArea: true,
            protectiveClothingUsed: true,
            firstAidAvailability: true,
            kitchenAvailability: true,
          },
        },

        IndustryPremisesInfoSection: {
          include: {
            byProductsStorageAreaCond: true,
            productionRoomCondition: true,
            staffChangingRoom: true,
            storeRoomAvailability: true,
            flyScreenNetAvailability: true,
            protectiveClothingUsed: true,
            toiletAvailability: true,
            urinalAvailability: true,
            drainsAvailability: true,
            approvedHandwashingFacilityAvailability: true,
            bathroomAvailability: true,
            PremisesType: true,
            PremisesSubtype: true,
            physicalStructureType: true,
            firstAidAvailability: true,
          },
        },
        InstitutionPremisesInfoSection: {
          include: {
            ablutionSlabCondition: true,
            ablutionSlab: true,
            animalSpaceAvailability: true,
            animalSpaceCondition: true,
            cookedFoodStorageCondtionSafe: true,
            drainsAvailability: true,
            firstAidAvailability: true,
            foodVendorAvailability: true,
            PremisesSubtype: true,
            PremisesType: true,
            kitchenAvailability: true,
            physicalStructureType: true,
            shepClubExistence: true,
            slaughterAreaAvailability: true,
            slaughterAreaCondition: true,
            soundProof: true,
            uncookedFoodStorageCondtionSafe: true,
            urinalAvailability: true,
            toiletAvailability: true,
            approvedHandwashingFacilityAvailability: true,
            bathroomAvailability: true,
            protectiveClothingUsed: true,
          },
        },
        MarketPremisesInfoSection: {
          include: {
            toiletAvailability: true,
            urinalAvailability: true,
            drainsAvailability: true,
            approvedHandwashingFacilityAvailability: true,
            bathroomAvailability: true,

            marketPremisesType: true,
            firstAidAvailability: true,
            ownershipType: true,

            derattingFrequency: true,
            cleanupFrequency: true,
            physicalStructureType: true,
            generalSanitaryCondition: true,
          },
        },
        SanitaryPremisesInfoSection: {
          include: {
            toiletAvailability: true,
            urinalAvailability: true,
            drainsAvailability: true,
            approvedHandwashingFacilityAvailability: true,
            bathroomAvailability: true,

            //////////////
            physicalStructureType: true,
            sanitaryPremisesType: true,
            staffChangingRoom: true,
            ownershipType: true,
            sanitaryFacilityMgt: true,
            disinfectionFrequency: true,
            disinfestationQuarterly: true,
            protectiveClothing: true,
            slaughterAreaAvailability: true,
            storeRoomAvailability: true,
            condemnationRoomAvailability: true,
            cloakRoomAvailability: true,
            comfortRoomAvailability: true,
            wheelbathAvailability: true,
            footbathAvailability: true,
            leachateMgt: true,
            safeHazardousWasteMgt: true,
            sextonManagement: true,
            sextonOffice: true,
            properLayout: true,
            cremationPracticed: true,
            workersOfficeAvailability: true,
            cremationPlatform: true,
            sanitaryAshesDisposal: true,
            siteFenced: true,
          },
        },
        WaterSection: {
          include: {
            WaterFlowFrequency: true,
            waterSourceCondition: true,
            waterStorageConditionSafe: true,
            safeDistanceWaterStorageSanitary: true,
            PremisesDrinkingWaterSources: {
              include: { DrinkingWaterSourceType: true },
            },
            PremisesWaterSources: {
              include: { WaterSourceType: true },
            },
            PremisesWaterStorage: {
              include: { WaterStorageType: true },
            },
            PremisesWaterSupply: {
              include: { WaterSupplyType: true },
            },
            PremisesWaterTreatmentType: {
              include: { WaterTreatmentType: true },
            },
          },
        },
        LiquidWasteSection: {
          include: {
            toiletAdequacy: true,
            analCleansingMaterialMgt: true,
            areaSewered: true,
            availToiletFaciltyMgt: true,
            bathroomAdequacy: true,
            containmentEmptied: true,
            DesiltingFrequency: true,
            PremisesDrainType: {
              include: {
                DrainType: true,
              },
            },
            drainsCondition: true,
            EaseYourselfWhere: true,
            PremisesEffluentManagement: {
              include: {
                EffluentManagement: true,
              },
            },
            PremisesExcretaDisposalMethod: {
              include: {
                ExcretaDisposalMethod: true,
              },
            },
            PremisesExcretaContainment: {
              include: {
                ExcretaContainment: true,
              },
            },
            PremisesGreyWaterDisposal: {
              include: {
                GreyWaterDisposal: true,
              },
            },
            PremisesToiletType: {
              include: {
                ToiletType: true,
              },
            },
            facilityConnectedSewer: true,
            bathroomCondition: true,
            separateStaffUrinal: true,
            sewerSystem: true,
            stagnationEvidence: true,
            toiletCondition: true,
            toiletDisabilityFriendly: true,
            toiletDischarge: true,
            toiletPitPosition: true,
          },
        },
        SolidWasteSection: {
          include: {
            wasteServiceProviderRegistration: true,
            wasteSortingAvailability: true,
            wasteCollectionFrequency: true,
            approvedWasteStorageReceptacle: true,
            adequateWasteStorageReceptacle: true,
            WasteCollectionType: true,
            UnservicedWasteDisposal: true,
            wastePaymentEvidence: true,
            ContainerVolume: true,
            wasteProviderAccreditted: true,
            PremisesHazardousWasteDisposal: {
              include: { HazardousWasteDisposalMethod: true },
            },

            PremisesWasteReceptacle: {
              include: { SolidWasteReceptacle: true },
            },
          },
        },
        ConclusionSection: {
          include: {
            obnoxiousTradeExist: true,
            PremisesNuisanceDetected: {
              include: { Nuisance: true },
            },
            PremisesActionTaken: {
              include: { Action: true },
            },
          },
        },

        InspectionPictures: {
          include: { FormSectionImage: true },
        },
      },
    });

    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    console.log(">>>>>>> ", error);

    return NextResponse.json(error, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions);

    // console.log("Session ", session);
    let userId = session?.user?.id;

    const res = await request.json();

    let inspectionId = res.id;

    let inspection = await prisma.inspection.findFirst({
      where: {
        id: inspectionId,
      },
    });
    let isPublished = inspection?.isPublished || 0;

    await prisma.inspection.update({
      data: {
        isPublished: Math.abs(isPublished - 1),
        publishedById: Number(userId),
      },
      where: {
        id: inspectionId,
      },
    });
    await logActivity(`Published inspection ${inspectionId}`, userId);

    return NextResponse.json({ status: 200 });
  } catch (error) {
    console.log(error);
  }
}
export async function PUT(request: Request) {
  try {
    const res = await request.json();

    console.log("let inspectionId = res.id; ",res);
    


    let inspectionId = res.inspectionId;

//////////////////////////GET CURRENT DATA//////////////////////
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

    /////////////////CREATE HISTORY OF CURRENT DATA///////////////////

    let inspectionHistory = await prisma.inspectionHistory.create({
      data: inspection,
    }as any);

    let historyId: any = inspectionHistory.historyId;

    //////SPREAD HISTORY ID
    licencePermitSection =
      licencePermitSection != null
        ? { ...licencePermitSection, historyId }as any
        : null;

    liquidWasteSection =
      liquidWasteSection != null ? { ...liquidWasteSection, historyId }as any : null;
    solidWasteSection =
      solidWasteSection != null ? { ...solidWasteSection, historyId }as any : null;
    basicInfoSection =
      basicInfoSection != null ? { ...basicInfoSection, historyId }as any : null;
    waterSection = waterSection != null ? { ...waterSection, historyId }as any : null;
    conclusionSection =
      conclusionSection != null ? { ...conclusionSection, historyId }as any : null;

    residentialPremisesInfoSection =
      residentialPremisesInfoSection != null
        ? {
            ...residentialPremisesInfoSection,
            historyId,
          }as any
        : null;
    eateryPremisesInfoSection =
      eateryPremisesInfoSection != null
        ? { ...eateryPremisesInfoSection, historyId }as any
        : null;
    healthPremisesInfoSection =
      healthPremisesInfoSection != null
        ? { ...healthPremisesInfoSection, historyId }as any
        : null;
    hospitalityPremisesInfoSection =
      hospitalityPremisesInfoSection != null
        ? {
            ...hospitalityPremisesInfoSection,
            historyId,
          }as any
        : null;
    sanitaryPremisesInfoSection =
      sanitaryPremisesInfoSection != null
        ? { ...sanitaryPremisesInfoSection, historyId }as any
        : null;
    marketPremisesInfoSection =
      marketPremisesInfoSection != null
        ? { ...marketPremisesInfoSection, historyId }as any
        : null;
    institutionPremisesInfoSection =
      institutionPremisesInfoSection != null
        ? {
            ...institutionPremisesInfoSection,
            historyId,
          }as any
        : null;
    industryPremisesInfoSection =
      industryPremisesInfoSection != null
        ? { ...industryPremisesInfoSection, historyId }as any
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

    ///////////////////////SAVE HISTORY

    if (basicInfoSection != null) {
      await prisma.basicInfoSectionHistory.create({ data: basicInfoSection }as any);
    }
    if (licencePermitSection != null) {
      await prisma.licencePermitSectionHistory.create({
        data: licencePermitSection,
      }as any);
    }
    if (liquidWasteSection != null) {
      await prisma.liquidWasteSectionHistory.create({
        data: liquidWasteSection,
      }as any);
    }
    if (solidWasteSection != null) {
      await prisma.solidWasteSectionHistory.create({ data: solidWasteSection }as any);
    }
    if (waterSection != null) {
      await prisma.waterSectionHistory.create({ data: waterSection }as any);
    }

    if (conclusionSection != null) {
      await prisma.conclusionSectionHistory.create({ data: conclusionSection }as any);
    }
    if (residentialPremisesInfoSection != null) {
      await prisma.residentialPremisesInfoSectionHistory.create({
        data: residentialPremisesInfoSection,
      }as any);
    }
    if (eateryPremisesInfoSection != null) {
      await prisma.eateryPremisesInfoSectionHistory.create({
        data: eateryPremisesInfoSection,
      }as any);
    }
    if (healthPremisesInfoSection != null) {
      await prisma.healthPremisesInfoSectionHistory.create({
        data: healthPremisesInfoSection,
      }as any);
    }
    if (hospitalityPremisesInfoSection != null) {
      await prisma.hospitalityPremisesInfoSectionHistory.create({
        data: hospitalityPremisesInfoSection,
      }as any);
    }
    if (sanitaryPremisesInfoSection != null) {
      await prisma.sanitaryPremisesInfoSectionHistory.create({
        data: sanitaryPremisesInfoSection,
      }as any);
    }
    if (marketPremisesInfoSection != null) {
      await prisma.marketPremisesInfoSectionHistory.create({
        data: marketPremisesInfoSection,
      }as any);
    }
    if (institutionPremisesInfoSection != null) {
      await prisma.institutionPremisesInfoSectionHistory.create({
        data: institutionPremisesInfoSection,
      }as any);
    }
    if (industryPremisesInfoSection != null) {
      await prisma.industryPremisesInfoSectionHistory.create({
        data: industryPremisesInfoSection,
      }as any);
    }

    await prisma.premisesExcretaContainmentHistory.createMany({
      data: premisesExcretaContainment,
    }as any);

    await prisma.premisesGreyWaterDisposalHistory.createMany({
      data: premisesGreyWaterDisposal,
    }as any);
    await prisma.premisesWasteReceptacleHistory.createMany({
      data: premisesWasteReceptacle,
    }as any);
    await prisma.premisesPestSignsHistory.createMany({
      data: premisesPestSigns,
    }as any);
    await prisma.premisesAnimalHistory.createMany({ data: premisesAnimal }as any);
    await prisma.premisesDrainTypeHistory.createMany({
      data: premisesDrainType,
    }as any);
    await prisma.premisesDrainBadConditionHistory.createMany({
      data: premisesDrainBadCondition,
    }as any);
    await prisma.premisesHazardousWasteDisposalHistory.createMany({
      data: premisesHazardousWasteDisposal,
    }as any);
    await prisma.premisesActionTakenHistory.createMany({
      data: premisesActionTaken,
    }as any);
    await prisma.premisesNuisanceDetectedHistory.createMany({
      data: premisesNuisanceDetected,
    }as any);


//////////////////////////PROCESS DATA FOR DATA UPDATE

    let newBasicInfoSection = {
      latitude: Number(res?.basicInfoSection.latitude),
      longitude: Number(res?.basicInfoSection.longitude),
      accuracy: res?.basicInfoSection.accuracy,
      respondentName: res?.basicInfoSection.respondentName,
      respondentPhoneNumber: res?.basicInfoSection.respondentPhoneNumber,
      // respondentDesignationId: Number(res?.respondentDesignationId),
    };

    let newLicencePermitSection = {
      animalsPermitAvailabilityId:
        res?.licencePermitSection.animalsPermitAvailability == undefined
          ? null
          : Number(res?.licencePermitSection.animalsPermitAvailability),
      propertyRateAvailabilityId:
        res?.licencePermitSection.propertyRateAvailability == undefined
          ? null
          : Number(res?.licencePermitSection.propertyRateAvailability),
      buildingPermitAvailabilityId:
        res?.licencePermitSection.buildingPermitAvailability == undefined
          ? null
          : Number(res?.licencePermitSection.buildingPermitAvailability),
      businessLicenceAvailabilityId:
        res?.licencePermitSection.businessLicenceAvailability == undefined
          ? null
          : Number(res?.licencePermitSection.businessLicenceAvailability),
      habitationCertificateAvailabilityId:
        res?.licencePermitSection.habitationCertificateAvailability == undefined
          ? null
          : Number(res?.licencePermitSection.habitationCertificateAvailability),
      operatingLicenceAvailabilityId:
        res?.licencePermitSection.operatingLicenceAvailability == undefined
          ? null
          : Number(res?.licencePermitSection.operatingLicenceAvailability),
      structurePermitAvailabilityId:
        res?.licencePermitSection.structurePermitAvailability == undefined
          ? null
          : Number(res?.licencePermitSection.structurePermitAvailability),
      fumigationCertificateAvailabilityId:
        res?.licencePermitSection.fumigationCertificateAvailability == undefined
          ? null
          : Number(res?.licencePermitSection.fumigationCertificateAvailability),

      gtaOperatingLicenceAvailabilityId:
        res?.licencePermitSection.gtaOperatingLicenceAvailability == undefined
          ? null
          : Number(res?.licencePermitSection.gtaOperatingLicenceAvailability),
      suitabilityCertificateAvailabilityId:
        res?.licencePermitSection.suitabilityCertificateAvailability ==
        undefined
          ? null
          : Number(
              res?.licencePermitSection.suitabilityCertificateAvailability
            ),
      waterAnalysisReportId:
        res?.licencePermitSection.waterAnalysisReport == undefined
          ? null
          : Number(res?.licencePermitSection.waterAnalysisReport),
      regGeneralCertAvailabilityId:
        res?.licencePermitSection.regGeneralCertAvailability == undefined
          ? null
          : Number(res?.licencePermitSection.regGeneralCertAvailability),
      pharmacyCertAvailabilityId:
        res?.licencePermitSection.pharmacyCertAvailability == undefined
          ? null
          : Number(res?.licencePermitSection.pharmacyCertAvailability),
    };

    // waterSupply: selectedWaterSupply?.map((x) => x.value),
    // waterSource: selectedWaterSource?.map((x) => x.value),
    // waterStorage: selectedWaterStorage?.map((x) => x.value),
    // waterTreatment: selectedWaterTreatment?.map((x) => x.value),
    // drinkingWaterSource: selectedDrinkingWaterSource?.map((x) => x.value),

    let newWaterSection = {
      waterStorageConditionId:
        res?.waterSection.waterStorageCondition == undefined
          ? null
          : Number(res?.waterSection.waterStorageCondition),
      waterFlowFrequencyId:
        res?.waterSection.waterFlowFrequency == undefined
          ? null
          : Number(res?.waterSection.waterFlowFrequency),
      waterSourceConditionId:
        res?.waterSection.waterSourceCondition == undefined
          ? null
          : Number(res?.waterSection.waterSourceCondition),
      //   safeDistanceWaterStorageSanitaryId:
      // res?.waterSection.safeDistanceWaterStorageSanitaryId ==undefined
      //   ? null
      //   : Number(res?.safeDistanceWaterStorageSanitaryId),
      // rating: res?.rating == undefined ? null : Number(res?.rating),
    };

    let newSolidWasteSection = {
      wasteServiceProviderRegistrationId:
        res?.solidWasteSection.wasteServiceProviderRegistration == undefined
          ? null
          : Number(res?.solidWasteSection.wasteServiceProviderRegistration),
      wasteCollectorName:
        res?.solidWasteSection.wasteCollectorName == undefined
          ? null
          : res?.solidWasteSection.wasteCollectorName,
      wasteSortingAvailabilityId:
        res?.solidWasteSection.wasteSortingAvailability == undefined
          ? null
          : Number(res?.solidWasteSection.wasteSortingAvailability),
      wasteCollectionFrequencyId:
        res?.solidWasteSection.wasteCollectionFrequency == undefined
          ? null
          : Number(res?.solidWasteSection.wasteCollectionFrequency),
      approvedWasteStorageReceptacleId:
        res?.solidWasteSection.approvedWasteStorageReceptacle == undefined
          ? null
          : Number(res?.solidWasteSection.approvedWasteStorageReceptacle),
      adequateWasteStorageReceptacleId:
        res?.solidWasteSection.adequateWasteStorageReceptacle == undefined
          ? null
          : Number(res?.solidWasteSection.adequateWasteStorageReceptacle),
      wasteCollectionTypeId:
        res?.solidWasteSection.wasteCollectionType == undefined
          ? null
          : Number(res?.solidWasteSection.wasteCollectionType),
      unservicedWasteDisposalId:
        res?.solidWasteSection.unservicedWasteDisposal == undefined
          ? null
          : Number(res?.solidWasteSection.unservicedWasteDisposal),
      wastePaymentEvidenceId:
        res?.solidWasteSection.wastePaymentEvidence == undefined
          ? null
          : Number(res?.solidWasteSection.wastePaymentEvidence),
      wasteContainerVolumeId:
        res?.solidWasteSection.containerVolume == undefined
          ? null
          : Number(res?.solidWasteSection.containerVolume),
      wasteProviderAccredittedId:
        res?.solidWasteSection.wasteProviderAccreditted == undefined
          ? null
          : Number(res?.solidWasteSection.wasteProviderAccreditted),
      containerNumber:
        res?.solidWasteSection.containerNumber == undefined
          ? null
          : Number(res?.solidWasteSection.containerNumber),
      wasteServicePhoneNumber: res?.solidWasteSection.wasteServicePhoneNumber,
    };

    let newLiquidWasteSection = {
      numberToiletSeats:
        res?.liquidWasteSection?.numberToiletSeats == undefined
          ? null
          : Number(res?.liquidWasteSection?.body?.numberToiletSeats),
      toiletConditionId:
        res?.liquidWasteSection?.toiletCondition == undefined
          ? null
          : Number(res?.liquidWasteSection?.toiletCondition),

      toiletDischargeId:
        res?.liquidWasteSection?.toiletDischarge == undefined
          ? null
          : Number(res?.liquidWasteSection?.toiletDischarge),
      numberUrinalCubicle:
        res?.liquidWasteSection?.numberUrinalSeats == undefined
          ? null
          : Number(res?.liquidWasteSection?.numberUrinalSeats),
      bathroomAdequacyId:
        res?.liquidWasteSection?.bathroomAdequacy == undefined
          ? null
          : Number(res?.liquidWasteSection?.bathroomAdequacy),

      stagnationEvidenceId:
        res?.liquidWasteSection?.stagnationEvidence == undefined
          ? null
          : Number(res?.liquidWasteSection?.stagnationEvidence),

      containmentEmptiedId:
        res?.liquidWasteSection?.containmentEmptied == undefined
          ? null
          : Number(res?.liquidWasteSection?.containmentEmptied),
      sewerSystemId:
        res?.liquidWasteSection?.sewerSystem == undefined
          ? null
          : Number(res?.liquidWasteSection?.sewerSystem),

      // urinalCubicleConditionId:
      //   res?.urinalCubicleConditionId == undefined
      //     ? null
      //     : Number(res?.urinalCubicleConditionId),
      toiletAdequacyId:
        res?.liquidWasteSection?.toiletAdequacy == undefined
          ? null
          : Number(res?.liquidWasteSection?.toiletAdequacy),
      urinalAdequacyId:
        res?.liquidWasteSection?.urinalAdequacy == undefined
          ? null
          : Number(res?.liquidWasteSection?.urinalAdequacy),
      urinalGenderSensivityId:
        res?.liquidWasteSection?.urinalGenderSensivity == undefined
          ? null
          : Number(res?.liquidWasteSection?.urinalGenderSensivity),

      effluentManagementReportId:
        res?.liquidWasteSection?.effluentManagementReport == undefined
          ? null
          : Number(res?.liquidWasteSection?.effluentManagementReport),

      toiletGenderSensivityId:
        res?.liquidWasteSection?.toiletGenderSensivity == undefined
          ? null
          : Number(res?.liquidWasteSection?.toiletGenderSensivity),
      toiletDisabilityFriendlyId:
        res?.liquidWasteSection?.toiletDisabilityFriendly == undefined
          ? null
          : Number(res?.liquidWasteSection?.toiletDisabilityFriendly),
      urinalDisabilityFriendlyId:
        res?.liquidWasteSection?.urinalDisabilityFriendly == undefined
          ? null
          : Number(res?.liquidWasteSection?.urinalDisabilityFriendly),

      toiletPitPositionId:
        res?.liquidWasteSection?.toiletPitPosition == undefined
          ? null
          : Number(res?.liquidWasteSection?.toiletPitPosition),

      wasteWaterContainmentId:
        res?.liquidWasteSection?.wasteWaterContainment == undefined
          ? null
          : Number(res?.liquidWasteSection?.wasteWaterContainment),
      easeYourselfWhereId:
        res?.liquidWasteSection?.easeYourselfWhere == undefined
          ? null
          : Number(res?.liquidWasteSection?.easeYourselfWhere),
      areaSeweredId:
        res?.liquidWasteSection?.areaSewered == undefined
          ? null
          : Number(res?.liquidWasteSection?.areaSewered),
      facilityConnectedSewerId:
        res?.liquidWasteSection?.facilityConnectedSewer == undefined
          ? null
          : Number(res?.liquidWasteSection?.facilityConnectedSewer),

      bathroomConditionId:
        res?.liquidWasteSection?.bathroomCondition == undefined
          ? null
          : Number(res?.liquidWasteSection?.bathroomCondition),

      drainsConditionId:
        res?.liquidWasteSection?.drainsCondition == undefined
          ? null
          : Number(res?.liquidWasteSection?.drainsCondition),
      desiltingFrequencyId:
        res?.liquidWasteSection?.desiltingFrequency == undefined
          ? null
          : Number(res?.liquidWasteSection?.desiltingFrequency),

      // rating: res?.rating == undefined ? null : Number(res?.rating),
      toiletHouseholdNumberId:
        res?.liquidWasteSection?.toiletHouseholdNumber == undefined
          ? null
          : Number(res?.liquidWasteSection?.toiletHouseholdNumber),

      separateStaffUrinalId:
        res?.liquidWasteSection?.separateStaffUrinal == undefined
          ? null
          : Number(res?.liquidWasteSection?.separateStaffUrinal),

      availToiletFaciltyMgtId:
        res?.liquidWasteSection?.availToiletFaciltyMgt == undefined
          ? null
          : Number(res?.liquidWasteSection?.availToiletFaciltyMgt),

      analCleansingMaterialMgtId:
        res?.liquidWasteSection?.analCleansingMaterialMgt == undefined
          ? null
          : Number(res?.analCleansingMaterialMgt),

      numberUrinalSeats:
        res?.liquidWasteSection?.numberUrinalSeats == undefined
          ? null
          : Number(res?.liquidWasteSection?.numberUrinalSeats),

      numberBathroomCubicle:
        res?.liquidWasteSection?.numberBathroomCubicle == undefined
          ? null
          : Number(res?.liquidWasteSection?.numberBathroomCubicle),
    };

    let newConclusionSection = {
      officerComment:
        res?.conclusionSection.officerComment == undefined
          ? null
          : res?.conclusionSection.officerComment,

      obnoxiousTradeExistId:
        res?.conclusionSection.obnoxiousTradeExist == undefined
          ? null
          : Number(res?.conclusionSection.obnoxiousTradeExist),

      obnoxiousTrade: res?.conclusionSection.obnoxiousTrade,
    };
/////////////////////////UPDATE DATA/////////////
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

    return NextResponse.json(null, { status: 200 });
  } catch (error) {
    return NextResponse.json(error, { status: 500 });
  }
}
export async function DELETE(request: Request) {
  // try {
  //   const res = await request.json();
  //   let inspectionId = res.id;
  //   // let { searchParams } = new URL(request.url);
  //   // let inspectionId: any = searchParams.get("id")?.toString();
  //   // console.log("inp=======>",searchParams);
  //   const session = await getServerSession(authOptions);
  //   // console.log("Session ", session);
  //   let userId = session?.user?.id;
  //   let surname = session?.user?.surname;
  //   let districtId = session?.user?.districtId;
  //   let regionId = session?.user?.regionId;
  //   let userLevel = session?.user?.userLevelId;
  //   await prisma.inspection.update({
  //     data: {
  //       deleted: 1,
  //     },
  //     where: {
  //       id:inspectionId,
  //     },
  //   });
  //   return NextResponse.json(null, { status: 200 });
  // } catch (error) {
  //   return NextResponse.json(error, { status: 500 });
  // }
}


