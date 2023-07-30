// export const inspection= async (filterBy, filterValue) => {
//   let summary;

//   if (filterBy == "undefined") {
//     summary =
//       await prisma.$queryRaw`SELECT DISTINCT  "InspectionForm"."name", COUNT("Inspection"."id") AS "inspectionCount", 
//             --   COUNT("Inspection"."inspectionTypeId")  filter (where "Inspection"."inspectionTypeId" = 1 ) as "baselineCount",
//             --   COUNT("Inspection"."inspectionTypeId")  filter (where "Inspection"."inspectionTypeId" = 2 ) as "reinspectionCount",

//             --   COUNT("Inspection"."isPublished")  filter (where "Inspection"."isPublished" = 1 ) as "publishedCount",
//             --   COUNT("Inspection"."isPublished")  filter (where "Inspection"."isPublished" = 0 ) as "unPublishedCount"

//               FROM "InspectionForm" 
//               LEFT JOIN "Inspection" ON "Inspection"."inspectionFormId" = "InspectionForm"."id"
//               LEFT JOIN "InspectionType" ON "Inspection"."inspectionTypeId" = "InspectionType"."id"

//               GROUP BY "InspectionForm"."name" , "Inspection"."inspectionTypeId"
//               ORDER BY "InspectionForm"."name"
//             `;
//   } else if (filterBy == "regionId") {
//     summary =
//       await prisma.$queryRaw`SELECT DISTINCT "InspectionForm"."name", COUNT("Inspection"."id") AS "inspectionCount", 
//             --   COUNT("Inspection"."inspectionTypeId")  filter (where "Inspection"."inspectionTypeId" = 1 ) as "baselineCount",
//             --   COUNT("Inspection"."inspectionTypeId")  filter (where "Inspection"."inspectionTypeId" = 2 ) as "reinspectionCount",

//             --   COUNT("Inspection"."isPublished")  filter (where "Inspection"."isPublished" = 1 ) as "publishedCount",
//             --   COUNT("Inspection"."isPublished")  filter (where "Inspection"."isPublished" = 0 ) as "unPublishedCount"

//               FROM "InspectionForm" 
//               LEFT JOIN "Inspection" ON "Inspection"."inspectionFormId" = "InspectionForm"."id"
//               LEFT JOIN "InspectionType" ON "Inspection"."inspectionTypeId" = "InspectionType"."id"
//               WHERE  "Inspection"."regionId" = ${filterValue}

//               GROUP BY "InspectionForm"."name" , "Inspection"."inspectionTypeId"
//               ORDER BY "InspectionForm"."name"
//             `;
//   } else if (filterBy == "districtId") {
//     summary =
//       await prisma.$queryRaw`SELECT DISTINCT "InspectionForm"."name", COUNT("Inspection"."id") AS "inspectionCount", 
//             --   COUNT("Inspection"."inspectionTypeId")  filter (where "Inspection"."inspectionTypeId" = 1 ) as "baselineCount",
//             --   COUNT("Inspection"."inspectionTypeId")  filter (where "Inspection"."inspectionTypeId" = 2 ) as "reinspectionCount",

//             --   COUNT("Inspection"."isPublished")  filter (where "Inspection"."isPublished" = 1 ) as "publishedCount",
//             --   COUNT("Inspection"."isPublished")  filter (where "Inspection"."isPublished" = 0 ) as "unPublishedCount"

//               FROM "InspectionForm" 
//               LEFT JOIN "Inspection" ON "Inspection"."inspectionFormId" = "InspectionForm"."id"
//               LEFT JOIN "InspectionType" ON "Inspection"."inspectionTypeId" = "InspectionType"."id"
//               WHERE  "Inspection"."districtId" = ${filterValue}

//               GROUP BY "InspectionForm"."name" , "Inspection"."inspectionTypeId"
//               ORDER BY "InspectionForm"."name"
//             `;
//   } else if (filterBy == "electoralAreaId") {
//     summary =
//       await prisma.$queryRaw`SELECT DISTINCT  "InspectionForm"."name", COUNT("Inspection"."id") AS "inspectionCount", 
//             --   COUNT("Inspection"."inspectionTypeId")  filter (where "Inspection"."inspectionTypeId" = 1 ) as "baselineCount",
//             --   COUNT("Inspection"."inspectionTypeId")  filter (where "Inspection"."inspectionTypeId" = 2 ) as "reinspectionCount",

//             --   COUNT("Inspection"."isPublished")  filter (where "Inspection"."isPublished" = 1 ) as "publishedCount",
//             --   COUNT("Inspection"."isPublished")  filter (where "Inspection"."isPublished" = 0 ) as "unPublishedCount"

//               FROM "InspectionForm" 
//               LEFT JOIN "Inspection" ON "Inspection"."inspectionFormId" = "InspectionForm"."id"
//               LEFT JOIN "InspectionType" ON "Inspection"."inspectionTypeId" = "InspectionType"."id"
//               WHERE  "Inspection"."electoralAreaId" = ${filterValue}

//               GROUP BY "InspectionForm"."name" , "Inspection"."inspectionTypeId"
//               ORDER BY "InspectionForm"."name"
//             `;
//   } else if (filterBy == "communityId") {
//     summary =
//       await prisma.$queryRaw`SELECT DISTINCT "InspectionForm"."name", COUNT("Inspection"."id") AS "inspectionCount", 
//             --   COUNT("Inspection"."inspectionTypeId")  filter (where "Inspection"."inspectionTypeId" = 1 ) as "baselineCount",
//             --   COUNT("Inspection"."inspectionTypeId")  filter (where "Inspection"."inspectionTypeId" = 2 ) as "reinspectionCount",

//             --   COUNT("Inspection"."isPublished")  filter (where "Inspection"."isPublished" = 1 ) as "publishedCount",
//             --   COUNT("Inspection"."isPublished")  filter (where "Inspection"."isPublished" = 0 ) as "unPublishedCount"

//               FROM "InspectionForm" 
//               LEFT JOIN "Inspection" ON "Inspection"."inspectionFormId" = "InspectionForm"."id"
//               LEFT JOIN "InspectionType" ON "Inspection"."inspectionTypeId" = "InspectionType"."id"
//               WHERE  "Inspection"."communityId" = ${filterValue}

//               GROUP BY "InspectionForm"."name" , "Inspection"."inspectionTypeId"
//               ORDER BY "InspectionForm"."name"
//             `;
//   }

//   return toJson(summary);
// };


// function toJson(data) {
//     return JSON.parse(
//       JSON.stringify(data, (_, v) =>
//         typeof v === "bigint" ? `${v}n` : v
//       ).replace(/"(-?\d+)n"/g, (_, a) => a)
//     );
//   }
  