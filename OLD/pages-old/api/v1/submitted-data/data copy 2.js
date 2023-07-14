import prisma from "../../../../prisma/db";
import { getSession } from "../../../../utils/session-manager";
import { verifyToken } from "../../../../utils/token-verifier";
import { logActivity } from "../../../../utils/log";

const post = async (req, res) => {
  try {
  } catch (error) {}
};

const get = async (req, res) => {
  try {
    let userObj = await getSession(req);

    let user = userObj.user?.id;
    await logActivity("Visited submitted data list", user);

    let mainWhere = await generateWhereMainObject(req, res);

    let inspectionFormId = Number(req.query.inspectionFormId);

    let curPage = req.query.page;
    let searchText = req.query.searchText.trim();

    let perPage = 10;
    let count = await prisma.inspection.count({
      // where: getSearchParams(req, searchText).where,
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
    console.log("Error..s: " + error);
  }
};

const generateWhereMainObject = async (req, res) => {
  let published = Number(req?.query?.published);
  let inspectionFormId = Number(req?.query?.inspectionFormId);
  let curPage = req?.query?.page;
  let searchText = req?.query?.searchText;
  let data = await getSession(req);

  let filterBy = req?.query?.filterBy;

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

  let perPage = 10;
  let skip = Number((curPage - 1) * perPage) || 0;

  let userObj = await getSession(req);

  let userType = userObj.user?.userTypeId;

  if (userType == 1 || userType == 2) {
    filterBy = filterBy == "undefined" ? "regionId" : filterBy;

    return {
      where: {
        Community:
          searchText != ""
            ? {
                name: { search: searchText.replace(/[\s\n\t]/g, "_") },
              }
            : {},
        deleted: 0,
        Inspection:
          filterBy == ""
            ? {
                isPublished: published,
                inspectionFormId: inspectionFormId,
                deleted: 0,
              }
            : {
                [filterBy]: filterValue,

                isPublished: published,
                inspectionFormId: inspectionFormId,
                deleted: 0,
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
        createdAt: "desc",
      },
      include: {
        Inspection: {
          include: {
            InspectionType: true,
          },
        },
        Community: {
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
        },
        User: true,
      },
    };
  }
  if (userType == 3 || userType == 4) {
    let region = userObj.user.regionId;
    filterBy = filterBy == undefined ? "districtId" : filterBy;

    return {
      where: {
        Community:
          searchText != ""
            ? {
                name: { search: searchText.replace(/[\s\n\t]/g, "_") },
              }
            : {},
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
        createdAt: "desc",
      },
      include: {
        Inspection: {
          include: {
            InspectionType: true,
          },
        },
        Community: {
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
        },
        User: true,
      },
    };
  }
  if (userType == 5 || userType == 6) {
    filterBy = filterBy == undefined ? "electoralAreaId" : filterBy;

    let district = userObj.user.districtId;
    return {
      where: {
        Community:
          searchText != ""
            ? {
                name: { search: searchText.replace(/[\s\n\t]/g, "_") },
              }
            : {},
        deleted: 0,
        Inspection: {
          [filterBy]: filterValue,
          districtId: district,
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
        createdAt: "desc",
      },
      include: {
        Inspection: {
          include: {
            InspectionType: true,
          },
        },
        Community: {
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
        },
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
