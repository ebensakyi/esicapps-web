export const dynamic = "force-dynamic";

import { NextResponse } from "next/server";
import { prisma } from "@/prisma/db";
import { logActivity } from "@/utils/log";

import { getServerSession } from "next-auth";
import AWS from "aws-sdk";
import fs from "fs";
import { authOptions } from "../../auth/[...nextauth]/options";
const XLSX = require("xlsx");

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const session: any = await getServerSession(authOptions);
    const selectedDistrict =
      searchParams.get("districtId") == null || ""
        ? undefined
        : Number(searchParams.get("districtId"));

    const searchText =
      searchParams.get("searchText")?.toString() == "undefined"
        ? ""
        : searchParams.get("searchText")?.toString();

    const formId =
      searchParams.get("formId")?.toString() == "undefined"
        ? ""
        : searchParams.get("formId")?.toString();

    const published =
      searchParams.get("published")?.toString() == "undefined"
        ? ""
        : searchParams.get("published")?.toString();

    const fileName =
      searchParams.get("fileName")?.toString() == "undefined"
        ? ""
        : searchParams.get("fileName")?.toString();

    const userLevel = session?.user?.userLevelId;
    const userDistrict = session?.user?.districtId;
    const userRegion = session?.user?.regionId;

    let query = {};
    let count = 0;

    if (userLevel == 1) {
      let response = await prisma.basicInfoSection.findMany({
        where:
          searchText != ""
            ? {
                OR: [
                  {
                    Inspection: {
                      premisesCode: {
                        contains: searchText,
                        mode: "insensitive",
                      },
                    },
                  },
                  {
                    Inspection: {
                      Region: {
                        name: { contains: searchText, mode: "insensitive" },
                      },
                    },
                  },
                  {
                    Inspection: {
                      District: {
                        name: { contains: searchText, mode: "insensitive" },
                      },
                    },
                  },
                  {
                    Inspection: {
                      User: {
                        surname: { contains: searchText, mode: "insensitive" },
                      },
                    },
                  },
                  {
                    Inspection: {
                      User: {
                        otherNames: {
                          contains: searchText,
                          mode: "insensitive",
                        },
                      },
                    },
                  },
                  {
                    Inspection: {
                      Community: {
                        name: { contains: searchText, mode: "insensitive" },
                      },
                    },
                  },
                  {
                    Inspection: {
                      ElectoralArea: {
                        name: { contains: searchText, mode: "insensitive" },
                      },
                    },
                  },

                  // {
                  //   Community: {
                  //     name: { contains: searchText, mode: "insensitive" },
                  //   },
                  // },
                ],

                Inspection: {
                  isPublished: published,
                  inspectionFormId: formId,
                },
              }
            : {
                deleted: 0,
                Inspection: {
                  isPublished: published,
                  inspectionFormId: formId,
                },
              },

        include: {
          RespondentDesignation: true,
          Inspection: {
            include: {
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
            },
          },
          Community: { include: { District: { include: { Region: true } } } },
          User: true,
        },
      }as any);

      let url = await export2Excel(response);

      return NextResponse.json(url);
    } else if (userLevel == 2) {
      let response = await prisma.basicInfoSection.findMany({
        where:
          searchText != ""
            ? {
                OR: [
                  {
                    Inspection: {
                      premisesCode: {
                        contains: searchText,
                        mode: "insensitive",
                      },
                    },
                  },
                  {
                    Inspection: {
                      Region: {
                        name: { contains: searchText, mode: "insensitive" },
                      },
                    },
                  },
                  {
                    Inspection: {
                      District: {
                        name: { contains: searchText, mode: "insensitive" },
                      },
                    },
                  },
                  {
                    Inspection: {
                      User: {
                        surname: { contains: searchText, mode: "insensitive" },
                      },
                    },
                  },
                  {
                    Inspection: {
                      User: {
                        otherNames: {
                          contains: searchText,
                          mode: "insensitive",
                        },
                      },
                    },
                  },
                  {
                    Inspection: {
                      Community: {
                        name: { contains: searchText, mode: "insensitive" },
                      },
                    },
                  },
                  {
                    Inspection: {
                      ElectoralArea: {
                        name: { contains: searchText, mode: "insensitive" },
                      },
                    },
                  },

                  // {
                  //   Community: {
                  //     name: { contains: searchText, mode: "insensitive" },
                  //   },
                  // },
                ],

                Inspection: {
                  isPublished: published,
                  inspectionFormId: formId,
                },
              }
            : {
                deleted: 0,
                Inspection: {
                  isPublished: published,
                  inspectionFormId: formId,
                },
              },

        include: {
          RespondentDesignation: true,
          Inspection: {
            include: {
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
            },
          },
          Community: { include: { District: { include: { Region: true } } } },
          User: true,
        },
      }as any);

      let url = await export2Excel(response);

      return NextResponse.json(url);
    } else if (userLevel == 3) {
      const response = await prisma.basicInfoSection.findMany({
        where:
          searchText != ""
            ? {
                OR: [
                  {
                    Inspection: {
                      premisesCode: {
                        contains: searchText,
                        mode: "insensitive",
                      },
                    },
                  },
                  {
                    Inspection: {
                      Region: {
                        name: { contains: searchText, mode: "insensitive" },
                      },
                    },
                  },
                  {
                    Inspection: {
                      District: {
                        name: { contains: searchText, mode: "insensitive" },
                      },
                    },
                  },
                  {
                    Inspection: {
                      User: {
                        surname: { contains: searchText, mode: "insensitive" },
                      },
                    },
                  },
                  {
                    Inspection: {
                      User: {
                        otherNames: {
                          contains: searchText,
                          mode: "insensitive",
                        },
                      },
                    },
                  },
                  {
                    Inspection: {
                      Community: {
                        name: { contains: searchText, mode: "insensitive" },
                      },
                    },
                  },
                  {
                    Inspection: {
                      ElectoralArea: {
                        name: { contains: searchText, mode: "insensitive" },
                      },
                    },
                  },

                  // {
                  //   Community: {
                  //     name: { contains: searchText, mode: "insensitive" },
                  //   },
                  // },
                ],

                Inspection: {
                  isPublished: published,
                  inspectionFormId: formId,
                },
              }
            : {
                deleted: 0,
                Inspection: {
                  isPublished: published,
                  inspectionFormId: formId,
                },
              },

        include: {
          RespondentDesignation: true,
          Inspection: {
            include: {
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
            },
          },
          Community: { include: { District: { include: { Region: true } } } },
          User: true,
        },
      }as any);

      let url = await export2Excel(response);

      return NextResponse.json(url);
    }
  } catch (error) {
    console.error(error);
    return NextResponse.json(error);
  }
}

