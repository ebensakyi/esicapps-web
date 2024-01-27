export const dynamic = "force-dynamic";

import { prisma } from "@/prisma/db";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { authOptions } from "../../auth/[...nextauth]/options";
import AWS from "aws-sdk";
const XLSX = require("xlsx");
import fs from "fs";

export async function GET(request: Request) {
  try {
    const session: any = await getServerSession(authOptions);

    let userId = session?.user?.id;
    // let surname = session?.user?.surname;
    let loginUserDistrictId = session?.user?.districtId;
    let loginUserRegionId = session?.user?.regionId;
    let loginUserLevel = session?.user?.userLevelId;
    let { searchParams } = new URL(request.url);
    let exportFile = searchParams.get("exportFile");

    let filterBy: any = searchParams.get("filterBy")?.toString();
    let filterValue: any = searchParams.get("filterValue")?.toString();

    let curPage = Number.isNaN(Number(searchParams.get("page")))
      ? 1
      : Number(searchParams.get("page"));
    let perPage = 10;
    let skip =
      Number((curPage - 1) * perPage) < 0 ? 0 : Number((curPage - 1) * perPage);

    // if ((loginUserLevel == 1 && filterBy == "undefined") || filterBy == "") {
    //   filterBy = "undefined";
    //   filterValue = "undefined";
    // }
    // if ((loginUserLevel == 2 && filterBy == "undefined") || filterBy == "") {
    //   filterBy = "regionId";
    //   filterValue = regionId;
    // }
    // if ((loginUserLevel == 3 && filterBy == "undefined") || filterBy == "") {
    //   filterBy = "districtId";
    //   filterValue = districtId;
    // }

    if (loginUserLevel == 3) {
      let count = await prisma.user.count({
        where: {
          districtId: Number(loginUserDistrictId),
          deleted: 0,
        },
      });

    

      const response = await prisma.user.findMany({
        where: { districtId: Number(loginUserDistrictId) },
        include: {
          Region: true,
          District: true,
          Inspection: {
            select: {
              createdAt: true,
            },
            orderBy: {
              createdAt: "desc",
            },
            take: 1,
          },
          _count: {
            select: { Inspection: true },
          },
        },
        skip: exportFile ? undefined : skip,
        take: exportFile ? undefined : perPage,
        orderBy: {
          createdAt: "desc",
        },
      });

      if (exportFile) {
        const url = await export2Excel(response);
        return NextResponse.json(url);
      }

      return NextResponse.json({
        response,
        curPage: curPage,
        maxPage: Math.ceil(count / perPage),
      });
    }

    if (loginUserLevel == 2) {
      let count = await prisma.user.count({
        where: {
          regionId: Number(loginUserRegionId),
          deleted: 0,
        },
      });
      const response = await prisma.user.findMany({
        where: { regionId: Number(loginUserRegionId) },

        include: {
          Region: true,
          District: true,
          Inspection: {
            select: {
              createdAt: true,
            },
            orderBy: {
              createdAt: "desc",
            },
            take: 1,
          },
          _count: {
            select: { Inspection: true },
          },
        },
        skip: exportFile ? undefined : skip,
        take: exportFile ? undefined : perPage,
        orderBy: {
          createdAt: "desc",
        },
      });

      if (exportFile) {
        const url = await export2Excel(response);
        return NextResponse.json(url);
      }
      return NextResponse.json({
        response,
        curPage: curPage,
        maxPage: Math.ceil(count / perPage),
      });
    }



    if (loginUserLevel == 1) {
      let count = await prisma.user.count({
        where: {
          deleted: 0,
        },
      });
      const response = await prisma.user.findMany({
        include: {
          Region: true,
          District: true,
          Inspection: {
            select: {
              createdAt: true,
            },
            orderBy: {
              createdAt: "desc",
            },
            take: 1,
          },
          _count: {
            select: { Inspection: true },
          },
        },
        skip: exportFile ? undefined : skip,
        take: exportFile ? undefined : perPage,
        orderBy: {
          createdAt: "desc",
        },
      });

      
      if (exportFile) {
        const url = await export2Excel(response);
        return NextResponse.json(url);
      }

      return NextResponse.json({
        response,
        curPage: curPage,
        maxPage: Math.ceil(count / perPage),
      });
    }

    return NextResponse.json({});
  } catch (e) {
    console.log("ee ", e);
    return NextResponse.json(e);
  }
}

const export2Excel = async (data: any) => {
  try {
    let flatData = await flattenArray(data);

    const workSheet = XLSX.utils.json_to_sheet(flatData);
    const workBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workBook, workSheet, "Sheet 1");
    let filePath = `./public/temp/user-submissions-stats.xlsx`;
    XLSX.writeFile(workBook, filePath);

    let url = await uploadFile("user-submissions-stats.xlsx");

    return url;
  } catch (error) {
    console.log(error);
  }
};

const flattenArray = async (data: any) => {
  let newData = [];

  for (let i = 0; i < data?.length; i++) {
    newData?.push({
      Name: data[i]?.otherNames + data[i]?.surname,
      "Phone Number": data[i]?.phoneNumber,
      Email: data[i]?.email,
      Region: data[i]?.Region?.name,
      District: data[i]?.District?.name,
      "Last Submission Date": data[i]?.Inspection[0]?.createdAt,
      Submissions: data[i]?._count?.Inspection
    });
  }
console.log(newData);

  return newData;
};


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
