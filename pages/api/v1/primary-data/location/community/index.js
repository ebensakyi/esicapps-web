import prisma from "../../../../../../prisma/MyPrismaClient";
import { getUserCookie } from "../../../../../../helpers/cookies-manager";
import { verifyToken } from "../../../../../../helpers/token-verifier";

const post = async (req, res) => {
  try {
    let userCookie = await getUserCookie(req, res);
    if (userCookie.user.districtId == null) {
      return res
        .status(401)
        .json({ message: "You don't have permission to save community" });
    }
    if (req.body.data.id) {
      await prisma.community.update({
        where: {
          id: req.body.data.id,
        },
        data: {
          name: req.body.data.name,
        },
      });

      return res
        .status(200)
        .json({ statusCode: 1, message: "Community update" });
    }

    const data = {
      name: req.body.data.name,
      districtId: Number(userCookie.user.districtId),
    };

    const community = await prisma.community.create({ data });
    return res
      .status(200)
      .json({ statusCode: 1, message: "Community saved", data: { community } });
  } catch (error) {
    if (error.code === "P2002")
      return res
        .status(200)
        .json({ statusCode: 0, message: "Community not saved" });
  }
};

const getSearchParams = async (req, searchText) => {
  let data = await verifyToken(req.query.token);

  let district =
    data.user.districtId == null || isNaN(data.user.districtId)
      ? undefined
      : Number(data.user.districtId);
      console.log(district);
  if (searchText != "" && searchText != null) {
    return {
      where: {
        deleted: 0,
        districtId: district,
        name: { search: searchText.replace(/[\s\n\t]/g, "_") },
      },
    };
  }
  return { where: { deleted: 0, districtId: district } };
};

const get = async (req, res) => {
  try {
    let curPage = req.query.page;
    let searchText = req.query.searchText.trim();

    let perPage = 10;
    let skip = Number((curPage - 1) * perPage);
    let count = await prisma.community.count({
      where: getSearchParams(req, searchText).where,
    });

    let community = await prisma.community.findMany({
      where: getSearchParams(req, searchText).where,
      skip: skip,
      take: perPage,
      orderBy: {
        name: "asc",
      },
      include: { ElectoralArea: { include: { District: true } } },
    });

    return res.status(200).json({
      statusCode: 1,
      community,
      curPage: curPage,
      maxPage: Math.ceil(count / perPage),
    });

    // return res.status(200).json(community);
  } catch (error) {
    console.log("Error: " + error);
  }
};
const Delete = async (req, res) => {
  await prisma.community.update({
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
