import prisma from "../../../../prisma/MyPrismaClient";

const post = async (req, res) => {
  try {
    console.log(req.body);
    let filterBy = req.body.filterBy;
    let filterValue = Number(req.body.filterValue);
   
  const report = await prisma.premisesActionTaken.groupBy({
    where: {
      Conclusion: {
        deleted: 0,
      },
      //  [filterBy]: filterValue,
    },
    by: ["actionId"],
    // _count: {
    //   inspectionFormId: true,
    // },
    // orderBy: {
    //   inspectionFormId: 'asc',
    // },
    // include: {
    //   _count: {
    //     select: { inspectionFormId: true },
    //   },
    //    include: { InspectionType: true },
      
   // },
  });




  res.status(200).json({
    statusCode: 1,
    message: "Data saved",
    data: { submissionSummary },
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
