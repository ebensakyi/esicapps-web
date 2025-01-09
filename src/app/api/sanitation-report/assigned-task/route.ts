import { NextResponse } from "next/server";
import { prisma } from "@/prisma/db";
import { authOptions } from "../../auth/[...nextauth]/options";
import { getServerSession } from "next-auth";
import { saveFileOnDisk, upload2S3 } from "@/utils/upload";
import { status } from "@/prisma/seed/status";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const userId = Number(searchParams.get("userId"));

    const reports = await prisma.sanitationReport.findMany({
      where: { deleted: 0, assignedTo: userId },
      include: {
        SanitationReportUser: true,
        ReportCategory: true,
        Status: true,
      },
    });

    const response = reports.map((report) => ({
      id: report.id,
      reporterImage: report.reporterImage,
      // officerObservation: report.officerObservation,
      // actionTaken: report.actionTaken,
      offendersName: report.offendersName == null ? "" : report.offendersName,
      confirmationImage:
        report.confirmationImage == null ? "" : report.confirmationImage,
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
      statusId: report.statusId,
    }));
console.log(response);

    return NextResponse.json(response);
  } catch (error) {
    console.log(error);
    return NextResponse.json(error);
  }
}

// export async function POST(request: Request) {
//   try {
//     const res = await request.json();
//     console.log(">>>><<<< ",res);

//     // const session: any = await getServerSession(authOptions);

//     const { actionTaken, userId, statusId } = res;
//     // let userId = session?.user?.id;
//     const now = new Date();

//     const response = await prisma.sanitationReport.update({
//       where: { id: Number(userId) },
//       data: {
//         assignedTo: Number(userId),
//         statusId: Number(statusId),
//       },
//     });

//     return NextResponse.json(response);
//   } catch (error) {
//     console.log(error);
//     return NextResponse.json(error);
//   }
// }

export async function POST(request: Request) {
  try {
    const data = await request.formData();

    const reportId = Number(data?.get("reportId"));
    const actionTaken = Number(data?.get("actionTaken"));

    const statusId = Number(data?.get("status"));

    const latitude = data?.get("latitude");
    const longitude = data?.get("longitude");

    const mediaType = data?.get("mediaType");
    const additionalNotes = data?.get("additionalNotes");

    // console.log(reportId,actionTaken, latitude, longitude, mediaType);
    
    let file: any;

    if (mediaType == "1") {
      file = data.get("nuisancePicture") as unknown as File;
    } else if (mediaType == "2") {
      file = data.get("nuisanceVideo") as unknown as File;
    }

    let fileName = await saveFileOnDisk(file);

      const sanitationReportData = {
        confirmationImage: fileName,
        actionTakenId: actionTaken,
        statusId: statusId,
        confirmationLatitude: latitude,
        confirmationLongitude: longitude,
        officerObservation: additionalNotes,
      };

      let saved = await prisma.sanitationReport.update({
        where: {id:reportId},
        data: sanitationReportData,
      } as any);

      await upload2S3(fileName, "sanitation-reporter-images");

      return NextResponse.json({ data: fileName }, { status: 200 });
 
  } catch (error) {
    console.log("error===>", error);

    return NextResponse.json(error, { status: 500 });
  }
}
