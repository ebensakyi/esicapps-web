import { prisma } from "@/prisma/db";
import { logActivity } from "@/utils/log";
import { getSession } from "@/utils/session-manager";
import {
    groupByWaterSource,
    groupByWaterStorage,
    groupByWaterSourceCondition,
    groupByWaterStorageCondition,
  } from "@/controller/water-query";
  import { toiletAdequacy, toiletCondition,toiletAvailability } from "./queries/liquid-waste-query";
  import {
    wasteCollectorRegistration,
    wasteReceptacle,
    wasteSorting,
  } from "./queries/solid-waste-query";
import { NextResponse } from "next/server";

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
        let { searchParams } = new URL(request.url);
        let filterBy:string|undefined = searchParams.get("filterBy")?.toString();
        let filterValue :string|undefined= searchParams.get("filterValue")?.toString();
        let published = searchParams.get("published");

        let userData = await getSession(req);
        let userLevel = userData?.userLevelId;
      
      
        if (userLevel == 1 && (filterBy == "undefined" || filterBy == "")) {
          filterBy = "undefined";
        }
        if (userLevel == 2 && (filterBy == "undefined" || filterBy == "")) {
          filterBy = "regionId";
          filterValue = userData.regionId;
        }
        if (userLevel == 3 && (filterBy == "undefined" || filterBy == "")) {
          filterBy = "districtId";
          filterValue = userData.districtId;
        }
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
        
            let waterSourceTypeSummary = await groupByWaterSource(
              filterBy,
              filterValue
            );
            let waterStorageTypeSummary = await groupByWaterStorage(
              filterBy,
              filterValue
            );
            let waterSourceConditionSummary = await groupByWaterSourceCondition(
              filterBy,
              filterValue
            );
            let waterStorageConditionSummary = await groupByWaterStorageCondition(
              filterBy,
              filterValue
            );
        
            let toiletAdequacySummary = await toiletAdequacy(filterBy, filterValue);
        
            let toiletConditionSummary = await toiletCondition(filterBy, filterValue);
        
            let wasteCollectorRegistrationSummary = await wasteCollectorRegistration(
              filterBy,
              filterValue
            );
            let wasteSortingSummary = await wasteSorting(filterBy, filterValue);
        
            let wasteReceptacleSummary = await wasteReceptacle(filterBy, filterValue);
            let toiletAvailabilitySummary = await toiletAvailability(filterBy,filterValue)
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

          } catch (error) {
            console.log("Error:.. " + error);
            return NextResponse.json(error);
          }      
  
    } catch (error: any) {
      console.log(error);
      return NextResponse.json(error);
    }
  }
