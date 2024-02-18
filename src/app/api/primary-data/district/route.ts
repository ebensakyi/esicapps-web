import { NextResponse } from "next/server";
import { prisma } from "@/prisma/db";
import { logActivity } from "@/utils/log";
import { authOptions } from "../../auth/[...nextauth]/options";
import { getServerSession } from "next-auth";

export async function POST(request: Request) {
  try {
    const res = await request.json();
    const session: any = await getServerSession(authOptions);

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



    if (userLevel == 1) {
      if (get_all == 1) {
        query = {
          where: { deleted: 0, regionId: Number(region) },

          include: { Region: true },
          orderBy: {
            name: "asc",
          },
        };
      } else {
        query = {
          where:
            searchText != ""
              ? {
                  OR: [
                    {
                      name: {
                        contains: searchText,
                        mode: "insensitive",
                      },
                    },
                    {
                      abbrv: { contains: searchText, mode: "insensitive" },
                    },

                    {
                      Region: {
                        name: { contains: searchText, mode: "insensitive" },
                      },
                    },
                  ],
                  deleted: 0,
                  regionId:
                  Number(region) == 0 || Number(region) == undefined || Number.isNaN(Number(region))
                  ? undefined
                  : Number(region),
                }
              : {
                  deleted: 0,
                  regionId:
                  Number(region) == 0 || Number(region) == undefined || Number.isNaN(Number(region))
                  ? undefined
                  : Number(region),
                },

          skip: skip,
          take: perPage,
          include: { Region: true },
          orderBy: {
            name: "asc",
          },
        };

        count = await prisma.district.count({
          where: {
            deleted: 0,
            regionId:
            Number(region) == 0 || Number(region) == undefined || Number.isNaN(Number(region))
            ? undefined
            : Number(region),
           
          },
        });
      }
    } else if (userLevel == 2) {
      if (get_all == 1) {
        query = {
          where: { deleted: 0, regionId: Number(region) },

          include: { Region: true },
          orderBy: {
            name: "asc",
          },
        };
      } else {
        query = {
          where:
            searchText != ""
              ? {
                  OR: [
                    {
                      name: {
                        contains: searchText,
                        mode: "insensitive",
                      },
                    },
                    {
                      abbrv: { contains: searchText, mode: "insensitive" },
                    },

                    {
                      Region: {
                        name: { contains: searchText, mode: "insensitive" },
                      },
                    },
                  ],
                  deleted: 0,
                  regionId: Number(userRegion),
                }
              : { deleted: 0, regionId: Number(userRegion) },

          skip: skip,
          take: perPage,
          include: { Region: true },
          orderBy: {
            name: "asc",
          },
        };

        count = await prisma.district.count({
          where: { deleted: 0, regionId: Number(userRegion) },
        });
      }
    } else if (userLevel == 3) {
      if (get_all == 1) {
        query = {
          where: { deleted: 0, regionId: region },

          include: { Region: true },
          orderBy: {
            name: "asc",
          },
        };
      } else {
        query = {
          where:
            searchText != ""
              ? {
                  OR: [
                    {
                      name: {
                        contains: searchText,
                        mode: "insensitive",
                      },
                    },
                    {
                      abbrv: { contains: searchText, mode: "insensitive" },
                    },

                    {
                      Region: {
                        name: { contains: searchText, mode: "insensitive" },
                      },
                    },
                  ],
                  deleted: 0,
                  districtId: Number(userDistrict),
                }
              : { deleted: 0, districtId: Number(userDistrict) },

          skip: skip,
          take: perPage,
          include: { Region: true },
          orderBy: {
            name: "asc",
          },
        };
        count = await prisma.district.count({
          where: { deleted: 0, id: Number(userDistrict) },
        });
      }
    } else {
      query = {
        where: { deleted: 0 },
        include: { Region: true },
        orderBy: {
          name: "asc",
        },
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
