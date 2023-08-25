import { NextResponse } from "next/server";
import { prisma } from "@/prisma/db";
import bcrypt from "bcryptjs";
// import { destroySession, setSession } from "../../../../../utils/session-manager";
import jwt from "jsonwebtoken";
import { generateCode } from "@/utils/generate-code";
import { sendSMS } from "@/utils/send-hubtel-sms";

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


    let password: string = (await generateCode(4)) as string;

    await prisma.user.update({
      data: {
        tempPassword: password,
      },
      where: {
        id: user?.id,
        deleted: 0,
      },
    });
    await sendSMS(user?.phoneNumber, `Enter the reset code to reset your password ${password}`);


   return NextResponse.json(null, { status: 200 });

   //return NextResponse.redirect(new URL('/auth/reset-password',request.url));

  } catch (error: any) {
    console.log(error);
    return  NextResponse.json({ message: error.message });
  }
}