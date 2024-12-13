import { NextResponse } from "next/server";
import { prisma } from "@/prisma/db";
import { authOptions } from "../../auth/[...nextauth]/options";
import { getServerSession } from "next-auth";
import { MyConstants } from "@/src/constants";

export async function GET(request: Request) {
  try {
    const reports = await prisma.sanitationReport.findMany({
      where: { deleted: 0 },
      include: {
        SanitationReportUser: true,
        ReportCategory: true,
        Status: true,
      },
    });

//     2 =
// "confirmationImage" -> null
// 3 =
// "officerObservation" -> null
// 4 =
// "actionTaken" -> null
// 5 =
// "offendersName" -> null
// 6 =
// "offendersPhoneNumber" -> null
    

    const response = reports.map((report) => ({
      id: report.id,
      reporterImage: report.reporterImage,
      // officerObservation: report.officerObservation,
      // actionTaken: report.actionTaken,
      offendersName: report.offendersName==null?"":report.offendersName,
      confirmationImage:report.confirmationImage==null?"":report.confirmationImage,
      // offendersPhoneNumber: report.offendersPhoneNumber,
      description: report.description,
      category: report.ReportCategory?.name,
      community: report?.community,
      lat: report.latitude,
      lng: report.longitude,
      phoneNumber: report?.SanitationReportUser?.phoneNumber,
      assignedAt:
        report.assignedAt == null ? report.createdAt : report.assignedAt,
      reportedAt: report.createdAt,

      status: report.Status.name,
    }));

    return NextResponse.json(response);
  } catch (error) {
    console.log(error);
    return NextResponse.json(error);
  }
}

export async function POST(request: Request) {
  try {
    const res = await request.json();
    const session: any = await getServerSession(authOptions);


    

    const { reportId, officerId, sendsms } = res;
    let userId = session?.user?.id;
    const now = new Date();

    const response = await prisma.sanitationReport.update({
      where: { id: Number(reportId) },
      data: {
        assignedTo: Number(officerId),
        statusId: 2,
        assignedBy: Number(userId),
        assignedAt: now.toISOString(),
      },
    });

    return NextResponse.json(response);
  } catch (error) {
    console.log(error);
    return NextResponse.json(error);
  }
}

