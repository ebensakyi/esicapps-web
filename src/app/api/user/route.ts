import { NextResponse } from "next/server";
import { prisma } from "@/prisma/db";
import { logActivity } from "@/utils/log";
import { generateCode } from "@/utils/generate-code";
import { authOptions } from "../auth/[...nextauth]/options";
import { v4 as uuidv4 } from "uuid";

import bcrypt from "bcryptjs";
import { getServerSession } from "next-auth";
import { sendSMS } from "@/utils/send-hubtel-sms";
import AWS from "aws-sdk";
import fs from "fs";

const XLSX = require("xlsx");
export async function POST(request: Request) {
  try {
    const res = await request.json();
    const session: any = await getServerSession(authOptions);
    if (!session) {
      return;
    }

    // let loginUserLevel = session?.user?.userLevelId;
    // let fileUrl;

    let password: string = (await generateCode(4)) as string;
    const salt = bcrypt.genSaltSync(10);
    let hashedPassword = bcrypt.hashSync(password, salt);

    let regionId = res.region;
    let accessibleDistricts = res.accessibleDistricts;

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

    let count = await prisma.user.count({
      where: {
        phoneNumber: res.phoneNumber,
      },
    });
    if (count != 0) {
      return NextResponse.json(
        { message: "Phone number already used" },
        { status: 201 }
      );
    }

    const user: any = await prisma.user.create({ data });
    if (res.sendSMS) {
      await sendSMS(
        res.phoneNumber,
        `The temporal password for ESICApps App is ${password}`
      );
    }


    if(accessibleDistricts){
      let districts = await accessibleDistricts.map((d: any) => {
        return {
          districtId: d.value,
          userId: user.id,
        };
      });
  
      // console.log(pages);
  
      const allowedDistricts = await prisma.allowedDistricts.createMany({
        data: districts,

      });
  
    }

    return NextResponse.json(user);
  } catch (error: any) {
    console.log(error);

    return NextResponse.json(error);
  }
}

export async function GET(request: Request) {
  try {
    const session: any = await getServerSession(authOptions);

    let userId = session?.user?.id;
    let loginUserDistrictId = session?.user?.districtId;
    let loginUserRegionId = session?.user?.regionId;
    let loginUserLevel = session?.user?.userLevelId;

    const { searchParams } = new URL(request.url);
    const searchText =
      searchParams.get("searchText")?.toString() == undefined
        ? ""
        : searchParams.get("searchText")?.toString();

    const districtId = searchParams.get("districtId") || undefined;
    let exportFile = searchParams.get("exportFile");
    let getAll = searchParams.get("get_all");

    let curPage = Number.isNaN(Number(searchParams.get("page")))
      ? 1
      : Number(searchParams.get("page"));

    let perPage = 10;
    let skip =
      Number((curPage - 1) * perPage) < 0 ? 0 : Number((curPage - 1) * perPage);

    const q = searchParams.get("q");
    if (q) {
      const response = await prisma.user.findMany({ where: { deleted: 0 } });

      return NextResponse.json({
        response,
      });
    }

    const whereConditions: any =
      searchText !== ""
        ? {
            OR: [
              { surname: { contains: searchText, mode: "insensitive" } },
              { otherNames: { contains: searchText, mode: "insensitive" } },
              { phoneNumber: { contains: searchText, mode: "insensitive" } },
              { email: { contains: searchText, mode: "insensitive" } },
              {
                District: {
                  name: { contains: searchText, mode: "insensitive" },
                },
              },
            ],
            deleted: 0,
          }
        : { deleted: 0 };

    // Apply filters for districtId and loginUserLevel
    if (districtId) {
      whereConditions.districtId = Number(districtId);
    }

    if (loginUserLevel == 2) {
      whereConditions.regionId = Number(loginUserRegionId);
    }

    if (loginUserLevel == 3) {
      whereConditions.districtId = Number(loginUserDistrictId);
    }

    // Fetch all users without pagination when getAll is true
    if (getAll) {
      const response = await prisma.user.findMany({
        where: whereConditions,
        include: {
          Region: true,
          District: true,
          UserRole: true,
          UserLevel: true,
        },
        orderBy: { id: "desc" },
      });

      return NextResponse.json({
        response,
      });
    }

    if (exportFile) {
      skip = 0;
    }

    if (loginUserLevel == 1) {
      const count = await prisma.user.count({ where: whereConditions });

      const response = await prisma.user.findMany({
        where: whereConditions,
        include: {
          Region: true,
          District: true,
          UserRole: true,
          UserLevel: true,
        },
        orderBy: { id: "desc" },
        skip: exportFile ? undefined : skip,
        take: exportFile ? undefined : perPage,
      });

      if (exportFile) {
        const exportResponse = await prisma.user.findMany({
          where: whereConditions,
          include: {
            Region: true,
            District: true,
            UserRole: true,
            UserLevel: true,
          },
          orderBy: { id: "desc" },
        });
        const url = await export2Excel(exportResponse);
        return NextResponse.json(url);
      }

      return NextResponse.json({
        response,
        curPage,
        maxPage: Math.ceil(count / perPage),
      });
    }

    if (loginUserLevel == 2) {
      const count = await prisma.user.count({
        where: { ...whereConditions, regionId: Number(loginUserRegionId) },
      });

      const response = await prisma.user.findMany({
        where: { ...whereConditions, regionId: Number(loginUserRegionId) },
        include: {
          Region: true,
          District: true,
          UserRole: true,
          UserLevel: true,
        },
        orderBy: { id: "desc" },
        skip: exportFile ? undefined : skip,
        take: exportFile ? undefined : perPage,
      });

      if (exportFile) {
        const exportResponse = await prisma.user.findMany({
          where: { ...whereConditions, regionId: Number(loginUserRegionId) },
          include: {
            Region: true,
            District: true,
            UserRole: true,
            UserLevel: true,
          },
          orderBy: { id: "desc" },
        });
        const url = await export2Excel(exportResponse);
        return NextResponse.json(url);
      }

      return NextResponse.json({
        response,
        curPage,
        maxPage: Math.ceil(count / perPage),
      });
    }

    if (loginUserLevel == 3) {
      const count = await prisma.user.count({
        where: { ...whereConditions, districtId: Number(loginUserDistrictId) },
      });

      const response = await prisma.user.findMany({
        where: { ...whereConditions, districtId: Number(loginUserDistrictId) },
        include: {
          Region: true,
          District: true,
          UserRole: true,
          UserLevel: true,
        },
        orderBy: { id: "desc" },
        skip: exportFile ? undefined : skip,
        take: exportFile ? undefined : perPage,
      });

      if (exportFile) {
        const exportResponse = await prisma.user.findMany({
          where: { ...whereConditions, districtId: Number(loginUserDistrictId) },
          include: {
            Region: true,
            District: true,
            UserRole: true,
            UserLevel: true,
          },
          orderBy: { id: "desc" },
        });
        const url = await export2Excel(exportResponse);
        return NextResponse.json(url);
      }

      return NextResponse.json({
        response,
        curPage,
        maxPage: Math.ceil(count / perPage),
      });
    }
  } catch (error) {
    return NextResponse.json(error);
  }
}


