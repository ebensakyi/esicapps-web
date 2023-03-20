import prisma from "../../../../prisma/MyPrismaClient";
import { verifyToken } from "../../../../helpers/token-verifier";

const post = async (req, res) => {
  try {
  } catch (error) {}
};


const get = async (req, res) => {
  console.log(req.query);

  let data = await verifyToken(req.cookies.token);
 // if(user==du) use  his district
  let districtId = Number(req.query.districtId);

  // let whereClauseRawObj = whereClauseRaw(data);
  // let whereClauseObj = whereClause(data);

  // console.log(whereClauseObj);

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
WHERE "Inspection"."inspectionTypeId"=1 AND "Inspection"."districtId" = ${districtId}
GROUP BY "InspectionForm"."name" 
ORDER BY "InspectionForm"."name"`;

    const reinspectionInspectionSummary =
      await prisma.$queryRaw`SELECT  "InspectionForm"."name", COUNT("Inspection"."id") AS "inspectionCount",
            COUNT("Inspection"."inspectionTypeId")  filter (where "Inspection"."inspectionTypeId" = 2) as "reinspectionCount"
FROM "InspectionForm" 
LEFT JOIN "Inspection"  ON "Inspection"."inspectionFormId" = "InspectionForm"."id"
WHERE "Inspection"."inspectionTypeId"=2 AND "Inspection"."districtId" = ${districtId}
GROUP BY "InspectionForm"."name" 
ORDER BY "InspectionForm"."name"`;

  
    //   await prisma.$queryRaw`SELECT  "InspectionForm"."name", COUNT("Inspection"."id") AS "inspectionCount",
    //                   COUNT("Inspection"."inspectionTypeId")  filter (where "Inspection"."inspectionTypeId" = 3) as "followupCount"

    // FROM "InspectionForm"
    // LEFT JOIN "Inspection"  ON "Inspection"."inspectionFormId" = "InspectionForm"."id"
    // WHERE "Inspection"."inspectionTypeId"=3 AND "Inspection"."districtId" = ${districtId}
    // GROUP BY "InspectionForm"."name" `;

    const waterSourceTypeSummary =
      await prisma.$queryRaw`SELECT  "PremisesWaterSources"."waterSourceId","WaterSourceType"."name", COUNT("WaterSection"."id") AS "sourceCount"

    FROM "WaterSection"
    LEFT JOIN "PremisesWaterSources"  ON "PremisesWaterSources"."waterSectionId" = "WaterSection"."id"
    LEFT JOIN "WaterSourceType"  ON "PremisesWaterSources"."waterSourceId" = "WaterSourceType"."id"
    LEFT JOIN "Inspection"  ON "Inspection"."id" = "WaterSection"."inspectionId"

    WHERE  "Inspection"."districtId" = ${districtId} AND "WaterSourceType"."id" IS NOT NULL
    GROUP BY "WaterSourceType"."name", "PremisesWaterSources"."waterSourceId" `;

    const healthEducActionTakenCount = await prisma.premisesActionTaken.count({
      where: {
        actionId: 1,
        ConclusionSection: {
          Inspection: {
            districtId: districtId,
          },
        },
      },
    });
    const noticeServedActionTakenCount = await prisma.premisesActionTaken.count(
      {
        where: {
          actionId: 2,
          ConclusionSection: {
            Inspection: {
              districtId: districtId,
            },
          },
        },
      }
    );
    const criminalSummonsActionTakenCount =
      await prisma.premisesActionTaken.count({
        where: {
          actionId: 3,
          ConclusionSection: {
            Inspection: {
              districtId: districtId,
            },
          },
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
      where: {
        waterSourceConditionId: 1,
        Inspection: {
          districtId: districtId,
        },
      },
    });

    const insanitaryWaterSourceCondition = await prisma.waterSection.count({
      where: {
        waterSourceConditionId: 2,
        Inspection: {
          districtId: districtId,
        },
      },
    });

    let waterSourceConditionCountArray = [
      sanitaryWaterSourceCondition,
      insanitaryWaterSourceCondition,
    ];
    let waterSourceConditionLabelArray = ["Sanitary", "Insanitary"];

    const sanitaryWaterStorageCondition = await prisma.waterSection.count({
      where: {
        waterStorageConditionId: 1,
        Inspection: {
          districtId: districtId,
        },
      },
    });

    const insanitaryWaterStorageCondition = await prisma.waterSection.count({
      where: {
        waterStorageConditionId: 2,
        Inspection: {
          districtId: districtId,
        },
      },
    });

    let waterStorageConditionCountArray = [
      sanitaryWaterStorageCondition,
      insanitaryWaterStorageCondition,
    ];
    let waterStorageConditionLabelArray = ["Sanitary", "Insanitary"];

    const baselineCount = await prisma.inspection.count({
      where: { inspectionTypeId: 1, districtId: districtId },
    });
    const reInspectionCount = await prisma.inspection.count({
      where: { inspectionTypeId: 2, districtId: districtId },
    });
    const followUpCount = await prisma.inspection.count({
      where: { inspectionTypeId: 3, districtId: districtId },
    });

    const publishedCount = await prisma.inspection.count({
      where: { isPublished: 1, districtId: districtId },
    });

    const unPublishedCount = await prisma.inspection.count({
      where: { isPublished: 0, districtId: districtId },
    });

    const usersCount = await prisma.user.count({
      where: { deleted: 0, districtId: districtId },
    });

    const sanitationReportCount = await prisma.sanitationReport.count({
      where: { deleted: 0 },
    });

    const safeWaterSourceCount = await prisma.waterSection.count({
      where: {
        deleted: 0,
        waterSourceConditionId: 1,
        Inspection: {
          districtId: districtId,
        },
      },
    });
    const unsafeWaterSourceCount = await prisma.waterSection.count({
      where: {
        deleted: 0,
        waterSourceConditionId: 2,
        Inspection: {
          districtId: districtId,
        },
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
          Inspection: {
            districtId: districtId,
          },
        },
      });
    const toiletAvailabilityCount2 =
      await prisma.eateryPremisesInfoSection.count({
        where: {
          toiletAvailabilityId: 1,
          Inspection: {
            districtId: districtId,
          },
        },
      });
    const toiletAvailabilityCount3 =
      await prisma.healthPremisesInfoSection.count({
        where: {
          toiletAvailabilityId: 1,
          Inspection: {
            districtId: districtId,
          },
        },
      });
    const toiletAvailabilityCount4 =
      await prisma.hospitalityPremisesInfoSection.count({
        where: {
          toiletAvailabilityId: 1,
          Inspection: {
            districtId: districtId,
          },
        },
      });
    const toiletAvailabilityCount5 =
      await prisma.sanitaryPremisesInfoSection.count({
        where: {
          toiletAvailabilityId: 1,
          Inspection: {
            districtId: districtId,
          },
        },
      });
    const toiletAvailabilityCount6 =
      await prisma.marketPremisesInfoSection.count({
        where: {
          toiletAvailabilityId: 1,
          Inspection: {
            districtId: districtId,
          },
        },
      });
    const toiletAvailabilityCount7 =
      await prisma.institutionPremisesInfoSection.count({
        where: {
          toiletAvailabilityId: 1,
          Inspection: {
            districtId: districtId,
          },
        },
      });
    const toiletAvailabilityCount8 =
      await prisma.industryPremisesInfoSection.count({
        where: {
          toiletAvailabilityId: 1,
          Inspection: {
            districtId: districtId,
          },
        },
      });
    const toiletInavailabilityCount1 =
      await prisma.residentialPremisesInfoSection.count({
        where: {
          toiletAvailabilityId: 2,
          Inspection: {
            districtId: districtId,
          },
        },
      });
    const toiletInavailabilityCount2 =
      await prisma.eateryPremisesInfoSection.count({
        where: {
          toiletAvailabilityId: 2,
          Inspection: {
            districtId: districtId,
          },
        },
      });
    const toiletInavailabilityCount3 =
      await prisma.healthPremisesInfoSection.count({
        where: {
          toiletAvailabilityId: 2,
          Inspection: {
            districtId: districtId,
          },
        },
      });
    const toiletInavailabilityCount4 =
      await prisma.hospitalityPremisesInfoSection.count({
        where: {
          toiletAvailabilityId: 2,
          Inspection: {
            districtId: districtId,
          },
        },
      });
    const toiletInavailabilityCount5 =
      await prisma.sanitaryPremisesInfoSection.count({
        where: {
          toiletAvailabilityId: 2,
          Inspection: {
            districtId: districtId,
          },
        },
      });
    const toiletInavailabilityCount6 =
      await prisma.marketPremisesInfoSection.count({
        where: {
          toiletAvailabilityId: 2,
          Inspection: {
            districtId: districtId,
          },
        },
      });
    const toiletInavailabilityCount7 =
      await prisma.institutionPremisesInfoSection.count({
        where: {
          toiletAvailabilityId: 2,
          Inspection: {
            districtId: districtId,
          },
        },
      });
    const toiletInavailabilityCount8 =
      await prisma.industryPremisesInfoSection.count({
        where: {
          toiletAvailabilityId: 2,
          Inspection: {
            districtId: districtId,
          },
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
        Inspection: {
          districtId: districtId,
        },
      },
    });

    const toiletInadequacy = await prisma.liquidWasteSection.count({
      where: {
        toiletAdequacyId: 2,
        Inspection: {
          districtId: districtId,
        },
      },
    });

    const toiletConditionSafe = await prisma.liquidWasteSection.count({
      where: {
        toiletConditionId: 1,
        Inspection: {
          districtId: districtId,
        },
      },
    });

    const toiletConditionUnsafe = await prisma.liquidWasteSection.count({
      where: {
        toiletConditionId: 2,
        Inspection: {
          districtId: districtId,
        },
      },
    });

    const wasteCollectorRegistered = await prisma.solidWasteSection.count({
      where: {
        wasteServiceProviderRegistrationId: 1,
        Inspection: {
          districtId: districtId,
        },
      },
    });

    const wasteCollectorNotRegistered = await prisma.solidWasteSection.count({
      where: {
        wasteServiceProviderRegistrationId: 2,
        Inspection: {
          districtId: districtId,
        },
      },
    });

    const wasteSorted = await prisma.solidWasteSection.count({
      where: {
        wasteSortingAvailabilityId: 1,
        Inspection: {
          districtId: districtId,
        },
      },
    });

    const wasteNotSorted = await prisma.solidWasteSection.count({
      where: {
        wasteSortingAvailabilityId: 2,
        Inspection: {
          districtId: districtId,
        },
      },
    });

    const wasteReceptacleApproved = await prisma.solidWasteSection.count({
      where: {
        approvedWasteStorageReceptacleId: 1,
        Inspection: {
          districtId: districtId,
        },
      },
    });

    const wasteReceptacleUnapproved = await prisma.solidWasteSection.count({
      where: {
        approvedWasteStorageReceptacleId: 2,
        Inspection: {
          districtId: districtId,
        },
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

    // let data = {
    //   allInspectionSummary: toJson(allInspectionSummary),
    //   baselineCountArray,
    //   baselineFormsArray,
    //   reinspectionCountArray,
    //   reinspectionFormArray,
    //   followUpCountArray,
    //   water: {
    //     waterSourceTypeCountArray,
    //     waterSourceTypeLabelArray,
    //     waterSourceConditionCountArray,
    //     waterSourceConditionLabelArray,
    //     waterStorageConditionCountArray,
    //     waterStorageConditionLabelArray,
    //   },
    //   lw: {
    //     toiletAvailabilityArray,
    //     toiletAdequacyArray,
    //     toiletConditionArray,
    //   },
    //   sw: {
    //     wasteCollectorArray,
    //     wasteSortingArray,
    //     wasteReceptacleArray,
    //   },
     
    //   baselineCount,
    //   reInspectionCount,
    //   followUpCount,
    //   publishedCount,
    //   unPublishedCount,
    //   usersCount,
    //   safeWaterSourceCount,
    //   unsafeWaterSourceCount,
    //   sanitationReportCount,
    //   actionTakenCount,
    //   actionTakenLabel,
    // };


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
     
      baselineCount:5,
      reInspectionCount:88,
      followUpCount:9,
      publishedCount:3,
      unPublishedCount:9,
      usersCount:56,
      safeWaterSourceCount:9,
      unsafeWaterSourceCount:90,
      sanitationReportCount:24,
      actionTakenCount:87,
      actionTakenLabel:88,
    };


    //return res.status(200).json({ statusCode: 1, data: dataVersion });
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
