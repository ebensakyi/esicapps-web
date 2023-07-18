import { NextResponse } from "next/server";
import { prisma } from "../../../../../prisma/db";
import bcrypt from "bcryptjs";
// import { destroySession, setSession } from "../../../../../utils/session-manager";
import jwt from "jsonwebtoken";

export async function POST(request: Request) {
  try {
    const res = await request.json();
    let phoneNumber = res.phoneNumber;
    let password = res.password;

    const user = await prisma.user.findFirst({
      where: {
        phoneNumber,
      },
    });

console.log(user);

    if (!user) {
      return NextResponse.json(null);
    }

    let isValid = await bcrypt.compare(password, user.password);

    console.log(isValid);

    if (isValid) {

        const token = jwt.sign(user, process.env.TOKEN_SECRET??"");

      return NextResponse.json({...user,token});
    }
    return NextResponse.json(null);
  } catch (error: any) {
    console.log(error);
    return new Response(JSON.stringify({ message: error.message }));
  }
}
