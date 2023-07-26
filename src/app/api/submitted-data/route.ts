import { prisma } from "@/prisma/db";
import { logActivity } from "@/utils/log";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const res = await request.json();

    //   return new Response(
    //     JSON.stringify({
    //       action: 0,
    //       message: ,
    //     })
    //   );
  } catch (error: any) {
    console.log(error);
    return new Response(JSON.stringify({ message: error.message }));
  }
}

export async function GET(request: Request) {
  try {
    //  const res = await request.json();

    // let userLevelId = Number(userData?.userLevelId);
    // let userRegion = Number(userData?.regionId);
    // let userDistrict = Number(userData?.districtId);
    // let userId = userData?.id;

    // await logActivity("Visited submitted data list", userId);

    const { searchParams } = new URL(request.url);
    const searchText = searchParams.get("searchText") ?? "";

    const formId = Number(searchParams.get("formId"));
    console.log("FormID===>", searchParams);

    const published = Number(searchParams.get("published"));
    // const filterBy = searchParams.get("filterBy");
    // const filterValue = searchParams.get("filterValue");
    const curPage = Number(searchParams.get("page"));

    let perPage = 10;
    let skip = 0; //Number((curPage - 1) * perPage) || 0;

    const response = await prisma.inspection.findMany({
      include: {
        BasicInfoSection: {
          include: {
            Community: {
              include: {
                ElectoralArea: {
                  include: {
                    District: {
                      include: {
                        Region: true,
                      },
                    },
                  },
                },
              },
            },
          },
        },

        User: true,
      },
    });

    return NextResponse.json([]);
  } catch (error) {
    console.log("error:=> ", error);

    return NextResponse.json(error);
  }
}
