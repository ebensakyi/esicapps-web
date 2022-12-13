import prisma from "../../../../prisma/MyPrismaClient";
import bcrypt from "bcryptjs";
import { nanoid } from "nanoid";
import { send } from "../../../../helpers/send-sms";

const post = async (req, res) => {
  try {
  } catch (error) {
    console.log(error);
    if (error.code === "P2002") return res.status(200).json({ statusCode: 0 });
  }
};

const get = async (req, res) => {
  try {
    const user = await prisma.logs.findMany({
      where: { deleted: 0 },
      include: { User: true },
    });

    console.log(user);
    //return res.status(200).json({ statusCode: 1, data: user });
    return res.status(200).json(user);
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
