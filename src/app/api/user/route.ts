import { NextResponse } from "next/server";
import { prisma } from "@/prisma/db";
import { logActivity } from "@/utils/log";
import { generateCode } from "@/utils/generate-code";
import { options } from "../auth/[...nextauth]/options";

import bcrypt from "bcryptjs";
import { getServerSession } from "next-auth";
import { region } from "../../../../prisma/seed/region";
import { district } from "../../../../prisma/seed/district";
import { userLevel } from "../../../../prisma/seed/userLevel";

export async function POST(request: Request) {
  try {
    const res = await request.json();
    const session = await getServerSession(options);

    let loginUserLevel = session?.user?.userLevelId;

    let password: string = (await generateCode(4)) as string;
    const salt = bcrypt.genSaltSync(10);
    let hashedPassword = bcrypt.hashSync(password, salt);

    let regionId = res.region;

    if (regionId == null) {
      const district = await prisma.district.findFirst({
        where: { id: Number(res.district) },
      });

      regionId = district?.regionId;
    }

    const data = {
      userRoleId: res.userRoleId,
      userLevelId: res.userLevelId,
      surname: res.surname,
      otherNames: res.otherNames,
      email: res.email,
      phoneNumber: res.phoneNumber,
      designation: res.designation,
      password: hashedPassword,
      tempPassword: password,
      regionId: regionId,
      districtId: res.district,
    };

    console.log("DATA ", data);

    const user = await prisma.user.create({ data });

    return NextResponse.json(user);
  } catch (error: any) {
    console.log(error);

    return NextResponse.json(error);
  }
}

export async function GET(request: Request) {
  try {
    const session = await getServerSession(options);

    // console.log(session?.user);

    const { searchParams } = new URL(request.url);
    const searchText = searchParams.get("searchText");
    const districtId = searchParams.get("districtId") || undefined;

    const page: any = searchParams.get("page") || 1;

    let perPage = 10;
    let skip = Number((page - 1) * perPage) || 0;

    // let userLevel = loggedInUserData?.userLevelId;
    // let region = loggedInUserData?.regionId;
    // let district = loggedInUserData?.districtId;
    // let users;

    const data = await prisma.user.findMany({
      // where: { deleted: 0 },
      include: {
        Region: true,
        District: true,
        UserRole: true,
        UserLevel: true,
      },
      orderBy: {
        id: "desc",
      },
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(error);
  }
}




export async function PUT(request: Request) {
  try {
    const res = await request.json();

console.log("put",res);

    let regionId = res.region;

    if (regionId == null) {
      const district = await prisma.district.findFirst({
        where: { id: Number(res.district) },
      });
console.log(district);



      regionId = district?.regionId;
    }
    

    let id = res.userId;

    const data = {
      userRoleId: res.userRoleId,
      userLevelId: res.userLevelId,
      surname: res.surname,
      otherNames: res.otherNames,
      email: res.email,
      phoneNumber: res.phoneNumber,
      designation: res.designation,
      regionId: regionId,
      districtId: res.district,
    };

    await prisma.user.update({
      data:data,
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
    const res = await request.json();


    let regionId = res.region;

    let user:any = await prisma.user.findFirst({
      where: { id: Number(res.id) },
    });

    await prisma.user.update({
      where: { id: Number(res.id) },
      data: { deleted: Math.abs(user?.deleted - 1) },
    });


    return NextResponse.json({});
  } catch (error) {
    console.log(error);
    
    return NextResponse.json(error);
  }
}
