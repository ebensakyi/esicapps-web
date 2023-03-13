import prisma from "../../../../../prisma/MyPrismaClient";

const post = async (req, res) => {
  try {
    console.log(req.body);
    if (req.body.reportType == '1') {
      await getSubmissionSummary(req, res);
    }

    if (req.body.reportType == '2') {
      await getActionTaken(req, res);
    }
  } catch (error) {
    console.log(error);
    if (error.code === "P2002")
      return res
        .status(200)
        .json({ statusCode: 0, message: "action prefix should be unique" });
  }
};

const getActionTaken = async (req, res) => {
  const _summary =
    await prisma.$queryRaw`SELECT  "InspectionForm"."name", COUNT("Inspection"."id") AS "inspectionCount", 
COUNT("Inspection"."inspectionTypeId")  filter (where "Inspection"."inspectionTypeId" = 1) AS "baselineCount",
    COUNT("Inspection"."inspectionTypeId")  filter (where "Inspection"."inspectionTypeId" = 2) AS "reinspectionCount",
    COUNT("Inspection"."inspectionTypeId")  filter (where "Inspection"."inspectionTypeId" = 3) AS "followupCount"



FROM "InspectionForm" 
LEFT JOIN "Inspection" ON "Inspection"."inspectionFormId" = "InspectionForm"."id"
LEFT JOIN "InspectionType" ON "Inspection"."inspectionTypeId" = "InspectionType"."id"

GROUP BY "InspectionForm"."name" , "Inspection"."inspectionTypeId"
ORDER BY "InspectionForm"."name"
`;

  let summary = JSON.stringify(_summary, (_, v) =>
    typeof v === "bigint" ? v.toString() : v
  );
  let submissionSummary = JSON.parse(summary);

  res.status(200).json({
    statusCode: 1,
    message: "Data saved",
    data: { submissionSummary },
  });
};


const getSubmissionSummary = async (req, res) => {
  const _allInspectionSummary =
    await prisma.$queryRaw`SELECT  "InspectionForm"."name", COUNT("Inspection"."id") AS "inspectionCount", 
COUNT("Inspection"."inspectionTypeId")  filter (where "Inspection"."inspectionTypeId" = 1) as "baselineCount",
    COUNT("Inspection"."inspectionTypeId")  filter (where "Inspection"."inspectionTypeId" = 2) as "reinspectionCount",
    COUNT("Inspection"."inspectionTypeId")  filter (where "Inspection"."inspectionTypeId" = 3) as "followupCount"



FROM "InspectionForm" 
LEFT JOIN "Inspection" ON "Inspection"."inspectionFormId" = "InspectionForm"."id"
LEFT JOIN "InspectionType" ON "Inspection"."inspectionTypeId" = "InspectionType"."id"
GROUP BY "InspectionForm"."name" , "Inspection"."inspectionTypeId"
ORDER BY "InspectionForm"."name"
`;
  let allInspectionSummary = JSON.stringify(_allInspectionSummary, (_, v) =>
    typeof v === "bigint" ? v.toString() : v
  );
  let submissionSummary = JSON.parse(allInspectionSummary);

  res.status(200).json({
    statusCode: 1,
    message: "Data saved",
    data: { submissionSummary },
  });
};

const get = async (req, res) => {
  try {
    if (req.query.userId) {
      // const count = await prisma.assignData.count({
      //   where: { assignedToId: Number(req.query.userId) },
      // });

      const data = await prisma.assignData.findFirst({
        where: { assignedToId: Number(req.query.userId), deleted: 0 },
      });

      return res.status(200).json(data);
    }

    const data = await prisma.assignData.findMany({
      where: { deleted: 0 },
      include: { assignedFrom: true, assignedTo: true },
    });
    return res.status(200).json(data || []);
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