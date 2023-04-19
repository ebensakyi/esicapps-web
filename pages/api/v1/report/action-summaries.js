import prisma from "../../../../prisma/MyPrismaClient";

const post = async (req, res) => {
  try {
  

    let filterBy = req.body.filterBy==null ? "regionId" : req.body.filterBy;
    let filterValue =req.body.filterValue==null ? undefined : Number(req.body.filterValue);

    const report = await prisma.premisesActionTaken.groupBy({
      where: {
        ConclusionSection: {
          Inspection: {
            [filterBy]: filterValue,
          },
        },
      },
      by: ["actionId"],
      _count: {
        actionId: true,
      },
      orderBy: {
        _count: {
          actionId: "desc",
        },
      },
    });

    res.status(200).json({
      data: report,
    });
  } catch (error) {
    console.log(error);
    if (error.code === "P2002")
      return res
        .status(200)
        .json({ statusCode: 0, message: "action prefix should be unique" });
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
