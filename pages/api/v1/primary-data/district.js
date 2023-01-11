import prisma from "../../../../prisma/MyPrismaClient";
import { getUserCookie } from "../../../../helpers/cookies-manager";
import { verifyToken } from "../../../../helpers/token-verifier";

const post = async (req, res) => {
  try {
    const data = {
      name: req.body.data.name,
    };
    const district = await prisma.district.create({ data });
    res
      .status(200)
      .json({ statusCode: 1, message: "Data saved", data: { district } });
  } catch (error) {
    if (error.code === "P2002")
      return res
        .status(200)
        .json({ statusCode: 0, message: "district prefix should be unique" });
  }
};

const get = async (req, res) => {
  try {
    let data, regionId, userLevel;
    if (req.query.token) {
      data = await verifyToken(req.query.token);

      regionId = data.regionId;
      userLevel = data.user.UserType.userLevelId;
    }

    // console.log(">>>>>>>s", data.regionId);

    if (userLevel == 1) {
      const district = await prisma.district.findMany({
        where: { deleted: 0 },
        include: { Region: true },
      });

      return res.status(200).json(district);
    }
    if (req.query.regionId) {
      const district = await prisma.district.findMany({
        where: { deleted: 0, regionId: Number(req.query.regionId) },
        include: { Region: true },
      });

      return res.status(200).json(district);
    }

    const district = await prisma.district.findMany({
      where: { deleted: 0 },
      include: { Region: true },
    });
    return res.status(200).json(district);
  } catch (error) {
    console.log("Error: " + error);
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
