import { NextResponse } from "next/server";
import { prisma } from "@/prisma/db";
import { logActivity } from "@/utils/log";
import { generateCode } from "@/utils/generate-code";

import bcrypt from "bcryptjs";
import { getServerSession } from "next-auth";

export async function PUT(request: Request) {
  try {
    const res = await request.json();

    let phoneNumber = res.phoneNumber;

    const data = {
      surname: res.surname,
      otherNames: res.otherNames,
    };

    let user = await prisma.user.findFirst({
      where: { phoneNumber, deleted: 0 },
    });
    if (!user) {
      return NextResponse.json(
        { message: "Wrong user account" },
        { status: 400 }
      );
    }

    await prisma.user.update({
      data: data,

      where: { phoneNumber },
    });

    return NextResponse.json({ message: "Profile updated" }, { status: 200 });
  } catch (error) {
    console.log(error);

    return NextResponse.json(error, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  try {
    const res = await request.json();

    let regionId = res.region;

    let user: any = await prisma.user.findFirst({
      where: { id: Number(res.id) },
    });

    await prisma.user.update({
      where: { id: Number(res.id) },
      data: { deleted: Math.abs(user?.deleted - 1) },
    });

    return NextResponse.json({});
  } catch (error) {
    console.log(error);

    return NextResponse.json(error);
  }
}



export async function GET(request: Request) {
  try {

    const { searchParams } = new URL(request.url);
    const userId = Number(searchParams.get("userId"));

    let user = await prisma.user.findFirst({
      where: { id: userId, deleted: 0 },
      include: { District: { include: { Region: true } } },
    });


    return NextResponse.json(user,{status: 200});
  } catch (error) {
    return NextResponse.json({status: 500});

  }
}