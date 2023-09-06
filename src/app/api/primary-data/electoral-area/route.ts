import { NextResponse } from "next/server";
import { prisma } from "@/prisma/db";
import { logActivity } from "@/utils/log";

import { getServerSession } from "next-auth";
import { authOptions } from "../../auth/[...nextauth]/options";
import AWS from "aws-sdk";
import fs from "fs";
const XLSX = require("xlsx");

export async function POST(request: Request) {
  try {
    const res = await request.json();
    const data = {
      name: res.electoralAreaName,
      districtId: Number(res.districtId),
    };

    const response = await prisma.electoralArea.create({ data });

    return NextResponse.json(response);
  } catch (error: any) {
    console.error(error);
    return NextResponse.json(error);
  }
}

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const session: any = await getServerSession(authOptions);
    const selectedDistrict =
      searchParams.get("districtId") == null || ""
        ? undefined
        : Number(searchParams.get("districtId"));
    const get_all = Number(searchParams.get("get_all"));

    const searchText =
      searchParams.get("searchText")?.toString() == "undefined"
        ? ""
        : searchParams.get("searchText")?.toString();

    const userLevel = session?.user?.userLevelId;
    const userDistrict = session?.user?.districtId;
    const userRegion = session?.user?.regionId;
    let exportFile = searchParams.get("exportFile");

    let curPage = Number(searchParams.get("page")) || 0;

    let perPage = 10;
    let skip =
      Number((curPage - 1) * perPage) < 0 ? 0 : Number((curPage - 1) * perPage);

    let query = {};
    let count = 0;
    // const data = await prisma.electoralArea.findMany({
    //   where: { deleted: 0, districtId: Number(selectedDistrict) },
    // });

    const districtId = Number(searchParams.get("districtId"));
    const mobile = Number(searchParams.get("mobile"));

    if (districtId & mobile) {
      const data = await prisma.electoralArea.findMany({
        where: { deleted: 0, districtId: Number(districtId) },
      });
      return NextResponse.json(data);
    }

    if (userLevel == 1) {
      if (exportFile) {
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
      }
      if (get_all == 1) {
        query = {
          where: { deleted: 0, districtId: selectedDistrict },
          include: {
            District: {
              include: {
                Region: true,
              },
            },
          },
        };
      } else {
        query = {
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
                      District: {
                        name: { contains: searchText, mode: "insensitive" },
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
                  districtId: selectedDistrict,
                }
              : { deleted: 0, districtId: selectedDistrict },

          skip: skip,
          take: perPage,
          include: {
            District: {
              include: {
                Region: true,
              },
            },
          },
        };
        count = await prisma.electoralArea.count({
          where: { deleted: 0, districtId: selectedDistrict },
        });
      }
    } else if (userLevel == 2) {
      if (exportFile) {
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
      }
      if (get_all == 1) {
        query = {
          where: { deleted: 0, districtId: Number(userRegion) },

          include: {
            District: {
              include: {
                Region: true,
              },
            },
          },
        };
      } else {
        query = {
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
                    District: {
                      name: { contains: searchText, mode: "insensitive" },
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
                  districtId: Number(userRegion),
                }
              : { deleted: 0, districtId: Number(userRegion) },

          skip: skip,
          take: perPage,
          include: {
            District: {
              include: {
                Region: true,
              },
            },
          },
        };
        count = await prisma.electoralArea.count({
          where: { deleted: 0, districtId: Number(userRegion) },
        });
      }
    } else if (userLevel == 3) {
      if (exportFile) {
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
      if (get_all == 1) {
        query = {
          where: { deleted: 0, id: Number(userDistrict) },

          include: {
            District: {
              include: {
                Region: true,
              },
            },
          },
        };
      } else {
        query = {
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
                    District: {
                      name: { contains: searchText, mode: "insensitive" },
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
                  districtId: Number(userDistrict),
                }
              : { deleted: 0, districtId: Number(userDistrict) },

          skip: skip,
          take: perPage,
          include: {
            District: {
              include: {
                Region: true,
              },
            },
          },
        };
        count = await prisma.electoralArea.count({
          where: searchText != ""
          ? {
            OR: [
              {
                name: {
                  contains: searchText,
                  mode: "insensitive",
                },
              },
              {
                District: {
                  name: { contains: searchText, mode: "insensitive" },
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
              districtId: Number(userDistrict),
            } :{ deleted: 0,
              districtId: Number(userDistrict),}
        });
      }
    } else {
      query = { where: { deleted: 0 } };
    }

    const response = await prisma.electoralArea.findMany(query);

    return NextResponse.json({
      response,
      curPage: curPage,
      maxPage: Math.ceil(count / perPage),
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(error);
  }
}

export async function PUT(request: Request) {
  try {
    const res = await request.json();

    let id = res.electoralAreaId;
    const data = {
      name: res.electoralAreaName,
      districtId: Number(res.districtId),
    };

    const response = await prisma.electoralArea.update({ where: { id }, data });

    return NextResponse.json(response);
  } catch (error: any) {
    console.error(error);
    return NextResponse.json(error, { status: 500 });
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
