import prisma from "../../../../prisma/MyPrismaClient";

const post = async (req, res) => {
  // try {

  console.log(req.body);
  const data = {
    id: req.body.id,
    userId: Number(req.body.userId),
    message: req.body.message,
    title: req.body.title,
    
  };

  console.log(data);

  const response = await prisma.messaging.create({ data });

  res.status(200).json({ statusCode: 1, message: "Data saved" });
  // } catch (error) {
  //   console.log("Error: " + error);
  //   if (error.code === "P2002")
  //     return res
  //       .status(400)
  //       .json({ statusCode: 0, message: "dataVersion s should be unique" });
  // }
};

const get = async (req, res) => {
  try {
    const messaging = await prisma.messaging.findMany({
      where: { deleted: 0 },
    });
    //return res.status(200).json({ statusCode: 1, data: dataVersion });
    return res.status(200).json(messaging);
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
