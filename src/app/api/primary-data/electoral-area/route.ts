import { NextResponse } from "next/server";
import { prisma } from "@/prisma/db";
import { logActivity } from "@/utils/log";

import { district } from "../../../../../prisma/seed/district";
import { getServerSession } from "next-auth";
import { authOptions } from "../../auth/[...nextauth]/options";

export async function POST(request: Request) {
  try {
    const res = await request.json();
    const data = {
      name: res.electoralAreaName,
      districtId: Number(res.districtId),
    };

    const response = await prisma.electoralArea.create({ data });

    return NextResponse.json(response);
  } catch (error: any) {
    console.error(error);
    return NextResponse.json(error);
  }
}

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const session: any = await getServerSession(authOptions);
    const selectedDistrict =
      searchParams.get("districtId") == null || ""
        ? undefined
        : Number(searchParams.get("districtId"));
        const get_all = Number(searchParams.get("get_all"));

    const userLevel = session?.user?.userLevelId;
    const userDistrict = session?.user?.districtId;
    const userRegion = session?.user?.regionId;

    let curPage = Number(searchParams.get("page"))||0;

    let perPage = 10;
    let skip = Number((curPage - 1) * perPage)<0?0:  Number((curPage - 1) * perPage);


    let query = {};
    let count = 0 
    // const data = await prisma.electoralArea.findMany({
    //   where: { deleted: 0, districtId: Number(selectedDistrict) },
    // });

    const districtId = Number(searchParams.get("districtId"));
    const mobile = Number(searchParams.get("mobile"));

    if (districtId & mobile) {

      const data = await prisma.electoralArea.findMany({
        where: { deleted: 0, districtId: Number(districtId) },
      });
      return NextResponse.json(data);

    }

    if (userLevel == 1) {
      if (get_all == 1) {
        query = {
          where: { deleted: 0, districtId: selectedDistrict },
          include: {
            District: {
              include: {
                Region: true,
              },
            },
          },
        };
  
      }else{
        query = {
          where: { deleted: 0, districtId: selectedDistrict },
          skip: skip,
          take: perPage,
          include: {
            District: {
              include: {
                Region: true,
              },
            },
          },
        };
         count = await prisma.electoralArea.count({ where: { deleted: 0, districtId: selectedDistrict },});
  
      }
    
      
    } else if (userLevel == 2) {
      if (get_all == 1) {
        query = {
          where: { deleted: 0, districtId: Number(userRegion) },
        
          include: {
            District: {
              include: {
                Region: true,
              },
            },
          },
        };
  
      }else{
        query = {
          where: { deleted: 0, districtId: Number(userRegion) },
          skip: skip,
          take: perPage,
          include: {
            District: {
              include: {
                Region: true,
              },
            },
          },
        };
        count = await prisma.electoralArea.count({  where: { deleted: 0, districtId: Number(userRegion) },});
  
      }
     
    } else if (userLevel == 3) {
      if (get_all == 1) {
        query = {
          where: { deleted: 0, id: Number(userDistrict) },
       
          include: {
            District: {
              include: {
                Region: true,
              },
            },
          },
        };
  
      }else{
        query = {
          where: { deleted: 0, id: Number(userDistrict) },
          skip: skip,
          take: perPage,
          include: {
            District: {
              include: {
                Region: true,
              },
            },
          },
        };
        count = await prisma.electoralArea.count({   where: { deleted: 0, id: Number(userDistrict) },});
  
      }
     
    } else {
      query = { where: { deleted: 0 } };
    }


    const response = await prisma.electoralArea.findMany(query);


    

    return NextResponse.json({
      response,
      curPage: curPage,
      maxPage: Math.ceil(count / perPage),
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(error);
  }
}

export async function PUT(request: Request) {
  try {
    const res = await request.json();

    let id = res.electoralAreaId;
    const data = {
      name: res.electoralAreaName,
      districtId: Number(res.districtId),
    };

    const response = await prisma.electoralArea.update({ where: { id }, data });

    return NextResponse.json(response);
  } catch (error: any) {
    console.error(error);
    return NextResponse.json(error, { status: 500 });
  }
}
