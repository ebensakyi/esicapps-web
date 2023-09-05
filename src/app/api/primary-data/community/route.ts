import { NextResponse } from "next/server";
import { prisma } from "@/prisma/db";
import { logActivity } from "@/utils/log";
import AWS from "aws-sdk";
import fs from "fs";
const XLSX = require("xlsx");

export async function POST(request: Request) {
  try {
    const res = await request.json();

    const data = {
      name: res.communityName,
      districtId: Number(res.districtId),
      electoralAreaId: Number(res.electoralAreaId),
    };

    const response = await prisma.community.create({ data });

    return NextResponse.json(response);
  } catch (error: any) {
    console.log(error);

    return NextResponse.json(error, { status: 500 });
  }
}

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const districtId = Number(searchParams.get("districtId"));
    const mobile = Number(searchParams.get("mobile"));
    let exportFile = searchParams.get("exportFile");
    

    const searchText =
      searchParams.get("searchText")?.toString() == "undefined"
        ? ""
        : searchParams.get("searchText")?.toString();

    let curPage = Number(searchParams.get("page"));

    let perPage = 10;
    let skip = Number((curPage - 1) * perPage)<0?0:  Number((curPage - 1) * perPage);

    if (districtId || mobile) {
      const data = await prisma.community.findMany({
        where: { deleted: 0, districtId: Number(districtId) },
      });
      return NextResponse.json(data);
    }
   

    const response = await prisma.community.findMany({
      where:
        searchText != ""
          ? {
              OR: [
                {
                  name: {
                    contains: searchText,
                    mode: "insensitive",
                  },
                },
                {
                  ElectoralArea: {
                    name: { contains: searchText, mode: "insensitive" },
                  },
                },
                {
                  ElectoralArea: {
                    District: {
                      name: { contains: searchText, mode: "insensitive" },
                    },
                  },
                },
                {
                  District: {
                    Region: {
                      name: { contains: searchText, mode: "insensitive" },
                    },
                  },
                },
              ],
              deleted: 0,
            }
          : { deleted: 0 },

      include: {
        ElectoralArea: {
          include: {
            District: {
              include: {
                Region: true,
              },
            },
          },
        },
      },
      skip: skip,
      take: perPage,
    });

    if (exportFile) {
      
      let url = await export2Excel(response);

      return NextResponse.json(url);
    }
  const count = await prisma.community.count({
      where:
        searchText != ""
          ? {
              OR: [
                {
                  name: {
                    contains: searchText,
                    mode: "insensitive",
                  },
                },
                {
                  ElectoralArea: {
                    name: { contains: searchText, mode: "insensitive" },
                  },
                },
                {
                  ElectoralArea: {
                    District: {
                      name: { contains: searchText, mode: "insensitive" },
                    },
                  },
                },
                {
                  District: {
                    Region: {
                      name: { contains: searchText, mode: "insensitive" },
                    },
                  },
                },
              ],
              deleted: 0,
            }
          : { deleted: 0 },
    });
    return NextResponse.json({
      response,
      curPage: curPage,
      maxPage: Math.ceil(count / perPage),
    });
  } catch (error) {

    console.log(">>>>>>>>>>> ",error);
    
    return NextResponse.json(error);
  }
}

export async function PUT(request: Request) {
  try {
    const res = await request.json();

    let id = res.communityId;
    const data = {
      name: res.communityName,
      electoralAreaId: Number(res.electoralAreaId),
    };

    const response = await prisma.community.update({ where: { id }, data });

    return NextResponse.json(response);
  } catch (error: any) {
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
    let filePath = `./public/temp/communities.xlsx`;
    XLSX.writeFile(workBook, filePath);

    let url = await uploadFile("communities.xlsx");

    return url;
  } catch (error) {
    console.log("error NextResponse=> ");
  }
};

const flattenArray = async (data: any) => {
  
  let newData = [];

  for (let i = 0; i < data?.length; i++) {
    newData?.push({
      Name: data[i]?.name,
      "Electoral Area": data[i]?.ElectoralArea.name,
      District: data[i]?.ElectoralArea?.District?.name,

      Region: data[i]?.ElectoralArea?.District?.Region?.name,

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
