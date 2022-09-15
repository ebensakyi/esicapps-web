import prisma from "../../../../prisma/MyPrismaClient";

const post = async (req, res) => {
  try {
   
    const region = await prisma.region.create(req.body);
    res
      .status(200)
      .json({ statusCode: 1, message: "Data saved", data: { region } });
  } catch (error) {
    if (error.code === "P2002")
      return res
        .status(200)
        .json({ statusCode: 0, message: "region prefix should be unique" });
  }
};

const get = async (req, res) => {
  try {
    const region = await prisma.region.findMany({ where: { deleted: 0 } });
   // return res.status(200).json({ statusCode: 1, data: region });
    return res.status(200).json(region);

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
