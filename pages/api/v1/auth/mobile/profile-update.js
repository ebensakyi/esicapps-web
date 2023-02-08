import prisma from "../../../../../prisma/MyPrismaClient";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const post = async (req, res) => {
  try {

    console.log(req.body);

    let phoneNumber = req.body.phoneNumber;
    let newPassword = req.body.newPassword;
    let oldPassword = req.body.oldPassword;

    console.log(req.body);

    //let hash = await bcrypt.hashSync(password, salt);

    let user = await prisma.user.findFirst({
      where: { phoneNumber, deleted: 0 },
    });
    console.log("XXU ", user);
    if (!user) {
      return res
        .status(400)
        .json({ statusCode: 0, message: "Wrong user account" });
    }

    let isValid = await bcrypt.compare(oldPassword, user.password);
    console.log("isValid ", isValid);

    if (isValid) {
      const salt = await bcrypt.genSaltSync(10);
      let hashedPassword = bcrypt.hashSync(newPassword, salt);
      let x = await prisma.user.update({
        where: { phoneNumber },
        data: { password: hashedPassword, passwordChanged: 1 },
      });

      console.log("upd>>> ", x);
      //const token = jwt.sign({ id: user.id }, process.env.TOKEN_SECRET);

      return res.status(200).json(user);
    } else {
      return res
        .status(400)
        .json({ statusCode: 0, message: "Wrong user credentials" });
    }
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
