import { prisma } from "@/prisma/db";
import { NextResponse } from "next/server";


export async function GET(request: Request) {
  try {
    console.log(">>>>>>>>>get");
    
    const { searchParams } = new URL(request.url);
    const userId: any = Number(searchParams.get("userId"));
console.log("userid = ", userId);



    return NextResponse.json({})
  } catch (error) {
    console.log("<======>", error);

    return NextResponse.json(error);
  }
}
