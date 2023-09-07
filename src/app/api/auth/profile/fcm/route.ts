import { NextResponse } from "next/server";
import { prisma } from "@/prisma/db";
import { logActivity } from "@/utils/log";
import { generateCode } from "@/utils/generate-code";

import bcrypt from "bcryptjs";
import { getServerSession } from "next-auth";

export async function POST(request: Request) {
  try {
    const res = await request.json();

    let userId = res.userId;
    let fcmId = res.fcmId;


      const user = await prisma.user.update({
        where: { id: Number(userId) },
        data: { fcmId: fcmId },
      });
   

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

