import { NextResponse } from "next/server";
import { prisma } from "@/prisma/db";
import { logActivity } from "@/utils/log";
import { upload2S3, saveFileOnDisk } from "@/utils/upload";
import { sendSMS } from "@/utils/send-hubtel-sms";
import { getServerSession } from "next-auth";

export async function POST(request: Request) {
  try {
    const data = await request.formData();

    const file: File | null = data.get("nuisancePicture") as unknown as File;
    const sanitationReportUserId = data?.get("userId");

    const description = data?.get("description");

    const reportType = Number(data?.get("reportType"));
    const districtId = Number(data?.get("districtId"));
    const reportCategoryId = Number(data?.get("reportCategoryId"));

    const latitude = data?.get("latitude");
    const longitude = data?.get("longitude");
    const communityLandmark = data?.get("communityLandmark");
    const address = data?.get("address");

    let district = await prisma.district.findFirst({
      where: {
        id: Number(districtId),
      },
    });

    let region = Number(district?.regionId);

    let fileName = await saveFileOnDisk(file);

    if (fileName != "0") {
      const data = {
        image: fileName,
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
      };

      let reportCount = await prisma.sanitationReport.count({
        where: {
          image: fileName,
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

      await upload2S3(fileName, "esicapps-images");

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
          District: { select: { name: true } }, // Select district name
        },
        orderBy: {
          createdAt: "desc", // Order by creation date
        },
      });

      // Map the response to extract only the required fields
      const sanitizedResponse = response.map((report) => ({
        id: report.id,
        image: report.image,
        districtName: report?.District?.name,
        reportCategoryName: report?.ReportCategory?.name,
        description: report?.description,
        latitude: report?.latitude,
        longitude: report?.longitude,
        status:
          report.status === 0
            ? "Pending"
            : report.status === 2
            ? "In Progress"
            : "Resolved",
        createdAt: report.createdAt,
        community: report.community,
      }));

      // Aggregate counts for pending and completed statuses
      const pendingCount = await prisma.sanitationReport.count({
        where: {
          sanitationReportUserId: Number(userId),
          deleted: 0,
          status: 0,
        },
      });
      const inProgressCount = await prisma.sanitationReport.count({
        where: {
          sanitationReportUserId: Number(userId),
          deleted: 0,
          status: 2,
        },
      });
      const completedCount = await prisma.sanitationReport.count({
        where: {
          sanitationReportUserId: Number(userId),
          deleted: 0,
          status: 1,
        },
      });

      

      return NextResponse.json({
        reports: sanitizedResponse,
        pendingCount: pendingCount,
        inProgressCount: inProgressCount,
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

    let statuses = ["pending", "resolved", "in progress"];

    let sendSMSReporter = res?.sendSMS;
    let phoneNumber = res?.phoneNumber;
    let statusMessage = res?.statusMessage;
    await prisma.sanitationReport.update({
      where: {
        id: Number(res?.reportId),
      },
      data: {
        status: Number(res?.reportStatus),
        statusMessage: statusMessage,
      },
    });

    if (sendSMSReporter) {
      await sendSMS(
        phoneNumber,
        `Your reported nuisance is ${statuses[Number(res?.reportStatus)]}`
      );
    }

    return NextResponse.json({});
  } catch (error) {
    console.log(error);

    return NextResponse.json(error, { status: 500 });
  }
}
