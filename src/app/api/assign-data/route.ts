export const dynamic = "force-dynamic";

import { NextResponse } from "next/server";
import { prisma } from "@/prisma/db";
import { logActivity } from "@/utils/log";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/options";
import { logger } from "@/logger";

export async function POST(request: Request) {
  try {
    const res = await request.json();
    const session: any = await getServerSession(authOptions);

    const userId = session?.user?.id;

    await logActivity(
      `Assigned data from ${res?.assignedFromUser} to ${res?.assignedToUser}`,
      userId
    );

    let hasAssigned: any = await prisma.assignData.count({
      where: { assignedToId: Number(res.assignedToUser) },
    });

    if (hasAssigned) {
      return NextResponse.json({}, { status: 201 });
    }

    const data = {
      assignedToId: Number(res?.assignedToUser),
      assignedFromId: Number(res?.assignedFromUser),
      userId: userId,
    };
    const response = await prisma.assignData.create({ data });

    return NextResponse.json(response);
  } catch (error: any) {
    console.log(error);
    logger.error("AssignData", error);
    return NextResponse.json(error, { status: 500 });
  }
}

export async function PUT(request: Request) {
  try {
    const res = await request.json();
    const session: any = await getServerSession(authOptions);

    const userId = session?.user?.id;

    let assignData: any = await prisma.assignData.findFirst({
      where: { id: Number(res.id) },
    });

    await prisma.assignData.update({
      where: {
        id: Number(res?.id),
      },
      data: { deleted: Math.abs(assignData?.deleted - 1) },
    });

    return NextResponse.json({ status: 200 });
  } catch (error: any) {
    console.log(error);
    logger.error("AssignData", error);

    return NextResponse.json(error, { status: 500 });
  }
}

export async function GET(request: Request) {
  try {
    let { searchParams } = new URL(request.url);

    let userId = Number(searchParams.get("userId"));

    const session: any = await getServerSession(authOptions);

    await logActivity("Visited data assignment page", session?.user?.id);

    //MOBILE USER CHECK IF THERES ASSIGNMENT
    if (userId) {
      const data = await prisma.assignData.findFirst({
        where: { assignedToId: Number(userId) },
      });

      return NextResponse.json(data);
    }

    //ALL DATA ASSIGNMENT ON WEB
    const data = await prisma.assignData.findMany({
      include: {
        assignedFrom: {
          include: {
            District: true,
          },
        },
        assignedTo: {
          include: {
            District: true,
          },
        },
      },
    });
    return NextResponse.json(data);
  } catch (error) {
    console.log(error);
    logger.error("AssignData", error);

    return NextResponse.json(error);
  }
}
