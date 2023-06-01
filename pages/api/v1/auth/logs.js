import prisma from "../../../../prisma/MyPrismaClient";
import bcrypt from "bcryptjs";
import { nanoid } from "nanoid";
import { send } from "../../../../utils/send-sms";

const post = async (req, res) => {
  try {
  } catch (error) {
    console.log(error);
    if (error.code === "P2002") return res.status(200).json({ statusCode: 0 });
  }
};

const get = async (req, res) => {
  try {
    let curPage = req.query.page;

    let perPage = 10;

    const data = await prisma.logs.findMany({
      where: { deleted: 0 },
      include: { User: true },
    });

    let count = data.length;
    let max =  Math.ceil(count / perPage)

    return res.status(200).json({
      data,
      curPage: curPage,
      maxPage: max,
    });
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
