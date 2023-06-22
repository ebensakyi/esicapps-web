import prisma from "../../../../prisma/db";

const post = async (req, res) => {
  try {
    const data = {
      assignedToId: Number(req.body.assignedToUser),
      assignedFromId: Number(req.body.assignedFromUser),
    };

    const action = await prisma.assignData.create({ data });
    res
      .status(200)
      .json({ statusCode: 1, message: "Data assigned", data: { action } });
  } catch (error) {
    console.log(error);
    if (error.code === "P2002")
      return res
        .status(200)
        .json({ statusCode: 0, message: "Should be unique" });
  }
};

const get = async (req, res) => {
  try {
    if (req.query.userId) {
      // const count = await prisma.assignData.count({
      //   where: { assignedToId: Number(req.query.userId) },
      // });

      const data = await prisma.assignData.findFirst({
        where: { assignedToId: Number(req.query.userId), deleted: 0 },
      });

      return res.status(200).json(data);
    }

    const data = await prisma.assignData.findMany({
      where: { deleted: 0 },
      include: { assignedFrom: true, assignedTo: true },
    });
    return res.status(200).json(data || []);
  } catch (error) {
    console.log("Error: " + error);
  }
};

const Delete = async (req, res) => {
  try {
    console.log(req.body);

    await prisma.assignData.update({
      where: {
        id: Number(req.body.id),
      },
      data: {
        deleted: 1,
      },
    });
    return res.status(200).json();

   
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
    ? Delete(req, res)
    : req.method === "GET"
    ? get(req, res)
    : res.status(404).send("");
};
