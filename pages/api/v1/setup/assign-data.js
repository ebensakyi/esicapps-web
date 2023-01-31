import prisma from "../../../../prisma/MyPrismaClient";

const post = async (req, res) => {
  try {
    console.log(req.body);
    const data = {
      assignedToId: Number(req.body.data.assignedToUser),
      assignedFromId: Number(req.body.data.assignedFromUser),
    };

    console.log(data);
    const action = await prisma.assignData.create({ data });
    res
      .status(200)
      .json({ statusCode: 1, message: "Data saved", data: { action } });
  } catch (error) {
    if (error.code === "P2002")
      return res
        .status(200)
        .json({ statusCode: 0, message: "action prefix should be unique" });
  }
};

const get = async (req, res) => {
  try {
    if (req.query.userId) {
      const count = await prisma.assignData.count({
        where: { assignedToId: Number(req.query.userId) },
      });
      if (count == 0) {
        return res.status(200).json(count);
      }
    }

    const data = await prisma.assignData.findMany({ where: { deleted: 0 } });
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
