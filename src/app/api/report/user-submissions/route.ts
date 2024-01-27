export const dynamic = "force-dynamic";

import { prisma } from "@/prisma/db";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { authOptions } from "../../auth/[...nextauth]/options";

export async function GET(request: Request) {
  try {
    const session: any = await getServerSession(authOptions);

    let userId = session?.user?.id;
    // let surname = session?.user?.surname;
    let loginUserDistrictId = session?.user?.districtId;
    let loginUserRegionId = session?.user?.regionId;
    let loginUserLevel = session?.user?.userLevelId;
    let { searchParams } = new URL(request.url);

    let filterBy: any = searchParams.get("filterBy")?.toString();
    let filterValue: any = searchParams.get("filterValue")?.toString();

    let curPage = Number.isNaN(Number(searchParams.get("page")))
      ? 1
      : Number(searchParams.get("page"));
    let perPage = 10;
    let skip =
      Number((curPage - 1) * perPage) < 0 ? 0 : Number((curPage - 1) * perPage);

    // if ((loginUserLevel == 1 && filterBy == "undefined") || filterBy == "") {
    //   filterBy = "undefined";
    //   filterValue = "undefined";
    // }
    // if ((loginUserLevel == 2 && filterBy == "undefined") || filterBy == "") {
    //   filterBy = "regionId";
    //   filterValue = regionId;
    // }
    // if ((loginUserLevel == 3 && filterBy == "undefined") || filterBy == "") {
    //   filterBy = "districtId";
    //   filterValue = districtId;
    // }

    if (loginUserLevel == 3) {
      let count = await prisma.user.count({
        where: {
          districtId: Number(loginUserDistrictId),
          deleted: 0,
        },
      });
      const response = await prisma.user.findMany({
        where: { districtId: Number(loginUserDistrictId) },
        include: {
          Region: true,
          District: true,
          Inspection: {
            select: {
              createdAt: true,
            },
            orderBy: {
              createdAt: 'desc',
            },
            take: 1, 
          },
          _count: {
            select: { Inspection: true },
          },
        },
        skip: skip,
        take: perPage,
        orderBy: {
          createdAt: "desc",
        },
      });
      return NextResponse.json({
        response,
        curPage: curPage,
        maxPage: Math.ceil(count / perPage),
      });
    }

    if (loginUserLevel == 2) {
      let count = await prisma.user.count({
        where: {
          regionId: Number(loginUserRegionId),
          deleted: 0,
        },
      });
      const response = await prisma.user.findMany({
        where: { regionId: Number(loginUserRegionId) },

        include: {
          Region: true,
          District: true,
          _count: {
            select: { Inspection: true },
          },
        },
        skip: skip,
        take: perPage,
        orderBy: {
          createdAt: "desc",
        },
      });
      return NextResponse.json({
        response,
        curPage: curPage,
        maxPage: Math.ceil(count / perPage),
      });
    }
    if (loginUserLevel == 1) {
      let count = await prisma.user.count({
        where: {
          deleted: 0,
        },
      });
      const response = await prisma.user.findMany({
        include: {
          Region: true,
          District: true,
          _count: {
            select: { Inspection: true },
          },
        },
        skip: skip,
        take: perPage,
        orderBy: {
          createdAt: "desc",
        },
      });
      return NextResponse.json({
        response,
        curPage: curPage,
        maxPage: Math.ceil(count / perPage),
      });
    }

    return NextResponse.json({});
  } catch (e) {
    console.log("ee ", e);
    return NextResponse.json(e);
  }
}
