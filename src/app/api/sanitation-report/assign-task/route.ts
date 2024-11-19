import { NextResponse } from "next/server";
import { prisma } from "@/prisma/db";

// export async function GET(request: Request) {
//   try {
//     const response = await prisma.reportCategory.findMany({
//       where: { deleted: 0 },
//     });

//     return NextResponse.json(response);
//   } catch (error) {
//     console.log(error);
//     return NextResponse.json(error);
//   }
// }

export async function POST(request: Request) {
  try {
    const res = await request.json();
    const { reportId, officerId, sendsms } = res;

    const response = await prisma.sanitationReport.update({
      where: { id: Number(reportId) },
      data: { assignedTo: Number(officerId) },
    });

    return NextResponse.json(response);
  } catch (error) {
    console.log(error);
    return NextResponse.json(error);
  }
}

export async function PUT(request: Request) {
  try {
    const res = await request.json();

    let response = await prisma.reportCategory.update({
      where: {
        id: Number(res?.reportId),
      },
      data: { name: res.reportName },
    });
    return NextResponse.json(response);
  } catch (error) {
    console.log(error);
    return NextResponse.json(error);
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const id = params.id;

    await prisma.reportCategory.update({
      where: {
        id: Number(id),
      },
      data: { deleted: 1 },
    });
    return NextResponse.json({});
  } catch (error) {
    console.log("error===>", error);

    return NextResponse.json(error);
  }
}
