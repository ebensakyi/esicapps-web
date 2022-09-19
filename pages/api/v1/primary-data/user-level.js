import prisma from "../../../../prisma/MyPrismaClient";
// const { PrismaClient } = require("@prisma/client");
// let prisma = new PrismaClient();

const post = async (req, res) => {
  try {
    const data = {
      name: req.body.data.name,
    };
    const userLevel = await prisma.userLevel.create({ data });
    res
      .status(200)
      .json({ statusCode: 1, message: "Data saved", data: { userLevel } });
  } catch (error) {
    if (error.code === "P2002")
      return res
        .status(200)
        .json({ statusCode: 0, message: "userLevel prefix should be unique" });
  }
};

const get = async (req, res) => {
  try {   

    const userLevel = await prisma.userLevel.findMany({ where: { deleted: 0 } });
    return res.status(200).json( userLevel);
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
