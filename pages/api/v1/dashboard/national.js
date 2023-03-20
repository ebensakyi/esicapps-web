import prisma from "../../../../prisma/MyPrismaClient";
import { verifyToken } from "../../../../helpers/token-verifier";

const post = async (req, res) => {
  try {
  } catch (error) {}
};


const get = async (req, res) => {

  let data = await verifyToken(req.cookies.token);
  

  try {
   
    const allInspectionSummary =
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

    //     const allInspectionSummary =
    //       await prisma.$queryRawUnsafe`SELECT  "InspectionForm"."name", COUNT("Inspection"."id") AS "inspectionCount",
    //         COUNT("Inspection"."inspectionTypeId")  filter (where "Inspection"."inspectionTypeId" = 1 ${whereClauseRawObj}) as "baselineCount",
    //         COUNT("Inspection"."inspectionTypeId")  filter (where "Inspection"."inspectionTypeId" = 2 ${whereClauseRawObj}) as "reinspectionCount",
    //         COUNT("Inspection"."inspectionTypeId")  filter (where "Inspection"."inspectionTypeId" = 3 ${whereClauseRawObj}) as "followupCount",

    //   COUNT("Inspection"."isPublished")  filter (where "Inspection"."isPublished" = 1 ${whereClauseRawObj}) as "publishedCount",
    //   COUNT("Inspection"."isPublished")  filter (where "Inspection"."isPublished" = 0 ${whereClauseRawObj}) as "unPublishedCount"

    // FROM "InspectionForm"
    // LEFT JOIN "Inspection" ON "Inspection"."inspectionFormId" = "InspectionForm"."id"
    // LEFT JOIN "InspectionType" ON "Inspection"."inspectionTypeId" = "InspectionType"."id"

    // GROUP BY "InspectionForm"."name" , "Inspection"."inspectionTypeId"
    // ORDER BY "InspectionForm"."name"
    // `;

    const baselineInspectionSummary =
      await prisma.$queryRaw`SELECT  "InspectionForm"."name", COUNT("Inspection"."id") AS "inspectionCount",
      COUNT("Inspection"."inspectionTypeId")  filter (where "Inspection"."inspectionTypeId" = 1) as "baselineCount"
FROM "InspectionForm" 
LEFT JOIN "Inspection"  ON "Inspection"."inspectionFormId" = "InspectionForm"."id"
WHERE "Inspection"."inspectionTypeId"=1 
GROUP BY "InspectionForm"."name" 
ORDER BY "InspectionForm"."name"`;

    const reinspectionInspectionSummary =
      await prisma.$queryRaw`SELECT  "InspectionForm"."name", COUNT("Inspection"."id") AS "inspectionCount",
            COUNT("Inspection"."inspectionTypeId")  filter (where "Inspection"."inspectionTypeId" = 2) as "reinspectionCount"
FROM "InspectionForm" 
LEFT JOIN "Inspection"  ON "Inspection"."inspectionFormId" = "InspectionForm"."id"
WHERE "Inspection"."inspectionTypeId"=2 
GROUP BY "InspectionForm"."name" 
ORDER BY "InspectionForm"."name"`;

  
    //   await prisma.$queryRaw`SELECT  "InspectionForm"."name", COUNT("Inspection"."id") AS "inspectionCount",
    //                   COUNT("Inspection"."inspectionTypeId")  filter (where "Inspection"."inspectionTypeId" = 3) as "followupCount"

    // FROM "InspectionForm"
    // LEFT JOIN "Inspection"  ON "Inspection"."inspectionFormId" = "InspectionForm"."id"
    // WHERE "Inspection"."inspectionTypeId"=3 
    // GROUP BY "InspectionForm"."name" `;

    const waterSourceTypeSummary =
      await prisma.$queryRaw`SELECT  "PremisesWaterSources"."waterSourceId","WaterSourceType"."name", COUNT("WaterSection"."id") AS "sourceCount"

    FROM "WaterSection"
    LEFT JOIN "PremisesWaterSources"  ON "PremisesWaterSources"."waterSectionId" = "WaterSection"."id"
    LEFT JOIN "WaterSourceType"  ON "PremisesWaterSources"."waterSourceId" = "WaterSourceType"."id"
    LEFT JOIN "Inspection"  ON "Inspection"."id" = "WaterSection"."inspectionId"

    WHERE  "WaterSourceType"."id" IS NOT NULL
    GROUP BY "WaterSourceType"."name", "PremisesWaterSources"."waterSourceId" `;

    const healthEducActionTakenCount = await prisma.premisesActionTaken.count({
      where: {
        actionId: 1,
        
      },
    });
    const noticeServedActionTakenCount = await prisma.premisesActionTaken.count(
      {
        where: {
          actionId: 2,
         
        },
      }
    );
    const criminalSummonsActionTakenCount =
      await prisma.premisesActionTaken.count({
        where: {
          actionId: 3,
          
        },
      });

    const actionTakenLabel = [
      "Health Education",
      "Notice Served",
      "Criminal Summoons",
    ];
    const actionTakenCount = [
      healthEducActionTakenCount,
      noticeServedActionTakenCount,
      criminalSummonsActionTakenCount,
    ];

    let waterSourceTypeCountArray = waterSourceTypeSummary.map((i) =>
      toJson(i.sourceCount)
    );
    let waterSourceTypeLabelArray = waterSourceTypeSummary.map((n) =>
      toJson(n.name)
    );

    const sanitaryWaterSourceCondition = await prisma.waterSection.count({
      
    });

    const insanitaryWaterSourceCondition = await prisma.waterSection.count({
      
    });

    let waterSourceConditionCountArray = [
      sanitaryWaterSourceCondition,
      insanitaryWaterSourceCondition,
    ];
    let waterSourceConditionLabelArray = ["Sanitary", "Insanitary"];

    const sanitaryWaterStorageCondition = await prisma.waterSection.count({
      where: {
        waterStorageConditionId: 1,
        
      },
    });

    const insanitaryWaterStorageCondition = await prisma.waterSection.count({
      where: {
        waterStorageConditionId: 2,
       
      },
    });

    let waterStorageConditionCountArray = [
      sanitaryWaterStorageCondition,
      insanitaryWaterStorageCondition,
    ];
    let waterStorageConditionLabelArray = ["Sanitary", "Insanitary"];

    const baselineCount = await prisma.inspection.count({
      where: { inspectionTypeId: 1 },
    });
    const reInspectionCount = await prisma.inspection.count({
      where: { inspectionTypeId: 2 },
    });
    const followUpCount = await prisma.inspection.count({
      where: { inspectionTypeId: 3 },
    });

    const publishedCount = await prisma.inspection.count({
      where: { isPublished: 1 },
    });

    const unPublishedCount = await prisma.inspection.count({
      where: { isPublished: 0},
    });

    const usersCount = await prisma.user.count({
      where: { deleted: 0 },
    });

    const sanitationReportCount = await prisma.sanitationReport.count({
      where: { deleted: 0 },
    });

    const safeWaterSourceCount = await prisma.waterSection.count({
      where: {
        deleted: 0,
        waterSourceConditionId: 1,
       
      },
    });
    const unsafeWaterSourceCount = await prisma.waterSection.count({
      where: {
        deleted: 0,
        waterSourceConditionId: 2,
      
      },
    });

    let baselineCountArray = baselineInspectionSummary.map((i) =>
      toJson(i.baselineCount)
    );
    let baselineFormsArray = baselineInspectionSummary.map((n) =>
      toJson(n.name)
    );

    let reinspectionCountArray = reinspectionInspectionSummary.map((i) =>
      toJson(i.reinspectionCount)
    );
    let reinspectionFormArray = reinspectionInspectionSummary.map((n) =>
      toJson(n.name)
    );

    const fupRes = await prisma.followUpInspection.count({
      where: {
        deleted: 0,
        inspectionFormId:1
      },
    });
    const fupEatery = await prisma.followUpInspection.count({
      where: {
        deleted: 0,
        inspectionFormId:2
      },
    });
    const fupHealth = await prisma.followUpInspection.count({
      where: {
        deleted: 0,
        inspectionFormId:3
      },
    });
    const fupHosp = await prisma.followUpInspection.count({
      where: {
        deleted: 0,
        inspectionFormId:4
      },
    }); const fupInstitution = await prisma.followUpInspection.count({
      where: {
        deleted: 0,
        inspectionFormId:5
      },
    });
    const fupIndustry = await prisma.followUpInspection.count({
      where: {
        deleted: 0,
        inspectionFormId:6
      },
    });
   
    const fupMarket = await prisma.followUpInspection.count({
      where: {
        deleted: 0,
        inspectionFormId:7
      },
    });
    const fupSanitation = await prisma.followUpInspection.count({
      where: {
        deleted: 0,
        inspectionFormId:8
      },
    });

    let followUpCountArray = [fupRes,fupEatery,fupHealth,fupHosp,fupInstitution,fupIndustry,fupMarket,fupSanitation]
    // let followUpFormArray = followupInspectionSummary.map((n) =>
    //   toJson(n.name)
    // );

    const toiletAvailabilityCount1 =
      await prisma.residentialPremisesInfoSection.count({
        where: {
          toiletAvailabilityId: 1,
         
        },
      });
    const toiletAvailabilityCount2 =
      await prisma.eateryPremisesInfoSection.count({
        where: {
          toiletAvailabilityId: 1,
         
        },
      });
    const toiletAvailabilityCount3 =
      await prisma.healthPremisesInfoSection.count({
        where: {
          toiletAvailabilityId: 1,
         
        },
      });
    const toiletAvailabilityCount4 =
      await prisma.hospitalityPremisesInfoSection.count({
        where: {
          toiletAvailabilityId: 1,
         
        },
      });
    const toiletAvailabilityCount5 =
      await prisma.sanitaryPremisesInfoSection.count({
        where: {
          toiletAvailabilityId: 1,
         
        },
      });
    const toiletAvailabilityCount6 =
      await prisma.marketPremisesInfoSection.count({
        where: {
          toiletAvailabilityId: 1,
         
        },
      });
    const toiletAvailabilityCount7 =
      await prisma.institutionPremisesInfoSection.count({
        where: {
          toiletAvailabilityId: 1,
         
        },
      });
    const toiletAvailabilityCount8 =
      await prisma.industryPremisesInfoSection.count({
        where: {
          toiletAvailabilityId: 1,
         
        },
      });
    const toiletInavailabilityCount1 =
      await prisma.residentialPremisesInfoSection.count({
        where: {
          toiletAvailabilityId: 2,
         
        },
      });
    const toiletInavailabilityCount2 =
      await prisma.eateryPremisesInfoSection.count({
        where: {
          toiletAvailabilityId: 2,
         
        },
      });
    const toiletInavailabilityCount3 =
      await prisma.healthPremisesInfoSection.count({
        where: {
          toiletAvailabilityId: 2,
         
        },
      });
    const toiletInavailabilityCount4 =
      await prisma.hospitalityPremisesInfoSection.count({
        where: {
          toiletAvailabilityId: 2,
         
        },
      });
    const toiletInavailabilityCount5 =
      await prisma.sanitaryPremisesInfoSection.count({
        where: {
          toiletAvailabilityId: 2,
         
        },
      });
    const toiletInavailabilityCount6 =
      await prisma.marketPremisesInfoSection.count({
        where: {
          toiletAvailabilityId: 2,
         
        },
      });
    const toiletInavailabilityCount7 =
      await prisma.institutionPremisesInfoSection.count({
        where: {
          toiletAvailabilityId: 2,
         
        },
      });
    const toiletInavailabilityCount8 =
      await prisma.industryPremisesInfoSection.count({
        where: {
          toiletAvailabilityId: 2,
         
        },
      });

    let toiletAvailabilityCount =
      toiletAvailabilityCount1 +
      toiletAvailabilityCount2 +
      toiletAvailabilityCount3 +
      toiletAvailabilityCount4 +
      toiletAvailabilityCount5 +
      toiletAvailabilityCount6 +
      toiletAvailabilityCount7 +
      toiletAvailabilityCount8;

    let toiletInavailabilityCount =
      toiletInavailabilityCount1 +
      toiletInavailabilityCount2 +
      toiletInavailabilityCount3 +
      toiletInavailabilityCount4 +
      toiletInavailabilityCount5 +
      toiletInavailabilityCount6 +
      toiletInavailabilityCount7 +
      toiletInavailabilityCount8;

    let toiletAvailabilityArray = [
      toiletAvailabilityCount,
      toiletInavailabilityCount,
    ];

    const toiletAdequacy = await prisma.liquidWasteSection.count({
      where: {
        toiletAdequacyId: 1,
       
      },
    });

    const toiletInadequacy = await prisma.liquidWasteSection.count({
      where: {
        toiletAdequacyId: 2,
      
      },
    });

    const toiletConditionSafe = await prisma.liquidWasteSection.count({
      where: {
        toiletConditionId: 1,
      
      },
    });

    const toiletConditionUnsafe = await prisma.liquidWasteSection.count({
      where: {
        toiletConditionId: 2,
       
      },
    });

    const wasteCollectorRegistered = await prisma.solidWasteSection.count({
      where: {
        wasteServiceProviderRegistrationId: 1,
      
      },
    });

    const wasteCollectorNotRegistered = await prisma.solidWasteSection.count({
      where: {
        wasteServiceProviderRegistrationId: 2,
      
      },
    });

    const wasteSorted = await prisma.solidWasteSection.count({
      where: {
        wasteSortingAvailabilityId: 1,
      
      },
    });

    const wasteNotSorted = await prisma.solidWasteSection.count({
      where: {
        wasteSortingAvailabilityId: 2,
      
      },
    });

    const wasteReceptacleApproved = await prisma.solidWasteSection.count({
      where: {
        approvedWasteStorageReceptacleId: 1,
      
      },
    });

    const wasteReceptacleUnapproved = await prisma.solidWasteSection.count({
      where: {
        approvedWasteStorageReceptacleId: 2,
       
      },
    });

    let wasteCollectorArray = [
      wasteCollectorRegistered,
      wasteCollectorNotRegistered,
    ];
    let wasteSortingArray = [wasteSorted, wasteNotSorted];
    let wasteReceptacleArray = [
      wasteReceptacleApproved,
      wasteReceptacleUnapproved,
    ];

    let toiletAdequacyArray = [toiletAdequacy, toiletInadequacy];
    let toiletConditionArray = [toiletConditionSafe, toiletConditionUnsafe];

    let data = {
      allInspectionSummary: toJson(allInspectionSummary),
      baselineCountArray,
      baselineFormsArray,
      reinspectionCountArray,
      reinspectionFormArray,
      followUpCountArray,
     // followUpFormArray,
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
  } catch (error) {
    console.log("Error: " + error);
  }
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
