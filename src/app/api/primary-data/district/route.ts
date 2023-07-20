import { NextResponse } from "next/server";
import { prisma } from "@/prisma/db";
import { logActivity } from "@/utils/log";
import { getSession } from "@/utils/session-manager";
import { useSession } from "next-auth/react";
import { getServerSession } from "next-auth";
import { options } from "../../auth/[...nextauth]/options";
import jwt from "jsonwebtoken";
import cookie from "cookie";
import { district } from "../../../../../prisma/seed/district";
import { region } from "../../../../../prisma/seed/region";

export async function POST(request: Request) {
  try {
    const res = await request.json();
    const data = {
      name: res.data.name,
      regionId: res.regionId,
      abbrv: res.abbrv,
    };
    const response = await prisma.district.create({ data });

    return NextResponse.json(response);
  } catch (error: any) {
    return NextResponse.json(error);
  }
}

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const selectedRegion = searchParams.get("regionId");

    console.log(searchParams);
    


    const selectedDistrict = searchParams.get("districtId");    const session = await getServerSession(options);

    const userLevel = session?.user?.userLevelId;
    const userDistrict = session?.user?.districtId;
    const userRegion = session?.user?.regionId;
    let query = {};
console.info(session?.user);

    console.info("CUR USERLEVEL.? ", userLevel);

    if (userLevel == 1) {
      query = { where: { deleted: 0, regionId: selectedRegion } };
      // level = "regionId"
      // if (selectedRegion == "undefined") {
      //   levelValue = session?.user?.regionId
      // }
    } else if (userLevel == 2) {
      // level = "regionId"
      // if (selectedRegion == "undefined") {
      //   levelValue = session?.user?.regionId
      // }
      query = { where: { deleted: 0, regionId: Number(userRegion) } };

      console.log(query);
      
    } else if (userLevel == 3) {
      // level = "districtId"
      // if (selectedDistrict == "undefined") {
      //   levelValue = session?.user?.districtId
      // }
      query = { where: { deleted: 0, id: Number(userDistrict) } };
    } else {
      query = { where: { deleted: 0 } };
    }


    const data = await prisma.district.findMany(query);

    

    return NextResponse.json(data);
  } catch (error) {
    console.log(error);
    return NextResponse.json(error);
  }
}
