import { NextResponse } from "next/server";
import { prisma } from "@/prisma/db";
import bcrypt from "bcryptjs";
// import { destroySession, setSession } from "../../../../../utils/session-manager";
import jwt from "jsonwebtoken";

export async function POST(request: Request) {
  try {
    const res = await request.json();

    let phoneNumber = res.phoneNumber;
    let password = res.password;

    let user: any = await prisma.user.findFirst({
      where: {
        phoneNumber: phoneNumber,
        deleted: 0,
      },
      include: { Region: true, District: true, UserRole: true },
    });
    console.log("user response1 ====> ", user);

    if (!user) {
      return NextResponse.json(null, { status: 400 });
    }

    
    const pageAccess = await prisma.pageAccess.findMany({
      where: {
        userRoleId: user?.userRoleId,
        deleted: 0,
      },
    });
    console.log("user response2 ====> ", pageAccess);

    let privileges = pageAccess?.map((d: any) => {
      return d.pageId;
    });

    // if(user?.passwordChanged==0){
    //   return NextResponse.redirect("/goto");

    // }

    let isValid = await bcrypt.compare(password, user.password);

    if (isValid) {
      await prisma.user.update({
        where: {
          id: user?.id,
        },
        data: {
          loginTimes: {
            increment: 1,
          },
        },
      });

      const token = jwt.sign(user, process.env.TOKEN_SECRET ?? "");

      let response = { ...user, token, privileges };

      console.log("user response ====> ", response);

      return NextResponse.json(response);
    }
    return NextResponse.json(null, { status: 400 });
  } catch (error: any) {
    console.log(error);
    return NextResponse.json({ message: error.message });
  }
}

export async function GET(request: Request) {}
