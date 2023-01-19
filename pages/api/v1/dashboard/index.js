import prisma from "../../../../prisma/MyPrismaClient";

const post = async (req, res) => {
  try {
  } catch (error) {}
};

const get = async (req, res) => {
  try {
    const allInspectionSummary =
      await prisma.$queryRaw`SELECT  "InspectionForm"."name", COUNT("Inspection"."id") AS "inspectionCount"
    FROM "InspectionForm" 
    LEFT JOIN "Inspection"  ON "Inspection"."inspectionFormId" = "InspectionForm"."id"
    GROUP BY "InspectionForm"."name" `;

    const baselineInspectionSummary =
      await prisma.$queryRaw`SELECT  "InspectionForm"."name", COUNT("Inspection"."id") AS "inspectionCount"
FROM "InspectionForm" 
LEFT JOIN "Inspection"  ON "Inspection"."inspectionFormId" = "InspectionForm"."id"
WHERE "Inspection"."inspectionTypeId"=1
GROUP BY "InspectionForm"."name" `;

    const reinspectionInspectionSummary =
      await prisma.$queryRaw`SELECT  "InspectionForm"."name", COUNT("Inspection"."id") AS "inspectionCount"
FROM "InspectionForm" 
LEFT JOIN "Inspection"  ON "Inspection"."inspectionFormId" = "InspectionForm"."id"
WHERE "Inspection"."inspectionTypeId"=2
GROUP BY "InspectionForm"."name" `;

    const followupInspectionSummary =
      await prisma.$queryRaw`SELECT  "InspectionForm"."name", COUNT("Inspection"."id") AS "inspectionCount"
FROM "InspectionForm" 
LEFT JOIN "Inspection"  ON "Inspection"."inspectionFormId" = "InspectionForm"."id"
WHERE "Inspection"."inspectionTypeId"=3
GROUP BY "InspectionForm"."name" `;

    const baselineCount = await prisma.inspection.count({
      where: { inspectionTypeId: 1 },
    });
    const reInspectionCount = await prisma.inspection.count({
      where: { inspectionTypeId: 2 },
    });
    const followUpCount = await prisma.inspection.count({
      where: { inspectionTypeId: 3 },
    });

    let data = {
      allInspectionSummary: toJson(allInspectionSummary),
      baselineInspectionSummary:toJson(baselineInspectionSummary),
      reinspectionInspectionSummary:toJson(reinspectionInspectionSummary),
      followupInspectionSummary: toJson(followupInspectionSummary),
      baselineCount,
      reInspectionCount,
      followUpCount,
    };

    console.log(data.baselineCount);

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

    // console.log(x);

    //return res.status(200).json({ statusCode: 1, data: dataVersion });
    return res.status(200).json(data);
  } catch (error) {
    console.log("Error: " + error);
  }
};
function toJson(data) {
  return JSON.parse(JSON.stringify(data, (_, v) =>
    typeof v === "bigint" ? `${v}n` : v
  ).replace(/"(-?\d+)n"/g, (_, a) => a));
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
