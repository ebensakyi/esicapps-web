import { NextResponse } from "next/server";
import { prisma } from "@/prisma/db";
import { logActivity } from "@/utils/log";
import { getSession } from "@/utils/session-manager";

export async function POST(request: Request) {
  try {
    const res = await request.json();

    console.log(res);

    let selectedPages = res.selectedPages;

    const data = {
      name: res.roleName,
    };
    const role = await prisma.userRole.create({ data });

    let pages = await selectedPages.map((page: any) => {
      return {
        pageId: page.value,
        userRoleId: role.id,
      };
    });

    // console.log(pages);

    const pageAccess = await prisma.pageAccess.createMany({
      data: pages,

      // data: {
      //   userRoleId: role.id,
      // },
      // skipDuplicates: true,
    });

    console.log("pageAccess", pageAccess);

    return NextResponse.json(pageAccess);
  } catch (error: any) {
    console.log(error);

    return NextResponse.json(error);
  }
}

export async function GET(request: Request) {
  try {
    const data = await prisma.userRole.findMany({
      where: { deleted: 0 },
      include: { PageAccess: { include: { Page: true } } },
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(error);
  }
}
