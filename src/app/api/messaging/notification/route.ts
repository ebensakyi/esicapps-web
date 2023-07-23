import { NextResponse } from "next/server";
import { prisma } from "@/prisma/db";
import { logActivity } from "@/utils/log";
import { getServerSession } from "next-auth";
import { authOptions } from "../../auth/[...nextauth]/options";

export async function POST(request: Request) {
  try {
    const res = await request.json();
    const session = await getServerSession(authOptions);

    
    const userId = session?.user?.id;

    const data = {
      title: res.title,
      message: res.message,
      messageType: res.messageType,
      sendingType: res.sendingType,
      individualRecipient: res.individualRecipient,
      districtId: res.districtId,
      regionId: res.regionId,
      sender: Number(userId),
    };
    const response = await prisma.messaging.create({ data });

    return NextResponse.json(response);
  } catch (error: any) {
    return NextResponse.json(error);
  }
}

export async function GET(request: Request) {
  try {
    const data = await prisma.messaging.findMany({
      where: { deleted: 0 },
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(error);
  }
}
