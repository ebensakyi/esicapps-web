import { NextResponse } from "next/server";
import { prisma } from "@/prisma/db";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export async function POST(request: Request) {
  try {
    const res = await request.json();

    let phoneNumber = res.phoneNumber;
    let otp = res.otp;


    let user = await prisma.sanitationReportUser.findFirst({
      where: {
        phoneNumber: phoneNumber,
        otp: otp,
        deleted: 0,
      },
    });


    if (!user) {
      return NextResponse.json({},{ status: 400 });
    }

    user = await prisma.sanitationReportUser.update({
      data: {
        otp:"",
      },
      where: { id: user.id },
    });


    return NextResponse.json(user,{ status: 200 });
  } catch (error: any) {
    console.log(error);
    return NextResponse.json(error);
  }
}
