import prisma from "../../../../../prisma/db";


const post = async (req, res) => {
  try {

    let phoneNumber = req.body.phoneNumber;
    let surname = req.body.surname;
    let otherNames = req.body.otherNames;


    //let hash = await bcrypt.hashSync(password, salt);

    let user = await prisma.user.findFirst({
      where: { phoneNumber, deleted: 0 },
    });
    if (!user) {
      return res
        .status(400)
        .json({ statusCode: 0, message: "Wrong user account" });
    }

    let updated = await prisma.user.update({
      where: { phoneNumber},
      data: {
        surname,otherNames,
      }
    });



    return res
    .status(200)
    .json({ statusCode: 0, message: "Profile updated" });
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
