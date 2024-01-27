import { prisma } from "@/prisma/db";
import { logActivity } from "@/utils/log";

import {
  groupByWaterSource,
  groupByWaterStorage,
  groupByWaterSourceCondition,
  groupByWaterStorageCondition,
} from "@/./src/controller/water-query";
import {
  toiletAdequacy,
  toiletCondition,
  toiletAvailability,
} from "@/./src/controller/liquid-waste-query";
import {
  wasteCollectorRegistration,
  wasteReceptacle,
  wasteSorting,
} from "@/./src/controller/solid-waste-query";
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../auth/[...nextauth]/options";

export async function POST(request: Request) {
  try {
    const res = await request.json();

    return NextResponse.json([]);
  } catch (error: any) {
    console.log(error);
    return NextResponse.json(error);
  }
}

export async function GET(request: Request) {
  try {
    const session: any = await getServerSession(authOptions);

    // console.log("Session ", session);
    let userId = session?.user?.id;
    // let surname = session?.user?.surname;
    let districtId = session?.user?.districtId;
    let regionId = session?.user?.regionId;
    let userLevel = session?.user?.userLevelId;

    await logActivity("Visited dashboard page", userId);

    let { searchParams } = new URL(request.url);

    console.log(searchParams);

    let filterBy: any = searchParams.get("filterBy")?.toString();
    let filterValue: any = searchParams.get("filterValue")?.toString();

    // let startDate: any = searchParams.get("from");
    // let endDate: any = searchParams.get("to");

    let startDateParam: any = searchParams.get("from");
    let endDateParam: any = searchParams.get("to");

    // let startDate =
    //   startDateParam != "undefined" ? new Date(startDateParam).toISOString() : undefined;
    // let endDate = endDateParam != "undefined"? new Date(endDateParam).toISOString() : undefined;

    const earliestDate = await prisma.inspection.findMany({
      orderBy: {
        createdAt: "asc",
      },
      select: { createdAt: true },
      take: 1,
    });

    const latestDate = await prisma.inspection.findMany({
      orderBy: {
        createdAt: "desc",
      },
      select: { createdAt: true },

      take: 1,
    });

    let startDate =
      startDateParam == "undefined"||startDateParam =='null'
        ? earliestDate[0].createdAt
        : new Date(startDateParam).toISOString();
    let endDate =
      endDateParam == "undefined"|| endDateParam == 'null'
        ? latestDate[0].createdAt
        : new Date(endDateParam).toISOString();

    console.log("startDate =====> ", startDate);
    console.log("endDate =====> ", endDate);

    if (userLevel == 1 && filterBy == "undefined") {
      filterBy = "undefined";
      filterValue = "undefined";
    }
    if (userLevel == 2 && filterBy == "undefined") {
      filterBy = "regionId";
      filterValue = regionId;
    }
    if (userLevel == 3 && filterBy == "undefined") {
      filterBy = "districtId";
      filterValue = districtId;
    }

    // let baselineCount = await prisma.inspection.count({
    //   where:
    //     filterBy == "undefined"
    //       ? { inspectionTypeId: 1, deleted: 0 }
    //       : { inspectionTypeId: 1, [filterBy]: Number(filterValue), deleted: 0 },
    // });

    console.log("st==> ", startDate);
    console.log("ed ===>", endDate);

    let baselineCount = await prisma.inspection.count({
      where: {
        inspectionTypeId: 1,
        deleted: 0,
        ...(filterBy !== "undefined" && {
          [filterBy]: Number(filterValue),
        }),
        createdAt: {
          gte: startDate,
          lte: endDate,
        },
      },
    });

    // let sanitationReportsCount = await prisma.sanitationReport.count({
    //   where:
    //     filterBy == "undefined" ||
    //     filterBy == "electoralAreaId" ||
    //     filterBy == "communityId"
    //       ? { deleted: 0 }
    //       : { [filterBy]: Number(filterValue), deleted: 0 },
    // });

    let sanitationReportsCount = await prisma.sanitationReport.count({
      where: {
        deleted: 0,
        ...(filterBy &&
        filterBy !== "undefined" &&
        filterBy !== "electoralAreaId" &&
        filterBy !== "communityId"
          ? { [filterBy]: Number(filterValue) }
          : {}),
        createdAt: {
          gte: startDate,
          lte: endDate,
        },
      },
    });

    let reInspectionCount = await prisma.inspection.count({
      where:
        filterBy == "undefined"
          ? {
              inspectionTypeId: 2,
              deleted: 0,
              createdAt: {
                gte: startDate,
                lte: endDate,
              },
            }
          : {
              inspectionTypeId: 2,
              [filterBy]: Number(filterValue),
              deleted: 0,
              createdAt: {
                gte: startDate,
                lte: endDate,
              },
            },
    });

    let followUpCount = await prisma.followUpInspection.count({
      where:
        filterBy == "undefined"
          ? {
              deleted: 0,
              createdAt: {
                gte: startDate,
                lte: endDate,
              },
            }
          : {
              [filterBy]: Number(filterValue),
              deleted: 0,
              createdAt: {
                gte: startDate,
                lte: endDate,
              },
            },
    });

    let publishedCount = await prisma.inspection.count({
      where:
        filterBy == "undefined"
          ? {
              isPublished: 1,
              deleted: 0,
              createdAt: {
                gte: startDate,
                lte: endDate,
              },
            }
          : {
              isPublished: 1,
              deleted: 0,
              [filterBy]: Number(filterValue),
              createdAt: {
                gte: startDate,
                lte: endDate,
              },
            },
    });

    let unPublishedCount = await prisma.inspection.count({
      where:
        filterBy == "undefined"
          ? {
              isPublished: 0,
              deleted: 0,
              createdAt: {
                gte: startDate,
                lte: endDate,
              },
            }
          : {
              isPublished: 0,
              deleted: 0,
              [filterBy]: Number(filterValue),
              createdAt: {
                gte: startDate,
                lte: endDate,
              },
            },
    });

    // let healthEducActionTakenCount = await prisma.premisesActionTaken.count({
    //   where:
    //     filterBy == "undefined"
    //       ? { actionId: 1, deleted: 0 }
    //       : {
    //           actionId: 1,
    //           deleted: 0,
    //           ConclusionSection: {
    //             Inspection: {
    //               [filterBy]: Number(filterValue),
    //             },
    //           },
    //         },
    // });

    // let noticeServedActionTakenCount = await prisma.premisesActionTaken.count({
    //   where:
    //     filterBy == "undefined"
    //       ? { actionId: 2, deleted: 0 }
    //       : {
    //           actionId: 2,
    //           deleted: 0,
    //           ConclusionSection: {
    //             Inspection: {
    //               [filterBy]: Number(filterValue),
    //             },
    //           },
    //         },
    // });
    // let criminalSummonsActionTakenCount =
    //   await prisma.premisesActionTaken.count({
    //     where:
    //       filterBy == "undefined"
    //         ? { actionId: 3, deleted: 0 }
    //         : {
    //             actionId: 3,
    //             deleted: 0,
    //             ConclusionSection: {
    //               Inspection: {
    //                 [filterBy]: Number(filterValue),
    //               },
    //             },
    //           },
    //   });

    let healthEducActionTakenCount = await getCountByActionId(prisma, {
      actionId: 1,
      filterBy,
      filterValue,
      startDate,
      endDate,
    });
    let noticeServedActionTakenCount = await getCountByActionId(prisma, {
      actionId: 2,
      filterBy,
      filterValue,
      startDate,
      endDate,
    });
    let criminalSummonsActionTakenCount = await getCountByActionId(prisma, {
      actionId: 3,
      filterBy,
      filterValue,
      startDate,
      endDate,
    });

    const baselineInspection = await prisma.inspection.groupBy({
      by: ["inspectionFormId"],
      _count: {
        inspectionFormId: true,
      },
      where:
        filterBy == "undefined"
          ? { inspectionTypeId: 1, deleted: 0, createdAt: {
            gte: startDate,
            lte: endDate,
          }, }
          : {
              inspectionTypeId: 1,
              deleted: 0,
              createdAt: {
                gte: startDate,
                lte: endDate,
              },
              [filterBy]: Number(filterValue),
            },
    });

    const reInspection = await prisma.inspection.groupBy({
      by: ["inspectionFormId"],
      _count: {
        inspectionFormId: true,
      },
      where:
        filterBy == "undefined"
          ? { inspectionTypeId: 2, deleted: 0, createdAt: {
            gte: startDate,
            lte: endDate,
          }, }
          : {
              inspectionTypeId: 2,
              deleted: 0,
              createdAt: {
                gte: startDate,
                lte: endDate,
              },
              [filterBy]: Number(filterValue),
            },
    });
    let followUpInspection = await prisma.followUpInspection.groupBy({
      by: ["inspectionFormId"],
      _count: {
        inspectionFormId: true,
      },
      where:
        filterBy == "undefined"
          ? { deleted: 0, createdAt: {
            gte: startDate,
            lte: endDate,
          }, }
          : {
              deleted: 0,
              createdAt: {
                gte: startDate,
                lte: endDate,
              },
              [filterBy]: Number(filterValue),
            },
    });

    let waterSourceTypeSummary = await groupByWaterSource(
      filterBy,
      filterValue,startDate,endDate
    );
    let waterStorageTypeSummary = await groupByWaterStorage(
      filterBy,
      filterValue,startDate,endDate
    );
    let waterSourceConditionSummary = await groupByWaterSourceCondition(
      filterBy,
      filterValue,startDate,endDate
    );
    let waterStorageConditionSummary = await groupByWaterStorageCondition(
      filterBy,
      filterValue,startDate,endDate
    );

    let toiletAdequacySummary = await toiletAdequacy(filterBy, filterValue,startDate,endDate);

    let toiletConditionSummary = await toiletCondition(filterBy, filterValue,startDate,endDate);

    let wasteCollectorRegistrationSummary = await wasteCollectorRegistration(
      filterBy,
      filterValue,startDate,endDate
    );
    let wasteSortingSummary = await wasteSorting(filterBy, filterValue,startDate,endDate);

    let wasteReceptacleSummary = await wasteReceptacle(filterBy, filterValue,startDate,endDate);
    let toiletAvailabilitySummary = await toiletAvailability(
      filterBy,
      filterValue,startDate,endDate
    );
    // let inspectionSummary = await inspection(filterBy, filterValue);

    let baselineSummary = await parseSummary(baselineInspection);
    let reinspectionSummary = await parseSummary(reInspection);
    let followupSummary = await parseSummary(followUpInspection);

    let dashboardData = {
      // inspectionSummary,
      toiletAvailabilitySummary,
      wasteReceptacleSummary,
      wasteSortingSummary,
      wasteCollectorRegistrationSummary,
      toiletConditionSummary,
      toiletAdequacySummary,
      waterSourceConditionSummary,
      waterStorageConditionSummary,
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
      sanitationReportsCount,
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

    return NextResponse.json(dashboardData);
  } catch (error: any) {
    console.log(error);
    return NextResponse.json(error);
  }
}
const parseSummary = async (baselineInspection: any) => {
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

interface PremisesActionTakenFilter {
  actionId: number;
  filterBy: string;
  filterValue: number;
  startDate?: any;
  endDate?: any;
}

async function getCountByActionId(
  prisma: any,
  {
    actionId,
    filterBy,
    filterValue,
    startDate,
    endDate,
  }: PremisesActionTakenFilter
) {
  return await prisma.premisesActionTaken.count({
    where:
      filterBy === "undefined"
        ? {
            actionId,
            deleted: 0,
            createdAt: {
              gte: startDate,
              lte: endDate,
            },
          }
        : {
            actionId,
            deleted: 0,
            ConclusionSection: {
              Inspection: {
                [filterBy]: Number(filterValue),
              },
            },
            createdAt: {
              gte: startDate,
              lte: endDate,
            },
          },
  });
}
