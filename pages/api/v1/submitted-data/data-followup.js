import prisma from "../../../../prisma/MyPrismaClient";
import { getUserCookie } from "../../../../helpers/cookies-manager";
import { verifyToken } from "../../../../helpers/token-verifier";

const post = async (req, res) => {
  try {
  } catch (error) {}
};

const get = async (req, res) => {
  try {
    let mainWhere = await generateWhereMainObject(req, res);

    let inspectionFormId = Number(req.query.inspectionFormId);

    let curPage = req.query.page;
    //let searchText = req.query.searchText.trim();

    let perPage = 10;
    let count = await prisma.inspection.count({
      //where: getSearchParams(req, searchText).where,
      where: {
        inspectionFormId: inspectionFormId,
      },
    });

    let inspection = await prisma.followUpInspection.findMany(mainWhere);

    return res.status(200).json({
      inspection,
      curPage: curPage,
      maxPage: Math.ceil(count / perPage),
    });

    // return res.status(200).json(community);
  } catch (error) {
    console.log("Error: " + error);
  }
};

const generateWhereMainObject = async (req, res) => {
  let region;
  let district;
  let whereObject;

  let published = Number(req?.query?.published);
  let inspectionFormId = Number(req?.query?.inspectionFormId);
  let curPage = req?.query?.page;

  // let filterBy = req?.query?.filterBy;

  let filterBy;

  let filterValue =
    req?.query?.filterValue == "undefined"
      ? undefined
      : Number(req?.query?.filterValue);
  let from =
    req?.query?.from == "undefined" || req?.query?.from == ""
      ? undefined
      : new Date(req?.query?.from);

  let to =
    req.query.to == "" || req?.query?.to == "undefined"
      ? undefined
      : new Date(req?.query?.to);

  // let filterColumn = filterBy==1?"regionId"

  let perPage = 10;
  let skip = Number((curPage - 1) * perPage) || 0;

  let data = await verifyToken(req.query.token);

  let userType = data.user.UserType.id;
  // let filterColumn = userType == 1 ?""

  if (userType == 1 || userType == 2) {
    filterBy = filterBy == "undefined" ? "regionId" : filterBy;

    return {
      where: {
        deleted: 0,
        Inspection: {
          [filterBy]: filterValue,

          isPublished: published,
          inspectionFormId: inspectionFormId,
        },
        createdAt: {
          gte: from,
          lte: to,
        },
      },
      // where: getSearchParams(req, searchText).where,
      skip: skip,
      take: perPage,
      orderBy: {
        createdAt: "asc",
      },
      include: {
        InspectionType: true,
        Rating: true,
        Inspection: {
          include: {
            User: true,
            BasicInfoSection: {
              include: {
                Community: {
                  include: { District: { include: { Region: true } } },
                },
              },
            },
          },
        },
        //  User: true,
      },
    };
  }
  if (userType == 3) {
    region = data.user.regionId;
    filterBy = filterBy == undefined ? "districtId" : filterBy;

    return {
      where: {
        deleted: 0,
        Inspection: {
          [filterBy]: filterValue,

          regionId: region,
          isPublished: published,
          inspectionFormId: inspectionFormId,
        },
        createdAt: {
          gte: from,
          lte: to,
        },
      },
      // where: getSearchParams(req, searchText).where,
      skip: skip,
      take: perPage,
      orderBy: {
        createdAt: "asc",
      },
      include: {
        InspectionType: true,
        Rating: true,
        Inspection: {
          include: {
            User: true,
            BasicInfoSection: {
              include: {
                Community: {
                  include: { District: { include: { Region: true } } },
                },
              },
            },
          },
        },
        //  User: true,
      },
    };
  }
  if (userType == 4) {
    filterBy = filterBy == undefined ? "electoralAreaId" : filterBy;

    district = data.user.districtId;
    return {
      where: {
        [filterBy]: filterValue,

        districtId: district,
        deleted: 0,
        Inspection: {
          isPublished: published,
          inspectionFormId: inspectionFormId,
        },
        createdAt: {
          gte: from,
          lte: to,
        },
      },
      // where: getSearchParams(req, searchText).where,
      skip: skip,
      take: perPage,
      orderBy: {
        createdAt: "asc",
      },
      include: {
        Inspection: true,
        Community: { include: { District: { include: { Region: true } } } },
        User: true,
      },
    };
  }
};

export default (req, res) => {
  req.method === "POST"
    ? post(req, res)
    : req.method === "PUT"
    ? console.log("PUT")
    : req.method === "DELETE"
    ? console.log("DELETE")
    : req.method === "GET"
    ? get(req, res)
    : res.status(404).send("");
};
