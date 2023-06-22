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
  let  allInspectionSummary;


  if (userLevel == 1) {
    console.log("HERE LEVEL 1");
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

  try {


    // const usersWithCount = await prisma.inspectionForm.findMany({
    //   select: {
    //     _count: {
    //       select: {
    //         Inspection: {
    //           where: {
    //             districtId: 2,
    //           },
    //         },
    //       },
    //     },
    //   },
    // });

    // await prisma.user.findMany({
    //   select: {
    //     _count: {
    //       select: {
    //         posts: { where: { title: 'Hello!' } },
    //       },
    //     },
    //   },
    // })

if(filterBy == "regionId"){
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
}

if(filterBy == "districtId"){
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

}

if(filterBy == "electoralAreaId"){
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
}

if(filterBy == "communityId"){
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
}
     
    //  WHERE "Inspection"."regionId" = ${filterValue}

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

    const waterSourceTypeSummary =
      await prisma.$queryRaw`SELECT  "PremisesWaterSources"."waterSourceId","WaterSourceType"."name", COUNT("WaterSection"."id") AS "sourceCount"

    FROM "WaterSection"
    LEFT JOIN "PremisesWaterSources"  ON "PremisesWaterSources"."waterSectionId" = "WaterSection"."id"
    LEFT JOIN "WaterSourceType"  ON "PremisesWaterSources"."waterSourceId" = "WaterSourceType"."id"
    LEFT JOIN "Inspection"  ON "Inspection"."id" = "WaterSection"."inspectionId"

    WHERE "WaterSourceType"."id" IS NOT NULL
    GROUP BY "WaterSourceType"."name", "PremisesWaterSources"."waterSourceId" `;

    // "Inspection"."regionId" = ${filterValue} AND

    const healthEducActionTakenCount = await prisma.premisesActionTaken.count({
      where: {
        actionId: 1,
        // ConclusionSection: {
        //   Inspection: {
        //     [filterBy]: filterValue,
        //   },
        // },
      },
    });
    const noticeServedActionTakenCount = await prisma.premisesActionTaken.count(
      {
        where: {
          actionId: 2,
          // ConclusionSection: {
          //   Inspection: {
          //     [filterBy]: filterValue,
          //   },
          // },
        },
      }
    );
    const criminalSummonsActionTakenCount =
      await prisma.premisesActionTaken.count({
        where: {
          actionId: 3,
          // ConclusionSection: {
          //   Inspection: {
          //     [filterBy]: filterValue,
          //   },
          // },
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
          [filterBy]: filterValue,
        },
      },
    });

    const insanitaryWaterSourceCondition = await prisma.waterSection.count({
      where: {
        waterSourceConditionId: 2,
        Inspection: {
          [filterBy]: filterValue,
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
          [filterBy]: filterValue,
        },
      },
    });

    const insanitaryWaterStorageCondition = await prisma.waterSection.count({
      where: {
        waterStorageConditionId: 2,
        Inspection: {
          [filterBy]: filterValue,
        },
      },
    });

    let waterStorageConditionCountArray = [
      sanitaryWaterStorageCondition,
      insanitaryWaterStorageCondition,
    ];
    let waterStorageConditionLabelArray = ["Sanitary", "Insanitary"];

    const baselineCount = await prisma.inspection.count({
      where: { inspectionTypeId: 1, [filterBy]: filterValue },
    });
    const reInspectionCount = await prisma.inspection.count({
      where: { inspectionTypeId: 2, [filterBy]: filterValue },
    });
    const followUpCount = await prisma.inspection.count({
      where: { inspectionTypeId: 3 },
    });

    const publishedCount = await prisma.inspection.count({
      where: { isPublished: 1, [filterBy]: filterValue },
    });

    const unPublishedCount = await prisma.inspection.count({
      where: { isPublished: 0, [filterBy]: filterValue },
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
        Inspection: {
          [filterBy]: filterValue,
        },
      },
    });
    const unsafeWaterSourceCount = await prisma.waterSection.count({
      where: {
        deleted: 0,
        waterSourceConditionId: 2,
        Inspection: {
          [filterBy]: filterValue,
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
        inspectionFormId: 1,
        // [filterBy]:filterValue,
      },
    });
    const fupEatery = await prisma.followUpInspection.count({
      where: {
        deleted: 0,
        inspectionFormId: 2,
        // [filterBy]:filterValue,
      },
    });
    const fupHealth = await prisma.followUpInspection.count({
      where: {
        deleted: 0,
        inspectionFormId: 3,
        // [filterBy]:filterValue,
      },
    });
    const fupHosp = await prisma.followUpInspection.count({
      where: {
        deleted: 0,
        inspectionFormId: 4,
        // [filterBy]:filterValue,
      },
    });
    const fupInstitution = await prisma.followUpInspection.count({
      where: {
        deleted: 0,
        inspectionFormId: 5,
        // [filterBy]:filterValue,
      },
    });
    const fupIndustry = await prisma.followUpInspection.count({
      where: {
        deleted: 0,
        inspectionFormId: 6,
        // [filterBy]:filterValue,
      },
    });

    const fupMarket = await prisma.followUpInspection.count({
      where: {
        deleted: 0,
        inspectionFormId: 7,
        // [filterBy]:filterValue,
      },
    });
    const fupSanitation = await prisma.followUpInspection.count({
      where: {
        deleted: 0,
        inspectionFormId: 8,
        // [filterBy]:filterValue,
      },
    });

    let followUpCountArray = [
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

    const toiletAvailabilityCount1 =
      await prisma.residentialPremisesInfoSection.count({
        where: {
          toiletAvailabilityId: 1,
          Inspection: {
            [filterBy]: filterValue,
          },
        },
      });
    const toiletAvailabilityCount2 =
      await prisma.eateryPremisesInfoSection.count({
        where: {
          toiletAvailabilityId: 1,
          Inspection: {
            [filterBy]: filterValue,
          },
        },
      });
    const toiletAvailabilityCount3 =
      await prisma.healthPremisesInfoSection.count({
        where: {
          toiletAvailabilityId: 1,
          Inspection: {
            [filterBy]: filterValue,
          },
        },
      });
    const toiletAvailabilityCount4 =
      await prisma.hospitalityPremisesInfoSection.count({
        where: {
          toiletAvailabilityId: 1,
          Inspection: {
            [filterBy]: filterValue,
          },
        },
      });
    const toiletAvailabilityCount5 =
      await prisma.sanitaryPremisesInfoSection.count({
        where: {
          toiletAvailabilityId: 1,
          Inspection: {
            [filterBy]: filterValue,
          },
        },
      });
    const toiletAvailabilityCount6 =
      await prisma.marketPremisesInfoSection.count({
        where: {
          toiletAvailabilityId: 1,
          Inspection: {
            [filterBy]: filterValue,
          },
        },
      });
    const toiletAvailabilityCount7 =
      await prisma.institutionPremisesInfoSection.count({
        where: {
          toiletAvailabilityId: 1,
          Inspection: {
            [filterBy]: filterValue,
          },
        },
      });
    const toiletAvailabilityCount8 =
      await prisma.industryPremisesInfoSection.count({
        where: {
          toiletAvailabilityId: 1,
          Inspection: {
            [filterBy]: filterValue,
          },
        },
      });
    const toiletInavailabilityCount1 =
      await prisma.residentialPremisesInfoSection.count({
        where: {
          toiletAvailabilityId: 2,
          Inspection: {
            [filterBy]: filterValue,
          },
        },
      });
    const toiletInavailabilityCount2 =
      await prisma.eateryPremisesInfoSection.count({
        where: {
          toiletAvailabilityId: 2,
          Inspection: {
            [filterBy]: filterValue,
          },
        },
      });
    const toiletInavailabilityCount3 =
      await prisma.healthPremisesInfoSection.count({
        where: {
          toiletAvailabilityId: 2,
          Inspection: {
            [filterBy]: filterValue,
          },
        },
      });
    const toiletInavailabilityCount4 =
      await prisma.hospitalityPremisesInfoSection.count({
        where: {
          toiletAvailabilityId: 2,
          Inspection: {
            [filterBy]: filterValue,
          },
        },
      });
    const toiletInavailabilityCount5 =
      await prisma.sanitaryPremisesInfoSection.count({
        where: {
          toiletAvailabilityId: 2,
          Inspection: {
            [filterBy]: filterValue,
          },
        },
      });
    const toiletInavailabilityCount6 =
      await prisma.marketPremisesInfoSection.count({
        where: {
          toiletAvailabilityId: 2,
          Inspection: {
            [filterBy]: filterValue,
          },
        },
      });
    const toiletInavailabilityCount7 =
      await prisma.institutionPremisesInfoSection.count({
        where: {
          toiletAvailabilityId: 2,
          Inspection: {
            [filterBy]: filterValue,
          },
        },
      });
    const toiletInavailabilityCount8 =
      await prisma.industryPremisesInfoSection.count({
        where: {
          toiletAvailabilityId: 2,
          Inspection: {
            [filterBy]: filterValue,
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
          [filterBy]: filterValue,
        },
      },
    });

    const toiletInadequacy = await prisma.liquidWasteSection.count({
      where: {
        toiletAdequacyId: 2,
        Inspection: {
          [filterBy]: filterValue,
        },
      },
    });

    const toiletConditionSafe = await prisma.liquidWasteSection.count({
      where: {
        toiletConditionId: 1,
        Inspection: {
          [filterBy]: filterValue,
        },
      },
    });

    const toiletConditionUnsafe = await prisma.liquidWasteSection.count({
      where: {
        toiletConditionId: 2,
        Inspection: {
          [filterBy]: filterValue,
        },
      },
    });

    const wasteCollectorRegistered = await prisma.solidWasteSection.count({
      where: {
        wasteServiceProviderRegistrationId: 1,
        Inspection: {
          [filterBy]: filterValue,
        },
      },
    });

    const wasteCollectorNotRegistered = await prisma.solidWasteSection.count({
      where: {
        wasteServiceProviderRegistrationId: 2,
        Inspection: {
          [filterBy]: filterValue,
        },
      },
    });

    const wasteSorted = await prisma.solidWasteSection.count({
      where: {
        wasteSortingAvailabilityId: 1,
        Inspection: {
          [filterBy]: filterValue,
        },
      },
    });

    const wasteNotSorted = await prisma.solidWasteSection.count({
      where: {
        wasteSortingAvailabilityId: 2,
        Inspection: {
          [filterBy]: filterValue,
        },
      },
    });

    const wasteReceptacleApproved = await prisma.solidWasteSection.count({
      where: {
        approvedWasteStorageReceptacleId: 1,
        Inspection: {
          [filterBy]: filterValue,
        },
      },
    });

    const wasteReceptacleUnapproved = await prisma.solidWasteSection.count({
      where: {
        approvedWasteStorageReceptacleId: 2,
        Inspection: {
          [filterBy]: filterValue,
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
  } catch (error) {
    console.log("Error:.. " + error);
    let data = [{}];
    return res.status(200).json(data);
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
