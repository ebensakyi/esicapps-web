import prisma from "../../../../prisma/db";

const get = async (req, res) => {
  try {
    const data = await prisma.basicInfoSection.findMany({
      where: { deleted: 0 },
    //   include: {
    //     ElectoralArea: { include: { District: { include: { Region: true } } } },

    //   },
    //   orderBy: {
    //     id: "desc",
    //   },
    });

    return res.status(200).json(data);
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