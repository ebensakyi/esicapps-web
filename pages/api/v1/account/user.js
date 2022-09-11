import prisma from "../../../../prisma/MyPrismaClient";

const post = async (req, res) => {
  try {

    console.log(req.body);
    // const data = {
    //   name: req.body.data.userName,
    //   userLevelId:req.body.data.level
    // };
    // const user = await prisma.user.create({ data });
    // res
    //   .status(200)
    //   .json({ statusCode: 1, message: "Data saved", data: { user } });
  } catch (error) {
    console.log(error);
    if (error.code === "P2002")
      return res
        .status(200)
        .json({ statusCode: 0, message: "user prefix should be unique" });
  }
};

const get = async (req, res) => {
  try {
    const user = await prisma.user.findMany({ where: { deleted: 0 } });
    //return res.status(200).json({ statusCode: 1, data: user });
    return res.status(200).json( user);

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
