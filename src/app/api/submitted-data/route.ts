export const dynamic = "force-dynamic";

import { prisma } from "@/prisma/db";
import { logActivity } from "@/utils/log";
import { NextResponse } from "next/server";

import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/options";

export async function GET(request: Request) {
  try {
  
    const session: any = await getServerSession(authOptions);

    if (!session)
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });


    let userId = session?.user?.id;
    // let surname = session?.user?.surname;
    let districtId = session?.user?.districtId;
    let regionId = session?.user?.regionId;
    let userLevel = session?.user?.userLevelId;

    await logActivity("Visited dashboard page", userId);

    let { searchParams } = new URL(request.url);

    let filterBy: any = searchParams.get("filterBy")?.toString();
    let filterValue: any = searchParams.get("filterValue")?.toString();

    let dataType: any = (searchParams.get("dataType") === "" || searchParams.get("dataType") === "undefined" || searchParams.get("dataType") === null) ? undefined : Number(searchParams.get("dataType"));


    if ((userLevel == 1 && filterBy == "undefined") || filterBy == "") {
      filterBy = "undefined";
      filterValue = "undefined";
    }
    if ((userLevel == 2 && filterBy == "undefined") || filterBy == "") {
      filterBy = "regionId";
      filterValue = regionId;
    }
    if ((userLevel == 3 && filterBy == "undefined") || filterBy == "") {
      filterBy = "districtId";
      filterValue = districtId;
    }

    await logActivity("Visited submitted data list", session?.user?.id);

    let formId = Number(searchParams.get("formId")) || 1;

    let published = Number.isNaN(Number(searchParams.get("published")))
      ? undefined
      : Number(searchParams.get("published"));

    // let deleted = Number(searchParams.get("deleted"));

    let curPage = Number.isNaN(Number(searchParams.get("page")))
      ? 1
      : Number(searchParams.get("page"));

    let perPage = 10;
    let skip =
      Number((curPage - 1) * perPage) < 0 ? 0 : Number((curPage - 1) * perPage);

    let searchText =
      searchParams.get("searchText")?.toString() == "undefined"
        ? ""
        : searchParams.get("searchText")?.toString();

    let count = await prisma.basicInfoSection.count({
      // where: getSearchParams(req, searchText).where,
      where:
        // searchText != ""
        //   ?
        {
          OR: [
            {
              accuracy: {
                contains: searchText,
                mode: "insensitive",
              },
            },
            {
              Inspection: {
                Region: {
                  name: { contains: searchText, mode: "insensitive" },
                },
              },
            },
            {
              Inspection: {
                District: {
                  name: { contains: searchText, mode: "insensitive" },
                },
              },
            },
            {
              Inspection: {
                User: {
                  surname: { contains: searchText, mode: "insensitive" },
                },
              },
            },
            {
              Inspection: {
                User: {
                  otherNames: { contains: searchText, mode: "insensitive" },
                },
              },
            },
            {
              Inspection: {
                Community: {
                  name: { contains: searchText, mode: "insensitive" },
                },
              },
            },
            {
              Inspection: {
                ElectoralArea: {
                  name: { contains: searchText, mode: "insensitive" },
                },
              },
            },
          ],

          Inspection: {
            isPublished: published,
            inspectionFormId: formId,
            deleted: 0,
            inspectionKind: dataType,
            [filterBy]:
              filterValue == "undefined" || filterValue == ""
                ? undefined
                : Number(filterValue),
          },
        },
      // : {
      //     Inspection: {
      //       inspectionFormId: formId,
      //       isPublished: published,
      //       deleted: 0,

      //     },
      //   },
    });

    // console.log(( searchText != ""  && searchText != "undefined"));

    const response = await prisma.basicInfoSection.findMany({
      where: {
        OR: [
          {
            accuracy: {
              contains: searchText,
              mode: "insensitive",
            },
          },
          {
            Inspection: {
              premisesCode: {
                contains: searchText,
                mode: "insensitive",
              },
            },
          },
          {
            Inspection: {
              Region: {
                name: { contains: searchText, mode: "insensitive" },
              },
            },
          },
          {
            Inspection: {
              District: {
                name: { contains: searchText, mode: "insensitive" },
              },
            },
          },
          {
            Inspection: {
              ElectoralArea: {
                name: { contains: searchText, mode: "insensitive" },
              },
            },
          },
          {
            Inspection: {
              Community: {
                name: { contains: searchText, mode: "insensitive" },
              },
            },
          },
          {
            Inspection: {
              User: {
                surname: { contains: searchText, mode: "insensitive" },
              },
            },
          },
          {
            Inspection: {
              User: {
                otherNames: { contains: searchText, mode: "insensitive" },
              },
            },
          },
        ],

        Inspection: {
          isPublished: published,
          inspectionFormId: formId,
          deleted: 0,
          inspectionKind: dataType,

          [filterBy]:
            filterValue == "undefined" || filterValue == ""
              ? undefined
              : Number(filterValue),
          // districtId:  filterValue!="undefined"? Number(filterValue):"undefined",
        },
      },

      skip: skip,
      take: perPage,
      orderBy: {
        createdAt: "desc",
      },
      include: {
        Inspection: {
          include: {
            InspectionType: true,
            InspectionForm: true,

            Region: true,
          },
        },

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
        User: true,
      },
    });

    return NextResponse.json({
      response,
      curPage: curPage,
      maxPage: Math.ceil(count / perPage),
    });
  } catch (error) {
    console.log(error);

    return NextResponse.json(error);
  }
}

export async function POST(request: Request) {
  try {
    const session: any = await getServerSession(authOptions);

    let userId = session?.user?.id;

    const res = await request.json();
    let inspectionsIds = res.selectedInspections;
    let publishStatus = Number(res.publishStatus);

    

    inspectionsIds.map(async (id: any) => {
      // let inspection = await prisma.inspection.findFirst({
      //   where: {
      //     id: id,
      //   },
      // });
      // let isPublished = inspection?.isPublished || 0;

      await prisma.inspection.update({
        data: {
          isPublished: publishStatus,
          publishedById: Number(userId),
        },
        where: {
          id: id,
        },
      });
    });

    // let inspectionId = res.id;

    await logActivity(`Published inspection ${inspectionsIds}`, userId);

    return NextResponse.json({ status: 200 });
  } catch (error) {
    console.log(error);
  }
}




export async function DELETE(request: Request) {
  try {
    const session: any = await getServerSession(authOptions);
    if (!session)
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    let userId = session?.user?.id;

    const res = await request.json();    

    let inspectionsIds = res;

    

    inspectionsIds.map(async (id: any) => {

      await prisma.inspection.update({
        data: {
          deleted:1
        },
        where: {
          id: id,
        },
      });
    });


    // await logActivity(`Published inspection ${inspectionsIds}`, userId);

    return NextResponse.json({ status: 200 });
  } catch (error) {
    console.log(error);
  }
}
