import { NextResponse } from "next/server";
import { prisma } from "@/prisma/db";
import bcrypt from "bcryptjs";
// import { destroySession, setSession } from "../../../../../utils/session-manager";
import jwt from "jsonwebtoken";
import { generateCode } from "@/utils/generate-code";
import { sendSMS } from "@/utils/send-hubtel-sms";
import moment from "moment";

export async function POST(request: Request) {
  try {
    const now = moment();
    const formattedDate  = moment().format('YYYY-MM-DD HH:mm:ss.SSS');
    const  timestamp = moment(formattedDate, 'YYYY-MM-DD HH:mm:ss.SSS').toISOString();


    const res = await request.json();

    let phoneNumber = res.phoneNumber;

    const user : any = await prisma.user.findFirst({
      where: {
        phoneNumber: phoneNumber,
        deleted: 0,
      },
    });



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

   // Define the target time using moment
    const targetTime = moment(user?.lastResetDate, "YYYY-MM-DD HH:mm:ss.SSS");

    // Calculate the difference using moment
    const timeDifference = moment.duration(now.diff(targetTime));

    const hoursDifference = timeDifference.asHours();
    //Skip duplicate withdrawals
    if (hoursDifference < 0.5) {
      
        return NextResponse.json({message:"Cannot send duplicate requests"},{status:201});
    }

    await sendSMS(user?.phoneNumber, `Enter the reset code to reset your password ${password}`);


    await prisma.user.update({
      data: {
        lastResetDate: timestamp,
      },
      where: {
        id: user?.id,
        deleted: 0,
      },
    });

   return NextResponse.json(null, { status: 200 });

   //return NextResponse.redirect(new URL('/auth/reset-password',request.url));

  } catch (error: any) {
    console.log(error);
    return  NextResponse.json({ message: error.message });
  }
}
