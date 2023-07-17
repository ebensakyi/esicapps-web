import prisma from "../../../../prisma/db";

const post = async (req, res) => {
  try {
    const data = {
      name: req.body.data.name,
    };
    const cemeteryWorkers = await prisma.cemeteryWorkers.create({ data });
    res
      .status(200)
      .json({ statusCode: 1, message: "Data saved", data: { cemeteryWorkers } });
  } catch (error) {
    if (error.code === "P2002")
      return res
        .status(200)
        .json({ statusCode: 0, message: "cemeteryWorkers prefix should be unique" });
  }
};

const get = async (req, res) => {
  try {
    const cemeteryWorkers = await prisma.cemeteryWorkers.findMany({ where: { deleted: 0 } });
    //return res.status(200).json({ statusCode: 1, data: cemeteryWorkers });
    return res.status(200).json(cemeteryWorkers);

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
