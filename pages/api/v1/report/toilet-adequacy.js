import prisma from "../../../../prisma/MyPrismaClient";

const post = async (req, res) => {
  try {

    let filterBy = req.body.filterBy==null ? "regionId" : req.body.filterBy;
    let filterValue =req.body.filterValue==null ? undefined : Number(req.body.filterValue);


// let filterBy = req.body.filterBy;
// let filterValue = Number(req.body.filterValue);
let _summary;

if (filterBy == "regionId") {
     _summary =
    await prisma.$queryRaw`SELECT  DISTINCT "InspectionForm"."name", COUNT( "LiquidWasteSection"."id") AS "inspectionCount", 
COUNT("LiquidWasteSection"."toiletAdequacyId")  filter (where "LiquidWasteSection"."toiletAdequacyId" = 1) AS "adequate",
COUNT("LiquidWasteSection"."toiletAdequacyId")  filter (where "LiquidWasteSection"."toiletAdequacyId" = 2) AS "inadequate"

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
COUNT("LiquidWasteSection"."toiletAdequacyId")  filter (where "LiquidWasteSection"."toiletAdequacyId" = 1) AS "adequate",
COUNT("LiquidWasteSection"."toiletAdequacyId")  filter (where "LiquidWasteSection"."toiletAdequacyId" = 2) AS "inadequate"

FROM "InspectionForm" 
LEFT JOIN "Inspection" ON "Inspection"."inspectionFormId" = "InspectionForm"."id"
LEFT JOIN "LiquidWasteSection" ON "Inspection"."id" = "LiquidWasteSection"."inspectionId"
    WHERE  "Inspection"."regionId" = ${filterValue}

GROUP BY "InspectionForm"."name" 
ORDER BY "InspectionForm"."name"
`;


} else if (filterBy == "electoralAreaId") {
    _summary =
    await prisma.$queryRaw`SELECT  DISTINCT "InspectionForm"."name", COUNT( "LiquidWasteSection"."inspectionId") AS "inspectionCount", 
COUNT("LiquidWasteSection"."toiletAdequacyId")  filter (where "LiquidWasteSection"."toiletAdequacyId" = 1) AS "adequate",
COUNT("LiquidWasteSection"."toiletAdequacyId")  filter (where "LiquidWasteSection"."toiletAdequacyId" = 2) AS "inadequate"

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
COUNT("LiquidWasteSection"."toiletAdequacyId")  filter (where "LiquidWasteSection"."toiletAdequacyId" = 1) AS "adequate",
COUNT("LiquidWasteSection"."toiletAdequacyId")  filter (where "LiquidWasteSection"."toiletAdequacyId" = 2) AS "inadequate"

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
COUNT("LiquidWasteSection"."toiletAdequacyId")  filter (where "LiquidWasteSection"."toiletAdequacyId" = 1) AS "adequate",
COUNT("LiquidWasteSection"."toiletAdequacyId")  filter (where "LiquidWasteSection"."toiletAdequacyId" = 2) AS "inadequate"

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
        .json({ statusCode: 0, message: " should be unique" });
  }
};

// const getToiletAdequacy = async (req, res) => {
//   let filterBy = req.body.filterBy;
//   let filterValue = Number(req.body.filterValue);

//   const resAdequacyCount = await prisma.LiquidWasteSection.count({
//     where: {
//       Inspection: {
//         [filterBy]: filterValue,
//       },

//       toiletAdequacyId: 1,
//     },
//   });
//   const resNotAdequacyCount = await prisma.LiquidWasteSection.count({
//     where: {
//       Inspection: {
//         [filterBy]: filterValue,
//       },
//       toiletAdequacyId: 2,
//     },
//   });

//   const eateryAdequacyCount = await prisma.LiquidWasteSection.count({
//     where: {
//       Inspection: {
//         [filterBy]: filterValue,
//       },
//       toiletAdequacyId: 1,
//     },
//   });
//   const eateryNotAdequacyCount = await prisma.EateryPremisesInfoSection.count({
//     where: {
//       Inspection: {
//         [filterBy]: filterValue,
//       },
//       toiletAdequacyId: 2,
//     },
//   });

//   const healthAdequacyCount = await prisma.HealthPremisesInfoSection.count({
//     where: {
//       Inspection: {
//         [filterBy]: filterValue,
//       },
//       toiletAdequacyId: 1,
//     },
//   });
//   const healthNotAdequacyCount = await prisma.HealthPremisesInfoSection.count({
//     where: {
//       Inspection: {
//         [filterBy]: filterValue,
//       },
//       toiletAdequacyId: 2,
//     },
//   });

//   const hospAdequacyCount = await prisma.HospitalityPremisesInfoSection.count({
//     where: {
//       Inspection: {
//         [filterBy]: filterValue,
//       },
//       toiletAdequacyId: 1,
//     },
//   });
//   const hospNotAdequacyCount =
//     await prisma.HospitalityPremisesInfoSection.count({
//       where: {
//         Inspection: {
//           [filterBy]: filterValue,
//         },
//         toiletAdequacyId: 2,
//       },
//     });

//   const industryAdequacyCount = await prisma.IndustryPremisesInfoSection.count({
//     where: {
//       Inspection: {
//         [filterBy]: filterValue,
//       },
//       toiletAdequacyId: 1,
//     },
//   });
//   const industryNotAdequacyCount =
//     await prisma.IndustryPremisesInfoSection.count({
//       where: {
//         Inspection: {
//           [filterBy]: filterValue,
//         },
//         toiletAdequacyId: 2,
//       },
//     });
//   const institutionAdequacyCount =
//     await prisma.InstitutionPremisesInfoSection.count({
//       where: {
//         Inspection: {
//           [filterBy]: filterValue,
//         },
//         toiletAdequacyId: 1,
//       },
//     });
//   const institutionNotAdequacyCount =
//     await prisma.InstitutionPremisesInfoSection.count({
//       where: {
//         Inspection: {
//           [filterBy]: filterValue,
//         },
//         toiletAdequacyId: 2,
//       },
//     });
//   const marketAdequacyCount = await prisma.MarketPremisesInfoSection.count({
//     where: {
//       Inspection: {
//         [filterBy]: filterValue,
//       },
//       toiletAdequacyId: 1,
//     },
//   });
//   const marketNotAdequacyCount = await prisma.MarketPremisesInfoSection.count({
//     where: {
//       Inspection: {
//         [filterBy]: filterValue,
//       },
//       toiletAdequacyId: 2,
//     },
//   });
//   const sanitaryAdequacyCount = await prisma.SanitaryPremisesInfoSection.count({
//     where: {
//       Inspection: {
//         [filterBy]: filterValue,
//       },
//       toiletAdequacyId: 1,
//     },
//   });
//   const sanitaryNotAdequacyCount =
//     await prisma.SanitaryPremisesInfoSection.count({
//       where: {
//         Inspection: {
//           [filterBy]: filterValue,
//         },
//         toiletAdequacyId: 2,
//       },
//     });
//   let report = [
//     {
//       name: "Residential Premises",
//       available: resAdequacyCount,
//       notAvailable: resNotAdequacyCount,
//     },
//     {
//       name: "Eating & Drinking Premises",
//       available: eateryAdequacyCount,
//       notAvailable: eateryNotAdequacyCount,
//     },
//     {
//       name: "Health Premises",
//       available: healthAdequacyCount,
//       notAvailable: healthNotAdequacyCount,
//     },
//     {
//       name: "Hospitality Premises",
//       available: hospAdequacyCount,
//       notAvailable: hospNotAdequacyCount,
//     },
//     {
//       name: "Industry Premises",
//       available: industryAdequacyCount,
//       notAvailable: industryNotAdequacyCount,
//     },
//     {
//       name: "Institution Premises",
//       available: institutionAdequacyCount,
//       notAvailable: institutionNotAdequacyCount,
//     },
//     {
//       name: "Sanitary Premises",
//       available: sanitaryAdequacyCount,
//       notAvailable: sanitaryNotAdequacyCount,
//     },
//     {
//       name: "Markets & Lorry Parks Premises",
//       available: marketAdequacyCount,
//       notAvailable: marketNotAdequacyCount,
//     },
//   ];

//   res.status(200).json({
//     data: report,
//   });
// };

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
