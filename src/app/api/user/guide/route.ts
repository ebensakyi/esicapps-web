import { NextResponse } from "next/server";
import { prisma } from "@/prisma/db";
import { logActivity } from "@/utils/log";
import { getSession } from "@/utils/session-manager";
import { options } from "../../auth/[...nextauth]/options";

export async function POST(request: Request) {
  try {
    const res = await request.json();
    const session = await getServerSession(options);
    let userId = session?.user?.id;




    // const data = {
    //   title: res.title,
    //   fileTypeId: Number(res.fileType),
    //   description: res.description,
    //   url: res.url,
    //   userId: Number(session?.user?.id),
    // };

    // console.log(data);
    
    // const ug = await prisma.userGuide.create({ data });

    // return NextResponse.json(ug);
  } catch (error: any) {
    console.log(error);

    return NextResponse.json(error);
  }
}

export async function GET(request: Request) {
  try {
    const data = await prisma.userGuide.findMany({
      where: { deleted: 0 },
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

    const data = await prisma.userRole.update({
      where: {
        id: id,
      },
      data: {
        deleted: 1,
      },
    });

    return NextResponse.json(data);
  } catch (error) {
    console.log("error==> ", error);

    return NextResponse.json(error);
  }
}

function getServerSession(options: any) {
  throw new Error("Function not implemented.");
}
