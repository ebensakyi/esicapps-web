import prisma from "../../../../prisma/MyPrismaClient";

const post = async (req, res) => {
  try {
  } catch (error) {}
};

const get = async (req, res) => {
  try {
    let published = Number(req.query.published);
    const data = await prisma.basicInfoSection.findMany({
      where: {
        deleted: 0,
        Inspection: {
          isPublished: published,
          inspectionFormId: 2,
        },
      },
      include: {
        Inspection: true,
        Community: { include: { District: { include: { Region: true } } } },
        User: true,
      },
    });

    console.log(data);

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
