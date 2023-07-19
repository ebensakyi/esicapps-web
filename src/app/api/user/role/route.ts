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

    const pageAccess = await prisma.pageAccess.createMany({
      data: {
        userRoleId: role.id,
      },
      data: pages,
      skipDuplicates: true,
    });


    return NextResponse.json(pageAccess);
  } catch (error: any) {
    return NextResponse.json(error);
  }
}

export async function GET(request: Request) {
  try {
    const data = await prisma.userRole.findMany({
      where: { deleted: 0 },
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(error);
  }
}