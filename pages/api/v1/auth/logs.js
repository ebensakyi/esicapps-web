import prisma from "../../../../prisma/db";
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
    let skip = Number((curPage - 1) * perPage) || 0;


    const count = await prisma.logs.count({
      where: { deleted: 0 },
     
    });
    const data = await prisma.logs.findMany({
      where: { deleted: 0 },
      include: { User: true },
      skip: skip,
      take: perPage,
    });

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
