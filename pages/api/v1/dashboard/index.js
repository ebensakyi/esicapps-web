import prisma from "../../../../prisma/db";
import { getSession } from "../../../../utils/session-manager";
import {groupByWaterSource, groupByWaterStorage,groupByWaterSourceCondition} from "./queries/water-query";

const post = async (req, res) => {
  try {
  } catch (error) {}
};

const get = async (req, res) => {
  let userData = await getSession(req);
  let filterBy = req?.query?.filterBy;
  let filterValue = Number(req?.query?.filterValue);

  let userLevel = userData?.userLevelId;
  let from = new Date(req?.query?.from);

  try {
    let baselineCount = await prisma.inspection.count({
      where:
        filterBy == "undefined"
          ? { inspectionTypeId: 1, deleted: 0 }
          : { inspectionTypeId: 1, [filterBy]: filterValue, deleted: 0 },
    });

    let reInspectionCount = await prisma.inspection.count({
      where:
        filterBy == "undefined"
          ? { inspectionTypeId: 2, deleted: 0 }
          : { inspectionTypeId: 3, [filterBy]: filterValue, deleted: 0 },
    });
    let followUpCount = await prisma.inspection.count({
      where:
        filterBy == "undefined"
          ? { inspectionTypeId: 3, deleted: 0 }
          : { inspectionTypeId: 3, [filterBy]: filterValue, deleted: 0 },
    });

    let publishedCount = await prisma.inspection.count({
      where:
        filterBy == "undefined"
          ? { isPublished: 1, deleted: 0 }
          : { isPublished: 1, deleted: 0, [filterBy]: filterValue },
    });

    let unPublishedCount = await prisma.inspection.count({
      where:
        filterBy == "undefined"
          ? { isPublished: 0, deleted: 0 }
          : { isPublished: 0, deleted: 0, [filterBy]: filterValue },
    });

    let healthEducActionTakenCount = await prisma.premisesActionTaken.count({
      where:
        filterBy == "undefined"
          ? { actionId: 1, deleted: 0 }
          : {
              actionId: 1,
              deleted: 0,
              ConclusionSection: {
                Inspection: {
                  [filterBy]: filterValue,
                },
              },
            },
    });

    let noticeServedActionTakenCount = await prisma.premisesActionTaken.count({
      where:
        filterBy == "undefined"
          ? { actionId: 2, deleted: 0 }
          : {
              actionId: 2,
              deleted: 0,
              ConclusionSection: {
                Inspection: {
                  [filterBy]: filterValue,
                },
              },
            },
    });
    let criminalSummonsActionTakenCount =
      await prisma.premisesActionTaken.count({
        where:
          filterBy == "undefined"
            ? { actionId: 3, deleted: 0 }
            : {
                actionId: 3,
                deleted: 0,
                ConclusionSection: {
                  Inspection: {
                    [filterBy]: filterValue,
                  },
                },
              },
      });

    const baselineInspection = await prisma.inspection.groupBy({
      by: ["inspectionFormId"],
      _count: {
        inspectionFormId: true,
      },
      where:
        filterBy == "undefined"
          ? { inspectionTypeId: 1, deleted: 0 }
          : {
              inspectionTypeId: 1,
              deleted: 0,

              [filterBy]: filterValue,
            },
    });

    const reInspection = await prisma.inspection.groupBy({
      by: ["inspectionFormId"],
      _count: {
        inspectionFormId: true,
      },
      where:
        filterBy == "undefined"
          ? { inspectionTypeId: 2, deleted: 0 }
          : {
              inspectionTypeId: 2,
              deleted: 0,

              [filterBy]: filterValue,
            },
    });
  let followUpInspection = await prisma.followUpInspection.groupBy({
      by: ["inspectionFormId"],
      _count: {
        inspectionFormId: true,
      },
      where:
        filterBy == "undefined"
          ? { deleted: 0 }
          : {
              deleted: 0,

              [filterBy]: filterValue,
            },
    });

   


    let waterSourceTypeSummary = await groupByWaterSource(filterBy, filterValue);
    let waterStorageTypeSummary = await groupByWaterStorage(filterBy, filterValue);
let waterSourceConditionSummary =  await groupByWaterSourceCondition(filterBy, filterValue);
      
   





    let baselineSummary = await parseSummary(baselineInspection);
    let reinspectionSummary = await parseSummary(reInspection);
    let followupSummary = await parseSummary(followUpInspection);

  
    let dashboardData = {
      waterSourceConditionSummary,
      waterSourceTypeSummary,
      waterStorageTypeSummary,
      baselineSummary,
      reinspectionSummary,
      followupSummary,
      baselineCount,
      reInspectionCount,
      followUpCount,
      publishedCount,
      unPublishedCount,
      // inspectionSummary: [{ label: "", value: "" }],
      actionsTaken: [
        {
          label: "Notice Served",
          value: noticeServedActionTakenCount,
        },
        {
          label: "Summons",
          value: criminalSummonsActionTakenCount,
        },
        {
          label: "Health education",
          value: healthEducActionTakenCount,
        },
      ],
    };

    return res.status(200).json(dashboardData);
  } catch (error) {
    console.log("Error:.. " + error);
    return res.status(200).json(error);
  }
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
