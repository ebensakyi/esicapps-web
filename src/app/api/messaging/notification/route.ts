import { NextResponse } from "next/server";
import { prisma } from "@/prisma/db";
import { logActivity } from "@/utils/log";
import { getServerSession } from "next-auth";
import { authOptions } from "../../auth/[...nextauth]/options";
import { sendFCM } from "@/utils/send-fcm";
import { region } from "../../../../../prisma/seed/region";

export async function POST(request: Request) {
  try {
    const res = await request.json();
    const session = await getServerSession(authOptions);


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

    console.log("userIduserIduserIduserIduserId", userId);

    if (res.sendingType == "1") {
      const user = await prisma.user.findFirst({
        where: { id: Number(res.individualRecipient) },
      });
      recipientCount = user?.length;

      let x = await sendFCM(res.title, res.message, user?.fcmId);
    }

    if (res.sendingType == "2") {
      const user = await prisma.user.findMany({
        where: { districtId: Number(res.districtId) },
      });

      console.log("LENGTH2====>", user.length);
      recipientCount = user.length;

      for (let i = 0; i < user.length; i++) {
        let x = await sendFCM(res.title, res.message, user[i]?.fcmId);
      }
    }

    if (res.sendingType == "3") {
      const user = await prisma.user.findMany({
        where: { regionId: Number(res.regionId) },
      });

      recipientCount = user.length;

      console.log("LENGTH3====>", user.length);

      for (let i = 0; i < user.length; i++) {
        let x = await sendFCM(res.title, res.message, user[i]?.fcmId);
      }
    }

    if (recipientCount == 0) {
      return NextResponse.json(
        { message: "Recipient list is empty" },
        { status: 201 }
      );
    }

    const response = await prisma.messaging.create({ data });

    return NextResponse.json(response);
  } catch (error: any) {
    console.log(error);

    return NextResponse.json(error, { status: 500 });
  }
}

export async function PUT(request: Request) {
  try {
    const res = await request.json();
    const session = await getServerSession(authOptions);

    console.log("res==================>", res);

    const userId = session?.user?.id;

    let recipientCount = 0;
    let messageId = res.messageId;

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

    console.log("DATA ", data);

    if (res.sendingType == "1") {
      const user = await prisma.user.findFirst({
        where: { id: Number(res.individualRecipient) },
      });
      recipientCount = user?.length;

      let x = await sendFCM(res.title, res.message, user?.fcmId);
    }

    if (res.sendingType == "2") {
      const user = await prisma.user.findMany({
        where: { districtId: Number(res.districtId) },
      });

      recipientCount = user.length;

      for (let i = 0; i < user.length; i++) {
        if (user[i]?.fcmId) {
          await sendFCM(res.title, res.message, user[i]?.fcmId);
        }
      }
    }

    if (res.sendingType == "3") {
      const user = await prisma.user.findMany({
        where: { regionId: Number(res.regionId) },
      });

      recipientCount = user.length;

      for (let i = 0; i < user.length; i++) {
        if (user[i]?.fcmId) {
          await sendFCM(res.title, res.message, user[i]?.fcmId);
        }
      }
    }

    if (recipientCount == 0) {
      return NextResponse.json(
        { message: "Recipient list is empty" },
        { status: 201 }
      );
    }

    const response = await prisma.messaging.update({
      data: data,
      where: {
        id: messageId,
      },
    });

    return NextResponse.json(response);
  } catch (error: any) {
    console.log("error==================>", error);

    return NextResponse.json(error, { status: 500 });
  }
}

export async function GET(request: Request) {
  try {
    const data = await prisma.messaging.findMany({
      where: { deleted: 0, messageType: 1 },
      include: {
        SendingType: true,
        District: true,
        Region: true,
        Recipient: true,
      },
    });

    return NextResponse.json(data);
  } catch (error) {
    console.log(error);

    return NextResponse.json(error);
  }
}