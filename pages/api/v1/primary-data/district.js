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
    let data = await getSession(req);

    console.log("DATA>>>", data);
    let userRegionId = data?.RegionId;
    let userDistrictId = data?.DistrictId;

    let regionId = Number(req?.query?.regionId) || undefined;
    let districtId = Number(req?.query?.districtId) || undefined;
    // national user
    if (userRegionId == null && userDistrictId == null) {
      const district = await prisma.district.findMany({
        where: { deleted: 0, regionId: regionId },
        include: { Region: true },
      });

      return res.status(200).json(district);
    }

    //regional user
    if (userDistrictId == null && userRegionId != null) {
      const district = await prisma.district.findMany({
        where: { deleted: 0, regionId: Number(userRegionId) },
        include: { Region: true },
      });

      return res.status(200).json(district);
    }
//district user
    if (userDistrictId != null) {
      const district = await prisma.district.findMany({
        where: { deleted: 0, regionId: Number(userRegionId) },
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
    // // if (req.query.token && !req.query.regionId) {
    // //   let data = await getSession(req.query.token);

    // //   regionId = data.user.regionId;
    // //   userType = data.user.UserType.id;

    // //   const district = await prisma.district.findMany({
    // //     where: { deleted: 0, regionId: Number(regionId) },
    // //     include: { Region: true },
    // //   });

    // //   return res.status(200).json(district);
    // // }

    // if (userType == 1 || userType == 2) {
    //   const district = await prisma.district.findMany({
    //     where: { deleted: 0 },
    //     include: { Region: true },
    //   });

    //   return res.status(200).json(district);
    // }
    // if (req.query.regionId) {
    //   const district = await prisma.district.findMany({
    //     where: { deleted: 0, regionId: Number(req.query.regionId) },
    //     include: { Region: true },
    //   });

    //   return res.status(200).json(district);
    // }

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
