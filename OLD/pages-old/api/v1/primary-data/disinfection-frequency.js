import prisma from "../../../../prisma/db";

const post = async (req, res) => {
  try {
    const data = {
      name: req.body.data.name,
    };
    const frequency = await prisma.disinfectionFrequency.create({ data });
    res
      .status(200)
      .json({ statusCode: 1, message: "Data saved", data: { frequency } });
  } catch (error) {
    if (error.code === "P2002")
      return res
        .status(200)
        .json({ statusCode: 0, message: "frequency prefix should be unique" });
  }
};

const get = async (req, res) => {
  try {
    const frequency = await prisma.disinfectionFrequency.findMany({ where: { deleted: 0 } });
   // return res.status(200).json({ statusCode: 1, data: frequency });

    return res.status(200).json(frequency);
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