export async function PUT(request: Request) {
  try {
    const res = await request.json();

    let regionId = res.region;

    let userId = res?.userId;
    let changeStatus = res.changeStatus;
    let status = res.status;

    if (changeStatus) {
      let user = await prisma.user.update({
        data: { activated: status },
        where: {
          id: userId,
        },
      });

      return NextResponse.json({});
    }

    if (regionId == null) {
      const district = await prisma.district.findFirst({
        where: { id: Number(res.district) },
      });

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
    const res = await request.json();

    let userId = res.userId;

    let user: any = await prisma.user.findFirst({
      where: { id: Number(userId) },
    });

    let updatedPhoneNumber = user?.phoneNumber + "-deleted-" + uuidv4();
    await prisma.user.update({
      where: { id: Number(userId) },
      data: {
        deleted: Math.abs(user?.deleted - 1),
        phoneNumber: updatedPhoneNumber,
      },
    });

    return NextResponse.json({});
  } catch (error) {
    console.log(error);

    return NextResponse.json(error);
  }
}

const uploadFile = async (fileName: any) => {
  try {
    AWS.config.update({
      accessKeyId: process.env.AWS_ACCESS_KEY,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    });

    var s3 = new AWS.S3();

    var filePath = `./public/temp/${fileName}`;

    var params = {
      Bucket: "esicapps-exports",
      Body: fs.createReadStream(filePath),
      // Key: prefix + "/" + fileName,
      Key: fileName,
    };

    let stored = await s3.upload(params).promise();

    return stored.Location;
  } catch (error) {
    console.log("Upload File Error ", error);
    return error;
  }
};

const flattenArray = async (data: any) => {
  let newData = [];

  for (let i = 0; i < data?.length; i++) {
    newData?.push({
      Name: data[i]?.otherNames + data[i]?.surname,
      "Phone Number": data[i]?.phoneNumber,
      Email: data[i]?.email,
      "User Level": data[i]?.UserLevel?.name,
      Region: data[i]?.Region?.name,
      District: data[i]?.District?.name,
    });
  }

  return newData;
};

const export2Excel = async (data: any) => {
  try {
    let flatData = await flattenArray(data);

    const workSheet = XLSX.utils.json_to_sheet(flatData);
    const workBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workBook, workSheet, "Sheet 1");
    let filePath = `./public/temp/users.xlsx`;
    XLSX.writeFile(workBook, filePath);

    let url = await uploadFile("users.xlsx");

    return url;
  } catch (error) {
    console.log("error NextResponse=> ");
  }
};
