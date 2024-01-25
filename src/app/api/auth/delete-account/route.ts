import { NextResponse } from "next/server";
import { prisma } from "@/prisma/db";
import bcrypt from "bcryptjs";

import { v4 as uuidv4 } from "uuid";

export async function POST(request: Request) {
  try {
    const res = await request.json();

    let phoneNumber = res.phoneNumber;

    const user: any = await prisma.user.findFirst({
      where: {
        phoneNumber: phoneNumber,
        deleted: 0,
      },
    });

    if (!user) {
      return NextResponse.json(
        {
          message: "User Account not found.",
        },
        { status: 201 }
      );
    }

    await prisma.user.update({
      where: {
        id: user.id,
        deleted: 0,
      },
      data: {
        deleted: 1,
        phoneNumber: phoneNumber + "+deleted-" + uuidv4(),
      },
    });

    return NextResponse.json({});
  } catch (error: any) {
    console.log("ERR==> Error: " + error.message);
    return NextResponse.json({ message: error.message });
  }
}

export async function DELETE(
  request: Request
) {
  try {
    const res = await request.json();

    console.log(res);
    
    const password = res.password;
    const phoneNumber = res.phoneNumber;

    const user: any = await prisma.user.findFirst({
      where: {
        phoneNumber: phoneNumber,

        deleted: 0,
      },
    });

    if (!user) {
      return NextResponse.json(
        {
          message: "User Account not found.",
        },
        { status: 201 }
      );
    }
    let isValid = await bcrypt.compare(password, user.password);

    if (isValid) {
      await prisma.user.update({
        where: {
          id: user.id,
          deleted: 0,
        },
        data: {
          deleted: 1,
          phoneNumber: phoneNumber + "+deleted-" + uuidv4(),
        },
      });
    }

    return NextResponse.json({});
  } catch (error) {
    console.log("error===>", error);
    return NextResponse.json(error);
  }
}
