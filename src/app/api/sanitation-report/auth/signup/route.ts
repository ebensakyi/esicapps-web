import { NextResponse } from "next/server";
import { prisma } from "@/prisma/db";
import { sendSMS } from "@/utils/send-hubtel-sms";
import { generateCode } from "@/utils/generate-code";

export async function POST(request: Request) {
  try {
    const res = await request.json();
    const otp = await generateCode(4); // Generate a 4-digit OTP
    const { phoneNumber, fullName } = res;

    console.log("OTP :", otp);

    // Check if the user already exists and is not deleted
    let user = await prisma.sanitationReportUser.findFirst({
      where: {
        phoneNumber: phoneNumber,
        deleted: 0,
      },
    });

    if (user) {
      if (user.isValidated) {
        return NextResponse.json(user, { status: 201 });
      } else {
        // Send existing OTP to unvalidated user

        user = await prisma.sanitationReportUser.update({
          data: {
            otp,
          },
          where: { id: user.id },
        });

       await sendSMS(phoneNumber, `Your OTP is: ${otp}`);
        return NextResponse.json(user);
      }
    } else {
      // Create a new user if not found
      user = await prisma.sanitationReportUser.create({
        data: {
          phoneNumber,
          fullName,
          otp,
        },
      });

       await sendSMS(phoneNumber, `Your OTP is: ${otp}`);

      return NextResponse.json(user);
    }
  } catch (error: any) {
    console.error("Error in OTP generation:", error);
    return NextResponse.json({
      success: false,
      message: "An error occurred",
      error: error.message,
    });
  }
}
