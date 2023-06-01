import prisma from "../../../../../prisma/db";

const get = async (req, res) => {
  try {
    let userId = Number(req.query.userId);

    

    const residentialCount = await prisma.inspection.count({
      where: { deleted: 0, userId: userId, inspectionFormId: 1 },
    });
    const eateryCount = await prisma.inspection.count({
      where: { deleted: 0, userId: userId, inspectionFormId: 2 },
    });

    const healthCount = await prisma.inspection.count({
      where: { deleted: 0, userId: userId, inspectionFormId: 3 },
    });

    const hospitalityCount = await prisma.inspection.count({
      where: { deleted: 0, userId: userId, inspectionFormId: 4 },
    });

    const institutionCount = await prisma.inspection.count({
      where: { deleted: 0, userId: userId, inspectionFormId: 5 },
    });

    const industryCount = await prisma.inspection.count({
      where: { deleted: 0, userId: userId, inspectionFormId: 6 },
    });

    const marketCount = await prisma.inspection.count({
      where: { deleted: 0, userId: userId, inspectionFormId: 7 },
    });

    const sanitaryCount = await prisma.inspection.count({
      where: { deleted: 0, userId: userId, inspectionFormId: 8 },
    });

    let data = {
      residentialCount,
      eateryCount,
      healthCount,
      hospitalityCount,
      institutionCount,
      industryCount,
      marketCount,
      sanitaryCount,
    };


    return res.status(200).json(data);
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
