import prisma from "../../../../prisma/MyPrismaClient";
import bcrypt from "bcryptjs";
import { send } from "../../../../helpers/send-sms";
import { verifyToken } from "../../../../helpers/token-verifier";

import { nanoid } from "nanoid";

const post = async (req, res) => {
  try {
    const salt = await bcrypt.genSaltSync(10);

    let password = "esicapps@mmda"; //await nanoid(8);

    let hashedPassword = bcrypt.hashSync(password, salt);

    const data = {
      userTypeId: req.body.userTypeId,
      surname: req.body.surname,
      otherNames: req.body.otherNames,
      email: req.body.email,
      phoneNumber: req.body.phoneNumber,
      password: hashedPassword,
      regionId: req.body.regionId,
      districtId: req.body.districtId,
      designation: req.body.designation,
    };

    const user = await prisma.user.create({ data });

    // await send("233543212322", "Testing");
    return res
      .status(200)
      .json({ statusCode: 1, message: "Data saved", data: { user } });
  } catch (error) {
    console.log(error);
    if (error.code === "P2002")
      return res.status(400).json({
        statusCode: 0,
        message: "Email and Phone Number should be unique",
      });
  }
};

const get = async (req, res) => {
  try {
    let data = await verifyToken(req.query.token);

    if (data.user.districtId == null) {
      const user = await prisma.user.findMany({
        where: {
          deleted: 0,

          id: { not: data.user.id },
        },
      });
      return res.status(200).json(user);
    } else {
      const user = await prisma.user.findMany({
        where: { deleted: 0, districtId: data.user.districtId },
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
