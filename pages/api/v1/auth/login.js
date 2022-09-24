import prisma from "../../../../prisma/MyPrismaClient";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const post = async (req, res) => {
  try {



   // await clearUserCookie(req, res);

    let phoneNumber = req.body.phoneNumber;
    let password = req.body.password;
    //let hash = await bcrypt.hashSync(password, salt);

    console.log(req.body);
    let user = await prisma.user.findFirst({
      where: { phoneNumber, deleted: 0 },
    });

    console.log("user>> ",user);

    if (!user)
      return res
        .status(200)
        .json({ statusCode: 0, message: "Wrong user credentials" });

    let isValid = await bcrypt.compare(password, user.password);

    if (isValid) {
      const token = jwt.sign({ id: user.id }, process.env.TOKEN_SECRET);



      let userId = user.id;
      let userType = Number(user.userTypeId);
     // await setUserCookie(token, req, res);

      if (userType == 4) {
        let data = {
          logType: 2, log: "Login", logLocation: "checkerApiController.js",
          userId: userId
        };


        const ul = await prisma.logs.create({ data });

        return res.status(200).json({
          statusCode: 1,
          data: { userType },
          message: "Logged in",
        });
      } else if (userType == 1 || userType == 2 || userType == 3) {

        let data = {
          logType: 2, log: "Login", logLocation: "checkerApiController.js",
          userId: userId
        };


        const ul = await prisma.logs.create({ data });



        return res.status(200).json({
          statusCode: 1, message: "Logged in",
          data: { userType },
        });
      }
    } else {
      return res
        .status(200)
        .json({ statusCode: 0, message: "Wrong user credentials" });
    }
  } catch (error) {
    console.log("Server error", error);
    if (error.code === "P2002")
      return res
        .status(200)
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
