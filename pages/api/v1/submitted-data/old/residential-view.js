// import prisma from "../../../../prisma/MyPrismaClient";
// import { getUserCookie } from "../../../../helpers/cookies-manager";

// const post = async (req, res) => {
//   try {
//     let userCookie = await getUserCookie(req, res);

//     let inspection = await prisma.inspection.findFirst({
//       where: {
//         id: req.body.id,
//       },
//     });
//     let isPublished = inspection.isPublished;

//     await prisma.inspection.update({
//       data: {
//         isPublished: Math.abs(isPublished - 1),
//         publishedById: Number(userCookie.user.id),
//       },
//       where: {
//         id: req.body.id,
//       },
//     });

//     res.status(200).json();
//   } catch (error) {
//     console.log(error);
//   }
// };

// const get = async (req, res) => {
//   try {
//     let inspectionId = req.query.id;

//     const data = await prisma.inspection.findFirst({
//       where: {
//         deleted: 0,

//         id: inspectionId,
//       },
//       include: {
//         ElectoralArea: true,

//         BasicInfoSection: {
//           include: {
//             Community: { include: { District: { include: { Region: true } } } },
//             RespondentDesignation: true,
//           },
//         },

//         LicencePermitSection: {
//           include: {
//             animalsPermitAvailability: true,
//             buildingPermitAvailability: true,

//             businessLicenceAvailability: true,
//             fumigationCertificateAvailability: true,
//             habitationCertificateAvailability: true,
//             medicalCertificateAvailability: true,
//             operatingLicenceAvailability: true,
//             propertyRateAvailability: true,
//             structurePermitAvailability: true,
//             gtaOperatingLicenceAvailability: true,
//             waterAnalysisReport: true,
//             regGeneralCertAvailability: true,
//             suitabilityCertificateAvailability: true,
//             pharmacyCertAvailability: true,
//           },
//         },
//         ResidentialPremisesInfoSection: {
//           include: {
//             PremisesAnimal: {
//               include: {
//                 AnimalType: true,
//               },
//             },
//             animalAvailability: true,
//             toiletAvailability: true,
//             vaccinationProof: true,
//             drainsAvailability: true,
//             approvedHandwashingFacilityAvailability: true,
//             bathroomAvailability: true,
//             animalSpaceCondition: true,
//           },
//         },

//         WaterSection: {
//           include: {
//             WaterFlowFrequency: true,
//             waterSourceCondition: true,
//             waterStorageConditionSafe: true,
//             safeDistanceWaterStorageSanitary: true,
//             PremisesDrinkingWaterSources: {
//               include: { DrinkingWaterSourceType: true },
//             },
//             PremisesWaterSources: {
//               include: { WaterSourceType: true },
//             },
//             PremisesWaterStorage: {
//               include: { WaterStorageType: true },
//             },
//             PremisesWaterSupply: {
//               include: { WaterSupplyType: true },
//             },
//             PremisesWaterTreatmentType: {
//               include: { WaterTreatmentType: true },
//             },
//           },
//         },
//         LiquidWasteSection: {
//           include: {
//             toiletAdequacy: true,
//             analCleansingMaterialMgt: true,
//             areaSewered: true,
//             availToiletFaciltyMgt: true,
//             bathroomAdequacy: true,
//             containmentEmptied: true,
//             DesiltingFrequency: true,
//             PremisesDrainType: {
//               include: {
//                 DrainType: true,
//               },
//             },
//             drainsCondition: true,
//             EaseYourselfWhere: true,
//             PremisesEffluentManagement: {
//               include: {
//                 EffluentManagement: true,
//               },
//             },
//             PremisesExcretaDisposalMethod: {
//               include: {
//                 ExcretaDisposalMethod: true,
//               },
//             },
//             PremisesExcretaContainment: {
//               include: {
//                 ExcretaContainment: true,
//               },
//             },
//             PremisesGreyWaterDisposal: {
//               include: {
//                 GreyWaterDisposal: true,
//               },
//             },
//             PremisesToiletType: {
//               include: {
//                 ToiletType: true,
//               },
//             },
//             facilityConnectedSewer: true,
//             bathroomCondition: true,
//             separateStaffUrinal: true,
//             sewerSystem: true,
//             stagnationEvidence: true,
//             toiletCondition: true,
//             toiletDisabilityFriendly: true,
//             toiletDischarge: true,
//             toiletPitPosition: true,
//           },
//         },
//         SolidWasteSection: {
//           include: {
//             wasteServiceProviderRegistration: true,
//             wasteSortingAvailability: true,
//             wasteCollectionFrequency: true,
//             approvedWasteStorageReceptacle: true,
//             adequateWasteStorageReceptacle: true,
//             WasteCollectionType: true,
//             UnservicedWasteDisposal: true,
//             wastePaymentEvidence: true,
//             ContainerVolume: true,
//             wasteProviderAccreditted: true,
//             PremisesHazardousWasteDisposal: {
//               include: { HazardousWasteDisposalMethod: true },
//             },
//             PremisesWasteCollection: {
//               include: { WasteCollectionType: true },
//             },
//             PremisesWasteReceptacle: {
//               include: { SolidWasteReceptacle: true },
//             },
//           },
//         },
//         ConclusionSection: {
//           include: {
//             obnoxiousTradeExist: true,
//             PremisesNuisanceDetected: {
//               include: { Nuisance: true },
//             },
//             PremisesActionTaken: {
//               include: { Action: true },
//             },
//           },
//         },

//         InspectionPictures: {
//           include: { FormSectionImage: true },
//         },
//       },
//     });

//     //return res.status(200).json({ statusCode: 1, data: dataVersion });
//     return res.status(200).json(data);
//   } catch (error) {
//     console.log("Error: " + error);
//   }
// };

// export default (req, res) => {
//   req.method === "POST"
//     ? post(req, res)
//     : req.method === "PUT"
//     ? console.log("PUT")
//     : req.method === "DELETE"
//     ? console.log("DELETE")
//     : req.method === "GET"
//     ? get(req, res)
//     : res.status(404).send("");
// };