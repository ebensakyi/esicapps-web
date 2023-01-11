import prisma from "../../../../prisma/MyPrismaClient";
import bcrypt from "bcryptjs";
import { verifyToken } from "../../../../helpers/token-verifier";
import { getUserCookie } from "../../../../helpers/cookies-manager";

const post = async (req, res) => {
  try {
    let password = "esicapps@regional"//req.body.password;
    const salt = bcrypt.genSaltSync(10);
    let userCookie = await getUserCookie(req, res);

    console.log(">>>..s",Number(userCookie.regionId));

    let hashedPassword = await bcrypt.hashSync(password, salt);
    const data = {
      userTypeId: Number(req.body.userTypeId),
      surname: req.body.surname,
      otherNames: req.body.otherNames,
      email: req.body.email,
      phoneNumber: req.body.phoneNumber,
      password: hashedPassword,
      regionId:  Number(userCookie.regionId),
      designation: req.body.designation
    };

    const user = await prisma.user.create({ data});
    return res
      .status(200)
      .json({ statusCode: 1, message: "Data saved", data: { user } });
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
    let data = await verifyToken(req.query.token);

    console.log(data.user);

    if (data.user.regionId == null) {
      const user = await prisma.user.findMany({
        where: {
          deleted: 0,

          id: { not: data.user.id },
        },
      });
      return res.status(200).json(user);
    } else {
      const user = await prisma.user.findMany({
        where: { deleted: 0, regionId: data.user.regionId },
      });
      return res.status(200).json(user);
    }
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
