import { NextResponse } from "next/server";
import { prisma } from "@/prisma/db";
import { logActivity } from "@/utils/log";
import { getServerSession } from "next-auth";
import { authOptions } from "../../auth/[...nextauth]/options";
import { sendFCM } from "@/utils/send-fcm";
import { logger } from "@/logger";

export async function POST(request: Request) {
  try {
    const res = await request.json();
    const session: any = await getServerSession(authOptions);

    const userId = session?.user?.id;

    let recipientCount = 0;

    const data = {
      title: res.title,
      message: res.message,
      messageType: 1,
      sendingType: Number(res.sendingType),
      individualRecipient:
        res.individualRecipient == undefined || ""
          ? null
          : Number(res.individualRecipient),
      districtId:
        res.districtId == undefined || "" ? null : Number(res.districtId),
      regionId: res.regionId == undefined || "" ? null : Number(res.regionId),
      sender: Number(userId),
    };

  

    const response = await prisma.messaging.create({ data });

    return NextResponse.json(response);
  } catch (error: any) {
    console.log(error);
    logger.error("Messaging==>",error);

    return NextResponse.json(error, { status: 500 });
  }
}

export async function GET(request: Request) {
  try {
    // const data = await prisma.messaging.findMany({
    //   where: { deleted: 0, messageType: 1 },
    //   include: {
    //     SendingType: true,
    //     District: true,
    //     Region: true,
    //     Recipient: true,
    //   },
    // });

    return NextResponse.json([{id:1,title:"Title",message:"Messafe",createdAt:new Date()}]);
  } catch (error) {
    console.log(error);
    logger.error("Messaging==>",error);

    return NextResponse.json(error);
  }
}


export async function DELETE(request: Request) {
  try {
    const res = await request.json();
    let id = Number(res.id)

    const data = await prisma.messaging.update({
      where: { id: id },
      data: {
        deleted: 1,
     
      },
    });

    return NextResponse.json(data);
  } catch (error) {
    console.log(error);
    logger.error("Messaging==>",error);

    return NextResponse.json(error);
  }
}
