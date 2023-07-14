import prisma from "../../../../prisma/db";
import { getSession } from "../../../../utils/session-manager";
// import { verifyToken } from "../../../../utils/token-verifier";

const post = async (req, res) => {
  try {
    const data = {
      name: req.body.data.name,
      districtId: req.body.data.districtId,
    };
    const electoralArea = await prisma.electoralArea.create({ data });
    res.status(200).json(electoralArea);
  } catch (error) {
    if (error.code === "P2002")
      return res
        .status(200)
        .json({
          statusCode: 0,
          message: "electoralArea prefix should be unique",
        });
  }
};

const get = async (req, res) => {
  try {


    let data = await getSession(req);
    let userRegionId = data?.RegionId;
    let userDistrictId = data?.DistrictId;

    let regionId = Number(req?.query?.regionId) || undefined;
    let districtId = Number(req?.query?.districtId) || undefined;



    //Admin national
    if (userRegionId == null && userDistrictId == null) {   
      // if(districtId==null) {
      //   return res.status(200).json([]);
      // }

      const electoralArea = await prisma.electoralArea.findMany({
        where: { deleted: 0, districtId: districtId },
        include: { District: true },
      });


      return res.status(200).json(electoralArea);
    }

    //regional user
    if (userDistrictId == null && userRegionId != null) {
      const electoralArea = await prisma.electoralArea.findMany({
        where: { deleted: 0, districtId: districtId },
      });

      return res.status(200).json(electoralArea);
    }

    //district user
    if (userDistrictId != null) {
      const electoralArea = await prisma.electoralArea.findMany({
        where: { deleted: 0, districtId: Number(userDistrictId) },
        include: { Region: true },
      });

      return res.status(200).json(electoralArea);
    }

    const electoralArea = await prisma.electoralArea.findMany({
      where: { deleted: 0 },
      include: { District: { include: { Region: true } } },
    });
    return res.status(200).json(electoralArea);
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
