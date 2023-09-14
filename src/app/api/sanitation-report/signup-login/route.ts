import { NextResponse } from "next/server";
import { prisma } from "@/prisma/db";
import bcrypt from "bcryptjs";
// import { destroySession, setSession } from "../../../../../utils/session-manager";
import jwt from "jsonwebtoken";

export async function POST(request: Request) {
  try {
    const res = await request.json();

    console.log(res);

    let phoneNumber = res.phoneNumber;
    let password = res.password;

    const user: any = await prisma.sanitationReportUser.findFirst({
      where: {
        phoneNumber: phoneNumber,
        deleted: 0,
      },
    });

    if (!user) {
      const user: any = await prisma.sanitationReportUser.create({
        data: {
          phoneNumber: phoneNumber,
        },
      });
      return NextResponse.json(null, { status: 400 });
    }

    let isValid = await bcrypt.compare(password, user.password);

    if (isValid) {
      return NextResponse.json(user);
    }
    return NextResponse.json(null, { status: 400 });
  } catch (error: any) {
    console.log(error);
    return new Response(JSON.stringify({ message: error.message }));
  }
}

export async function GET(request: Request) {}
