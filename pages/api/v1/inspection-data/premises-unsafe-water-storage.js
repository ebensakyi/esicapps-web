import prisma from "../../../../prisma/MyPrismaClient";

const post = async (req, res) => {
  try {
    const data = {
      id: req.body.id,

      inspectionId: req.body.inspectionId,
      userId: Number(req.body.userId),
      unsafeWaterStorageId: Number(req.body.unsafeWaterStorageId),

      waterSectionId: req.body.waterSectionId,
    };

    const response = await prisma.premisesUnsafeWaterStorage.create({ data });

    res.status(200).json({ statusCode: 1, message: "Data saved" });
  } catch (error) {
    // console.log("Error: " + error);
    // if (error.code === "P2002")
    //   return res
    //     .status(400)
    //     .json({ statusCode: 0, message: " should be unique" });
    res.status(500).json({ statusCode: 0, message: "Data skipped" });

  }
};

const get = async (req, res) => {
  try {
    const response = await prisma.premisesUnsafeWaterStorage.findMany({
      where: { deleted: 0 },
    });
    return res.status(200).json(response);
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
