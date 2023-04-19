import prisma from "../../../../prisma/MyPrismaClient";

const post = async (req, res) => {
  try {
  
    let filterBy = req.body.filterBy;
    let filterValue = Number(req.body.filterValue);
    let _summary;

    if (filterBy == "regionId") {
      _summary =
        await prisma.$queryRaw`SELECT  DISTINCT "InspectionForm"."name", COUNT( "LiquidWasteSection"."inspectionId") AS "inspectionCount", 
    COUNT("LiquidWasteSection"."toiletAvailabilityId")  filter (where "LiquidWasteSection"."toiletAvailabilityId" = 1) AS "available",
    COUNT("LiquidWasteSection"."toiletAvailabilityId")  filter (where "LiquidWasteSection"."toiletAvailabilityId" = 2) AS "notAvailable"

    FROM "InspectionForm" 
    LEFT JOIN "Inspection" ON "Inspection"."inspectionFormId" = "InspectionForm"."id"
    LEFT JOIN "LiquidWasteSection" ON "Inspection"."id" = "LiquidWasteSection"."inspectionId"
    WHERE  "Inspection"."regionId" = ${filterValue}
    
        GROUP BY "InspectionForm"."name" 
    ORDER BY "InspectionForm"."name"
`;
    } else if (filterBy == "districtId") {
      _summary =
        await prisma.$queryRaw`SELECT  DISTINCT "InspectionForm"."name", COUNT( "LiquidWasteSection"."inspectionId") AS "inspectionCount", 
    COUNT("LiquidWasteSection"."toiletAvailabilityId")  filter (where "LiquidWasteSection"."toiletAvailabilityId" = 1) AS "safe",
    COUNT("LiquidWasteSection"."toiletAvailabilityId")  filter (where "LiquidWasteSection"."toiletAvailabilityId" = 2) AS "unsafe"

    FROM "InspectionForm" 
    LEFT JOIN "Inspection" ON "Inspection"."inspectionFormId" = "InspectionForm"."id"
    LEFT JOIN "LiquidWasteSection" ON "Inspection"."id" = "LiquidWasteSection"."inspectionId"
    WHERE  "Inspection"."districtId" = ${filterValue}
    
        GROUP BY "InspectionForm"."name" 
    ORDER BY "InspectionForm"."name"
`;
    } else if (filterBy == "electoralAreaId") {
      _summary =
        await prisma.$queryRaw`SELECT  DISTINCT "InspectionForm"."name", COUNT( "LiquidWasteSection"."inspectionId") AS "inspectionCount", 
    COUNT("LiquidWasteSection"."toiletAvailabilityId")  filter (where "LiquidWasteSection"."toiletAvailabilityId" = 1) AS "safe",
    COUNT("LiquidWasteSection"."toiletAvailabilityId")  filter (where "LiquidWasteSection"."toiletAvailabilityId" = 2) AS "unsafe"

    FROM "InspectionForm" 
    LEFT JOIN "Inspection" ON "Inspection"."inspectionFormId" = "InspectionForm"."id"
    LEFT JOIN "LiquidWasteSection" ON "Inspection"."id" = "LiquidWasteSection"."inspectionId"
    WHERE  "Inspection"."electoralAreaId" = ${filterValue}
    
        GROUP BY "InspectionForm"."name" 
    ORDER BY "InspectionForm"."name"
`;
    } else if (filterBy == "communityId") {
      _summary =
        await prisma.$queryRaw`SELECT  DISTINCT "InspectionForm"."name", COUNT( "LiquidWasteSection"."inspectionId") AS "inspectionCount", 
    COUNT("LiquidWasteSection"."toiletAvailabilityId")  filter (where "LiquidWasteSection"."toiletAvailabilityId" = 1) AS "safe",
    COUNT("LiquidWasteSection"."toiletAvailabilityId")  filter (where "LiquidWasteSection"."toiletAvailabilityId" = 2) AS "unsafe"

    FROM "InspectionForm" 
    LEFT JOIN "Inspection" ON "Inspection"."inspectionFormId" = "InspectionForm"."id"
    LEFT JOIN "LiquidWasteSection" ON "Inspection"."id" = "LiquidWasteSection"."inspectionId"
    WHERE  "Inspection"."communityId" = ${filterValue}
    GROUP BY "InspectionForm"."name" 
    ORDER BY "InspectionForm"."name"
`;
    } else {
      _summary =
        await prisma.$queryRaw`SELECT  DISTINCT "InspectionForm"."name", COUNT( "LiquidWasteSection"."inspectionId") AS "inspectionCount", 
    COUNT("LiquidWasteSection"."toiletAvailabilityId")  filter (where "LiquidWasteSection"."toiletAvailabilityId" = 1) AS "safe",
    COUNT("LiquidWasteSection"."toiletAvailabilityId")  filter (where "LiquidWasteSection"."toiletAvailabilityId" = 2) AS "unsafe"

    FROM "InspectionForm" 
    LEFT JOIN "Inspection" ON "Inspection"."inspectionFormId" = "InspectionForm"."id"
    LEFT JOIN "LiquidWasteSection" ON "Inspection"."id" = "LiquidWasteSection"."inspectionId"
   
    GROUP BY "InspectionForm"."name" 
    ORDER BY "InspectionForm"."name"
`;
    }

    let summary = JSON.stringify(_summary, (_, v) =>
      typeof v === "bigint" ? v.toString() : v
    );
    let report = JSON.parse(summary);

    res.status(200).json({
      data: report,
    });
  } catch (error) {
    console.log(error);
    if (error.code === "P2002")
      return res
        .status(200)
        .json({ statusCode: 0, message: "action prefix should be unique" });
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
