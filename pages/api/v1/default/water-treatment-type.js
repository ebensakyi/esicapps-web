import prisma from "../../../../prisma/MyPrismaClient";

const post = async (req, res) => {
  try {
    const data = {
      name: req.body.data.name,
    };
    const waterTreatmentType = await prisma.waterTreatmentType.create({ data });
    res
      .status(200)
      .json({ statusCode: 1, message: "Data saved", data: { waterTreatmentType } });
  } catch (error) {
    if (error.code === "P2002")
      return res
        .status(200)
        .json({ statusCode: 0, message: "waterTreatmentType prefix should be unique" });
  }
};

const get = async (req, res) => {
  try {
    const waterTreatmentType = await prisma.waterTreatmentType.findMany({ where: { deleted: 0 } });
    //return res.status(200).json({ statusCode: 1, data: waterTreatmentType });
    return res.status(200).json(waterTreatmentType);

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
