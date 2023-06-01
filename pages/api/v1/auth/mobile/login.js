import prisma from "../../../../../prisma/db";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const post = async (req, res) => {
// try {
    let phoneNumber = req.body.phoneNumber;
    let password = req.body.password;
    //let hash = await bcrypt.hashSync(password, salt);

    let user = await prisma.user.findFirst({
      where: { phoneNumber, deleted: 0 },
      include: { District: { include: { Region: true } } },
    });


    if (!user) {
      return res
        .status(400)
        .json({ statusCode: 0, message: "User account not found" });
    }


    if (user.districtId==null || user.districtId=="") {
      return res
        .status(401)
        .json({ statusCode: 10, message: "User cannot access mobile app" });
    }
    let loginTimes = user.loginTimes;


    let isValid = await bcrypt.compare(password, user.password);

    if (isValid) {
      // const token = jwt.sign({ id: user.id }, process.env.TOKEN_SECRET);
      await prisma.user.update({
        where: { id: user.id },
        data: { loginTimes: loginTimes + 1 },
      });
      return res.status(200).json(user);
    } else {
      return res
        .status(404)
        .json({ statusCode: 0, message: "Wrong user credentials" });
    }
  // } catch (error) {
  //   console.log("Server errorr: ", error);
  //   if (error.code === "P2002")
  //     return res
  //       .status(500)
  //       .json({ statusCode: 0, message: "A server error occurred" });
  // }
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
