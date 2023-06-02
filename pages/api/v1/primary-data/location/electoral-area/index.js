import prisma from "../../../../../../prisma/db";
import { getUserCookie } from "../../../../../../utils/cookies-manager";
import { verifyToken } from "../../../../../../utils/token-verifier";

const put = async (req, res) => {
  if (req.body.electoralAreaId) {
    await prisma.electoralArea.update({
      where: {
        id: req.body.electoralAreaId,
      },
      data: {
        name: req.body.name,
        districtId: req.body.districtId,
      },
    });

    return res
      .status(200)
      .json({ statusCode: 1, message: "ElectoralArea update" });
  }
};

const post = async (req, res) => {
  try {

    // district user oonly. Use his id

    let userCookie = await getUserCookie(req, res);
    let districtId = userCookie?.user?.districtId;

    if (districtId) {
      const data = {
        name: req.body.name,
        districtId: Number(userCookie.user.districtId),
      };

      const electoralArea = await prisma.electoralArea.create({ data });
      return res.status(200).json({
        statusCode: 1,
        message: "ElectoralArea saved",
        data: { electoralArea },
      });
    }
    const data = {
      name: req.body.name,
      districtId: req.body.districtId,
    };

    const electoralArea = await prisma.electoralArea.create({ data });
    return res.status(200).json({
      statusCode: 1,
      message: "ElectoralArea saved",
      data: { electoralArea },
    });
  } catch (error) {
    console.log(error);
    if (error.code === "P2002")
      return res
        .status(200)
        .json({ statusCode: 0, message: "ElectoralArea not saved" });
  }
};

const getSearchParams = async (req, searchText) => {
  let data = await getSession(req.query.token);

  let electoralArea =
    data.user.electoralAreaId == null || isNaN(data.user.electoralAreaId)
      ? undefined
      : Number(data.user.electoralAreaId);
  if (searchText != "" && searchText != null) {
    return {
      where: {
        deleted: 0,
        electoralAreaId: electoralArea,
        name: { search: searchText.replace(/[\s\n\t]/g, "_") },
      },
    };
  }
  return { where: { deleted: 0, electoralAreaId: electoralArea } };
};

const get = async (req, res) => {
  try {
    let curPage = req.query.page;
    let searchText = req.query.searchText.trim();

    let perPage = 10;
    let skip = Number((curPage - 1) * perPage);
    let count = await prisma.electoralArea.count({
      where: getSearchParams(req, searchText).where,
    });

    let electoralArea = await prisma.electoralArea.findMany({
      where: getSearchParams(req, searchText).where,
      skip: skip,
      take: perPage,
      orderBy: {
        name: "asc",
      },
      include: { District: true },
    });

    console.log(electoralArea);

    return res.status(200).json({
      statusCode: 1,
      electoralArea,
      curPage: curPage,
      maxPage: Math.ceil(count / perPage),
    });

    // return res.status(200).json(community);
  } catch (error) {
    console.log("Error: " + error);
  }
};
const Delete = async (req, res) => {
  await prisma.electoralArea.update({
    where: {
      id: Number(req.body.id),
    },
    data: {
      deleted: 1,
    },
  });
  return res.status(200).json();
};
export default (req, res) => {
  req.method === "POST"
    ? post(req, res)
    : req.method === "PUT"
    ? put(req, res)
    : req.method === "DELETE"
    ? Delete(req, res)
    : req.method === "GET"
    ? get(req, res)
    : res.status(404).send("");
};
