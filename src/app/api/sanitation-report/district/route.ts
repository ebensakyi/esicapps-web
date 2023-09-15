import { NextResponse } from "next/server";
import { prisma } from "@/prisma/db";
import { logActivity } from "@/utils/log";





export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
   

    
        const response = await prisma.district.findMany({
          where: { deleted: 0 },
          orderBy: {
            name: "asc",
          },
        });
       
       

    return NextResponse.json(response);
  } catch (error) {
    console.log(error);
    return NextResponse.json(error);
  }
}

