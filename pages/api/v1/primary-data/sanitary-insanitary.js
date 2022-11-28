import prisma from "../../../../prisma/MyPrismaClient";

const post = async (req, res) => {
  try {
    const data = {
      name: req.body.data.name,
    };
    const sanitaryInsanitary = await prisma.sanitaryInsanitary.create({ data });
    res
      .status(200)
      .json({ statusCode: 1, message: "Data saved", data: { sanitaryInsanitary } });
  } catch (error) {
    if (error.code === "P2002")
      return res
        .status(200)
        .json({ statusCode: 0, message: "sanitaryInsanitary prefix should be unique" });
  }
};

const get = async (req, res) => {
  try {
    const sanitaryInsanitary = await prisma.sanitaryInsanitary.findMany({ where: { deleted: 0 } });
    return res.status(200).json(sanitaryInsanitary);

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