const export2Excel = async (data: any) => {
  try {
    let flatData = await flattenArray(data);

    const workSheet = XLSX.utils.json_to_sheet(flatData);
    const workBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workBook, workSheet, "Sheet 1");
    let filePath = `./public/temp/electoral-area.xlsx`;
    XLSX.writeFile(workBook, filePath);

    let url = await uploadFile("electoral-area.xlsx");

    return url;
  } catch (error) {
    console.log("error NextResponse=> ", error);
  }
};

const flattenArray = async (data: any) => {
  let newData = [];

  for (let i = 0; i < data?.length; i++) {
    newData?.push({
      Name: data[i]?.name,
      District: data[i]?.District?.name,

      Region: data[i]?.District?.Region?.name,
    });
  }

  return newData;
};

const uploadFile = async (fileName: any) => {
  try {
    AWS.config.update({
      accessKeyId: process.env.AWS_ACCESS_KEY,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    });

    var s3 = new AWS.S3();

    var filePath = `./public/temp/${fileName}`;

    var params = {
      Bucket: "esicapps-exports",
      Body: fs.createReadStream(filePath),
      // Key: prefix + "/" + fileName,
      Key: fileName,
    };

    let stored = await s3.upload(params).promise();

    return stored.Location;
  } catch (error) {
    console.log("Upload File Error ", error);
    return error;
  }
};
