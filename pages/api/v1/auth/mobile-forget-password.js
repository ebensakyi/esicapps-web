import prisma from "../../../../prisma/MyPrismaClient";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { nanoid } from "nanoid";

const post = async (req, res) => {
  try {
    let phoneNumber = req.body.phoneNumber;
    console.log(phoneNumber);
    let password = nanoid(8);
    const salt = await bcrypt.genSaltSync(10);
    let hashedPassword = bcrypt.hashSync(password, salt);

    console.log(hashedPassword);
    let user = await prisma.user.findFirst({
      where: { deleted: 0 },
    });
    console.log(user);
    if (!user) {
      return res
        .status(400)
        .json({ statusCode: 0, message: "Wrong user account" });
    }

    // if (user) {
    //   await prisma.user.update({
    //     where: { phoneNumber },
    //     data: { password: hashedPassword, passwordChanged: 0 },
    //   });

    //   await prisma.user.passwordResetRequest.create({
    //     data: { tempPassword: password },
    //   });

    //   return res.status(200).json(user);
    // } else {
    //   return res
    //     .status(400)
    //     .json({ statusCode: 0, message: "Wrong user credentials" });
    // }
  } catch (error) {
    console.log("Server error", error);
    if (error.code === "P2002")
      return res
        .status(500)
        .json({ statusCode: 0, message: "A server error occurred" });
  }
};

const get = async (req, res) => {
  try {
    const user = await prisma.user.findMany({ where: { deleted: 0 } });
    return res.status(200).json({ statusCode: 1, data: user });
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
