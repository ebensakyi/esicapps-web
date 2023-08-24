import { NextResponse } from "next/server";
import { prisma } from "@/prisma/db";
import bcrypt from "bcryptjs";
// import { destroySession, setSession } from "../../../../../utils/session-manager";
import jwt from "jsonwebtoken";

export async function POST(request: Request) {
  try {
    const res = await request.json();

    let phoneNumber = res.phoneNumber;

    const user = await prisma.user.findFirst({
      where: {
        phoneNumber: phoneNumber,
        deleted: 0,
      },
    });

    console.log(user);

    // if(user?.passwordChanged==0){
    //   return NextResponse.redirect("/goto");

    // }

    if (!user) {
      return NextResponse.json(
        {
          message: "User Account not found.\nCheck phone number and try again",
        },
        { status: 201 }
      );
    }

   return NextResponse.json(null, { status: 200 });

  } catch (error: any) {
    console.log(error);
    return  NextResponse.json({ message: error.message });
  }
}
