import prisma from "../../../../prisma/db";

const post = async (req, res) => {
  try {
    const data = {
        id: Number(req.body.id),
        userId: Number(req.body.userId),

      isNotApplicable: Number(req.body.isNotApplicable),
      type: Number(req.body.type),

      inspectionId: req.body.inspectionId,
    };

    const response = await prisma.notApplicable.create({ data });

    if (response) {
      return res.status(200).json({ statusCode: 1, message: "Data saved" });
    }

    return res.status(500).json({ statusCode: 0, message: "Data skipped" });
  } catch (error) {
    console.log("Error: " + error);
    // if (error.code === "P2002")
    //   return res
    //     .status(400)
    //     .json({ statusCode: 0, message: "dataVersion s should be unique" });
    res.status(500).json({ statusCode: 0, message: "Data skipped" });
  }
};

const get = async (req, res) => {
  try {
    const notApplicable = await prisma.notApplicable.findMany({
      where: { deleted: 0 },
    });
    return res.status(200).json(notApplicable);
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
