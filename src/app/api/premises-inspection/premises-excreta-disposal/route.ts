import { NextResponse } from "next/server";
import { prisma } from "@/prisma/db";
import { logActivity } from "@/utils/log";


export async function POST(request: Request) {
  try {
    const res = await request.json();
    // 'id': obj.id.toString(),
    // 'inspectionId': obj.inspectionId.toString(),
    // 'userId': obj.userId.toString(),
    // 'liquidWasteSectionId': obj.liquidWasteSectionId.toString(),
    // 'excretaDisposalMethodId': obj.excretaDisposalMethodId.toString(),


    
    const data:any = {
        id: res.id,
  
        inspectionId: res.inspectionId,
        userId: Number(res.userId),
        liquidWasteSectionId:
          res.liquidWasteSectionId == "null" ? null : res.liquidWasteSectionId,
  
          excretaDisposalMethodId:
          res.excretaDisposalMethodId == "null"
            ? null
            : Number(res.excretaDisposalMethodId),
      };
  
      const response = await prisma.premisesExcretaDisposalMethod.create({ data });


    return NextResponse.json(response);
  } catch (error: any) {
    return NextResponse.json(error,{ status: 500 });
  }
}

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const userId = Number(searchParams.get("userId"));



    if (!userId) return NextResponse.json({});

    const response = await prisma.premisesExcretaDisposalMethod.findMany({
      where: { userId: userId, deleted: 0 },
    });

    return NextResponse.json(response);
  } catch (error) {
    return NextResponse.json(error,{status:500});
  }
}