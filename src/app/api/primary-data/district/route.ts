import { NextResponse } from "next/server";
import { prisma } from "@/prisma/db";
import { logActivity } from "@/utils/log";
import { authOptions } from "../../auth/[...nextauth]/options";
import { getServerSession } from "next-auth";

export async function POST(request: Request) {
  try {
    const res = await request.json();
    const session: any = await getServerSession(authOptions);
    if (!session)
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const data = {
      name: res.districtName,
      regionId: Number(res.regionId),
      abbrv: res.abbrv,
    };
    const response = await prisma.district.create({ data });

    return NextResponse.json(response);
  } catch (error: any) {
    console.log(error);
    return NextResponse.json(error);
  }
}

export async function GET(request: Request) {
  try {
    const session: any = await getServerSession(authOptions);
    if (!session)
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const { searchParams } = new URL(request.url);

    const userLevel = session?.user?.userLevelId;
    const userDistrict = session?.user?.districtId;
    const userRegion = session?.user?.regionId;

    const selectedRegion = searchParams.get("regionId");

    let region = userRegion || selectedRegion;

    const searchText =
      searchParams.get("searchText")?.toString() == "undefined"
        ? ""
        : searchParams.get("searchText")?.toString();

    const get_all = Number(searchParams.get("get_all"));

    let query = {};

    let curPage = Number.isNaN(Number(searchParams.get("page")))
      ? 1
      : Number(searchParams.get("page"));

    let perPage = 10;
    let skip =
      Number((curPage - 1) * perPage) < 0 ? 0 : Number((curPage - 1) * perPage);

    let count = 0;

    const getRegionId = (region: any) =>
      Number(region) == 0 ||
      Number(region) == undefined ||
      Number.isNaN(Number(region))
        ? undefined
        : Number(region);

    const getSearchCondition = (searchText: any) => ({
      OR: [
        { name: { contains: searchText, mode: "insensitive" } },
        { abbrv: { contains: searchText, mode: "insensitive" } },
        { Region: { name: { contains: searchText, mode: "insensitive" } } },
      ],
    });

    const baseQuery = {
      where: { deleted: 0 },
      include: {
        Region: true,
        _count: {
          
          select: { ElectoralArea: true ,Community:true}, // Count ElectoralArea for each district
        },
      },
      orderBy: { name: "asc" },
    };

    if (userLevel == 1) {
      const regionId = getRegionId(region);

      if (get_all == 1) {
        query = {
          ...baseQuery,
          where: { ...baseQuery.where, regionId },
        };
      } else {
        query = {
          ...baseQuery,
          where: {
            ...baseQuery.where,
            ...(searchText ? getSearchCondition(searchText) : {}),
            regionId,
          },
          skip,
          take: perPage,
        };

        count = await prisma.district.count({
          where: { ...baseQuery.where, regionId },
        });
      }
    } else if (userLevel == 2) {
      if (get_all == 1) {
        query = {
          ...baseQuery,
          where: { ...baseQuery.where, regionId: Number(region) },
        };
      } else {
        query = {
          ...baseQuery,
          where: {
            ...baseQuery.where,
            ...(searchText ? getSearchCondition(searchText) : {}),
            regionId: Number(userRegion),
          },
          skip,
          take: perPage,
        };

        count = await prisma.district.count({
          where: { ...baseQuery.where, regionId: Number(userRegion) },
        });
      }
    } else if (userLevel == 3) {
      if (get_all == 1) {
        query = {
          ...baseQuery,
          where: { ...baseQuery.where, regionId: region },
        };
      } else {
        query = {
          ...baseQuery,
          where: {
            ...baseQuery.where,
            ...(searchText ? getSearchCondition(searchText) : {}),
            id: Number(userDistrict),
          },
          skip,
          take: perPage,
        };

        count = await prisma.district.count({
          where: { ...baseQuery.where, id: Number(userDistrict) },
        });
      }
    } else {
      query = {
        ...baseQuery,
        where: { ...baseQuery.where, id: Number(userDistrict) },
      };
    }

    const response = await prisma.district.findMany(query);

    return NextResponse.json({
      response,
      curPage: curPage,
      maxPage: Math.ceil(count / perPage),
    });
  } catch (error) {
    console.log(error);
    // return NextResponse.json(error);
  }
}

export async function PUT(request: Request) {
  try {
    const res = await request.json();
    const session: any = await getServerSession(authOptions);

    let districtId = res.districtId;

    const data = {
      name: res.districtName,
      regionId: Number(res.regionId),
      abbrv: res.abbrv,
    };

    const response = await prisma.district.update({
      where: { id: Number(districtId) },
      data,
    });

    return NextResponse.json(response);
  } catch (error: any) {
    console.log(error);
    return NextResponse.json(error);
  }
}
