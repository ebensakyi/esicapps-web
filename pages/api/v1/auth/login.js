import prisma from "../../../../prisma/MyPrismaClient";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import {
  clearUserCookie,
  setUserCookie,
} from "../../../../helpers/cookies-manager";

const post = async (req, res) => {
  try {
    await clearUserCookie(req, res);

    let email = req.body.email;
    let password = req.body.password;
    //let hash = await bcrypt.hashSync(password, salt);

    let user = await prisma.user.findFirst({
      where: { email, deleted: 0 },
      include: { District: true },
      include: { UserType: true },
    });


    if (!user) {
      return res
        .status(404)
        .json({ statusCode: 0, message: "User account not found" });
    }

    if(user.userTypeId==7){
      return res
      .status(404)
      .json({ statusCode: 0, message: "User a field user" });
    }

    let isValid = await bcrypt.compare(password, user.password);


    if (isValid) {
      const token = jwt.sign({ user }, process.env.TOKEN_SECRET);

      // let userId = user.id;
      let userType = user.userTypeId;
      let level = user.UserType.userLevelId;
      await setUserCookie(token, req, res);
      return res.status(200).json({ userType, level, user });
    } else {
      return res
        .status(404)
        .json({ statusCode: 0, message: "Wrong user credentials" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ statusCode: 0, message: "A server error occurred" });
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
