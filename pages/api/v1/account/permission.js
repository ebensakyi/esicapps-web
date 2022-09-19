import prisma from "../../../../prisma/MyPrismaClient";

const post = async (req, res) => {
  try {
    console.log(req.body);
    // const data = {
    //   name: req.body.data.userTypeName,
    //   userLevelId:req.body.data.level
    // };
    const pageAccess = await prisma.pageAccess.create({ data: req.body.data });
    res
      .status(200)
      .json({ statusCode: 1, message: "Data saved", data: { pageAccess } });
  } catch (error) {
    console.log(error);
    if (error.code === "P2002")
      return res
        .status(200)
        .json({ statusCode: 0, message: "userType prefix should be unique" });
  }
};

const _delete = async (req, res) => {
  const singlePageAccess = await prisma.pageAccess.findMany({
    where: {
      userTypeId: req.body.userTypeId,
      pageId: req.body.pageId,
    },
  });

  const pageAccess = await prisma.pageAccess.delete({
    where: {
      id: singlePageAccess[0].id,
    },
  });
};
const get = async (req, res) => {
  try {

    if (req.query.userType) {
     const pageAccess = await prisma.pageAccess.findMany({
        where: { deleted: 0, userTypeId: Number(req.query.userType) },
      });
      return res.status(200).json(pageAccess);
    }
    const pageAccess = await prisma.pageAccess.findMany({
      where: { deleted: 0 },
    });
    return res.status(200).json(pageAccess);
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
    ? _delete(req, res)
    : req.method === "GET"
    ? get(req, res)
    : res.status(404).send("");
};
