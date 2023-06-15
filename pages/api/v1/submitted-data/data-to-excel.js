import prisma from "../../../../prisma/db";
import AWS from "aws-sdk";
import fs from "fs";
import { getSession } from "../../../../utils/session-manager";
import { logActivity } from "../../../../utils/Log";

const XLSX = require("xlsx");

const post = async (req, res) => {
  try {
    let userData = await getSession(req);

    await logActivity("Exported data to excel", userData.id);

    let published = Number(req?.body?.published) || 0;
    let searchText = req?.body?.searchText.trim()||"";

    let filterBy = req?.body?.filterBy;
    // let filterValue = req?.body?.filterValue;
    // let filterValue = req?.body?.filterValue;
    let inspectionFormId = req?.body?.inspectionFormId;

    let filterValue =
      req?.body?.filterValue == "undefined"
        ? undefined
        : Number(req?.body?.filterValue);

    let from =
      req?.body?.from == "undefined" || req?.body?.from == ""
        ? undefined
        : new Date(req?.body?.from);

    let to =
      req.body.to == "" || req?.body?.to == "undefined"
        ? undefined
        : new Date(req?.body?.to);

    let fileName = req.body.fileName;

    let filterObject = {
      isPublished: published,
      inspectionFormId: inspectionFormId,
      [filterBy]: filterValue,
    };

    let data = await prisma.basicInfoSection.findMany({
      where: searchText != ""
      ? {
          OR: [
            {
              ghanaPostGps: {
                contains: searchText,
                mode: "insensitive",
              },
            },
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
                  otherNames: { contains: searchText, mode: "insensitive" },
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
            inspectionFormId,
            [filterBy]: filterValue,

            // districtId: userLevelId != 3 ? undefined : userDistrict,
            // regionId: userLevelId != 2 ? undefined : userRegion,
          },
        }: {
        deleted: 0,
        Inspection: {
          isPublished: published,
          inspectionFormId: inspectionFormId,
          [filterBy]: filterValue,
        },
      },

      include: {
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
          },
        },
        Community: { include: { District: { include: { Region: true } } } },
        User: true,
      },
    });

    let newData = [];

    for (let i = 0; i < data?.length; i++) {
      newData?.push({
        "Inspection Id": data[i]?.inspectionId,
        "Inspection Date": data[i]?.Inspection?.createdAt,

        "Inspection Officer": `${data[i]?.User?.surname} ${data[i]?.User?.otherNames}`,
        "Premises Code": data[i]?.Inspection?.premisesCode,
        "Premises Rating": data[i]?.Inspection?.totalRating,
        Region: data[i]?.Community?.District?.Region?.name,
        District: data[i]?.Community?.District?.name,
        "Electoral Area": data[i]?.electoralArea,

        Community: data[i]?.community,
        "Ghana Post GPS": data[i]?.ghanaPostGps,
        Latitude: data[i]?.latitude,
        Longitude: data[i]?.longitude,
        Accuracy: data[i]?.accuracy,
        "Respondent Name": data[i]?.respondentName,
        "Respondent Designation": data[i]?.RespondentDesignation?.name,

        "Animals Permit Availability":
          data[i]?.Inspection?.LicencePermitSection?.animalsPermitAvailability
            ?.name,
        "Building Permit Availability":
          data[i]?.Inspection?.LicencePermitSection?.buildingPermitAvailability
            ?.name,

        "Business Licence Availability":
          data[i]?.Inspection?.LicencePermitSection?.businessLicenceAvailability
            ?.name,
        "Fumigation Certificate Availability":
          data[i]?.Inspection?.LicencePermitSection
            ?.fumigationCertificateAvailability?.name,
        "Habitation Certificate Availability":
          data[i]?.Inspection?.LicencePermitSection
            ?.habitationCertificateAvailability?.name,
        "Operating Licence Availability":
          data[i]?.Inspection?.LicencePermitSection
            ?.operatingLicenceAvailability?.name,
        "Property Rate Availability":
          data[i]?.Inspection?.LicencePermitSection?.propertyRateAvailability
            ?.name,
        "Structure Permit Availability":
          data[i]?.Inspection?.LicencePermitSection?.structurePermitAvailability
            ?.name,
        "GTA Operating Licence Availability":
          data[i]?.Inspection?.LicencePermitSection
            ?.gtaOperatingLicenceAvailability?.name,
        "Water Analysis Report":
          data[i]?.Inspection?.LicencePermitSection?.waterAnalysisReport?.name,
        "Reg General Cert Availability":
          data[i]?.Inspection?.LicencePermitSection?.regGeneralCertAvailability
            ?.name,
        "Suitability Certificate Availability":
          data[i]?.Inspection?.LicencePermitSection
            ?.suitabilityCertificateAvailability?.name,
        "Pharmacy Cert Availability":
          data[i]?.Inspection?.LicencePermitSection?.pharmacyCertAvailability
            ?.name,

        "Water Flow Frequency":
          data[i]?.Inspection?.WaterSection?.WaterFlowFrequency?.name,
        "Water Storage Condition Safe":
          data[i]?.Inspection?.WaterSection?.waterStorageConditionSafe?.name,
        "Water Source Condition":
          data[i]?.Inspection?.WaterSection?.waterSourceCondition?.name,
        "Safe Distance Water Storage Sanitary":
          data[i]?.Inspection?.WaterSection?.safeDistanceWaterStorageSanitary
            ?.name,
        "Premises Drinking Water Sources": data[
          i
        ]?.Inspection?.WaterSection?.PremisesDrinkingWaterSources?.map(
          (data) => data?.DrinkingWaterSourceType?.name
        ).toString(),
        "Premises Water Sources": data[
          i
        ]?.Inspection?.WaterSection?.PremisesWaterSources?.map(
          (data) => data?.WaterSourceType?.name
        ).toString(),
        "Premises Water Storage": data[
          i
        ]?.Inspection?.WaterSection?.PremisesWaterStorage?.map(
          (data) => data?.WaterStorage?.name
        ).toString(),
        "Premises Water Supply": data[
          i
        ]?.Inspection?.WaterSection?.PremisesWaterSupply?.map(
          (data) => data?.WaterSupplyType?.name
        ).toString(),
        "Premises Water Treatment Type": data[
          i
        ]?.Inspection?.WaterSection?.PremisesWaterTreatmentType?.map(
          (data) => data?.WaterTreatmentType?.name
        ).toString(),

        ///LIQUID  WASTE

        "Toilet Adequate":
          data[i]?.Inspection?.LiquidWasteSection?.toiletAdequacy?.name,
        "Anal Cleansing Material Mgt":
          data[i]?.Inspection?.LiquidWasteSection?.analCleansingMaterialMgt
            ?.name,
        "Area Sewered":
          data[i]?.Inspection?.LiquidWasteSection?.areaSewered?.name,
        "Toilet Facilty Mgt Available":
          data[i]?.Inspection?.LiquidWasteSection?.availToiletFaciltyMgt?.name,
        "Bathroom Adequacy":
          data[i]?.Inspection?.LiquidWasteSection?.bathroomAdequacy?.name,
        "Containment Emptied":
          data[i]?.Inspection?.LiquidWasteSection?.containmentEmptied?.name,
        "Desilting Frequency":
          data[i]?.Inspection?.LiquidWasteSection?.DesiltingFrequency?.name,
        "Drains Condition":
          data[i]?.Inspection?.LiquidWasteSection?.drainsCondition?.name,
        "Ease Yourself Where":
          data[i]?.Inspection?.LiquidWasteSection?.EaseYourselfWhere?.name,
        "Premises Effluent Management": data[
          i
        ]?.Inspection?.LiquidWasteSection?.PremisesEffluentManagement?.map(
          (data) => data?.EffluentManagement?.name
        ).toString(),

        "Premises Excreta Disposal Method": data[
          i
        ]?.Inspection?.LiquidWasteSection?.PremisesExcretaDisposalMethod?.map(
          (data) => data?.ExcretaDisposalMethod?.name
        ).toString(),
        "Premises Excreta Containment": data[
          i
        ]?.Inspection?.LiquidWasteSection?.PremisesExcretaContainment?.map(
          (data) => data?.ExcretaContainment?.name
        ).toString(),
        "Premises Grey Water Disposal": data[
          i
        ]?.Inspection?.LiquidWasteSection?.PremisesGreyWaterDisposal?.map(
          (data) => data?.GreyWaterDisposal?.name
        ).toString(),
        "Premises Toilet Type": data[
          i
        ]?.Inspection?.LiquidWasteSection?.PremisesToiletType?.map(
          (data) => data?.ToiletType?.name
        ).toString(),

        "Facility Connected Sewer":
          data[i]?.Inspection?.LiquidWasteSection?.facilityConnectedSewer?.name,
        "Bathroom Condition":
          data[i]?.Inspection?.LiquidWasteSection?.bathroomCondition?.name,
        "Separate Staff Urinal":
          data[i]?.Inspection?.LiquidWasteSection?.separateStaffUrinal?.name,
        "Sewer System":
          data[i]?.Inspection?.LiquidWasteSection?.sewerSystem?.name,
        "Stagnation Evidence":
          data[i]?.Inspection?.LiquidWasteSection?.stagnationEvidence?.name,
        "Toilet Condition":
          data[i]?.Inspection?.LiquidWasteSection?.toiletCondition?.name,
        "Toilet Disability Friendly":
          data[i]?.Inspection?.LiquidWasteSection?.toiletDisabilityFriendly
            ?.name,
        "Toilet Discharge":
          data[i]?.Inspection?.LiquidWasteSection?.toiletDischarge?.name,
        "Toilet Pit Position":
          data[i]?.Inspection?.LiquidWasteSection?.toiletPitPosition?.name,

        ///SOLID WASTE
        "Waste Service Provider Registration":
          data[i]?.Inspection?.SolidWasteSection
            ?.wasteServiceProviderRegistration?.name,
        "Waste Sorting Availability":
          data[i]?.Inspection?.SolidWasteSection?.wasteSortingAvailability
            ?.name,
        "Waste Collection Frequency":
          data[i]?.Inspection?.SolidWasteSection?.wasteCollectionFrequency
            ?.name,
        "Approved Waste Storage Receptacle":
          data[i]?.Inspection?.SolidWasteSection?.approvedWasteStorageReceptacle
            ?.name,
        "Adequate Waste Storage Receptacle":
          data[i]?.Inspection?.SolidWasteSection?.adequateWasteStorageReceptacle
            ?.name,
        "Waste Collection Type":
          data[i]?.Inspection?.SolidWasteSection?.WasteCollectionType?.name,
        "Unserviced Waste Disposal":
          data[i]?.Inspection?.SolidWasteSection?.UnservicedWasteDisposal?.name,
        "Waste Payment Evidence":
          data[i]?.Inspection?.SolidWasteSection?.wastePaymentEvidence?.name,
        "Container Volume":
          data[i]?.Inspection?.SolidWasteSection?.ContainerVolume?.name,
        "Waste Provider Accreditted":
          data[i]?.Inspection?.SolidWasteSection?.wasteProviderAccreditted
            ?.name,

        PremisesHazardousWasteDisposal: data[
          i
        ]?.Inspection?.LiquidWasteSection?.PremisesHazardousWasteDisposal?.map(
          (data) => data?.HazardousWasteDisposalMethod?.name
        ).toString(),
        PremisesWasteReceptacle: data[
          i
        ]?.Inspection?.LiquidWasteSection?.PremisesWasteReceptacle?.map(
          (data) => data?.SolidWasteReceptacle?.name
        ).toString(),

        ///CONCLUSION
        "Obnoxious Trade ":
          data[i]?.Inspection?.ConclusionSection?.obnoxiousTrade,
        "Officer Comment":
          data[i]?.Inspection?.ConclusionSection?.officerComment,
        Nuisance: data[
          i
        ]?.Inspection?.ConclusionSection?.PremisesNuisanceDetected?.map(
          (data) => data?.Nuisance?.name
        ).toString(),
        "Premises Action Taken": data[
          i
        ]?.Inspection?.ConclusionSection?.PremisesActionTaken?.map(
          (data) => data?.Action?.name
        ).toString(),
      });
    }

    console.log(newData);

    const workSheet = XLSX.utils.json_to_sheet(newData);
    const workBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workBook, workSheet, "Sheet 1");
    let filePath = `./public/temp/${fileName}`;
    XLSX.writeFile(workBook, filePath);

    let url = await uploadFile(fileName);

    res.status(200).json(url);
  } catch (error) {
    console.log(error);
  }
};

const uploadFile = async (fileName) => {
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
    console.log("STORE ", stored.Location);

    return stored.Location;
  } catch (error) {
    console.log("Upload File Error ", error);
    return error;
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
