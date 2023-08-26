import { prisma } from "@/prisma/db";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {

    const { searchParams } = new URL(request.url);
    const userId:any = Number(searchParams.get("userId"));

    const residentialBasicCount = await prisma.inspection.count({
      where: {
        deleted: 0,
        userId: userId,
        inspectionTypeId: 1,
        inspectionFormId: 1,
      },
    });

    const eateryBasicCount = await prisma.inspection.count({
      where: {
        deleted: 0,
        userId: userId,
        inspectionTypeId: 1,
        inspectionFormId: 2,
      },
    });
    const healthBasicCount = await prisma.inspection.count({
      where: {
        deleted: 0,
        userId: userId,
        inspectionTypeId: 1,
        inspectionFormId: 3,
      },
    });
    const hospitalityBasicCount = await prisma.inspection.count({
      where: {
        deleted: 0,
        userId: userId,
        inspectionTypeId: 1,
        inspectionFormId: 4,
      },
    });
    const institutionBasicCount = await prisma.inspection.count({
      where: {
        deleted: 0,
        userId: userId,
        inspectionTypeId: 1,
        inspectionFormId: 5,
      },
    });
    const industryBasicCount = await prisma.inspection.count({
      where: {
        deleted: 0,
        userId: userId,
        inspectionTypeId: 1,
        inspectionFormId: 6,
      },
    });

    const marketBasicCount = await prisma.inspection.count({
      where: {
        deleted: 0,
        userId: userId,
        inspectionTypeId: 1,
        inspectionFormId: 7,
      },
    });
    const sanitationBasicCount = await prisma.inspection.count({
      where: {
        deleted: 0,
        userId: userId,
        inspectionTypeId: 1,
        inspectionFormId: 8,
      },
    });

    const residentialReInspectionCount = await prisma.inspection.count({
      where: {
        deleted: 0,
        userId: userId,
        inspectionTypeId: 2,
        inspectionFormId: 1,
      },
    });
    const eateryReInspectionCount = await prisma.inspection.count({
      where: {
        deleted: 0,
        userId: userId,
        inspectionTypeId: 2,
        inspectionFormId: 2,
      },
    });
    const healthReInspectionCount = await prisma.inspection.count({
      where: {
        deleted: 0,
        userId: userId,
        inspectionTypeId: 2,
        inspectionFormId: 3,
      },
    });
    const hospitalityReInspectionCount = await prisma.inspection.count({
      where: {
        deleted: 0,
        userId: userId,
        inspectionTypeId: 2,
        inspectionFormId: 4,
      },
    });
    const institutionReInspectionCount = await prisma.inspection.count({
      where: {
        deleted: 0,
        userId: userId,
        inspectionTypeId: 2,
        inspectionFormId: 5,
      },
    });
    const industryReInspectionCount = await prisma.inspection.count({
      where: {
        deleted: 0,
        userId: userId,
        inspectionTypeId: 2,
        inspectionFormId: 6,
      },
    });

    const marketReInspectionCount = await prisma.inspection.count({
      where: {
        deleted: 0,
        userId: userId,
        inspectionTypeId: 2,
        inspectionFormId: 7,
      },
    });
    const sanitationReInspectionCount = await prisma.inspection.count({
      where: {
        deleted: 0,
        userId: userId,
        inspectionTypeId: 2,
        inspectionFormId: 8,
      },
    });

    const residentialFollowUpCount = await prisma.inspection.count({
      where: {
        deleted: 0,
        userId: userId,
        inspectionTypeId: 3,
        inspectionFormId: 1,
      },
    });
    const eateryFollowUpCount = await prisma.inspection.count({
      where: {
        deleted: 0,
        userId: userId,
        inspectionTypeId: 3,
        inspectionFormId: 2,
      },
    });
    const healthFollowUpCount = await prisma.inspection.count({
      where: {
        deleted: 0,
        userId: userId,
        inspectionTypeId: 3,
        inspectionFormId: 3,
      },
    });
    const hospitalityFollowUpCount = await prisma.inspection.count({
      where: {
        deleted: 0,
        userId: userId,
        inspectionTypeId: 3,
        inspectionFormId: 4,
      },
    });
    const institutionFollowUpCount = await prisma.inspection.count({
      where: {
        deleted: 0,
        userId: userId,
        inspectionTypeId: 3,
        inspectionFormId: 5,
      },
    });
    const industryFollowUpCount = await prisma.inspection.count({
      where: {
        deleted: 0,
        userId: userId,
        inspectionTypeId: 3,
        inspectionFormId: 6,
      },
    });

    const marketFollowUpCount = await prisma.inspection.count({
      where: {
        deleted: 0,
        userId: userId,
        inspectionTypeId: 3,
        inspectionFormId: 7,
      },
    });
    const sanitationFollowUpCount = await prisma.inspection.count({
      where: {
        deleted: 0,
        userId: userId,
        inspectionTypeId: 3,
        inspectionFormId: 8,
      },
    });


    return NextResponse.json([
      {
        name: "Residential",
        basicCount: residentialBasicCount,
        reInspectionCount: residentialReInspectionCount,
        followUpCount: residentialFollowUpCount,
      },
      {
        name: "Eatery",
        basicCount: eateryBasicCount,
        reInspectionCount: eateryReInspectionCount,
        followUpCount: eateryFollowUpCount,
      },
      {
        name: "Health",
        basicCount: healthBasicCount,
        reInspectionCount: healthReInspectionCount,
        followUpCount: healthFollowUpCount,
      },
      {
        name: "Hospitality",
        basicCount: hospitalityBasicCount,
        reInspectionCount: hospitalityReInspectionCount,
        followUpCount: hospitalityFollowUpCount,
      },
      {
        name: "Institution",
        basicCount: institutionBasicCount,
        reInspectionCount: institutionReInspectionCount,
        followUpCount: institutionFollowUpCount,
      },
      {
        name: "Industry",
        basicCount: industryBasicCount,
        reInspectionCount: industryReInspectionCount,
        followUpCount: industryFollowUpCount,
      },
      {
        name: "Market",
        basicCount: marketBasicCount,
        reInspectionCount: marketReInspectionCount,
        followUpCount: marketFollowUpCount,
      },
      {
        name: "Sanitary",
        basicCount: sanitationBasicCount,
        reInspectionCount: sanitationReInspectionCount,
        followUpCount: sanitationFollowUpCount,
      },
    ]);
  } catch (error) {
    console.log("<======>", error);

    return NextResponse.json(error);
  }
}
