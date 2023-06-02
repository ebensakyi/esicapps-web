import prisma from "../../../../prisma/db";
import { getUserCookie } from "../../../../utils/cookies-manager";
import { logActivity } from "../../../../utils/Log";
import { verifyToken } from "../../../../utils/token-verifier";

const post = async (req, res) => {
  try {
    let userCookie = await getUserCookie(req, res);

    let inspection = await prisma.inspection.findFirst({
      where: {
        id: req.body.id,
      },
    });
    let isPublished = inspection.isPublished;

    await prisma.inspection.update({
      data: {
        isPublished: Math.abs(isPublished - 1),
        publishedById: Number(userCookie.user.id),
      },
      where: {
        id: req.body.id,
      },
    });
    await logActivity(`Published inspection ${req.body.id}`, userCookie.user.id);

    res.status(200).json();
  } catch (error) {
    console.log(error);
  }
};


const put = async (req, res) => {
  try {
    let userCookie = await getUserCookie(req, res);

   
    await prisma.inspection.update({
      data: {
        deleted: 1,
      },
      where: {
        id: req.body.id,
      },
    });

    res.status(200).json();
  } catch (error) {
    console.log(error);
  }
};

const get = async (req, res) => {
  try {
    let userObj = await getSession(req);

    let user = userObj.user?.id;
    await logActivity(`Visited dataview page for ${req.query.id}`, user);

    let inspectionId = req.query.id;

    const data = await prisma.inspection.findFirst({
      where: {
        deleted: 0,

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
            protectiveClothingUsed: true
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
            coldRoomCondition: true
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
            protectiveClothingUsed:true,
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
            Type: true,
            Subtype: true,
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
            Subtype: true,
            Type: true,
            kitchenAvailability: true,
            physicalStructureType: true,
            shepClubExistence: true,
            slaughterAreaAvailability: true,
            slaughterAreaCondition: true,
            soundProof: true,
            uncookedFoodStorageCondtionSafe: true,
            urinalAvailability: true,
            toiletAvailability: true,
            urinalAvailability: true,
            drainsAvailability: true,
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
            firstAidAvailability: true,
            physicalStructureType: true,
            marketPremisesType: true,
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
              include: { WasteCollectionType: true },
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

    //return res.status(200).json({ statusCode: 1, data: dataVersion });
    return res.status(200).json(data);
  } catch (error) {
    console.log("Error: " + error);
  }
};

export default (req, res) => {
  req.method === "POST"
    ? post(req, res)
    : req.method === "PUT"
    ? put(req, res)
    : req.method === "DELETE"
    ? console.log("DELETE")
    : req.method === "GET"
    ? get(req, res)
    : res.status(404).send("");
};
