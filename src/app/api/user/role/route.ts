import { NextResponse } from "next/server";
import { prisma } from "@/prisma/db";
import { logActivity } from "@/utils/log";
import { getSession } from "@/utils/session-manager";

export async function POST(request: Request) {
  try {
    const res = await request.json();

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

export async function PUT(request: Request) {
  try {
    const res = await request.json();

    let selectedPages = res.selectedPages;
    let userRoleId = res.roleId;


    

    let pages = await selectedPages.map((page: { value: any }) => {
      return {
        pageId: page.value,
        userRoleId: userRoleId,
      };
    });

    await prisma.pageAccess.deleteMany({
      where: {
        userRoleId: userRoleId,
      },
    });


    await prisma.userRole.update({
      data: {
        name: res.roleName,
      },
      where: {
        id: userRoleId,
      },
    });


    
    const pageAccess = await prisma.pageAccess.createMany({
      data: pages,

      // data: {
      //   userRoleId: userRoleId,
      //   userTypeName: name,
      // },
      // skipDuplicates: true,
    });

    return NextResponse.json({});
  } catch (error) {
    return NextResponse.json(error);
  }
}
