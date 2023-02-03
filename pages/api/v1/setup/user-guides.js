import prisma from "../../../../prisma/MyPrismaClient";

const post = async (req, res) => {
  try {
    const data = {
      title: req.body.title,
      description: req.body.description,
      link: req.body.link,
      fileType: Number(req.body.fileType),
      action: Number(req.body.action),

    };

    const userGuide = await prisma.assignData.create({ data });
    res
      .status(200)
      .json({ statusCode: 1, message: "Data saved", data: { userGuide } });
  } catch (error) {
    console.log(error);
    if (error.code === "P2002")
      return res
        .status(200)
        .json({ statusCode: 0, message: "action prefix should be unique" });
  }
};
const get = async (req, res) => {
  try {
    const data = await prisma.userGuides.findMany({ where: { deleted: 0 } });
    return res.status(200).json( data);

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
