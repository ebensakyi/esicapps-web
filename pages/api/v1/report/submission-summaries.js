import prisma from "../../../../prisma/MyPrismaClient";

const post = async (req, res) => {
  try {
    console.log(">>>>>>>");
   
      await getSubmissionSummary(req, res);
    
  } catch (error) {
    console.log(error);
    if (error.code === "P2002")
      return res
        .status(200)
        .json({ statusCode: 0, message: "action prefix should be unique" });
  }
};


const getSubmissionSummary = async (req, res) => {
  let filterBy = req.body.filterBy;
  let filterValue = Number(req.body.filterValue);

  // console.log(filterBy);
  // console.log(filterValue);
  // let qry = `SELECT  "InspectionForm"."name", COUNT("Inspection"."id") AS "inspectionCount",
  // COUNT("Inspection"."inspectionTypeId")  filter (where "Inspection"."inspectionTypeId" = 1) as "baselineCount",
  // COUNT("Inspection"."inspectionTypeId")  filter (where "Inspection"."inspectionTypeId" = 2) as "reinspectionCount",
  // COUNT("Inspection"."inspectionTypeId")  filter (where "Inspection"."inspectionTypeId" = 3) as "followupCount"

  // FROM "InspectionForm"

  // LEFT JOIN "Inspection" ON "Inspection"."inspectionFormId" = "InspectionForm"."id"
  // LEFT JOIN "InspectionType" ON "Inspection"."inspectionTypeId" = "InspectionType"."id"

  // WHERE '${filterBy}' = ${filterValue}

  // GROUP BY "InspectionForm"."name" , "Inspection"."inspectionTypeId"
  // ORDER BY "InspectionForm"."name"`

  // console.log(qry);

  //   const _allInspectionSummary = await prisma.$queryRaw`SELECT  "InspectionForm"."name", COUNT("Inspection"."id") AS "inspectionCount",
  //   COUNT("Inspection"."inspectionTypeId")  filter (where "Inspection"."inspectionTypeId" = 1) as "baselineCount",
  //   COUNT("Inspection"."inspectionTypeId")  filter (where "Inspection"."inspectionTypeId" = 2) as "reinspectionCount",
  //   COUNT("Inspection"."inspectionTypeId")  filter (where "Inspection"."inspectionTypeId" = 3) as "followupCount"

  //   FROM "InspectionForm"

  //   LEFT JOIN "Inspection" ON "Inspection"."inspectionFormId" = "InspectionForm"."id"
  //   LEFT JOIN "InspectionType" ON "Inspection"."inspectionTypeId" = "InspectionType"."id"
  //    WHERE  ||' ${filterBy} '|| = 1

  //   GROUP BY "InspectionForm"."name" , "Inspection"."inspectionTypeId"
  //   ORDER BY "InspectionForm"."name"`;

  //   let allInspectionSummary = JSON.stringify(_allInspectionSummary, (_, v) =>
  //     typeof v === "bigint" ? v.toString() : v
  //   );
  //   let submissionSummary = JSON.parse(allInspectionSummary);

  // const submissionSummary1 = await prisma.inspectionForm.groupBy({
  //   by: ["name"],
  //   include: {
  //     Inspection: true,
  //   },
  // });

  // const submissionSummary = await prisma.inspectionForm.findMany({
   
  //   include: {
  //     _count: {
  //       select: { Inspection: true },
  //     },
  //     Inspection: {
  //       include: { InspectionType: true },
  //     },
  //   },
  // });

  const report = await prisma.inspection.groupBy({
    where: {

        [filterBy]: filterValue,
    },
    by: ["inspectionFormId"],
    _count: {
      inspectionFormId: true,
    },
    orderBy: {
      inspectionFormId: 'asc',
    },
    // include: {
    //   _count: {
    //     select: { inspectionFormId: true },
    //   },
    //    include: { InspectionType: true },
      
   // },
  });




  res.status(200).json({
    statusCode: 1,
    message: "Data saved",
    data:report,
  });
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
