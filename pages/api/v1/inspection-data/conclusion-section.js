import prisma from "../../../../prisma/MyPrismaClient";

const post = async (req, res) => {
  try {
    const data = {
      id: req.body.id,

      inspectionId: req.body.inspectionId,
      userId: Number(req.body.userId),
      officerComment:
        req.body.officerComment == "null" ? null : req.body.officerComment,

      obnoxiousTradeExistId:
        req.body.obnoxiousTradeExistId == "null"
          ? null
          : Number(req.body.obnoxiousTradeExistId),

      obnoxiousTrade:
        req.body.obnoxiousTrade == "null" ? null : req.body.obnoxiousTrade,

      isNuisanceObservedId:
        req.body.isNuisanceObservedId == "null"
          ? null
          : Number(req.body.isNuisanceObservedId),
      generalSanitaryConditionId:
        req.body.generalSanitaryConditionId == "null"
          ? null
          : Number(req.body.generalSanitaryConditionId),
    };

    const response = await prisma.conclusionSection.create({ data });

    res.status(200).json({ statusCode: 1, message: "Data saved" });
  } catch (error) {
    // console.log("Error: " + error);
    // if (error.code === "P2002")
    //   return res
    //     .status(400)
    //     .json({ statusCode: 0, message: "dataVersion s should be unique" });
    res.status(500).json({ statusCode: 1, message: "Data skipped" });

  }
};

const get = async (req, res) => {
  try {
    let userId = Number(req.query.userId);
    const response = await prisma.conclusionSection.findMany({
      where: { userId: userId, deleted: 0 },
    });

    console.log("response",response);
    return res.status(200).json(response);
  } catch (error) {
    console.log(error);
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
