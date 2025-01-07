import { NextResponse } from "next/server";
import { prisma } from "@/prisma/db";
import { logActivity } from "@/utils/log";
import { upload2S3, saveFileOnDisk } from "@/utils/upload";
import { sendSMS } from "@/utils/send-hubtel-sms";

export async function POST(request: Request) {
  try {
    const data = await request.formData();
    

    const sanitationReportUserId = data?.get("userId");

    const description = data?.get("description");

    const reportType = Number(data?.get("reportType"));
    const districtId = Number(data?.get("districtId"));
    const reportCategoryId = Number(data?.get("reportCategoryId"));

    const latitude = data?.get("latitude");
    const longitude = data?.get("longitude");
    const communityLandmark = data?.get("communityLandmark");
    const address = data?.get("address");
    const mediaType = data?.get("mediaType");
    let file: any;

    if (mediaType == "1") {
      file = data.get("nuisancePicture") as unknown as File;
    } else if (mediaType == "2") {
      file = data.get("nuisanceVideo") as unknown as File;
    }

    let district = await prisma.district.findFirst({
      where: {
        id: Number(districtId),
      },
    });

    let region = Number(district?.regionId);

    let fileName = await saveFileOnDisk(file);

    if (fileName != "0") {
      const data = {
        reporterImage: fileName,
        description: description,
        reportTypeId: reportType,
        reportCategoryId: reportCategoryId,
        latitude: latitude,
        longitude: longitude,
        districtId: districtId == 0 ? null : districtId,
        regionId: region,
        community: communityLandmark,
        address: address,
        sanitationReportUserId:
          sanitationReportUserId == "null"
            ? null
            : Number(sanitationReportUserId),
            statusId:1
      };

      let reportCount = await prisma.sanitationReport.count({
        where: {
          reporterImage: fileName,
          description: description,
          reportTypeId: reportType,
          reportCategoryId: reportCategoryId,
          latitude: latitude,
          longitude: longitude,
        },
      } as any);
      if (reportCount != 0) {
        return NextResponse.json({});
      }

      const ip = await prisma.sanitationReport.create({ data } as any);

      await upload2S3(fileName, "sanitation-reporter-images");

      return NextResponse.json({ data: fileName }, { status: 200 });
    }

    return NextResponse.json({ message: "An error occurred" }, { status: 500 });
  } catch (error) {
    console.log("error===>", error);

    return NextResponse.json(error, { status: 500 });
  }
}

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);

    const userId = searchParams.get("userId");

    if (userId) {
      // Query by userId if provided
      const response = await prisma.sanitationReport.findMany({
        where: {
          sanitationReportUserId: Number(userId),
          deleted: 0,
        },
        include: {
          ReportCategory: { select: { name: true } }, // Select report category name
          District: { select: { name: true } },
          Status: true,
        },
        orderBy: {
          createdAt: "desc", // Order by creation date
        },
      });

      // Map the response to extract only the required fields
      const sanitizedResponse = response.map((report) => ({
        id: report.id,
        image: report.reporterImage,
        districtName: report?.District?.name==undefined ?"": report.District?.name,
        reportCategoryName: report?.ReportCategory?.name,
        description: report?.description,
        latitude: report?.latitude,
        longitude: report?.longitude,
        status: report.Status.name,
        // statusId: report.statusId,
        createdAt: report.createdAt,
        community: report.community,
      }));

      // Aggregate counts for pending and completed statuses
      const notAssignedCount = await prisma.sanitationReport.count({
        where: {
          sanitationReportUserId: Number(userId),
          deleted: 0,
          statusId: 1,
        },
      });
      const assignedCount = await prisma.sanitationReport.count({
        where: {
          sanitationReportUserId: Number(userId),
          deleted: 0,
          statusId: 2,
        },
      });
      const inProgressCount = await prisma.sanitationReport.count({
        where: {
          sanitationReportUserId: Number(userId),
          deleted: 0,
          statusId: 3,
        },
      });
      const completedCount = await prisma.sanitationReport.count({
        where: {
          sanitationReportUserId: Number(userId),
          deleted: 0,
          statusId: 4,
        },
      });

     
      
      return NextResponse.json({
        reports: sanitizedResponse,
        notAssignedCount:notAssignedCount,
        assignedCount: assignedCount,
        inProgressCount: inProgressCount + assignedCount,
        completedCount: completedCount,
      });
    }

    return NextResponse.json({});
  } catch (error) {
    console.log(error);
    return NextResponse.json(error, { status: 500 });
  }
}

export async function PUT(request: Request) {
  try {
    const res = await request.json();

    let sendSMSReporter = res?.sendSMS;
    let phoneNumber = res?.phoneNumber;
    let statusMessage = res?.statusMessage;
    await prisma.sanitationReport.update({
      where: {
        id: Number(res?.reportId),
      },
      data: {
        statusId: Number(res?.reportStatus),
        statusMessage: statusMessage,
      },
    });
    let sanitationReport = await prisma.sanitationReport.findFirst({
      where: {
        id: Number(res?.reportId),
      },
      include: { Status: true },
    });
    if (sendSMSReporter) {
      await sendSMS(
        phoneNumber,
        `Your reported nuisance is ${sanitationReport?.Status.name}`
      );
    }

    return NextResponse.json({});
  } catch (error) {
    console.log(error);

    return NextResponse.json(error, { status: 500 });
  }
}
