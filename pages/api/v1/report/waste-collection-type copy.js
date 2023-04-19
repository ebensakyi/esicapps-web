import prisma from "../../../../prisma/MyPrismaClient";

const post = async (req, res) => {
  try {


let filterBy = req.body.filterBy;
let filterValue = Number(req.body.filterValue);
let _summary;

if (filterBy == "regionId") {
     _summary =
    await prisma.$queryRaw`SELECT  DISTINCT "InspectionForm"."name", COUNT( "SolidWasteSection"."id") AS "inspectionCount", 
COUNT("SolidWasteSection"."wasteCollectionTypeId")  filter (where "SolidWasteSection"."wasteCollectionTypeId" = 1) AS "approved",
COUNT("SolidWasteSection"."wasteCollectionTypeId")  filter (where "SolidWasteSection"."wasteCollectionTypeId" = 2) AS "unapproved"

FROM "InspectionForm" 
LEFT JOIN "Inspection" ON "Inspection"."inspectionFormId" = "InspectionForm"."id"
LEFT JOIN "SolidWasteSection" ON "Inspection"."id" = "SolidWasteSection"."inspectionId"
    WHERE  "Inspection"."regionId" = ${filterValue}

GROUP BY "InspectionForm"."name" 
ORDER BY "InspectionForm"."name"
`;


} else if (filterBy == "districtId") {
     _summary =
    await prisma.$queryRaw`SELECT  DISTINCT "InspectionForm"."name", COUNT( "SolidWasteSection"."inspectionId") AS "inspectionCount", 
COUNT("SolidWasteSection"."wasteCollectionTypeId")  filter (where "SolidWasteSection"."wasteCollectionTypeId" = 1) AS "approved",
COUNT("SolidWasteSection"."wasteCollectionTypeId")  filter (where "SolidWasteSection"."wasteCollectionTypeId" = 2) AS "unapproved"

FROM "InspectionForm" 
LEFT JOIN "Inspection" ON "Inspection"."inspectionFormId" = "InspectionForm"."id"
LEFT JOIN "SolidWasteSection" ON "Inspection"."id" = "SolidWasteSection"."inspectionId"
    WHERE  "Inspection"."regionId" = ${filterValue}

GROUP BY "InspectionForm"."name" 
ORDER BY "InspectionForm"."name"
`;


} else if (filterBy == "electoralAreaId") {
    _summary =
    await prisma.$queryRaw`SELECT  DISTINCT "InspectionForm"."name", COUNT( "SolidWasteSection"."inspectionId") AS "inspectionCount", 
COUNT("SolidWasteSection"."wasteCollectionTypeId")  filter (where "SolidWasteSection"."wasteCollectionTypeId" = 1) AS "approved",
COUNT("SolidWasteSection"."wasteCollectionTypeId")  filter (where "SolidWasteSection"."wasteCollectionTypeId" = 2) AS "unapproved"

FROM "InspectionForm" 
LEFT JOIN "Inspection" ON "Inspection"."inspectionFormId" = "InspectionForm"."id"
LEFT JOIN "SolidWasteSection" ON "Inspection"."id" = "SolidWasteSection"."inspectionId"
WHERE  "Inspection"."electoralAreaId" = ${filterValue}

GROUP BY "InspectionForm"."name" 
ORDER BY "InspectionForm"."name"
`;


} else if (filterBy == "communityId") {
     _summary =
    await prisma.$queryRaw`SELECT  DISTINCT "InspectionForm"."name", COUNT( "SolidWasteSection"."inspectionId") AS "inspectionCount", 
COUNT("SolidWasteSection"."wasteCollectionTypeId")  filter (where "SolidWasteSection"."wasteCollectionTypeId" = 1) AS "approved",
COUNT("SolidWasteSection"."wasteCollectionTypeId")  filter (where "SolidWasteSection"."wasteCollectionTypeId" = 2) AS "unapproved"

FROM "InspectionForm" 
LEFT JOIN "Inspection" ON "Inspection"."inspectionFormId" = "InspectionForm"."id"
LEFT JOIN "SolidWasteSection" ON "Inspection"."id" = "SolidWasteSection"."inspectionId"
    WHERE  "Inspection"."communityId" = ${filterValue}

GROUP BY "InspectionForm"."name" 
ORDER BY "InspectionForm"."name"
`;


} else {
     _summary =
    await prisma.$queryRaw`SELECT  DISTINCT "InspectionForm"."name", COUNT( "SolidWasteSection"."inspectionId") AS "inspectionCount", 
COUNT("SolidWasteSection"."wasteCollectionTypeId")  filter (where "SolidWasteSection"."wasteCollectionTypeId" = 1) AS "approved",
COUNT("SolidWasteSection"."wasteCollectionTypeId")  filter (where "SolidWasteSection"."wasteCollectionTypeId" = 2) AS "unapproved"

FROM "InspectionForm" 
LEFT JOIN "Inspection" ON "Inspection"."inspectionFormId" = "InspectionForm"."id"
LEFT JOIN "SolidWasteSection" ON "Inspection"."id" = "SolidWasteSection"."inspectionId"

GROUP BY "InspectionForm"."name" 
ORDER BY "InspectionForm"."name"
`;


}

let summary = JSON.stringify(_summary, (_, v) =>
  typeof v === "bigint" ? v.toString() : v
);
let report = JSON.parse(summary);

console.log(report);

res.status(200).json({
  data: report,
});


  } catch (error) {
    console.log(error);
    if (error.code === "P2002")
      return res
        .status(200)
        .json({ statusCode: 0, message: " should be unique" });
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
