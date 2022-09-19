import prisma from "../../../../prisma/MyPrismaClient";

const post = async (req, res) => {
  try {
    const data = {
      name: req.body.data.name,
      districtId :  req.body.data.districtId,
    };
    console.log(data);
    const electoralArea = await prisma.electoralArea.create({ data });
    res
      .status(200)
      .json( electoralArea);
  } catch (error) {
    if (error.code === "P2002")
      return res
        .status(200)
        .json({ statusCode: 0, message: "electoralArea prefix should be unique" });
  }
};

const get = async (req, res) => {
  try {
    const electoralArea = await prisma.electoralArea.findMany({ where: { deleted: 0 },   include: { District:{include: {Region:true}} }, });
   // return res.status(200).json({ statusCode: 1, data: region });
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
