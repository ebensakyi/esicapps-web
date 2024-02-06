import { NextResponse } from "next/server";
import { prisma } from "@/prisma/db";
import { logActivity } from "@/utils/log";


export async function POST(request: Request) {
  try {
    const res = await request.json();
    

    let userId = res.userId;
    let fcmId = res.fcmId;


    const user = await prisma.fcm.findFirst({
      where: { userId: Number(userId) },
    });
    if (user) {
      await prisma.fcm.update({
        data: {
          fcmId: fcmId,
        },
        where: { id: Number(userId) },
      });
    } else {
      await prisma.fcm.create({
        data: {
          fcmId: fcmId,
          userId: userId,
        },
      });
    }


   

    return NextResponse.json( { status: 200 });
  } catch (error) {
    console.log(error);

    return NextResponse.json(error, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  try {
 
    return NextResponse.json({});
  } catch (error) {
    console.log(error);

    return NextResponse.json(error);
  }
}

