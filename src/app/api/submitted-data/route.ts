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

    let { searchParams } = new URL(request.url);
       

    let formId = Number(searchParams.get("formId")) || 1;

    let published = Number(searchParams.get("published"));
    let filterBy = searchParams.get("filterBy");
    let filterValue = searchParams.get("filterValue");
    let curPage = Number(searchParams.get("page"));

    let perPage = 2;
    let skip = Number((curPage - 1) * perPage) || 0;
    let searchText =searchParams.get("searchText")?.toString()  == "undefined" ? "" : searchParams.get("searchText")?.toString()


    let count = await prisma.basicInfoSection.count({
      // where: getSearchParams(req, searchText).where,
      where:
        searchText != ""
          ? {
              OR: [
               
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
                inspectionFormId:formId,
                // regionId: filterValue,
                // districtId: filterValue,
              },
            }
          : {
              Inspection: {
                inspectionFormId: formId,
                isPublished: published,
                // regionId: filterValue,
                // districtId: filterValue,
              },
            },
    });
 

    // console.log(( searchText != ""  && searchText != "undefined"));

    const response = await prisma.basicInfoSection.findMany({
      where:
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
                inspectionFormId:formId,
                // regionId: filterValue!="undefined"? Number(filterValue):"undefined",
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
      
   

    console.log(response);
    
    return NextResponse.json({
      response,
      curPage: curPage,
      maxPage: Math.ceil(count / perPage),
    });
  } catch (error) {
    console.log("error:=> ", error);

    return NextResponse.json(error);
  }
}



