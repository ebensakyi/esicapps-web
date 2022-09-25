import prisma from "../../../../prisma/MyPrismaClient";
import bcrypt from "bcryptjs";
import { nanoid } from "nanoid";

const post = async (req, res) => {
  try {
    const salt = bcrypt.genSaltSync(10);

    let password =  nanoid(8)
    let hashedPassword =  bcrypt.hashSync(password, salt)

    console.log("Hashed password: ", password);


    let body = { ...req.body.data, password: hashedPassword };
    const user = await prisma.user.create({ data: body });
    res
      .status(200)
      .json(user);
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