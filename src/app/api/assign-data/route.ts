import { NextResponse } from "next/server";
import { prisma } from "@/prisma/db";
import { logActivity } from "@/utils/log";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/options";

export async function POST(request: Request) {
  try {
    const res = await request.json();
    const session: any = await getServerSession(authOptions);

    const userId = session?.user?.id;

    const data = {
      assignedToId: Number(res?.assignedToUser),
      assignedFromId: Number(res?.assignedFromUser),
      userId: userId,
    };

    const response = await prisma.assignData.create({ data });

    return NextResponse.json(response);
  } catch (error: any) {
    console.log(error);

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

    if (res.status) {
      await prisma.assignData.update({
        where: {
          id: Number(res?.id),
        },
        data: { deleted: Math.abs(assignData?.active - 1) },
      });
    }

    return NextResponse.json([]);
  } catch (error: any) {
    return NextResponse.json(error, { status: 500 });
  }
}

export async function GET(request: Request) {
  try {
    let { searchParams } = new URL(request.url);

    let userId = Number(searchParams.get("userId"));

    if (userId) {
      // const count = await prisma.assignData.count({
      //   where: { assignedToId: Number(req.query.userId) },
      // });

      const data = await prisma.assignData.findFirst({
        where: { assignedToId: Number(userId), deleted: 0 },
      });

      return NextResponse.json(data);
    }

    const data = await prisma.assignData.findMany({
      where: { deleted: 0 },
      include: { assignedFrom: true, assignedTo: true },
    });
    return NextResponse.json(data);
  } catch (error) {
    console.log(error);

    return NextResponse.json(error);
  }
}

export async function DELETE(request: Request) {
  try {
    const res = await request.json();

  

    await prisma.assignData.delete({
      where: {
        id: Number(res?.id),
      },
    
    });
  } catch (error) {}
}
