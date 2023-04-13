import prisma from "../../../../prisma/MyPrismaClient";

const post = async (req, res) => {
  try {
    let inspection = await prisma.inspection.findFirst({
      where: {
        id: req.body.id,
      },
    });
    let isPublished = inspection.isPublished;

    await prisma.inspection.update({
      data: {
        isPublished: Math.abs(isPublished - 1),
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
    let inspectionId = req.query.id;

    // const data = await prisma.basicInfoSection.findMany({
    //   where: {
    //     deleted: 0,
    //     Inspection: {
    //       id: inspectionId,
    //     },
    //   },
    //   include: {
    //     Inspection: {
    //       include: { LicencePermitSection: true },
    //     },
    //     Community: { include: { District: { include: { Region: true } } } },
    //     User: true,
    //   },

    // });

    const data = await prisma.inspection.findFirst({
      where: {
        deleted: 0,

        id: inspectionId,
      },
      include: {
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
            medicalCertificateAvailability: true,
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
        InstitutionPremisesInfoSection: {
          include: {
           
            animalSpaceAvailability:  true,
            toiletAvailability: true,
            urinalAvailability: true,
            drainsAvailability: true,
            approvedHandwashingFacilityAvailability: true,
            bathroomAvailability: true,
            protectiveClothingUsed: true
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
            effluentManagementReport: true,
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
            toiletGenderSensivity: true,
            toiletPitPosition: true,
            urinalAdequacy: true,
            urinalCubicleCondition: true,
            urinalDisabilityFriendly: true,
            urinalGenderSensivity: true,
            wasteWaterContainment: true,
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
            PremisesWasteCollection: {
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
        // User: true,
      },
    });

    console.log(data);

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
    ? console.log("PUT")
    : req.method === "DELETE"
    ? console.log("DELETE")
    : req.method === "GET"
    ? get(req, res)
    : res.status(404).send("");
};
