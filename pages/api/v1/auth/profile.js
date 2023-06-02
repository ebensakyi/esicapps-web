import prisma from "../../../../prisma/db";
import bcrypt from "bcryptjs";
import { nanoid } from "nanoid";
import { sendSMS } from "../../../../utils/send-hubtel-sms";
import { verifyToken } from "../../../../utils/token-verifier";

const post = async (req, res) => {
  try {
    const salt = await bcrypt.genSaltSync(10);
    let newPassword = req.body.newPassword;
    let currentPassword = req.body.currentPassword;
    let phoneNumber = req.body.phoneNumber;

    console.log(req.body);

    let user = await prisma.user.findFirst({
      where: { phoneNumber, deleted: 0 },
    });
    if (!user) {
      return res
        .status(404)
        .json({ statusCode: 0, message: "Wrong user account" });
    }

    let isValid = await bcrypt.compare(currentPassword, user.password);

console.log(user);
    console.log(isValid);

    if (isValid) {
      let hashedPassword = bcrypt.hashSync(newPassword, salt);
      let x = await prisma.user.update({
        where: { phoneNumber },
        data: { password: hashedPassword, passwordChanged: 1 },
      });
      await sendSMS(
        phoneNumber,
        `Your password is changed successfully. Your new password is ${newPassword}`
      );
      return res.status(200).json(user);
    }

    // let newPhoneNumber = await append_233(phoneNumber);

    //  await sendSMS("233543212322","password")

    res.status(400).json(user);
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
    let user = await getSession(req);
    console.log(user);

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
