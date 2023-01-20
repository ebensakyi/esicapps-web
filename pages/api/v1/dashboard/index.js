import prisma from "../../../../prisma/MyPrismaClient";

const post = async (req, res) => {
  try {
  } catch (error) {}
};

const get = async (req, res) => {
  try {
    // const allInspectionSummary =
    //   await prisma.$queryRaw`SELECT  "InspectionForm"."name", COUNT("Inspection"."id") AS "inspectionCount",
    //     COUNT("Inspection"."inspectionTypeId")  filter (where "Inspection"."inspectionTypeId" = 1) as "baselineCount",
    //     COUNT("Inspection"."inspectionTypeId")  filter (where "Inspection"."inspectionTypeId" = 2) as "reinspectionCount",
    //     COUNT("Inspection"."inspectionTypeId")  filter (where "Inspection"."inspectionTypeId" = 3) as "followupCount"

    //   FROM "InspectionForm"
    // LEFT JOIN "Inspection" ON "Inspection"."inspectionFormId" = "InspectionForm"."id"
    // LEFT JOIN "InspectionType" ON "Inspection"."inspectionTypeId" = "InspectionType"."id"

    // GROUP BY "InspectionForm"."name" , "Inspection"."inspectionTypeId"`;

    const allInspectionSummary =
      await prisma.$queryRaw`SELECT  "InspectionForm"."name", COUNT("Inspection"."id") AS "inspectionCount", 
 COUNT("Inspection"."inspectionTypeId")  filter (where "Inspection"."inspectionTypeId" = 1) as "baselineCount",
        COUNT("Inspection"."inspectionTypeId")  filter (where "Inspection"."inspectionTypeId" = 2) as "reinspectionCount",
        COUNT("Inspection"."inspectionTypeId")  filter (where "Inspection"."inspectionTypeId" = 3) as "followupCount",

  COUNT("Inspection"."isPublished")  filter (where "Inspection"."isPublished" = 1) as "publishedCount",
  COUNT("Inspection"."isPublished")  filter (where "Inspection"."isPublished" = 0) as "unPublishedCount"

FROM "InspectionForm" 
LEFT JOIN "Inspection" ON "Inspection"."inspectionFormId" = "InspectionForm"."id"
LEFT JOIN "InspectionType" ON "Inspection"."inspectionTypeId" = "InspectionType"."id"

GROUP BY "InspectionForm"."name" , "Inspection"."inspectionTypeId"
ORDER BY "InspectionForm"."name"
`;

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

    const followupInspectionSummary =
      await prisma.$queryRaw`SELECT  "InspectionForm"."name", COUNT("Inspection"."id") AS "inspectionCount",
                      COUNT("Inspection"."inspectionTypeId")  filter (where "Inspection"."inspectionTypeId" = 3) as "followupCount"

    FROM "InspectionForm"
    LEFT JOIN "Inspection"  ON "Inspection"."inspectionFormId" = "InspectionForm"."id"
    WHERE "Inspection"."inspectionTypeId"=3
    GROUP BY "InspectionForm"."name" `;

    const waterSourceTypeSummary =
      await prisma.$queryRaw`SELECT  "PremisesWaterSources"."waterSourceId","WaterSourceType"."name", COUNT("WaterSection"."id") AS "sourceCount"

    FROM "WaterSection"
    LEFT JOIN "PremisesWaterSources"  ON "PremisesWaterSources"."waterSectionId" = "WaterSection"."id"
    LEFT JOIN "WaterSourceType"  ON "PremisesWaterSources"."waterSourceId" = "WaterSourceType"."id"
    WHERE"WaterSourceType"."id" IS NOT NULL
    GROUP BY "WaterSourceType"."name", "PremisesWaterSources"."waterSourceId" `;

    let waterSourceTypeCountArray = waterSourceTypeSummary.map((i) =>
      toJson(i.sourceCount)
    );
    let waterSourceTypeLabelArray = waterSourceTypeSummary.map((n) =>
      toJson(n.name)
    );

    const sanitaryWaterSourceCondition = await prisma.waterSection.count({
      where: { waterSourceConditionId: 1 },
    });

    const insanitaryWaterSourceCondition = await prisma.waterSection.count({
      where: { waterSourceConditionId: 2 },
    });

    let waterSourceConditionCountArray = [
      sanitaryWaterSourceCondition,
      insanitaryWaterSourceCondition,
    ];
    let waterSourceConditionLabelArray = ["Sanitary", "Insanitary"];

    const sanitaryWaterStorageCondition = await prisma.waterSection.count({
      where: { waterStorageConditionId: 1 },
    });

    const insanitaryWaterStorageCondition = await prisma.waterSection.count({
      where: { "waterStorageConditionId": 2 },
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
      where: { isPublished: 0 },
    });

    const usersCount = await prisma.user.count({
      where: { deleted: 0 },
    });

    const safeWaterSourceCount = await prisma.waterSection.count({
      where: { deleted: 0, waterSourceConditionId: 1 },
    });
    const unsafeWaterSourceCount = await prisma.waterSection.count({
      where: { deleted: 0, waterSourceConditionId: 2 },
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

    let followUpCountArray = followupInspectionSummary.map((i) =>
      toJson(i.followupCount)
    );
    let followUpFormArray = followupInspectionSummary.map((n) =>
      toJson(n.name)
    );

    let data = {
      allInspectionSummary: toJson(allInspectionSummary),
      baselineCountArray,
      baselineFormsArray,
      reinspectionCountArray,
      reinspectionFormArray,
      followUpCountArray,
      followUpFormArray,
      water: {
        waterSourceTypeCountArray,
        waterSourceTypeLabelArray,
        waterSourceConditionCountArray,
        waterSourceConditionLabelArray,
        waterStorageConditionCountArray,
        waterStorageConditionLabelArray
      },
      // baselineInspectionSummary:toJson(baselineInspectionSummary),
      // reinspectionInspectionSummary:toJson(reinspectionInspectionSummary),
      // followupInspectionSummary: toJson(followupInspectionSummary),
      baselineCount,
      reInspectionCount,
      followUpCount,
      publishedCount,
      unPublishedCount,
      usersCount,
      safeWaterSourceCount,
      unsafeWaterSourceCount,
    };

    console.log(data);

    // console.log(publishingSummary
    //   );

    //   const summary = await prisma.$queryRaw`
    //   SELECT j.id, COUNT(a.id) AS applicationCount,
    //   COUNT( IF(a.shortlisted = 0,shortlisted,NULL)) AS rejectedApplicationCount,
    //   COUNT( IF(a.shortlisted = 1,shortlisted,NULL)) AS shortlistedApplicationCount,
    //   COUNT( IF(a.shortlisted = -1,shortlisted,NULL)) AS unworkedApplicationCount,
    //   j.name FROM job AS j LEFT join application AS a on j.id = a.jobId
    //   WHERE a.currentRecruitmentId = ${recruitment}
    //   GROUP BY j.name
    //   ORDER BY j.id
    // `

    // const x = await prisma.Inspection.findMany({
    //   include: {
    //     _count: {
    //       select: {
    //         InspectionForm: true,
    //       },
    //     },
    //   },
    // });

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
