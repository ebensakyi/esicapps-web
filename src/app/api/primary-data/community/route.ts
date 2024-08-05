import { NextResponse } from "next/server";
import { prisma } from "@/prisma/db";
import { logActivity } from "@/utils/log";
import { getServerSession } from "next-auth";
import { authOptions } from "../../auth/[...nextauth]/options";

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
    const session: any = await getServerSession(authOptions);

    const { searchParams } = new URL(request.url);
    const electoralAreaId = Number(searchParams.get("electoralAreaId"));
    const get_all = Number(searchParams.get("get_all"));


    const userLevel = session?.user?.userLevelId;
    const userDistrict = session?.user?.districtId;
    const userRegion = session?.user?.regionId;
    let  response
    let count
    const searchText =
      searchParams.get("searchText")?.toString() == "undefined"
        ? ""
        : searchParams.get("searchText")?.toString();

    let curPage = Number.isNaN(Number(searchParams.get("page")))
      ? 1
      : Number(searchParams.get("page"));

    let perPage = 10;
    let skip =
      Number((curPage - 1) * perPage) < 0 ? 0 : Number((curPage - 1) * perPage);

    // if (districtId || mobile) {
    //   const data = await prisma.community.findMany({
    //     where: { deleted: 0, districtId: Number(districtId) },
    //   });
    //   return NextResponse.json(data);
    // }

    if (get_all == 1) {
      const response = await prisma.community.findMany({
        where: { deleted: 0, electoralAreaId: electoralAreaId },
      });

      return NextResponse.json({
        response,
      });
    }
    if (userLevel == 1) {   response = await prisma.community.findMany({
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
        District: true,
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
      orderBy: {
        name: "asc",
      },
      skip: skip,
      take: perPage,
    });
    count = await prisma.community.count({
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
    }else if (userLevel == 2) {
       response = await prisma.community.findMany({
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
            : { deleted: 0,  },
  
        include: {
          District: true,
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
        orderBy: {
          name: "asc",
        },
        skip: skip,
        take: perPage,
      });
      count = await prisma.community.count({
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
    }else if (userLevel == 3) {
       response = await prisma.community.findMany({
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
                districtId: Number(userDistrict)
              }
            : { deleted: 0, districtId: Number(userDistrict) },
  
        include: {
          District: true,
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
        orderBy: {
          name: "asc",
        },
        skip: skip,
        take: perPage,
      });
      count = await prisma.community.count({
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
    }else{
      count = await prisma.community.count({
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
    }

  

  
    return NextResponse.json({
      response,
      curPage: curPage,
      maxPage: Math.ceil(count / perPage),
    });
  } catch (error) {
    return NextResponse.json(error);
  }
}

export async function PUT(request: Request) {
  try {
    const res = await request.json();

    let id = res.communityId;
    let districtId = res.districtId;
    let data = {};
    if (districtId) {
      data = {
        name: res.communityName,
        electoralAreaId: Number(res.electoralAreaId),
        districtId: Number(res.districtId),
      };
    } else {
      data = {
        name: res.communityName,
        electoralAreaId: Number(res.electoralAreaId),
      };
    }

    const response = await prisma.community.update({ where: { id }, data });

    return NextResponse.json(response);
  } catch (error: any) {
    console.error(error);
    return NextResponse.json(error);
  }
}
export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);

    const id = Number(searchParams.get("id"));

  const data = {
  deleted:1
  };

  const response = await prisma.community.update({ where: { id }, data });

  return NextResponse.json(response);
  } catch (error: any) {
    console.log(error);

    return NextResponse.json(error, { status: 500 });
  }
}