import { prisma } from "@/prisma/db";
import { logActivity } from "@/utils/log";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
        const res = await request.json();

     let report =   await getSubmissionSummary(res);

     

    
       // await logActivity(`SubmissionSummary report generated`, userData.id);
        
  
      return NextResponse.json(report);
    } catch (error: any) {
      console.log("error==>", error);
  
      return NextResponse.json(error);
    }
  }
  


  const getSubmissionSummary = async (res:any) => {
    let filterBy = res.filterBy;
    let filterValue = Number(res?.filterValue);
    let fromDate = new Date(res?.from);
    let toDate = new Date(res?.to);
  
  
    const report = await prisma.inspection.groupBy({
      where: {
        [filterBy]: filterValue,
        deleted:0
  
        // createdAt:
        // res?.from != null ||  res?.to != null
        //     ? {
        //         gte: fromDate,
        //         lte: toDate,
        //       }
        //     : {},
      },
      by: ["inspectionFormId"],
      _count: {
        inspectionFormId: true,
      },
      orderBy: {
        inspectionFormId: "asc",
      },
      // include: {
      //   _count: {
      //     select: { inspectionFormId: true },
      //   },
      //    include: { InspectionType: true },
  
      // },
    });

    
  
    return report
  };
  