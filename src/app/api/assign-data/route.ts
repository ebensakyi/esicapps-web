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

    // let recipientCount = 0;
    // let messageId = res.messageId;

    // const data = {
    //   title: res.title,
    //   message: res.message,
    //   messageType: 1,
    //   sendingType: Number(res.sendingType),
    //   individualRecipient:
    //     res.individualRecipient == undefined || ""
    //       ? null
    //       : Number(res.individualRecipient),
    //   districtId:
    //     res.districtId == undefined || "" ? null : Number(res.districtId),
    //   regionId: res.regionId == undefined || "" ? null : Number(res.regionId),
    //   sender: Number(userId),
    // };

    // const response = await prisma.messaging.update({
    //   data: data,
    //   where: {
    //     id: messageId,
    //   },
    // });

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
