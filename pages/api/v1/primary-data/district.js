import prisma from "../../../../prisma/db";
import { getSession } from "../../../../utils/session-manager";

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
    let userData = await getSession(req);
    let userLevel = userData?.userLevelId;
    let userRegion = userData?.regionId 
    let userDistrict = userData?.districtId;
    let queriedRegion =  Number(req?.query?.regionId) || undefined;

    console.log(req.query);

    // national user
    if (userLevel == "1") {
      const districts = await prisma.district.findMany({
        where: { deleted: 0,regionId: queriedRegion },
        include: { Region: true },
      });

      return res.status(200).json(districts);
    }

    //regional user
    if (userLevel=="2") {
      const districts = await prisma.district.findMany({
        where: { deleted: 0, regionId: Number(userRegion) },
        include: { Region: true },
      });

      return res.status(200).json(districts);
    }
    //district user
    if (userLevel == "3") {
      const district = await prisma.district.findMany({
        where: { deleted: 0, districtId: Number(userDistrict) },
        include: { Region: true },
      });

      return res.status(200).json(district);
    }
    if (req?.query?.regionId) {
      const district = await prisma.district.findMany({
        where: { deleted: 0, regionId: Number(req?.query?.regionId) },
        include: { Region: true },
      });

      return res.status(200).json(district);
    }
   
    // const district = await prisma.district.findMany({
    //   where: { deleted: 0 },
    //   include: { Region: true },
    // });
    // return res.status(200).json(district);
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
