import prisma from "../../../../prisma/MyPrismaClient";
import bcrypt from "bcryptjs";

const post = async (req, res) => {
  try {
    let password = req.body.password;
    const salt = bcrypt.genSaltSync(10);

    let hashedPassword = await bcrypt.hashSync(password, salt);

    const data = {
      userTypeId: Number(req.body.userTypeId),
      surname: req.body.surname,
      otherNames: req.body.otherNames,
      email: req.body.email,
      phoneNumber: req.body.phoneNumber,
      password: hashedPassword,
      designation: req.body.designation,
    };

    const user = await prisma.user.create({  data });
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
    const user = await prisma.user.findMany({ where: { deleted: 0  } });
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
