import { prisma } from "@/prisma/db";
import { logger } from "@/logger";
import { NextResponse } from "next/server";

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
    try {

      const id = params.id;      
  
      await prisma.assignData.delete({
        where: {
          id: Number(id),
        },
  
      });
      return NextResponse.json({});

    } catch (error) {
      console.log("error===>", error);
      logger.error("AssignData",error);

      return NextResponse.json(error);

    }
  }