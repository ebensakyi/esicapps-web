import prisma from "../../../../prisma/db";
import { getUserCookie } from "../../../../utils/cookies-manager";
import { verifyToken } from "../../../../utils/token-verifier";

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
    let data, regionId, userType;
    if (req.query.token) {
      data = await getSession(req.query.token);

      regionId = data.regionId;
      userType = data.user.UserType.id;
    }

    // console.log(">>>>>>>s", data.regionId);

    if (userType == 1) {
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
    
    if (!req.query.regionId) {
      const district = await prisma.district.findMany({
        where: { deleted: 0, regionId: Number(regionId) },
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
