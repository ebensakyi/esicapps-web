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


    // let user: any = await prisma.user.findFirst({

    //   where: {
    //     phoneNumber: phoneNumber,
    //     deleted: 0,
    //   },
    //   include: {

    //     Region: true,
    //     District: true,
    //     UserRole: true,
    //   },
    // });

    let user = await prisma.user.findFirst({
      where: {
        phoneNumber: phoneNumber,
        deleted: 0,
      },
      select: {
        id: true,
        userRoleId: true,
        surname: true,
        otherNames: true,
        email: true,
        phoneNumber: true,
        designation: true,
        password: true,
        tempPassword: true,
        regionId: true,
        districtId: true,
        electoralAreaId: true,
        loginTimes: true,
        passwordChanged: true,
        activated: true,
        deleted: true,
        createdAt: true,
        updatedAt: true,
        userLevelId: true,
        Region: true,
        District: true,
        UserRole: true,
      },
    });

    if (!user) {
      return NextResponse.json(null, { status: 400 });
    }

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

      const pageAccess = await prisma.pageAccess.findMany({
        where: {
          userRoleId: user?.userRoleId,
          deleted: 0,
        },
      });

      let privileges = await pageAccess?.map((d: any) => {
        return d.pageId;
      });

      const token = jwt.sign(user, process.env.TOKEN_SECRET ?? "");

      let response = { ...user, token, privileges };



      return NextResponse.json(response);
    }
    return NextResponse.json(null, { status: 400 });
  } catch (error: any) {
    console.log(error);
    return NextResponse.json({ message: error.message });
  }
}

export async function GET(request: Request) {}
