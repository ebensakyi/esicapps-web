export const dynamic = "force-dynamic";

import { NextResponse } from "next/server";
import { prisma } from "@/prisma/db";
import { logActivity } from "@/utils/log";

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

    const searchText =
    searchParams.get("searchText")?.toString() == "undefined"
      ? ""
      : searchParams.get("searchText")?.toString();

    const userLevel = session?.user?.userLevelId;
    const userDistrict = session?.user?.districtId;
    const userRegion = session?.user?.regionId;


    let district = userDistrict || selectedDistrict;


    // console.log("userLevel===> ",userLevel);

    let curPage = Number.isNaN(Number(searchParams.get("page")))
      ? 1
      : Number(searchParams.get("page"));

    let perPage = 10;
    let skip =
      Number((curPage - 1) * perPage) < 0 ? 0 : Number((curPage - 1) * perPage);

    let query = {};
    let count = 0;
  

    const getDistrictId = (district: any) =>
      Number(district) === 0 || Number(district) === undefined || Number.isNaN(Number(district))
        ? undefined
        : Number(district);
    
    const getSearchCondition = (searchText: string) => ({
      OR: [
        { name: { contains: searchText, mode: "insensitive" } },
        { District: { name: { contains: searchText, mode: "insensitive" } } },
        { District: { Region: { name: { contains: searchText, mode: "insensitive" } } } },
      ],
    });
    
    const baseInclude = {  _count: {
            select: { Community: true },
          },
      District: {
        include: {
          Region: true,
        
        },
      },
    };
    
    const buildQuery = (
      userLevel: number,
      searchText: string | undefined,
      district: any,
      userRegion: any,
      get_all: number,
      userDistrict: any,
      skip: number,
      perPage: number
    ) => {
      const districtId = getDistrictId(district);
      const safeSearchText = searchText || ""; // Ensure searchText is a string
    
      if (userLevel === 1) {
        if (get_all === 1) {
          return {
            where: { deleted: 0, districtId: selectedDistrict },
            include: baseInclude,
            orderBy: { name: "asc" },
          };
        } else {
          return {
            where: {
              ...getSearchCondition(safeSearchText),
              deleted: 0,
              districtId,
            },
            skip,
            take: perPage,
            include: baseInclude,
            orderBy: { name: "asc" },
          };
        }
      } else if (userLevel === 2) {
        if (get_all === 1) {
          return {
            where: { deleted: 0, districtId: districtId },
            include: baseInclude,
          };
        } else {
          return {
            where: safeSearchText
              ? {
                  ...getSearchCondition(safeSearchText),
                  deleted: 0,
                  District: { regionId: Number(userRegion) },
                }
              : { deleted: 0, District: { regionId: Number(userRegion) } },
            skip,
            take: perPage,
            include: baseInclude,
          };
        }
      } else if (userLevel === 3) {
        if (get_all === 1) {
          return {
            where: { deleted: 0, districtId: Number(userDistrict) },
            include: baseInclude,
          };
        } else {
          return {
            where: {
              ...getSearchCondition(safeSearchText),
              deleted: 0,
              districtId: Number(userDistrict),
            },
            skip,
            take: perPage,
            include: baseInclude,
          };
        }
      } else {
        return { where: { deleted: 0 }, include: baseInclude };
      }
    };
    
    
    const countQuery = async (
      userLevel: number,
      searchText: string | undefined,
      district: any,
      userRegion: any,
      userDistrict: any
    ) => {
      const safeSearchText = searchText || ""; // Ensure searchText is a string
      const districtId = getDistrictId(district);
    
      const baseWhere: any = {
        deleted: 0,
        districtId: userLevel === 1 ? districtId : userLevel === 3 ? Number(userDistrict) : undefined,
      };
    
      let whereClause: any = baseWhere;
    
      if (userLevel === 1 || userLevel === 3) {
        if (safeSearchText) {
          whereClause = {
            ...baseWhere,
            OR: [
              { name: { contains: safeSearchText, mode: "insensitive" } },
              { District: { name: { contains: safeSearchText, mode: "insensitive" } } },
              { District: { Region: { name: { contains: safeSearchText, mode: "insensitive" } } } },
            ],
          };
        }
      } else if (userLevel === 2) {
        whereClause = {
          deleted: 0,
          District: { regionId: Number(userRegion) },
        };
      }
    
      return await prisma.electoralArea.count({
        where: whereClause,
      });
    };
    
    
    
    
    // Usage
    query = buildQuery(userLevel, searchText, district, userRegion, get_all, userDistrict, skip, perPage);
    count = await countQuery(userLevel, searchText, district, userRegion, userDistrict);
    


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
