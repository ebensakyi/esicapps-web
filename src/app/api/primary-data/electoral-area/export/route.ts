export const dynamic = "force-dynamic";

import { NextResponse } from "next/server";
import { prisma } from "@/prisma/db";
import { logActivity } from "@/utils/log";

import { getServerSession } from "next-auth";
import { authOptions } from "../../../auth/[...nextauth]/options";
import AWS from "aws-sdk";
import fs from "fs";
const XLSX = require("xlsx");



export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const session: any = await getServerSession(authOptions);
    const selectedDistrict =
      searchParams.get("districtId") == null || ""
        ? undefined
        : Number(searchParams.get("districtId"));

    const searchText =
      searchParams.get("searchText")?.toString() == "undefined"
        ? ""
        : searchParams.get("searchText")?.toString();

    const userLevel = session?.user?.userLevelId;
    const userDistrict = session?.user?.districtId;
    const userRegion = session?.user?.regionId;

    let query = {};
    let count = 0;
    // const data = await prisma.electoralArea.findMany({
    //   where: { deleted: 0, districtId: Number(selectedDistrict) },
    // });

    // const districtId = Number(searchParams.get("districtId"));

    // if (districtId ) {
    //   const data = await prisma.electoralArea.findMany({
    //     where: { deleted: 0, districtId: Number(districtId) },
    //   });
    //   return NextResponse.json(data);
    // }

    if (userLevel == 1) {
        const response = await prisma.electoralArea.findMany({
          where: { deleted: 0, districtId: selectedDistrict },
          include: {
            District: {
              include: {
                Region: true,
              },
            },
          },
          orderBy: {
            name: "asc",
          },
        });
        let url = await export2Excel(response);

        return NextResponse.json(url);
      
    
    } else if (userLevel == 2) {
        const response = await prisma.electoralArea.findMany({
          where: { deleted: 0, districtId: Number(userRegion) },
          include: {
            District: {
              include: {
                Region: true,
              },
            },
          },
          orderBy: {
            name: "asc",
          },
        });
        let url = await export2Excel(response);

        return NextResponse.json(url);
      
 
    } else if (userLevel == 3) {
        const response = await prisma.electoralArea.findMany({
          where: { deleted: 0, districtId: Number(userDistrict) },
          include: {
            District: {
              include: {
                Region: true,
              },
            },
          },
          orderBy: {
            name: "asc",
          },
        });
        let url = await export2Excel(response);

        return NextResponse.json(url);
      }
  
    

  
  } catch (error) {
    console.error(error);
    return NextResponse.json(error);
  }
}



const export2Excel = async (data: any) => {
  try {
    let flatData = await flattenArray(data);

    const workSheet = XLSX.utils.json_to_sheet(flatData);
    const workBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workBook, workSheet, "Sheet 1");
    let filePath = `./public/temp/electoral-area.xlsx`;
    XLSX.writeFile(workBook, filePath);

    let url = await uploadFile("electoral-area.xlsx");

    return url;
  } catch (error) {
    console.log("error NextResponse=> ", error);
  }
};

const flattenArray = async (data: any) => {
  let newData = [];

  for (let i = 0; i < data?.length; i++) {
    newData?.push({
      Name: data[i]?.name,
      District: data[i]?.District?.name,

      Region: data[i]?.District?.Region?.name,
    });
  }

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
