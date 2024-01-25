import { NextResponse } from "next/server";
import { prisma } from "@/prisma/db";

import { v4 as uuidv4 } from "uuid";

export async function POST(request: Request) {
  try {
  const res = await request.json();
  console.log("res");

  let phoneNumber = res.phoneNumber;

    

    const user: any = await prisma.user.findFirst({
      where: {
        phoneNumber: phoneNumber,
        deleted: 0,
      },
    });

   
    if (!user) {
      return NextResponse.json(
        {
          message: "User Account not found.",
        },
        { status: 201 }
      );
    }

    await prisma.user.update({
      where: {
        id: user.id,
        deleted: 0,
      },
      data: {
        deleted: 1,
        phoneNumber: phoneNumber+"-deleted-" + uuidv4()
      },
    });



    return NextResponse.json({});

  } catch (error: any) {
    console.log(error);
    return NextResponse.json({ message: error.message });
  }
}
