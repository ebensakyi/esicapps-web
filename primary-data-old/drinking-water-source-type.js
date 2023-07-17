import prisma from "../../../../prisma/db";

const post = async (req, res) => {
  try {
    const data = {
      name: req.body.data.name,
    };
    const drinkingWaterSourceType = await prisma.drinkingWaterSourceType.create({ data });
    console.log("drinkingWaterSourceType==> ",drinkingWaterSourceType);
    res
      .status(200)
      .json({ statusCode: 1, message: "Data saved ", data: { drinkingWaterSourceType } });
  } catch (error) {
    console.log(error);
    if (error.code === "P2002")
      return res
        .status(200)
        .json({ statusCode: 0, message: "drinkingWaterSourceType prefix should be unique" });
  }
};

const get = async (req, res) => {
  try {
    const drinkingWaterSourceType = await prisma.drinkingWaterSourceType.findMany({ where: { deleted: 0 } });
   return res.status(200).json(drinkingWaterSourceType);

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
