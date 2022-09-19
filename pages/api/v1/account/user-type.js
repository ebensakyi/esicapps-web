import prisma from "../../../../prisma/MyPrismaClient";

const post = async (req, res) => {
  try {
    console.log(req.body);
    const data = {
      name: req.body.data.userTypeName,
      userLevelId: req.body.data.level,
    };
    const userType = await prisma.userType.create({ data });
    // res
    //   .status(200)
    //   .json({ statusCode: 1, message: "Data saved", data: { userType } });
  } catch (error) {
    console.log(error);
    if (error.code === "P2002")
      return res
        .status(200)
        .json({ statusCode: 0, message: "userType prefix should be unique" });
  }
};

const get = async (req, res) => {
  try {
    const userType = await prisma.userType.findMany({
      where: { deleted: 0 },
      include:{UserLevel:true} ,
    });
    //return res.status(200).json({ statusCode: 1, data: userType });
    return res.status(200).json(userType);
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
