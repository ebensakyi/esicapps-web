export const dynamic = "force-dynamic";

import { prisma } from "@/prisma/db";
import { logActivity } from "@/utils/log";
import { NextResponse } from "next/server";

import { getServerSession } from "next-auth";
import { authOptions } from "../../auth/[...nextauth]/options";



export async function GET(request: Request) {
  try {
    //  const res = await request.json();

    // let userLevelId = Number(userData?.userLevelId);
    // let userRegion = Number(userData?.regionId);
    // let userDistrict = Number(userData?.districtId);
    // let userId = userData?.id;
    const session: any = await getServerSession(authOptions);

    let userId = session?.user?.id;
    // let surname = session?.user?.surname;
    let districtId = session?.user?.districtId;
    let regionId = session?.user?.regionId;
    let userLevel = session?.user?.userLevelId;

    console.log("districtId===> ",districtId);
    console.log("regionId===> ",regionId);
    console.log("userLevel===> ",userLevel);


    await logActivity("Visited follow-up page", userId);

    let { searchParams } = new URL(request.url);

    let filterBy: any = searchParams.get("filterBy")?.toString();
    let filterValue: any = searchParams.get("filterValue")?.toString();

    console.log("filterBy===> ",filterBy);
    console.log("filterValue===> ",filterValue);


    if ((userLevel == 1 && filterBy == "undefined") || filterBy == "") {
      filterBy = "undefined";
      filterValue = "undefined";
    }
    if ((userLevel == 2 && filterBy == "undefined") || filterBy == "") {
      filterBy = "regionId";
      filterValue = regionId;
    }
    if (userLevel == 3) {

      if(filterBy == "undefined" || filterBy == ""){
         filterBy = "districtId";
      filterValue = districtId;
      }
      console.error("Wwe must me here");
      
     
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

    

    let count = await prisma.followUpInspection.count({
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
                Region: {
                  name: { contains: searchText, mode: "insensitive" },
                },
              
            },
            {
                District: {
                  name: { contains: searchText, mode: "insensitive" },
                },
              
            },
            {
           
                User: {
                  surname: { contains: searchText, mode: "insensitive" },
                },
              
            },
            {
                User: {
                  otherNames: { contains: searchText, mode: "insensitive" },
                },
              
            },
            {
                Community: {
                  name: { contains: searchText, mode: "insensitive" },
                },
              
            },
            {
                ElectoralArea: {
                  name: { contains: searchText, mode: "insensitive" },
                },
              
            },
         ],

            inspectionFormId: formId,
            deleted: 0,
            [filterBy]:
              filterValue == "undefined" || filterValue == ""
                ? undefined
                : Number(filterValue),
          
        },
      // : {
      //     Inspection: {
      //       inspectionFormId: formId,
      //       isPublished: published,
      //       deleted: 0,

      //     },
      //   },
    });

    console.log("count ",count);
    console.log("districtID ",districtId);

console.log("filterBy  ",filterBy);
console.log("filterValue  ",filterValue);
console.log("userLevel  ",userLevel);

    // console.log(( searchText != ""  && searchText != "undefined"));

    const response = await prisma.followUpInspection.findMany({
      where: {
        OR: [
          {
            accuracy: {
              contains: searchText,
              mode: "insensitive",
            },
          },
          {
              premisesCode: {
                contains: searchText,
                mode: "insensitive",
              },
            
          },
          {
              Region: {
                name: { contains: searchText, mode: "insensitive" },
              },
       
          },
          {
          
              District: {
                name: { contains: searchText, mode: "insensitive" },
              },
          
          },
          {
              ElectoralArea: {
                name: { contains: searchText, mode: "insensitive" },
              },
       
          },
          {
              Community: {
                name: { contains: searchText, mode: "insensitive" },
      
            },
          },
          {
              User: {
                surname: { contains: searchText, mode: "insensitive" },
       
            },
          },
          {
    
              User: {
                otherNames: { contains: searchText, mode: "insensitive" },
              },

          },
        ],

 
          //isPublished: published,
          inspectionFormId: formId,
          deleted: 0,

          [filterBy]:
            filterValue == "undefined" || filterValue == ""
              ? undefined
              : Number(filterValue),
          // districtId:  filterValue!="undefined"? Number(filterValue):"undefined",
     
      },

      skip: skip,
      take: perPage,
      orderBy: {
        createdAt: "desc",
      },
      include: {
        // Inspection: {
        //   include: {
        //     InspectionType: true,
        //     Region: true,
        //   },
        // },

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
