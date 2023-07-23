import { NextResponse } from "next/server";
import { prisma } from "@/prisma/db";
import { logActivity } from "@/utils/log";
import { getSession } from "@/utils/session-manager";
import { authOptions } from "../../auth/[...nextauth]/options";
import { getServerSession } from "next-auth";

export async function POST(request: Request) {
  try {
    const res = await request.json();
    const session = await getServerSession(authOptions);

    console.log("sessxxxion",session);
    
    const userId = session?.user?.id;

    const data = {
      title: res.title,
      fileTypeId: Number(res.fileType),
      description: res.description,
      url: res.url,
      userId: Number(userId),
    };

    const ug = await prisma.userGuide.create({ data });

    return NextResponse.json(ug);
  } catch (error: any) {
    console.log(error);

    return NextResponse.json(error);
  }
}

export async function GET(request: Request) {
  try {
    const data = await prisma.userGuide.findMany({
      where: { deleted: 0 },
      include: { FileType: true },
      orderBy: {
        id: "desc",
      },
    });

    return NextResponse.json(data);
  } catch (error) {
    console.log(error);

    return NextResponse.json(error);
  }
}

export async function PUT(request: Request) {
  try {
    const res = await request.json();
    const session = await getServerSession(authOptions);
    const userId = session?.user?.id;


    let id = Number(res.guideId);
    const data = {
      title: res.title,
      fileTypeId: Number(res.fileType),
      description: res.description,
      url: res.url,
      userId: Number(userId),
    };

    await prisma.userGuide.update({
      data: data,
      where: {
        id: id,
      },
    });

    return NextResponse.json(data);
  } catch (error) {
    console.log(error);

    return NextResponse.json(error);
  }
}

export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);

    const id = Number(searchParams.get("id"));

    const data = await prisma.userGuide.delete({
      where: {
        id: id,
      },
     
    });

    return NextResponse.json(data);
  } catch (error) {
    console.log("error==> ", error);

    return NextResponse.json(error);
  }
}
