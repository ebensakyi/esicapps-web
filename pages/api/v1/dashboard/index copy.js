import prisma from "../../../../prisma/db";
import { getSession } from "../../../../utils/session-manager";

const post = async (req, res) => {
  try {
  } catch (error) {}
};

const get = async (req, res) => {
  let userData = await getSession(req);
  let filterBy; //= req?.query?.filterBy;
  let filterValue; // = Number(req?.query?.filterValue);

  let userLevel = userData?.userLevelId;
  let from = new Date(req?.query?.from);

  let to = new Date(req?.query?.to);
  let allInspectionSummary,
    baselineInspectionSummary,
    reinspectionInspectionSummary,
    waterSourceTypeSummary,
    healthEducActionTakenCount,
    noticeServedActionTakenCount,
    criminalSummonsActionTakenCount,
    actionTakenLabel,
    actionTakenCount,
    waterSourceTypeCountArray,
    waterSourceTypeLabelArray,
    sanitaryWaterSourceCondition,
    insanitaryWaterSourceCondition,
    waterSourceConditionCountArray,
    waterSourceConditionLabelArray,
    sanitaryWaterStorageCondition,
    insanitaryWaterStorageCondition,
    waterStorageConditionCountArray,
    waterStorageConditionLabelArray,
    baselineCount,
    reInspectionCount,
    followUpCount,
    publishedCount,
    unPublishedCount,
    usersCount,
    sanitationReportCount,
    safeWaterSourceCount,
    unsafeWaterSourceCount,
    baselineCountArray,
    baselineFormsArray,
    reinspectionCountArray,
    fupRes,
    fupEatery,
    fupHealth,
    fupHosp,
    fupInstitution,
    fupIndustry,
    fupMarket,
    fupSanitation,
    toiletAvailabilityCount1,
    toiletAvailabilityCount2,
    toiletAvailabilityCount3,
    toiletAvailabilityCount4,
    toiletAvailabilityCount5,
    toiletAvailabilityCount6,
    toiletAvailabilityCount7,
    toiletAvailabilityCount8,
    toiletInavailabilityCount1,
    toiletInavailabilityCount2,
    toiletInavailabilityCount3,
    toiletInavailabilityCount4,
    toiletInavailabilityCount5,
    toiletInavailabilityCount6,
    toiletInavailabilityCount7,
    toiletInavailabilityCount8,
    toiletAdequacy,
    toiletInadequacy,
    toiletConditionSafe,
    toiletConditionUnsafe,
    wasteCollectorRegistered,
    wasteCollectorNotRegistered,
    wasteSorted,
    wasteNotSorted,
    wasteReceptacleApproved,
    wasteReceptacleUnapproved,
    toiletAvailabilityCount,
    toiletInavailabilityCount,
    toiletAvailabilityArray,
    wasteCollectorArray,
    wasteSortingArray,
    toiletAdequacyArray,
    toiletConditionArray,
    wasteReceptacleArray,
    followUpCountArray,
    reinspectionFormArray;

  if (userLevel == 1) {
    filterBy = req?.query?.filterBy;
    filterValue = Number(req?.query?.filterValue);
  }

  if (userLevel == 2) {
    let regionId = userData?.regionId;

    filterBy =
      req?.query?.filterBy == "undefined" ? "regionId" : req?.query?.filterBy;
    filterValue = Number(req?.query?.filterValue) || regionId;
  }

  if (userLevel == 3) {
    let districtId = userData?.districtId;

    filterBy = req?.query?.filterBy || "districtId";
    filterValue = Number(req?.query?.filterValue) || districtId;
  }

  //try {
   

    if (filterBy == "undefined") {
      allInspectionSummary =
        await prisma.$queryRawUnsafe`SELECT  "InspectionForm"."name", COUNT("Inspection"."id") AS "inspectionCount", 
              COUNT("Inspection"."inspectionTypeId")  filter (where "Inspection"."inspectionTypeId" = 1 ) as "baselineCount",
              COUNT("Inspection"."inspectionTypeId")  filter (where "Inspection"."inspectionTypeId" = 2 ) as "reinspectionCount",

              COUNT("Inspection"."isPublished")  filter (where "Inspection"."isPublished" = 1 ) as "publishedCount",
              COUNT("Inspection"."isPublished")  filter (where "Inspection"."isPublished" = 0 ) as "unPublishedCount"

              FROM "InspectionForm" 
              LEFT JOIN "Inspection" ON "Inspection"."inspectionFormId" = "InspectionForm"."id"
              LEFT JOIN "InspectionType" ON "Inspection"."inspectionTypeId" = "InspectionType"."id"

              GROUP BY "InspectionForm"."name" , "Inspection"."inspectionTypeId"
              ORDER BY "InspectionForm"."name"
            `;

      baselineInspectionSummary =
        await prisma.$queryRaw`SELECT  "InspectionForm"."name", COUNT("Inspection"."id") AS "inspectionCount",
      COUNT("Inspection"."inspectionTypeId")  filter (where "Inspection"."inspectionTypeId" = 1) as "baselineCount"
          FROM "InspectionForm" 
          LEFT JOIN "Inspection"  ON "Inspection"."inspectionFormId" = "InspectionForm"."id"
          WHERE "Inspection"."inspectionTypeId"=1 
          GROUP BY "InspectionForm"."name" 
          ORDER BY "InspectionForm"."name"`;

      reinspectionInspectionSummary =
        await prisma.$queryRaw`SELECT  "InspectionForm"."name", COUNT("Inspection"."id") AS "inspectionCount",
            COUNT("Inspection"."inspectionTypeId")  filter (where "Inspection"."inspectionTypeId" = 2) as "reinspectionCount"
              FROM "InspectionForm" 
              LEFT JOIN "Inspection"  ON "Inspection"."inspectionFormId" = "InspectionForm"."id"
              WHERE "Inspection"."inspectionTypeId"=2 
              GROUP BY "InspectionForm"."name" 
              ORDER BY "InspectionForm"."name"`;

      waterSourceTypeSummary =
        await prisma.$queryRaw`SELECT  "PremisesWaterSources"."waterSourceId","WaterSourceType"."name", COUNT("WaterSection"."id") AS "sourceCount"

    FROM "WaterSection"
    LEFT JOIN "PremisesWaterSources"  ON "PremisesWaterSources"."waterSectionId" = "WaterSection"."id"
    LEFT JOIN "WaterSourceType"  ON "PremisesWaterSources"."waterSourceId" = "WaterSourceType"."id"
    LEFT JOIN "Inspection"  ON "Inspection"."id" = "WaterSection"."inspectionId"

    WHERE "WaterSourceType"."id" IS NOT NULL
    GROUP BY "WaterSourceType"."name", "PremisesWaterSources"."waterSourceId" `;

      healthEducActionTakenCount = await prisma.premisesActionTaken.count({
        where: {
          actionId: 1,
       
        },
      });
      noticeServedActionTakenCount = await prisma.premisesActionTaken.count({
        where: {
          actionId: 2,
         
        },
      });
      criminalSummonsActionTakenCount = await prisma.premisesActionTaken.count({
        where: {
          actionId: 3,
         
        },
      });

      actionTakenLabel = [
        "Health Education",
        "Notice Served",
        "Criminal Summoons",
      ];
      actionTakenCount = [
        healthEducActionTakenCount,
        noticeServedActionTakenCount,
        criminalSummonsActionTakenCount,
      ];

      waterSourceTypeCountArray = waterSourceTypeSummary.map((i) =>
        toJson(i.sourceCount)
      );
      waterSourceTypeLabelArray = waterSourceTypeSummary.map((n) =>
        toJson(n.name)
      );

      sanitaryWaterSourceCondition = await prisma.waterSection.count({
        where: {
          waterSourceConditionId: 1,
         
        },
      });

      insanitaryWaterSourceCondition = await prisma.waterSection.count({
        where: {
          waterSourceConditionId: 2,
         
        },
      });

      waterSourceConditionCountArray = [
        sanitaryWaterSourceCondition,
        insanitaryWaterSourceCondition,
      ];
      waterSourceConditionLabelArray = ["Sanitary", "Insanitary"];

      sanitaryWaterStorageCondition = await prisma.waterSection.count({
        where: {
          waterStorageConditionId: 1,
          
        },
      });

      insanitaryWaterStorageCondition = await prisma.waterSection.count({
        where: {
          waterStorageConditionId: 2,
         
        },
      });

      waterStorageConditionCountArray = [
        sanitaryWaterStorageCondition,
        insanitaryWaterStorageCondition,
      ];
      waterStorageConditionLabelArray = ["Sanitary", "Insanitary"];

      baselineCount = await prisma.inspection.count({
        where: { inspectionTypeId: 1,  },
      });
      reInspectionCount = await prisma.inspection.count({
        where: { inspectionTypeId: 2,  },
      });
      followUpCount = await prisma.inspection.count({
        where: { inspectionTypeId: 3 },
      });

      publishedCount = await prisma.inspection.count({
        where: { isPublished: 1,  },
      });

      unPublishedCount = await prisma.inspection.count({
        where: { isPublished: 0,},
      });

      usersCount = await prisma.user.count({
        where: { deleted: 0 },
      });

      sanitationReportCount = await prisma.sanitationReport.count({
        where: { deleted: 0 },
      });

      safeWaterSourceCount = await prisma.waterSection.count({
        where: {
          deleted: 0,
          waterSourceConditionId: 1,
         
        },
      });
      unsafeWaterSourceCount = await prisma.waterSection.count({
        where: {
          deleted: 0,
          waterSourceConditionId: 2,
        
        },
      });

      baselineCountArray = baselineInspectionSummary.map((i) =>
        toJson(i.baselineCount)
      );
      baselineFormsArray = baselineInspectionSummary.map((n) => toJson(n.name));

      reinspectionCountArray = reinspectionInspectionSummary.map((i) =>
        toJson(i.reinspectionCount)
      );
      reinspectionFormArray = reinspectionInspectionSummary.map((n) =>
        toJson(n.name)
      );

      fupRes = await prisma.followUpInspection.count({
        where: {
          deleted: 0,
          inspectionFormId: 1,
        },
      });
      fupEatery = await prisma.followUpInspection.count({
        where: {
          deleted: 0,
          inspectionFormId: 2,
        },
      });
      fupHealth = await prisma.followUpInspection.count({
        where: {
          deleted: 0,
          inspectionFormId: 3,
        },
      });
      fupHosp = await prisma.followUpInspection.count({
        where: {
          deleted: 0,
          inspectionFormId: 4,
        },
      });
      fupInstitution = await prisma.followUpInspection.count({
        where: {
          deleted: 0,
          inspectionFormId: 5,
        },
      });
      fupIndustry = await prisma.followUpInspection.count({
        where: {
          deleted: 0,
          inspectionFormId: 6,
        },
      });

      fupMarket = await prisma.followUpInspection.count({
        where: {
          deleted: 0,
          inspectionFormId: 7,
        },
      });
      fupSanitation = await prisma.followUpInspection.count({
        where: {
          deleted: 0,
          inspectionFormId: 8,
        },
      });

      followUpCountArray = [
        fupRes,
        fupEatery,
        fupHealth,
        fupHosp,
        fupInstitution,
        fupIndustry,
        fupMarket,
        fupSanitation,
      ];
      

      toiletAvailabilityCount1 =
        await prisma.residentialPremisesInfoSection.count({
          where: {
            toiletAvailabilityId: 1,
          
          },
        });
      toiletAvailabilityCount2 = await prisma.eateryPremisesInfoSection.count({
        where: {
          toiletAvailabilityId: 1,
        
        },
      });
      toiletAvailabilityCount3 = await prisma.healthPremisesInfoSection.count({
        where: {
          toiletAvailabilityId: 1,
       
        },
      });
      toiletAvailabilityCount4 =
        await prisma.hospitalityPremisesInfoSection.count({
          where: {
            toiletAvailabilityId: 1,
           
          },
        });
      toiletAvailabilityCount5 = await prisma.sanitaryPremisesInfoSection.count(
        {
          where: {
            toiletAvailabilityId: 1,
            
          },
        }
      );
      toiletAvailabilityCount6 = await prisma.marketPremisesInfoSection.count({
        where: {
          toiletAvailabilityId: 1,
         
        },
      });
      toiletAvailabilityCount7 =
        await prisma.institutionPremisesInfoSection.count({
          where: {
            toiletAvailabilityId: 1,
           
          },
        });
      toiletAvailabilityCount8 = await prisma.industryPremisesInfoSection.count(
        {
          where: {
            toiletAvailabilityId: 1,
           
          },
        }
      );
      toiletInavailabilityCount1 =
        await prisma.residentialPremisesInfoSection.count({
          where: {
            toiletAvailabilityId: 2,
           
          },
        });
      toiletInavailabilityCount2 = await prisma.eateryPremisesInfoSection.count(
        {
          where: {
            toiletAvailabilityId: 2,
           
          },
        }
      );
      toiletInavailabilityCount3 = await prisma.healthPremisesInfoSection.count(
        {
          where: {
            toiletAvailabilityId: 2,
           
          },
        }
      );
      toiletInavailabilityCount4 =
        await prisma.hospitalityPremisesInfoSection.count({
          where: {
            toiletAvailabilityId: 2,
          
          },
        });
      toiletInavailabilityCount5 =
        await prisma.sanitaryPremisesInfoSection.count({
          where: {
            toiletAvailabilityId: 2,
          
          },
        });
      toiletInavailabilityCount6 = await prisma.marketPremisesInfoSection.count(
        {
          where: {
            toiletAvailabilityId: 2,
          
          },
        }
      );
      toiletInavailabilityCount7 =
        await prisma.institutionPremisesInfoSection.count({
          where: {
            toiletAvailabilityId: 2,
           
          },
        });
      toiletInavailabilityCount8 =
        await prisma.industryPremisesInfoSection.count({
          where: {
            toiletAvailabilityId: 2,
           
          },
        });

      toiletAvailabilityCount =
        toiletAvailabilityCount1 +
        toiletAvailabilityCount2 +
        toiletAvailabilityCount3 +
        toiletAvailabilityCount4 +
        toiletAvailabilityCount5 +
        toiletAvailabilityCount6 +
        toiletAvailabilityCount7 +
        toiletAvailabilityCount8;

      toiletInavailabilityCount =
        toiletInavailabilityCount1 +
        toiletInavailabilityCount2 +
        toiletInavailabilityCount3 +
        toiletInavailabilityCount4 +
        toiletInavailabilityCount5 +
        toiletInavailabilityCount6 +
        toiletInavailabilityCount7 +
        toiletInavailabilityCount8;

      toiletAvailabilityArray = [
        toiletAvailabilityCount,
        toiletInavailabilityCount,
      ];

      toiletAdequacy = await prisma.liquidWasteSection.count({
        where: {
          toiletAdequacyId: 1,
         
        },
      });

      toiletInadequacy = await prisma.liquidWasteSection.count({
        where: {
          toiletAdequacyId: 2,
         
        },
      });

      toiletConditionSafe = await prisma.liquidWasteSection.count({
        where: {
          toiletConditionId: 1,
        
        },
      });

      toiletConditionUnsafe = await prisma.liquidWasteSection.count({
        where: {
          toiletConditionId: 2,
        
        },
      });

      wasteCollectorRegistered = await prisma.solidWasteSection.count({
        where: {
          wasteServiceProviderRegistrationId: 1,
        
        },
      });

      wasteCollectorNotRegistered = await prisma.solidWasteSection.count({
        where: {
          wasteServiceProviderRegistrationId: 2,
         
        },
      });

      wasteSorted = await prisma.solidWasteSection.count({
        where: {
          wasteSortingAvailabilityId: 1,
       
        },
      });

      wasteNotSorted = await prisma.solidWasteSection.count({
        where: {
          wasteSortingAvailabilityId: 2,
        
        },
      });

      wasteReceptacleApproved = await prisma.solidWasteSection.count({
        where: {
          approvedWasteStorageReceptacleId: 1,
        
        },
      });

      wasteReceptacleUnapproved = await prisma.solidWasteSection.count({
        where: {
          approvedWasteStorageReceptacleId: 2,
         
        },
      });

      wasteCollectorArray = [
        wasteCollectorRegistered,
        wasteCollectorNotRegistered,
      ];
      wasteSortingArray = [wasteSorted, wasteNotSorted];
      wasteReceptacleArray = [
        wasteReceptacleApproved,
        wasteReceptacleUnapproved,
      ];

      toiletAdequacyArray = [toiletAdequacy, toiletInadequacy];
      toiletConditionArray = [toiletConditionSafe, toiletConditionUnsafe];
    }

    if (filterBy == "regionId") {
      allInspectionSummary =
        await prisma.$queryRawUnsafe`SELECT  "InspectionForm"."name", COUNT("Inspection"."id") AS "inspectionCount", 
  COUNT("Inspection"."inspectionTypeId")  filter (where "Inspection"."inspectionTypeId" = 1 ) as "baselineCount",
  COUNT("Inspection"."inspectionTypeId")  filter (where "Inspection"."inspectionTypeId" = 2 ) as "reinspectionCount",

  COUNT("Inspection"."isPublished")  filter (where "Inspection"."isPublished" = 1 ) as "publishedCount",
  COUNT("Inspection"."isPublished")  filter (where "Inspection"."isPublished" = 0 ) as "unPublishedCount"

  FROM "InspectionForm" 
  LEFT JOIN "Inspection" ON "Inspection"."inspectionFormId" = "InspectionForm"."id"
  LEFT JOIN "InspectionType" ON "Inspection"."inspectionTypeId" = "InspectionType"."id"
  WHERE "Inspection"."regionId" = ${filterValue} 

  GROUP BY "InspectionForm"."name" , "Inspection"."inspectionTypeId"
  ORDER BY "InspectionForm"."name"
`;
      baselineInspectionSummary =
        await prisma.$queryRaw`SELECT  "InspectionForm"."name", COUNT("Inspection"."id") AS "inspectionCount",
      COUNT("Inspection"."inspectionTypeId")  filter (where "Inspection"."inspectionTypeId" = 1) as "baselineCount"
          FROM "InspectionForm" 
          LEFT JOIN "Inspection"  ON "Inspection"."inspectionFormId" = "InspectionForm"."id"
          WHERE "Inspection"."inspectionTypeId"=1  AND  "Inspection"."regionId" = ${filterValue} 
          GROUP BY "InspectionForm"."name" 
          ORDER BY "InspectionForm"."name"`;

      reinspectionInspectionSummary =
        await prisma.$queryRaw`SELECT  "InspectionForm"."name", COUNT("Inspection"."id") AS "inspectionCount",
            COUNT("Inspection"."inspectionTypeId")  filter (where "Inspection"."inspectionTypeId" = 2) as "reinspectionCount"
              FROM "InspectionForm" 
              LEFT JOIN "Inspection"  ON "Inspection"."inspectionFormId" = "InspectionForm"."id"
              WHERE "Inspection"."inspectionTypeId"=2  AND  "Inspection"."regionId" = ${filterValue} 
              GROUP BY "InspectionForm"."name" 
              ORDER BY "InspectionForm"."name"`;

      waterSourceTypeSummary =
        await prisma.$queryRaw`SELECT  "PremisesWaterSources"."waterSourceId","WaterSourceType"."name", COUNT("WaterSection"."id") AS "sourceCount"

    FROM "WaterSection"
    LEFT JOIN "PremisesWaterSources"  ON "PremisesWaterSources"."waterSectionId" = "WaterSection"."id"
    LEFT JOIN "WaterSourceType"  ON "PremisesWaterSources"."waterSourceId" = "WaterSourceType"."id"
    LEFT JOIN "Inspection"  ON "Inspection"."id" = "WaterSection"."inspectionId"

    WHERE "WaterSourceType"."id" IS NOT NULL  "Inspection"."regionId" = ${filterValue} 
    GROUP BY "WaterSourceType"."name", "PremisesWaterSources"."waterSourceId" `;

      healthEducActionTakenCount = await prisma.premisesActionTaken.count({
        where: {
          actionId: 1,
          ConclusionSection: {
            Inspection: {
             regionId: filterValue,
            },
          },
        },
      });
      noticeServedActionTakenCount = await prisma.premisesActionTaken.count({
        where: {
          actionId: 2,
          ConclusionSection: {
            Inspection: {
              regionId: filterValue,
            },
          },
        },
      });
      criminalSummonsActionTakenCount = await prisma.premisesActionTaken.count({
        where: {
          actionId: 3,
          ConclusionSection: {
            Inspection: {
              regionId: filterValue,
            },
          },
        },
      });

      actionTakenLabel = [
        "Health Education",
        "Notice Served",
        "Criminal Summoons",
      ];
      actionTakenCount = [
        healthEducActionTakenCount,
        noticeServedActionTakenCount,
        criminalSummonsActionTakenCount,
      ];

      waterSourceTypeCountArray = waterSourceTypeSummary.map((i) =>
        toJson(i.sourceCount)
      );
      waterSourceTypeLabelArray = waterSourceTypeSummary.map((n) =>
        toJson(n.name)
      );

      sanitaryWaterSourceCondition = await prisma.waterSection.count({
        where: {
          waterSourceConditionId: 1,
          Inspection: {
            regionId: filterValue,
          },
        },
      });

      insanitaryWaterSourceCondition = await prisma.waterSection.count({
        where: {
          waterSourceConditionId: 2,
          Inspection: {
            regionId: filterValue,
          },
        },
      });

      waterSourceConditionCountArray = [
        sanitaryWaterSourceCondition,
        insanitaryWaterSourceCondition,
      ];
      waterSourceConditionLabelArray = ["Sanitary", "Insanitary"];

      sanitaryWaterStorageCondition = await prisma.waterSection.count({
        where: {
          waterStorageConditionId: 1,
          Inspection: {
            regionId: filterValue,
          },
        },
      });

      insanitaryWaterStorageCondition = await prisma.waterSection.count({
        where: {
          waterStorageConditionId: 2,
          Inspection: {
            regionId: filterValue,
          },
        },
      });

      waterStorageConditionCountArray = [
        sanitaryWaterStorageCondition,
        insanitaryWaterStorageCondition,
      ];
      waterStorageConditionLabelArray = ["Sanitary", "Insanitary"];

      baselineCount = await prisma.inspection.count({
        where: { inspectionTypeId: 1, regionId: filterValue },
      });
      reInspectionCount = await prisma.inspection.count({
        where: { inspectionTypeId: 2, regionId: filterValue },
      });
      followUpCount = await prisma.inspection.count({
        where: { inspectionTypeId: 3 ,regionId: filterValue},
      });

      publishedCount = await prisma.inspection.count({
        where: { isPublished: 1, regionId: filterValue },
      });

      unPublishedCount = await prisma.inspection.count({
        where: { isPublished: 0, regionId: filterValue },
      });

      usersCount = await prisma.user.count({
        where: { deleted: 0 ,regionId: filterValue },
      });

      sanitationReportCount = await prisma.sanitationReport.count({
        where: { deleted: 0 ,regionId: filterValue },
      });

      safeWaterSourceCount = await prisma.waterSection.count({
        where: {
          deleted: 0,
          waterSourceConditionId: 1,
          Inspection: {
            regionId: filterValue,
          },
        },
      });
      unsafeWaterSourceCount = await prisma.waterSection.count({
        where: {
          deleted: 0,
          waterSourceConditionId: 2,
          Inspection: {
            regionId: filterValue,
          },
        },
      });

      baselineCountArray = baselineInspectionSummary.map((i) =>
        toJson(i.baselineCount)
      );
      baselineFormsArray = baselineInspectionSummary.map((n) => toJson(n.name));

      reinspectionCountArray = reinspectionInspectionSummary.map((i) =>
        toJson(i.reinspectionCount)
      );
       reinspectionFormArray = reinspectionInspectionSummary.map((n) =>
        toJson(n.name)
      );

      fupRes = await prisma.followUpInspection.count({
        where: {
          deleted: 0,
          inspectionFormId: 1,
          regionId:filterValue,
        },
      });
      fupEatery = await prisma.followUpInspection.count({
        where: {
          deleted: 0,
          inspectionFormId: 2,
          regionId:filterValue,
        },
      });
      fupHealth = await prisma.followUpInspection.count({
        where: {
          deleted: 0,
          inspectionFormId: 3,
          regionId:filterValue,
        },
      });
      fupHosp = await prisma.followUpInspection.count({
        where: {
          deleted: 0,
          inspectionFormId: 4,
          regionId:filterValue,
        },
      });
      fupInstitution = await prisma.followUpInspection.count({
        where: {
          deleted: 0,
          inspectionFormId: 5,
          regionId:filterValue,
        },
      });
      fupIndustry = await prisma.followUpInspection.count({
        where: {
          deleted: 0,
          inspectionFormId: 6,
          regionId:filterValue,
        },
      });

      fupMarket = await prisma.followUpInspection.count({
        where: {
          deleted: 0,
          inspectionFormId: 7,
          regionId:filterValue,
        },
      });
      fupSanitation = await prisma.followUpInspection.count({
        where: {
          deleted: 0,
          inspectionFormId: 8,
          regionId:filterValue,
        },
      });

      followUpCountArray = [
        fupRes,
        fupEatery,
        fupHealth,
        fupHosp,
        fupInstitution,
        fupIndustry,
        fupMarket,
        fupSanitation,
      ];
      // let followUpFormArray = followupInspectionSummary.map((n) =>
      //   toJson(n.name)
      // );

      toiletAvailabilityCount1 =
        await prisma.residentialPremisesInfoSection.count({
          where: {
            toiletAvailabilityId: 1,
            Inspection: {
              regionId: filterValue,
            },
          },
        });
      toiletAvailabilityCount2 = await prisma.eateryPremisesInfoSection.count({
        where: {
          toiletAvailabilityId: 1,
          Inspection: {
            regionId: filterValue,
          },
        },
      });
      toiletAvailabilityCount3 = await prisma.healthPremisesInfoSection.count({
        where: {
          toiletAvailabilityId: 1,
          Inspection: {
            regionId: filterValue,
          },
        },
      });
      toiletAvailabilityCount4 =
        await prisma.hospitalityPremisesInfoSection.count({
          where: {
            toiletAvailabilityId: 1,
            Inspection: {
              regionId: filterValue,
            },
          },
        });
      toiletAvailabilityCount5 = await prisma.sanitaryPremisesInfoSection.count(
        {
          where: {
            toiletAvailabilityId: 1,
            Inspection: {
              regionId: filterValue,
            },
          },
        }
      );
      toiletAvailabilityCount6 = await prisma.marketPremisesInfoSection.count({
        where: {
          toiletAvailabilityId: 1,
          Inspection: {
            regionId: filterValue,
          },
        },
      });
      toiletAvailabilityCount7 =
        await prisma.institutionPremisesInfoSection.count({
          where: {
            toiletAvailabilityId: 1,
            Inspection: {
              regionId: filterValue,
            },
          },
        });
      toiletAvailabilityCount8 = await prisma.industryPremisesInfoSection.count(
        {
          where: {
            toiletAvailabilityId: 1,
            Inspection: {
              regionId: filterValue,
            },
          },
        }
      );
      toiletInavailabilityCount1 =
        await prisma.residentialPremisesInfoSection.count({
          where: {
            toiletAvailabilityId: 2,
            Inspection: {
              regionId: filterValue,
            },
          },
        });
      toiletInavailabilityCount2 = await prisma.eateryPremisesInfoSection.count(
        {
          where: {
            toiletAvailabilityId: 2,
            Inspection: {
              regionId: filterValue,
            },
          },
        }
      );
      toiletInavailabilityCount3 = await prisma.healthPremisesInfoSection.count(
        {
          where: {
            toiletAvailabilityId: 2,
            Inspection: {
              regionId: filterValue,
            },
          },
        }
      );
      toiletInavailabilityCount4 =
        await prisma.hospitalityPremisesInfoSection.count({
          where: {
            toiletAvailabilityId: 2,
            Inspection: {
              regionId: filterValue,
            },
          },
        });
      toiletInavailabilityCount5 =
        await prisma.sanitaryPremisesInfoSection.count({
          where: {
            toiletAvailabilityId: 2,
            Inspection: {
              regionId: filterValue,
            },
          },
        });
      toiletInavailabilityCount6 = await prisma.marketPremisesInfoSection.count(
        {
          where: {
            toiletAvailabilityId: 2,
            Inspection: {
              regionId: filterValue,
            },
          },
        }
      );
      toiletInavailabilityCount7 =
        await prisma.institutionPremisesInfoSection.count({
          where: {
            toiletAvailabilityId: 2,
            Inspection: {
              regionId: filterValue,
            },
          },
        });
      toiletInavailabilityCount8 =
        await prisma.industryPremisesInfoSection.count({
          where: {
            toiletAvailabilityId: 2,
            Inspection: {
              regionId: filterValue,
            },
          },
        });

      toiletAvailabilityCount =
        toiletAvailabilityCount1 +
        toiletAvailabilityCount2 +
        toiletAvailabilityCount3 +
        toiletAvailabilityCount4 +
        toiletAvailabilityCount5 +
        toiletAvailabilityCount6 +
        toiletAvailabilityCount7 +
        toiletAvailabilityCount8;

      toiletInavailabilityCount =
        toiletInavailabilityCount1 +
        toiletInavailabilityCount2 +
        toiletInavailabilityCount3 +
        toiletInavailabilityCount4 +
        toiletInavailabilityCount5 +
        toiletInavailabilityCount6 +
        toiletInavailabilityCount7 +
        toiletInavailabilityCount8;

      toiletAvailabilityArray = [
        toiletAvailabilityCount,
        toiletInavailabilityCount,
      ];

      toiletAdequacy = await prisma.liquidWasteSection.count({
        where: {
          toiletAdequacyId: 1,
          Inspection: {
            regionId: filterValue,
          },
        },
      });

      toiletInadequacy = await prisma.liquidWasteSection.count({
        where: {
          toiletAdequacyId: 2,
          Inspection: {
            regionId: filterValue,
          },
        },
      });

      toiletConditionSafe = await prisma.liquidWasteSection.count({
        where: {
          toiletConditionId: 1,
          Inspection: {
            regionId: filterValue,
          },
        },
      });

      toiletConditionUnsafe = await prisma.liquidWasteSection.count({
        where: {
          toiletConditionId: 2,
          Inspection: {
            regionId: filterValue,
          },
        },
      });

      wasteCollectorRegistered = await prisma.solidWasteSection.count({
        where: {
          wasteServiceProviderRegistrationId: 1,
          Inspection: {
            regionId: filterValue,
          },
        },
      });

      wasteCollectorNotRegistered = await prisma.solidWasteSection.count({
        where: {
          wasteServiceProviderRegistrationId: 2,
          Inspection: {
            regionId: filterValue,
          },
        },
      });

      wasteSorted = await prisma.solidWasteSection.count({
        where: {
          wasteSortingAvailabilityId: 1,
          Inspection: {
            regionId: filterValue,
          },
        },
      });

      wasteNotSorted = await prisma.solidWasteSection.count({
        where: {
          wasteSortingAvailabilityId: 2,
          Inspection: {
            regionId: filterValue,
          },
        },
      });

      wasteReceptacleApproved = await prisma.solidWasteSection.count({
        where: {
          approvedWasteStorageReceptacleId: 1,
          Inspection: {
            regionId: filterValue,
          },
        },
      });

      wasteReceptacleUnapproved = await prisma.solidWasteSection.count({
        where: {
          approvedWasteStorageReceptacleId: 2,
          Inspection: {
            regionId: filterValue,
          },
        },
      });

      wasteCollectorArray = [
        wasteCollectorRegistered,
        wasteCollectorNotRegistered,
      ];
      wasteSortingArray = [wasteSorted, wasteNotSorted];
      wasteReceptacleArray = [
        wasteReceptacleApproved,
        wasteReceptacleUnapproved,
      ];

      toiletAdequacyArray = [toiletAdequacy, toiletInadequacy];
      toiletConditionArray = [toiletConditionSafe, toiletConditionUnsafe];
    }

    if (filterBy == "districtId") {
      allInspectionSummary =
        await prisma.$queryRawUnsafe`SELECT  "InspectionForm"."name", COUNT("Inspection"."id") AS "inspectionCount", 
  COUNT("Inspection"."inspectionTypeId")  filter (where "Inspection"."inspectionTypeId" = 1 ) as "baselineCount",
  COUNT("Inspection"."inspectionTypeId")  filter (where "Inspection"."inspectionTypeId" = 2 ) as "reinspectionCount",

  COUNT("Inspection"."isPublished")  filter (where "Inspection"."isPublished" = 1 ) as "publishedCount",
  COUNT("Inspection"."isPublished")  filter (where "Inspection"."isPublished" = 0 ) as "unPublishedCount"

  FROM "InspectionForm" 
  LEFT JOIN "Inspection" ON "Inspection"."inspectionFormId" = "InspectionForm"."id"
  LEFT JOIN "InspectionType" ON "Inspection"."inspectionTypeId" = "InspectionType"."id"

  WHERE "Inspection"."districtId" = ${filterValue}


  GROUP BY "InspectionForm"."name" , "Inspection"."inspectionTypeId"
  ORDER BY "InspectionForm"."name"
`;

      baselineInspectionSummary =
        await prisma.$queryRaw`SELECT  "InspectionForm"."name", COUNT("Inspection"."id") AS "inspectionCount",
      COUNT("Inspection"."inspectionTypeId")  filter (where "Inspection"."inspectionTypeId" = 1) as "baselineCount"
          FROM "InspectionForm" 
          LEFT JOIN "Inspection"  ON "Inspection"."inspectionFormId" = "InspectionForm"."id"
          WHERE "Inspection"."inspectionTypeId"=1 AND "Inspection"."districtId" = ${filterValue}
          GROUP BY "InspectionForm"."name" 
          ORDER BY "InspectionForm"."name"`;

      reinspectionInspectionSummary =
        await prisma.$queryRaw`SELECT  "InspectionForm"."name", COUNT("Inspection"."id") AS "inspectionCount",
            COUNT("Inspection"."inspectionTypeId")  filter (where "Inspection"."inspectionTypeId" = 2) as "reinspectionCount"
              FROM "InspectionForm" 
              LEFT JOIN "Inspection"  ON "Inspection"."inspectionFormId" = "InspectionForm"."id"
              WHERE "Inspection"."inspectionTypeId"=2 AND "Inspection"."districtId" = ${filterValue}
              GROUP BY "InspectionForm"."name" 
              ORDER BY "InspectionForm"."name"`;

      waterSourceTypeSummary =
        await prisma.$queryRaw`SELECT  "PremisesWaterSources"."waterSourceId","WaterSourceType"."name", COUNT("WaterSection"."id") AS "sourceCount"

    FROM "WaterSection"
    LEFT JOIN "PremisesWaterSources"  ON "PremisesWaterSources"."waterSectionId" = "WaterSection"."id"
    LEFT JOIN "WaterSourceType"  ON "PremisesWaterSources"."waterSourceId" = "WaterSourceType"."id"
    LEFT JOIN "Inspection"  ON "Inspection"."id" = "WaterSection"."inspectionId"

    WHERE "WaterSourceType"."id" IS NOT NULL AND "Inspection"."districtId" = ${filterValue}
    GROUP BY "WaterSourceType"."name", "PremisesWaterSources"."waterSourceId" `;


healthEducActionTakenCount = await prisma.premisesActionTaken.count({
  where: {
    actionId: 1,
    ConclusionSection: {
      Inspection: {
        districtId: filterValue,
      },
    },
  },
});
noticeServedActionTakenCount = await prisma.premisesActionTaken.count({
  where: {
    actionId: 2,
    ConclusionSection: {
      Inspection: {
        districtId: filterValue,
      },
    },
  },
});
criminalSummonsActionTakenCount = await prisma.premisesActionTaken.count({
  where: {
    actionId: 3,
    ConclusionSection: {
      Inspection: {
        districtId: filterValue,
      },
    },
  },
});

actionTakenLabel = [
  "Health Education",
  "Notice Served",
  "Criminal Summoons",
];
actionTakenCount = [
  healthEducActionTakenCount,
  noticeServedActionTakenCount,
  criminalSummonsActionTakenCount,
];

waterSourceTypeCountArray = waterSourceTypeSummary.map((i) =>
  toJson(i.sourceCount)
);
waterSourceTypeLabelArray = waterSourceTypeSummary.map((n) =>
  toJson(n.name)
);

sanitaryWaterSourceCondition = await prisma.waterSection.count({
  where: {
    waterSourceConditionId: 1,
    Inspection: {
      districtId: filterValue,
    },
  },
});

insanitaryWaterSourceCondition = await prisma.waterSection.count({
  where: {
    waterSourceConditionId: 2,
    Inspection: {
      districtId: filterValue,
    },
  },
});

waterSourceConditionCountArray = [
  sanitaryWaterSourceCondition,
  insanitaryWaterSourceCondition,
];
waterSourceConditionLabelArray = ["Sanitary", "Insanitary"];

sanitaryWaterStorageCondition = await prisma.waterSection.count({
  where: {
    waterStorageConditionId: 1,
    Inspection: {
      districtId: filterValue,
    },
  },
});

insanitaryWaterStorageCondition = await prisma.waterSection.count({
  where: {
    waterStorageConditionId: 2,
    Inspection: {
      districtId: filterValue,
    },
  },
});

waterStorageConditionCountArray = [
  sanitaryWaterStorageCondition,
  insanitaryWaterStorageCondition,
];
waterStorageConditionLabelArray = ["Sanitary", "Insanitary"];

baselineCount = await prisma.inspection.count({
  where: { inspectionTypeId: 1, districtId: filterValue },
});
reInspectionCount = await prisma.inspection.count({
  where: { inspectionTypeId: 2, districtId: filterValue },
});
followUpCount = await prisma.inspection.count({
  where: { inspectionTypeId: 3 ,districtId: filterValue},
});

publishedCount = await prisma.inspection.count({
  where: { isPublished: 1, districtId: filterValue },
});

unPublishedCount = await prisma.inspection.count({
  where: { isPublished: 0, districtId: filterValue },
});

usersCount = await prisma.user.count({
  where: { deleted: 0 ,districtId: filterValue },
});

sanitationReportCount = await prisma.sanitationReport.count({
  where: { deleted: 0 ,districtId: filterValue },
});

safeWaterSourceCount = await prisma.waterSection.count({
  where: {
    deleted: 0,
    waterSourceConditionId: 1,
    Inspection: {
      districtId: filterValue,
    },
  },
});
unsafeWaterSourceCount = await prisma.waterSection.count({
  where: {
    deleted: 0,
    waterSourceConditionId: 2,
    Inspection: {
      districtId: filterValue,
    },
  },
});

baselineCountArray = baselineInspectionSummary.map((i) =>
  toJson(i.baselineCount)
);
baselineFormsArray = baselineInspectionSummary.map((n) => toJson(n.name));

reinspectionCountArray = reinspectionInspectionSummary.map((i) =>
  toJson(i.reinspectionCount)
);
 reinspectionFormArray = reinspectionInspectionSummary.map((n) =>
  toJson(n.name)
);

fupRes = await prisma.followUpInspection.count({
  where: {
    deleted: 0,
    inspectionFormId: 1,
    districtId:filterValue,
  },
});
fupEatery = await prisma.followUpInspection.count({
  where: {
    deleted: 0,
    inspectionFormId: 2,
    districtId:filterValue,
  },
});
fupHealth = await prisma.followUpInspection.count({
  where: {
    deleted: 0,
    inspectionFormId: 3,
    districtId:filterValue,
  },
});
fupHosp = await prisma.followUpInspection.count({
  where: {
    deleted: 0,
    inspectionFormId: 4,
    districtId:filterValue,
  },
});
fupInstitution = await prisma.followUpInspection.count({
  where: {
    deleted: 0,
    inspectionFormId: 5,
    districtId:filterValue,
  },
});
fupIndustry = await prisma.followUpInspection.count({
  where: {
    deleted: 0,
    inspectionFormId: 6,
    districtId:filterValue,
  },
});

fupMarket = await prisma.followUpInspection.count({
  where: {
    deleted: 0,
    inspectionFormId: 7,
    districtId:filterValue,
  },
});
fupSanitation = await prisma.followUpInspection.count({
  where: {
    deleted: 0,
    inspectionFormId: 8,
    districtId:filterValue,
  },
});

followUpCountArray = [
  fupRes,
  fupEatery,
  fupHealth,
  fupHosp,
  fupInstitution,
  fupIndustry,
  fupMarket,
  fupSanitation,
];
// let followUpFormArray = followupInspectionSummary.map((n) =>
//   toJson(n.name)
// );

toiletAvailabilityCount1 =
  await prisma.residentialPremisesInfoSection.count({
    where: {
      toiletAvailabilityId: 1,
      Inspection: {
        districtId: filterValue,
      },
    },
  });
toiletAvailabilityCount2 = await prisma.eateryPremisesInfoSection.count({
  where: {
    toiletAvailabilityId: 1,
    Inspection: {
      districtId: filterValue,
    },
  },
});
toiletAvailabilityCount3 = await prisma.healthPremisesInfoSection.count({
  where: {
    toiletAvailabilityId: 1,
    Inspection: {
      districtId: filterValue,
    },
  },
});
toiletAvailabilityCount4 =
  await prisma.hospitalityPremisesInfoSection.count({
    where: {
      toiletAvailabilityId: 1,
      Inspection: {
        regionId: filterValue,
      },
    },
  });
toiletAvailabilityCount5 = await prisma.sanitaryPremisesInfoSection.count(
  {
    where: {
      toiletAvailabilityId: 1,
      Inspection: {
        districtId: filterValue,
      },
    },
  }
);
toiletAvailabilityCount6 = await prisma.marketPremisesInfoSection.count({
  where: {
    toiletAvailabilityId: 1,
    Inspection: {
      districtId: filterValue,
    },
  },
});
toiletAvailabilityCount7 =
  await prisma.institutionPremisesInfoSection.count({
    where: {
      toiletAvailabilityId: 1,
      Inspection: {
        districtId: filterValue,
      },
    },
  });
toiletAvailabilityCount8 = await prisma.industryPremisesInfoSection.count(
  {
    where: {
      toiletAvailabilityId: 1,
      Inspection: {
        districtId: filterValue,
      },
    },
  }
);
toiletInavailabilityCount1 =
  await prisma.residentialPremisesInfoSection.count({
    where: {
      toiletAvailabilityId: 2,
      Inspection: {
        districtId: filterValue,
      },
    },
  });
toiletInavailabilityCount2 = await prisma.eateryPremisesInfoSection.count(
  {
    where: {
      toiletAvailabilityId: 2,
      Inspection: {
        districtId: filterValue,
      },
    },
  }
);
toiletInavailabilityCount3 = await prisma.healthPremisesInfoSection.count(
  {
    where: {
      toiletAvailabilityId: 2,
      Inspection: {
        districtId: filterValue,
      },
    },
  }
);
toiletInavailabilityCount4 =
  await prisma.hospitalityPremisesInfoSection.count({
    where: {
      toiletAvailabilityId: 2,
      Inspection: {
        districtId: filterValue,
      },
    },
  });
toiletInavailabilityCount5 =
  await prisma.sanitaryPremisesInfoSection.count({
    where: {
      toiletAvailabilityId: 2,
      Inspection: {
        districtId: filterValue,
      },
    },
  });
toiletInavailabilityCount6 = await prisma.marketPremisesInfoSection.count(
  {
    where: {
      toiletAvailabilityId: 2,
      Inspection: {
        districtId: filterValue,
      },
    },
  }
);
toiletInavailabilityCount7 =
  await prisma.institutionPremisesInfoSection.count({
    where: {
      toiletAvailabilityId: 2,
      Inspection: {
        districtId: filterValue,
      },
    },
  });
toiletInavailabilityCount8 =
  await prisma.industryPremisesInfoSection.count({
    where: {
      toiletAvailabilityId: 2,
      Inspection: {
        districtId: filterValue,
      },
    },
  });

toiletAvailabilityCount =
  toiletAvailabilityCount1 +
  toiletAvailabilityCount2 +
  toiletAvailabilityCount3 +
  toiletAvailabilityCount4 +
  toiletAvailabilityCount5 +
  toiletAvailabilityCount6 +
  toiletAvailabilityCount7 +
  toiletAvailabilityCount8;

toiletInavailabilityCount =
  toiletInavailabilityCount1 +
  toiletInavailabilityCount2 +
  toiletInavailabilityCount3 +
  toiletInavailabilityCount4 +
  toiletInavailabilityCount5 +
  toiletInavailabilityCount6 +
  toiletInavailabilityCount7 +
  toiletInavailabilityCount8;

toiletAvailabilityArray = [
  toiletAvailabilityCount,
  toiletInavailabilityCount,
];

toiletAdequacy = await prisma.liquidWasteSection.count({
  where: {
    toiletAdequacyId: 1,
    Inspection: {
      districtId: filterValue,
    },
  },
});

toiletInadequacy = await prisma.liquidWasteSection.count({
  where: {
    toiletAdequacyId: 2,
    Inspection: {
      districtId: filterValue,
    },
  },
});

toiletConditionSafe = await prisma.liquidWasteSection.count({
  where: {
    toiletConditionId: 1,
    Inspection: {
      districtId: filterValue,
    },
  },
});

toiletConditionUnsafe = await prisma.liquidWasteSection.count({
  where: {
    toiletConditionId: 2,
    Inspection: {
      districtId: filterValue,
    },
  },
});

wasteCollectorRegistered = await prisma.solidWasteSection.count({
  where: {
    wasteServiceProviderRegistrationId: 1,
    Inspection: {
      districtId: filterValue,
    },
  },
});

wasteCollectorNotRegistered = await prisma.solidWasteSection.count({
  where: {
    wasteServiceProviderRegistrationId: 2,
    Inspection: {
      districtId: filterValue,
    },
  },
});

wasteSorted = await prisma.solidWasteSection.count({
  where: {
    wasteSortingAvailabilityId: 1,
    Inspection: {
      districtId: filterValue,
    },
  },
});

wasteNotSorted = await prisma.solidWasteSection.count({
  where: {
    wasteSortingAvailabilityId: 2,
    Inspection: {
      districtId: filterValue,
    },
  },
});

wasteReceptacleApproved = await prisma.solidWasteSection.count({
  where: {
    approvedWasteStorageReceptacleId: 1,
    Inspection: {
      districtId: filterValue,
    },
  },
});

wasteReceptacleUnapproved = await prisma.solidWasteSection.count({
  where: {
    approvedWasteStorageReceptacleId: 2,
    Inspection: {
      districtId: filterValue,
    },
  },
});

wasteCollectorArray = [
  wasteCollectorRegistered,
  wasteCollectorNotRegistered,
];
wasteSortingArray = [wasteSorted, wasteNotSorted];
wasteReceptacleArray = [
  wasteReceptacleApproved,
  wasteReceptacleUnapproved,
];

toiletAdequacyArray = [toiletAdequacy, toiletInadequacy];
toiletConditionArray = [toiletConditionSafe, toiletConditionUnsafe];


    }

    if (filterBy == "electoralAreaId") {
      allInspectionSummary =
        await prisma.$queryRawUnsafe`SELECT  "InspectionForm"."name", COUNT("Inspection"."id") AS "inspectionCount", 
  COUNT("Inspection"."inspectionTypeId")  filter (where "Inspection"."inspectionTypeId" = 1 ) as "baselineCount",
  COUNT("Inspection"."inspectionTypeId")  filter (where "Inspection"."inspectionTypeId" = 2 ) as "reinspectionCount",

  COUNT("Inspection"."isPublished")  filter (where "Inspection"."isPublished" = 1 ) as "publishedCount",
  COUNT("Inspection"."isPublished")  filter (where "Inspection"."isPublished" = 0 ) as "unPublishedCount"

  FROM "InspectionForm" 
  LEFT JOIN "Inspection" ON "Inspection"."inspectionFormId" = "InspectionForm"."id"
  LEFT JOIN "InspectionType" ON "Inspection"."inspectionTypeId" = "InspectionType"."id"

  WHERE "Inspection"."electoralAreaId" = ${filterValue}


  GROUP BY "InspectionForm"."name" , "Inspection"."inspectionTypeId"
  ORDER BY "InspectionForm"."name"
`;

      baselineInspectionSummary =
        await prisma.$queryRaw`SELECT  "InspectionForm"."name", COUNT("Inspection"."id") AS "inspectionCount",
      COUNT("Inspection"."inspectionTypeId")  filter (where "Inspection"."inspectionTypeId" = 1) as "baselineCount"
          FROM "InspectionForm" 
          LEFT JOIN "Inspection"  ON "Inspection"."inspectionFormId" = "InspectionForm"."id"
          WHERE "Inspection"."inspectionTypeId"=1  AND "Inspection"."electoralAreaId" = ${filterValue}
          GROUP BY "InspectionForm"."name" 
          ORDER BY "InspectionForm"."name"`;

      reinspectionInspectionSummary =
        await prisma.$queryRaw`SELECT  "InspectionForm"."name", COUNT("Inspection"."id") AS "inspectionCount",
            COUNT("Inspection"."inspectionTypeId")  filter (where "Inspection"."inspectionTypeId" = 2) as "reinspectionCount"
              FROM "InspectionForm" 
              LEFT JOIN "Inspection"  ON "Inspection"."inspectionFormId" = "InspectionForm"."id"
              WHERE "Inspection"."inspectionTypeId"=2  AND "Inspection"."electoralAreaId" = ${filterValue}
              GROUP BY "InspectionForm"."name" 
              ORDER BY "InspectionForm"."name"`;

      waterSourceTypeSummary =
        await prisma.$queryRaw`SELECT  "PremisesWaterSources"."waterSourceId","WaterSourceType"."name", COUNT("WaterSection"."id") AS "sourceCount"

    FROM "WaterSection"
    LEFT JOIN "PremisesWaterSources"  ON "PremisesWaterSources"."waterSectionId" = "WaterSection"."id"
    LEFT JOIN "WaterSourceType"  ON "PremisesWaterSources"."waterSourceId" = "WaterSourceType"."id"
    LEFT JOIN "Inspection"  ON "Inspection"."id" = "WaterSection"."inspectionId"

    WHERE "WaterSourceType"."id" IS NOT NULL AND "Inspection"."electoralAreaId" = ${filterValue}
    GROUP BY "WaterSourceType"."name", "PremisesWaterSources"."waterSourceId" `;




healthEducActionTakenCount = await prisma.premisesActionTaken.count({
  where: {
    actionId: 1,
    ConclusionSection: {
      Inspection: {
        electoralAreaId: filterValue,
      },
    },
  },
});
noticeServedActionTakenCount = await prisma.premisesActionTaken.count({
  where: {
    actionId: 2,
    ConclusionSection: {
      Inspection: {
        electoralAreaId: filterValue,
      },
    },
  },
});
criminalSummonsActionTakenCount = await prisma.premisesActionTaken.count({
  where: {
    actionId: 3,
    ConclusionSection: {
      Inspection: {
        electoralAreaId: filterValue,
      },
    },
  },
});

actionTakenLabel = [
  "Health Education",
  "Notice Served",
  "Criminal Summoons",
];
actionTakenCount = [
  healthEducActionTakenCount,
  noticeServedActionTakenCount,
  criminalSummonsActionTakenCount,
];

waterSourceTypeCountArray = waterSourceTypeSummary.map((i) =>
  toJson(i.sourceCount)
);
waterSourceTypeLabelArray = waterSourceTypeSummary.map((n) =>
  toJson(n.name)
);

sanitaryWaterSourceCondition = await prisma.waterSection.count({
  where: {
    waterSourceConditionId: 1,
    Inspection: {
      electoralAreaId: filterValue,
    },
  },
});

insanitaryWaterSourceCondition = await prisma.waterSection.count({
  where: {
    waterSourceConditionId: 2,
    Inspection: {
      electoralAreaId: filterValue,
    },
  },
});

waterSourceConditionCountArray = [
  sanitaryWaterSourceCondition,
  insanitaryWaterSourceCondition,
];
waterSourceConditionLabelArray = ["Sanitary", "Insanitary"];

sanitaryWaterStorageCondition = await prisma.waterSection.count({
  where: {
    waterStorageConditionId: 1,
    Inspection: {
      electoralAreaId: filterValue,
    },
  },
});

insanitaryWaterStorageCondition = await prisma.waterSection.count({
  where: {
    waterStorageConditionId: 2,
    Inspection: {
      electoralAreaId: filterValue,
    },
  },
});

waterStorageConditionCountArray = [
  sanitaryWaterStorageCondition,
  insanitaryWaterStorageCondition,
];
waterStorageConditionLabelArray = ["Sanitary", "Insanitary"];

baselineCount = await prisma.inspection.count({
  where: { inspectionTypeId: 1,         electoralAreaId: filterValue,
  },
});
reInspectionCount = await prisma.inspection.count({
  where: { inspectionTypeId: 2,         electoralAreaId: filterValue,
  },
});
followUpCount = await prisma.inspection.count({
  where: { inspectionTypeId: 3 ,        electoralAreaId: filterValue,
  },
});

publishedCount = await prisma.inspection.count({
  where: { isPublished: 1,         electoralAreaId: filterValue,
  },
});

unPublishedCount = await prisma.inspection.count({
  where: { isPublished: 0,         electoralAreaId: filterValue,
  },
});

usersCount = await prisma.user.count({
  where: { deleted: 0 ,        electoralAreaId: filterValue,
  },
});

sanitationReportCount = await prisma.sanitationReport.count({
  where: { deleted: 0 ,        electoralAreaId: filterValue,
  },
});

safeWaterSourceCount = await prisma.waterSection.count({
  where: {
    deleted: 0,
    waterSourceConditionId: 1,
    Inspection: {
      electoralAreaId: filterValue,
    },
  },
});
unsafeWaterSourceCount = await prisma.waterSection.count({
  where: {
    deleted: 0,
    waterSourceConditionId: 2,
    Inspection: {
      electoralAreaId: filterValue,
    },
  },
});

baselineCountArray = baselineInspectionSummary.map((i) =>
  toJson(i.baselineCount)
);
baselineFormsArray = baselineInspectionSummary.map((n) => toJson(n.name));

reinspectionCountArray = reinspectionInspectionSummary.map((i) =>
  toJson(i.reinspectionCount)
);
 reinspectionFormArray = reinspectionInspectionSummary.map((n) =>
  toJson(n.name)
);

fupRes = await prisma.followUpInspection.count({
  where: {
    deleted: 0,
    inspectionFormId: 1,
    electoralAreaId: filterValue,
  },
});
fupEatery = await prisma.followUpInspection.count({
  where: {
    deleted: 0,
    inspectionFormId: 2,
    electoralAreaId: filterValue,
  },
});
fupHealth = await prisma.followUpInspection.count({
  where: {
    deleted: 0,
    inspectionFormId: 3,
    electoralAreaId: filterValue,
  },
});
fupHosp = await prisma.followUpInspection.count({
  where: {
    deleted: 0,
    inspectionFormId: 4,
    electoralAreaId: filterValue,
  },
});
fupInstitution = await prisma.followUpInspection.count({
  where: {
    deleted: 0,
    inspectionFormId: 5,
    electoralAreaId: filterValue,
  },
});
fupIndustry = await prisma.followUpInspection.count({
  where: {
    deleted: 0,
    inspectionFormId: 6,
    electoralAreaId: filterValue,
  },
});

fupMarket = await prisma.followUpInspection.count({
  where: {
    deleted: 0,
    inspectionFormId: 7,
    electoralAreaId: filterValue,
  },
});
fupSanitation = await prisma.followUpInspection.count({
  where: {
    deleted: 0,
    inspectionFormId: 8,
    electoralAreaId: filterValue,
  },
});

followUpCountArray = [
  fupRes,
  fupEatery,
  fupHealth,
  fupHosp,
  fupInstitution,
  fupIndustry,
  fupMarket,
  fupSanitation,
];
// let followUpFormArray = followupInspectionSummary.map((n) =>
//   toJson(n.name)
// );

toiletAvailabilityCount1 =
  await prisma.residentialPremisesInfoSection.count({
    where: {
      toiletAvailabilityId: 1,
      Inspection: {
        electoralAreaId: filterValue,
      },
    },
  });
toiletAvailabilityCount2 = await prisma.eateryPremisesInfoSection.count({
  where: {
    toiletAvailabilityId: 1,
    Inspection: {
      electoralAreaId: filterValue,
    },
  },
});
toiletAvailabilityCount3 = await prisma.healthPremisesInfoSection.count({
  where: {
    toiletAvailabilityId: 1,
    Inspection: {
      electoralAreaId: filterValue,
    },
  },
});
toiletAvailabilityCount4 =
  await prisma.hospitalityPremisesInfoSection.count({
    where: {
      toiletAvailabilityId: 1,
      Inspection: {
        regionId: filterValue,
      },
    },
  });
toiletAvailabilityCount5 = await prisma.sanitaryPremisesInfoSection.count(
  {
    where: {
      toiletAvailabilityId: 1,
      Inspection: {
        electoralAreaId: filterValue,
      },
    },
  }
);
toiletAvailabilityCount6 = await prisma.marketPremisesInfoSection.count({
  where: {
    toiletAvailabilityId: 1,
    Inspection: {
      electoralAreaId: filterValue,
    },
  },
});
toiletAvailabilityCount7 =
  await prisma.institutionPremisesInfoSection.count({
    where: {
      toiletAvailabilityId: 1,
      Inspection: {
        electoralAreaId: filterValue,
      },
    },
  });
toiletAvailabilityCount8 = await prisma.industryPremisesInfoSection.count(
  {
    where: {
      toiletAvailabilityId: 1,
      Inspection: {
        electoralAreaId: filterValue,
      },
    },
  }
);
toiletInavailabilityCount1 =
  await prisma.residentialPremisesInfoSection.count({
    where: {
      toiletAvailabilityId: 2,
      Inspection: {
        electoralAreaId: filterValue,
      },
    },
  });
toiletInavailabilityCount2 = await prisma.eateryPremisesInfoSection.count(
  {
    where: {
      toiletAvailabilityId: 2,
      Inspection: {
        electoralAreaId: filterValue,
      },
    },
  }
);
toiletInavailabilityCount3 = await prisma.healthPremisesInfoSection.count(
  {
    where: {
      toiletAvailabilityId: 2,
      Inspection: {
        electoralAreaId: filterValue,
      },
    },
  }
);
toiletInavailabilityCount4 =
  await prisma.hospitalityPremisesInfoSection.count({
    where: {
      toiletAvailabilityId: 2,
      Inspection: {
        electoralAreaId: filterValue,
      },
    },
  });
toiletInavailabilityCount5 =
  await prisma.sanitaryPremisesInfoSection.count({
    where: {
      toiletAvailabilityId: 2,
      Inspection: {
        electoralAreaId: filterValue,
      },
    },
  });
toiletInavailabilityCount6 = await prisma.marketPremisesInfoSection.count(
  {
    where: {
      toiletAvailabilityId: 2,
      Inspection: {
        electoralAreaId: filterValue,
      },
    },
  }
);
toiletInavailabilityCount7 =
  await prisma.institutionPremisesInfoSection.count({
    where: {
      toiletAvailabilityId: 2,
      Inspection: {
        electoralAreaId: filterValue,
      },
    },
  });
toiletInavailabilityCount8 =
  await prisma.industryPremisesInfoSection.count({
    where: {
      toiletAvailabilityId: 2,
      Inspection: {
        electoralAreaId: filterValue,
      },
    },
  });

toiletAvailabilityCount =
  toiletAvailabilityCount1 +
  toiletAvailabilityCount2 +
  toiletAvailabilityCount3 +
  toiletAvailabilityCount4 +
  toiletAvailabilityCount5 +
  toiletAvailabilityCount6 +
  toiletAvailabilityCount7 +
  toiletAvailabilityCount8;

toiletInavailabilityCount =
  toiletInavailabilityCount1 +
  toiletInavailabilityCount2 +
  toiletInavailabilityCount3 +
  toiletInavailabilityCount4 +
  toiletInavailabilityCount5 +
  toiletInavailabilityCount6 +
  toiletInavailabilityCount7 +
  toiletInavailabilityCount8;

toiletAvailabilityArray = [
  toiletAvailabilityCount,
  toiletInavailabilityCount,
];

toiletAdequacy = await prisma.liquidWasteSection.count({
  where: {
    toiletAdequacyId: 1,
    Inspection: {
      electoralAreaId: filterValue,
    },
  },
});

toiletInadequacy = await prisma.liquidWasteSection.count({
  where: {
    toiletAdequacyId: 2,
    Inspection: {
      electoralAreaId: filterValue,
    },
  },
});

toiletConditionSafe = await prisma.liquidWasteSection.count({
  where: {
    toiletConditionId: 1,
    Inspection: {
      electoralAreaId: filterValue,
    },
  },
});

toiletConditionUnsafe = await prisma.liquidWasteSection.count({
  where: {
    toiletConditionId: 2,
    Inspection: {
      electoralAreaId: filterValue,
    },
  },
});

wasteCollectorRegistered = await prisma.solidWasteSection.count({
  where: {
    wasteServiceProviderRegistrationId: 1,
    Inspection: {
      electoralAreaId: filterValue,
    },
  },
});

wasteCollectorNotRegistered = await prisma.solidWasteSection.count({
  where: {
    wasteServiceProviderRegistrationId: 2,
    Inspection: {
      electoralAreaId: filterValue,
    },
  },
});

wasteSorted = await prisma.solidWasteSection.count({
  where: {
    wasteSortingAvailabilityId: 1,
    Inspection: {
      electoralAreaId: filterValue,
    },
  },
});

wasteNotSorted = await prisma.solidWasteSection.count({
  where: {
    wasteSortingAvailabilityId: 2,
    Inspection: {
      electoralAreaId: filterValue,
    },
  },
});

wasteReceptacleApproved = await prisma.solidWasteSection.count({
  where: {
    approvedWasteStorageReceptacleId: 1,
    Inspection: {
      electoralAreaId: filterValue,
    },
  },
});

wasteReceptacleUnapproved = await prisma.solidWasteSection.count({
  where: {
    approvedWasteStorageReceptacleId: 2,
    Inspection: {
      electoralAreaId: filterValue,
    },
  },
});

wasteCollectorArray = [
  wasteCollectorRegistered,
  wasteCollectorNotRegistered,
];
wasteSortingArray = [wasteSorted, wasteNotSorted];
wasteReceptacleArray = [
  wasteReceptacleApproved,
  wasteReceptacleUnapproved,
];

toiletAdequacyArray = [toiletAdequacy, toiletInadequacy];
toiletConditionArray = [toiletConditionSafe, toiletConditionUnsafe];


    }

    if (filterBy == "communityId") {
      allInspectionSummary =
        await prisma.$queryRawUnsafe`SELECT  "InspectionForm"."name", COUNT("Inspection"."id") AS "inspectionCount", 
  COUNT("Inspection"."inspectionTypeId")  filter (where "Inspection"."inspectionTypeId" = 1 ) as "baselineCount",
  COUNT("Inspection"."inspectionTypeId")  filter (where "Inspection"."inspectionTypeId" = 2 ) as "reinspectionCount",

  COUNT("Inspection"."isPublished")  filter (where "Inspection"."isPublished" = 1 ) as "publishedCount",
  COUNT("Inspection"."isPublished")  filter (where "Inspection"."isPublished" = 0 ) as "unPublishedCount"

  FROM "InspectionForm" 
  LEFT JOIN "Inspection" ON "Inspection"."inspectionFormId" = "InspectionForm"."id"
  LEFT JOIN "InspectionType" ON "Inspection"."inspectionTypeId" = "InspectionType"."id"

  WHERE "Inspection"."communityId" = ${filterValue} 


  GROUP BY "InspectionForm"."name" , "Inspection"."inspectionTypeId"
  ORDER BY "InspectionForm"."name"
`;

      baselineInspectionSummary =
        await prisma.$queryRaw`SELECT  "InspectionForm"."name", COUNT("Inspection"."id") AS "inspectionCount",
      COUNT("Inspection"."inspectionTypeId")  filter (where "Inspection"."inspectionTypeId" = 1) as "baselineCount"
          FROM "InspectionForm" 
          LEFT JOIN "Inspection"  ON "Inspection"."inspectionFormId" = "InspectionForm"."id"
          WHERE "Inspection"."inspectionTypeId"=1 AND   "Inspection"."communityId" = ${filterValue}
          GROUP BY "InspectionForm"."name" 
          ORDER BY "InspectionForm"."name"`;

      reinspectionInspectionSummary =
        await prisma.$queryRaw`SELECT  "InspectionForm"."name", COUNT("Inspection"."id") AS "inspectionCount",
            COUNT("Inspection"."inspectionTypeId")  filter (where "Inspection"."inspectionTypeId" = 2) as "reinspectionCount"
              FROM "InspectionForm" 
              LEFT JOIN "Inspection"  ON "Inspection"."inspectionFormId" = "InspectionForm"."id"
              WHERE "Inspection"."inspectionTypeId"=2 AND   "Inspection"."communityId" = ${filterValue}
              GROUP BY "InspectionForm"."name" 
              ORDER BY "InspectionForm"."name"`;

      waterSourceTypeSummary =
        await prisma.$queryRaw`SELECT  "PremisesWaterSources"."waterSourceId","WaterSourceType"."name", COUNT("WaterSection"."id") AS "sourceCount"

    FROM "WaterSection"
    LEFT JOIN "PremisesWaterSources"  ON "PremisesWaterSources"."waterSectionId" = "WaterSection"."id"
    LEFT JOIN "WaterSourceType"  ON "PremisesWaterSources"."waterSourceId" = "WaterSourceType"."id"
    LEFT JOIN "Inspection"  ON "Inspection"."id" = "WaterSection"."inspectionId"

    WHERE "WaterSourceType"."id" IS NOT NULL AND   "Inspection"."communityId" = ${filterValue}
    GROUP BY "WaterSourceType"."name", "PremisesWaterSources"."waterSourceId" `;

      healthEducActionTakenCount = await prisma.premisesActionTaken.count({
        where: {
          actionId: 1,
          ConclusionSection: {
            Inspection: {
              communityId: filterValue,
            },
          },
        },
      });
      noticeServedActionTakenCount = await prisma.premisesActionTaken.count({
        where: {
          actionId: 2,
          ConclusionSection: {
            Inspection: {
              communityId: filterValue,
            },
          },
        },
      });
      criminalSummonsActionTakenCount = await prisma.premisesActionTaken.count({
        where: {
          actionId: 3,
          ConclusionSection: {
            Inspection: {
              communityId: filterValue,
            },
          },
        },
      });

      actionTakenLabel = [
        "Health Education",
        "Notice Served",
        "Criminal Summoons",
      ];
      actionTakenCount = [
        healthEducActionTakenCount,
        noticeServedActionTakenCount,
        criminalSummonsActionTakenCount,
      ];

      waterSourceTypeCountArray = waterSourceTypeSummary.map((i) =>
        toJson(i.sourceCount)
      );
      waterSourceTypeLabelArray = waterSourceTypeSummary.map((n) =>
        toJson(n.name)
      );

      sanitaryWaterSourceCondition = await prisma.waterSection.count({
        where: {
          waterSourceConditionId: 1,
          Inspection: {
            communityId: filterValue,
          },
        },
      });

      insanitaryWaterSourceCondition = await prisma.waterSection.count({
        where: {
          waterSourceConditionId: 2,
          Inspection: {
            communityId: filterValue,
          },
        },
      });

      waterSourceConditionCountArray = [
        sanitaryWaterSourceCondition,
        insanitaryWaterSourceCondition,
      ];
      waterSourceConditionLabelArray = ["Sanitary", "Insanitary"];

      sanitaryWaterStorageCondition = await prisma.waterSection.count({
        where: {
          waterStorageConditionId: 1,
          Inspection: {
            communityId: filterValue,
          },
        },
      });

      insanitaryWaterStorageCondition = await prisma.waterSection.count({
        where: {
          waterStorageConditionId: 2,
          Inspection: {
            communityId: filterValue,
          },
        },
      });

      waterStorageConditionCountArray = [
        sanitaryWaterStorageCondition,
        insanitaryWaterStorageCondition,
      ];
      waterStorageConditionLabelArray = ["Sanitary", "Insanitary"];

      baselineCount = await prisma.inspection.count({
        where: { inspectionTypeId: 1,               communityId: filterValue,
        },
      });
      reInspectionCount = await prisma.inspection.count({
        where: { inspectionTypeId: 2,               communityId: filterValue,
        },
      });
      followUpCount = await prisma.inspection.count({
        where: { inspectionTypeId: 3 },
      });

      publishedCount = await prisma.inspection.count({
        where: { isPublished: 1,               communityId: filterValue,
        }
      });

      unPublishedCount = await prisma.inspection.count({
        where: { isPublished: 0, communityId: filterValue, },
      });

      usersCount = await prisma.user.count({
        where: { deleted: 0 },
      });

      sanitationReportCount = await prisma.sanitationReport.count({
        where: { deleted: 0 },
      });

      safeWaterSourceCount = await prisma.waterSection.count({
        where: {
          deleted: 0,
          waterSourceConditionId: 1,
          Inspection: {
            communityId: filterValue,
          },
        },
      });
      unsafeWaterSourceCount = await prisma.waterSection.count({
        where: {
          deleted: 0,
          waterSourceConditionId: 2,
          Inspection: {
            communityId: filterValue,
          },
        },
      });

      baselineCountArray = baselineInspectionSummary.map((i) =>
        toJson(i.baselineCount)
      );
      baselineFormsArray = baselineInspectionSummary.map((n) => toJson(n.name));

      reinspectionCountArray = reinspectionInspectionSummary.map((i) =>
        toJson(i.reinspectionCount)
      );
       reinspectionFormArray = reinspectionInspectionSummary.map((n) =>
        toJson(n.name)
      );

      fupRes = await prisma.followUpInspection.count({
        where: {
          deleted: 0,
          inspectionFormId: 1,
          communityId: filterValue,
        },
      });
      fupEatery = await prisma.followUpInspection.count({
        where: {
          deleted: 0,
          inspectionFormId: 2,
          communityId: filterValue,
        },
      });
      fupHealth = await prisma.followUpInspection.count({
        where: {
          deleted: 0,
          inspectionFormId: 3,
          communityId: filterValue,
        },
      });
      fupHosp = await prisma.followUpInspection.count({
        where: {
          deleted: 0,
          inspectionFormId: 4,
          communityId: filterValue,
        },
      });
      fupInstitution = await prisma.followUpInspection.count({
        where: {
          deleted: 0,
          inspectionFormId: 5,
          communityId: filterValue,
        },
      });
      fupIndustry = await prisma.followUpInspection.count({
        where: {
          deleted: 0,
          inspectionFormId: 6,
          communityId: filterValue,
        },
      });

      fupMarket = await prisma.followUpInspection.count({
        where: {
          deleted: 0,
          inspectionFormId: 7,
          communityId: filterValue,
        },
      });
      fupSanitation = await prisma.followUpInspection.count({
        where: {
          deleted: 0,
          inspectionFormId: 8,
          communityId: filterValue,
        },
      });

      followUpCountArray = [
        fupRes,
        fupEatery,
        fupHealth,
        fupHosp,
        fupInstitution,
        fupIndustry,
        fupMarket,
        fupSanitation,
      ];
      // let followUpFormArray = followupInspectionSummary.map((n) =>
      //   toJson(n.name)
      // );

      toiletAvailabilityCount1 =
        await prisma.residentialPremisesInfoSection.count({
          where: {
            toiletAvailabilityId: 1,
            Inspection: {
              communityId: filterValue,            },
          },
        });
      toiletAvailabilityCount2 = await prisma.eateryPremisesInfoSection.count({
        where: {
          toiletAvailabilityId: 1,
          Inspection: {
            communityId: filterValue,          },
        },
      });
      toiletAvailabilityCount3 = await prisma.healthPremisesInfoSection.count({
        where: {
          toiletAvailabilityId: 1,
          Inspection: {
            communityId: filterValue,          },
        },
      });
      toiletAvailabilityCount4 =
        await prisma.hospitalityPremisesInfoSection.count({
          where: {
            toiletAvailabilityId: 1,
            Inspection: {
              communityId: filterValue,            },
          },
        });
      toiletAvailabilityCount5 = await prisma.sanitaryPremisesInfoSection.count(
        {
          where: {
            toiletAvailabilityId: 1,
            Inspection: {
              communityId: filterValue,            },
          },
        }
      );
      toiletAvailabilityCount6 = await prisma.marketPremisesInfoSection.count({
        where: {
          toiletAvailabilityId: 1,
          Inspection: {
            communityId: filterValue,          },
        },
      });
      toiletAvailabilityCount7 =
        await prisma.institutionPremisesInfoSection.count({
          where: {
            toiletAvailabilityId: 1,
            Inspection: {
              communityId: filterValue,            },
          },
        });
      toiletAvailabilityCount8 = await prisma.industryPremisesInfoSection.count(
        {
          where: {
            toiletAvailabilityId: 1,
            Inspection: {
              communityId: filterValue,            },
          },
        }
      );
      toiletInavailabilityCount1 =
        await prisma.residentialPremisesInfoSection.count({
          where: {
            toiletAvailabilityId: 2,
            Inspection: {
              communityId: filterValue,            },
          },
        });
      toiletInavailabilityCount2 = await prisma.eateryPremisesInfoSection.count(
        {
          where: {
            toiletAvailabilityId: 2,
            Inspection: {
              communityId: filterValue,            },
          },
        }
      );
      toiletInavailabilityCount3 = await prisma.healthPremisesInfoSection.count(
        {
          where: {
            toiletAvailabilityId: 2,
            Inspection: {
              communityId: filterValue,            },
          },
        }
      );
      toiletInavailabilityCount4 =
        await prisma.hospitalityPremisesInfoSection.count({
          where: {
            toiletAvailabilityId: 2,
            Inspection: {
              communityId: filterValue,            },
          },
        });
      toiletInavailabilityCount5 =
        await prisma.sanitaryPremisesInfoSection.count({
          where: {
            toiletAvailabilityId: 2,
            Inspection: {
              communityId: filterValue,            },
          },
        });
      toiletInavailabilityCount6 = await prisma.marketPremisesInfoSection.count(
        {
          where: {
            toiletAvailabilityId: 2,
            Inspection: {
              communityId: filterValue,            },
          },
        }
      );
      toiletInavailabilityCount7 =
        await prisma.institutionPremisesInfoSection.count({
          where: {
            toiletAvailabilityId: 2,
            Inspection: {
              communityId: filterValue,            },
          },
        });
      toiletInavailabilityCount8 =
        await prisma.industryPremisesInfoSection.count({
          where: {
            toiletAvailabilityId: 2,
            Inspection: {
              communityId: filterValue,            },
          },
        });

      toiletAvailabilityCount =
        toiletAvailabilityCount1 +
        toiletAvailabilityCount2 +
        toiletAvailabilityCount3 +
        toiletAvailabilityCount4 +
        toiletAvailabilityCount5 +
        toiletAvailabilityCount6 +
        toiletAvailabilityCount7 +
        toiletAvailabilityCount8;

      toiletInavailabilityCount =
        toiletInavailabilityCount1 +
        toiletInavailabilityCount2 +
        toiletInavailabilityCount3 +
        toiletInavailabilityCount4 +
        toiletInavailabilityCount5 +
        toiletInavailabilityCount6 +
        toiletInavailabilityCount7 +
        toiletInavailabilityCount8;

      toiletAvailabilityArray = [
        toiletAvailabilityCount,
        toiletInavailabilityCount,
      ];

      toiletAdequacy = await prisma.liquidWasteSection.count({
        where: {
          toiletAdequacyId: 1,
          Inspection: {
            communityId: filterValue,          },
        },
      });

      toiletInadequacy = await prisma.liquidWasteSection.count({
        where: {
          toiletAdequacyId: 2,
          Inspection: {
            communityId: filterValue,          },
        },
      });

      toiletConditionSafe = await prisma.liquidWasteSection.count({
        where: {
          toiletConditionId: 1,
          Inspection: {
            communityId: filterValue,          },
        },
      });

      toiletConditionUnsafe = await prisma.liquidWasteSection.count({
        where: {
          toiletConditionId: 2,
          Inspection: {
            communityId: filterValue,          },
        },
      });

      wasteCollectorRegistered = await prisma.solidWasteSection.count({
        where: {
          wasteServiceProviderRegistrationId: 1,
          Inspection: {
            communityId: filterValue,          },
        },
      });

      wasteCollectorNotRegistered = await prisma.solidWasteSection.count({
        where: {
          wasteServiceProviderRegistrationId: 2,
          Inspection: {
            communityId: filterValue,          },
        },
      });

      wasteSorted = await prisma.solidWasteSection.count({
        where: {
          wasteSortingAvailabilityId: 1,
          Inspection: {
            communityId: filterValue,          },
        },
      });

      wasteNotSorted = await prisma.solidWasteSection.count({
        where: {
          wasteSortingAvailabilityId: 2,
          Inspection: {
            communityId: filterValue,          },
        },
      });

      wasteReceptacleApproved = await prisma.solidWasteSection.count({
        where: {
          approvedWasteStorageReceptacleId: 1,
          Inspection: {
            communityId: filterValue,          },
        },
      });

      wasteReceptacleUnapproved = await prisma.solidWasteSection.count({
        where: {
          approvedWasteStorageReceptacleId: 2,
          Inspection: {
            communityId: filterValue,          },
        },
      });

      wasteCollectorArray = [
        wasteCollectorRegistered,
        wasteCollectorNotRegistered,
      ];
      wasteSortingArray = [wasteSorted, wasteNotSorted];
      wasteReceptacleArray = [
        wasteReceptacleApproved,
        wasteReceptacleUnapproved,
      ];

      toiletAdequacyArray = [toiletAdequacy, toiletInadequacy];
      toiletConditionArray = [toiletConditionSafe, toiletConditionUnsafe];
    }

    let data = {
      allInspectionSummary: toJson(allInspectionSummary),
      baselineCountArray,
      baselineFormsArray,
      reinspectionCountArray,
      reinspectionFormArray,
      followUpCountArray,
      water: {
        waterSourceTypeCountArray,
        waterSourceTypeLabelArray,
        waterSourceConditionCountArray,
        waterSourceConditionLabelArray,
        waterStorageConditionCountArray,
        waterStorageConditionLabelArray,
      },
      lw: {
        toiletAvailabilityArray,
        toiletAdequacyArray,
        toiletConditionArray,
      },
      sw: {
        wasteCollectorArray,
        wasteSortingArray,
        wasteReceptacleArray,
      },

      baselineCount,
      reInspectionCount,
      followUpCount,
      publishedCount,
      unPublishedCount,
      usersCount,
      safeWaterSourceCount,
      unsafeWaterSourceCount,
      sanitationReportCount,
      actionTakenCount,
      actionTakenLabel,
    };

    return res.status(200).json(data);
  // } catch (error) {
  //   console.log("Error:.. " + error);
  //   let data = [{}];
  //   return res.status(200).json(data);
  // }
};
function toJson(data) {
  return JSON.parse(
    JSON.stringify(data, (_, v) =>
      typeof v === "bigint" ? `${v}n` : v
    ).replace(/"(-?\d+)n"/g, (_, a) => a)
  );
}
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
