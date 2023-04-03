import prisma from "../../../../prisma/MyPrismaClient";



const get = async (req, res) => {
  try {
    const rating = await prisma.rating.findMany({ where: { deleted: 0 } });
    return res.status(200).json( rating);

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
