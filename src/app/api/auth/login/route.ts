import { NextResponse } from "next/server";
import { prisma } from "@/prisma/db";
import bcrypt from "bcryptjs";
// import { destroySession, setSession } from "../../../../../utils/session-manager";
import jwt from "jsonwebtoken";

export async function POST(request: Request) {
 let TOKEN_SECRET = "eyJ1c2VyIjp7ImlkIjoxLCJmY21JZCI6bnVsbCwidXNlclR5cGVJZCI6MSwic3VybmFtZSI6IlNha3lpIiwib3RoZXJOYW1lcyI6IkViZW5lemVyIEFneWVtYW5nIiwiZW1haWwiOiJlYmVuc2FreWlAZ21haWwuY29tIiwicGhvbmVOdW1iZXIiOiIwNTQzMjEyMzIyIiwiZGVzaWduYXRpb24iOiJFbnRlcnByaXNlIEFkbWluIiwicGFzc3dvcmQiOiIkMmEkMTAkY2kxZjN2SHcxV3NzL0tJQldDZS4yTzNRLno2b0h4d2NLSWtSb1Q4MUY5MWE2QTVWUEF3ankiLCJ0ZW1wUGFzc3dvcmQiOm51bGwsImltYWdlUGF0aCI6bnVsbCwicmVnaW9uSWQiOm51bGwsImRpc3RyaWN0SWQiOm51bGwsImVsZWN0b3JhbEFyZWFJZCI6bnVsbC"

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

    

    let privileges = pageAccess?.map((d: any) => {
      return d.pageId;
    });





      //const token = jwt.sign(user, process.env.TOKEN_SECRET ?? "");
      const token = jwt.sign(user, TOKEN_SECRET);

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
