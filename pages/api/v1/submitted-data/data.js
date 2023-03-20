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

    let inspection = await prisma.basicInfoSection.findMany(mainWhere);

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

  console.log(req.query.token);
  let published = Number(req.query.published);
  let inspectionFormId = Number(req.query.inspectionFormId);
  let curPage = req.query.page;

  let perPage = 10;
  let skip = Number((curPage - 1) * perPage);

  let data = await verifyToken(req.query.token);

  let userType = data.user.UserType.id;

  if (userType == 1) {
    return {
      where: {
       
        deleted: 0,
        Inspection: { 
        
          isPublished: published,
          inspectionFormId: inspectionFormId,
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
  if (userType == 2) {
    region = data.user.regionId;

    return {
      where: {
       
        deleted: 0,
        Inspection: { 
          regionId: region,
          isPublished: published,
          inspectionFormId: inspectionFormId,
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
  if (userType == 3) {
    district = data.user.districtId;
    return {
      where: {
        districtId: district,
        deleted: 0,
        Inspection: {
          isPublished: published,
          inspectionFormId: inspectionFormId,
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
