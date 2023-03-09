import prisma from "../../../../prisma/MyPrismaClient";

const post = async (req, res) => {
  try {
    console.log(req.body);
    const data = {
      id: req.body.id,

      inspectionId: req.body.inspectionId,
      userId: Number(req.body.userId),
      waterSectionId:
        req.body.waterSectionId == "null" ? null : req.body.waterSectionId,

      drinkingWaterSourceId:
        req.body.drinkingWaterSourceId == "null"
          ? null
          : Number(req.body.drinkingWaterSourceId),
    };

    const response = await prisma.premisesDrinkingWaterSources.create({ data });

    res.status(200).json({ statusCode: 1, message: "Data saved" });
  } catch (error) {
    // console.log("Error: " + error);
    // if (error.code === "P2002")
    //   return res
    //     .status(400)
    //     .json({ statusCode: 0, message: "dataVersion s should be unique" });
    res.status(500).json({ statusCode: 0, message: "Data skipped" });

  }
};

const get = async (req, res) => {
  try {
    const premisesDrinkingWaterSources = await prisma.premisesDrinkingWaterSources.findMany({
      where: { deleted: 0 },
    });
    return res.status(200).json(premisesDrinkingWaterSources);
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
