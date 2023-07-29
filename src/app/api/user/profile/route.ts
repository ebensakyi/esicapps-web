import { NextResponse } from "next/server";
import { prisma } from "@/prisma/db";
import { logActivity } from "@/utils/log";
import { generateCode } from "@/utils/generate-code";
import { authOptions } from "../../auth/[...nextauth]/options";

import bcrypt from "bcryptjs";
import { getServerSession } from "next-auth";

export async function GET(request: Request) {
  try {
    const session = await getServerSession(authOptions);

    // console.log("Session ", session);
    let userId = session?.user?.id;
    let surname = session?.user?.surname;
    let otherNames = session?.user?.otherNames;
    let phoneNumber = session?.user?.phoneNumber;
    let email = session?.user?.email;

    return NextResponse.json({
      userId,
      surname,
      otherNames,
      phoneNumber,
      email,
    });
  } catch (error) {
    return NextResponse.json(error);
  }
}

export async function PUT(request: Request) {
  try {
    const res = await request.json();
    const session = await getServerSession(authOptions);

    let userId = res.userId;
    let changePassword = res.changePassword;

    if (changePassword == 1) {
      let user = await prisma.user.findFirst({
        where: { id: userId },
      });

      let isValid = await bcrypt.compare(res.currentPassword, user.password);

      if (!isValid) {
        return NextResponse.json(
          { message: "Wrong current password" },
          { status: 201 }
        );
      }

      const salt = bcrypt.genSaltSync(10);
      let hashedPassword = bcrypt.hashSync(res.newPassword, salt);

      const data = {
        password: hashedPassword,
      };

      await prisma.user.update({
        data: data,
        where: {
          id: userId,
        },
      });

      return NextResponse.json({ message: "Password changed" });
    }

    const data = {
      surname: res.surname,
      otherNames: res.otherNames,
      email: res.email,
      phoneNumber: res.phoneNumber,
    };

    await prisma.user.update({
      data: data,
      where: {
        id: userId,
      },
    });

    return NextResponse.json({ message: "User profile updated" });
  } catch (error) {
    console.log(error);

    return NextResponse.json(error);
  }
}
