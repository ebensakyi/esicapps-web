import prisma from "../../../../prisma/db";
import {groupByWaterSource} from "./queries/water-query";

const get = async (req, res) => {
  let filterBy = req?.query?.filterBy;
  let filterValue = Number(req?.query?.filterValue);

  let waterSourceTypeSummary = await groupByWaterSource(filterBy, filterValue);

  // let waterSourceTypeSummary = await prisma.premisesWaterSources.groupBy({
  //   by: ["waterSourceId"],
  //   _count: {
  //     waterSourceId: true,
  //   },
  // })
  // const groupTransactions = await prisma.premisesWaterSources.findMany({
  //   include: {
  //     WaterSourceType: true,
  //   },
  // });

    // let    waterSourceTypeSummary =
    //     await prisma.$queryRaw`SELECT  "PremisesWaterSources"."waterSourceId","WaterSourceType"."name", COUNT("WaterSection"."id") AS "sourceCount"

    // FROM "WaterSection"
    // LEFT JOIN "PremisesWaterSources"  ON "PremisesWaterSources"."waterSectionId" = "WaterSection"."id"
    // LEFT JOIN "WaterSourceType"  ON "PremisesWaterSources"."waterSourceId" = "WaterSourceType"."id"
    // LEFT JOIN "Inspection"  ON "Inspection"."id" = "WaterSection"."inspectionId"

    // WHERE "WaterSourceType"."id" IS NOT NULL AND "Inspection"."electoralAreaId" = ${filterValue}
    // GROUP BY "WaterSourceType"."name", "PremisesWaterSources"."waterSourceId" `;
   let safeWaterSourceCount = await prisma.waterSection.groupBy({
      by: ["waterSourceConditionId"],
      where:{
        NOT: {
          waterSourceConditionId: null
        },
      }
      // where: {
      //   deleted: 0,
      //   waterSourceConditionId: 1,
      //   Inspection: {
      //     communityId: filterValue,
      //   },
      // },
    });

  

  return res.status(200).json(safeWaterSourceCount);
};

function toJson(data) {
  return JSON.parse(
    JSON.stringify(data, (_, v) =>
      typeof v === "bigint" ? `${v}n` : v
    ).replace(/"(-?\d+)n"/g, (_, a) => a)
  );
}

const parseSummary = async (baselineInspection) => {
  let data = [];
  const forms = [
    "Residential",
    "Eatery",
    "Health",
    "Hospitality",
    "Institution",
    "Insdustry",
    "Market",
    "Sanitary",
  ];

  for (let i = 0; i < baselineInspection.length; i++) {
    let obj = {
      label: forms[baselineInspection[i].inspectionFormId - 1],
      value: baselineInspection[i]._count.inspectionFormId,
    };
    data.push(obj);
  }
  return data;
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
