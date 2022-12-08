import prisma from "../../../../prisma/MyPrismaClient";

const post = async (req, res) => {
  try {
  } catch (error) {}
};

const get = async (req, res) => {
  try {
    const residential = await prisma.inspection.count({
      where: { inspectionFormId: 1, inspectionTypeId: 1 },
    });
    const eatery = await prisma.inspection.count({
      where: { inspectionFormId: 2, inspectionTypeId: 1 },
    });
    const health = await prisma.inspection.count({
      where: { inspectionFormId: 3, inspectionTypeId: 1 },
    });
    const hospitality = await prisma.inspection.count({
      where: { inspectionFormId: 4, inspectionTypeId: 1 },
    });
    const industry = await prisma.inspection.count({
      where: { inspectionFormId: 6, inspectionTypeId: 1 },
    });
    const institution = await prisma.inspection.count({
      where: { inspectionFormId: 5, inspectionTypeId: 1 },
    });
    const sanitary = await prisma.inspection.count({
      where: { inspectionFormId: 8, inspectionTypeId: 1 },
    });
    const market = await prisma.inspection.count({
      where: { inspectionFormId: 7, inspectionTypeId: 1 },
    });

    const residentialR = await prisma.inspection.count({
      where: { inspectionFormId: 1, inspectionTypeId: 2 },
    });
    const eateryR = await prisma.inspection.count({
      where: { inspectionFormId: 2, inspectionTypeId: 2 },
    });
    const healthR = await prisma.inspection.count({
      where: { inspectionFormId: 3, inspectionTypeId: 2 },
    });
    const hospitalityR = await prisma.inspection.count({
      where: { inspectionFormId: 4, inspectionTypeId: 2 },
    });
    const industryR = await prisma.inspection.count({
      where: { inspectionFormId: 6, inspectionTypeId: 2 },
    });
    const institutionR = await prisma.inspection.count({
      where: { inspectionFormId: 5, inspectionTypeId: 2 },
    });
    const sanitaryR = await prisma.inspection.count({
      where: { inspectionFormId: 8, inspectionTypeId: 2 },
    });
    const marketR = await prisma.inspection.count({
      where: { inspectionFormId: 7, inspectionTypeId: 2 },
    });

    let data = {
      residential: { baseline: residential, reinspection: residentialR },
      eatery: { baseline: eatery, reinspection: eateryR },
      health: { baseline: health, reinspection: healthR },
      hospitality: { baseline: hospitality, reinspection: hospitalityR },
      market: { baseline: market, reinspection: marketR },
      industry: { baseline: industry, reinspection: industryR },
      institution: { baseline: institution, reinspection: institutionR },
      sanitary: { baseline: sanitary, reinspection: sanitaryR },
    };

    // console.log(data);
    //return res.status(200).json({ statusCode: 1, data: dataVersion });
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
