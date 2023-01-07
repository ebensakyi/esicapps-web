import prisma from "../../../../prisma/MyPrismaClient";
import moment from "moment";

const post = async (req, res) => {
 // try {

  const data = {
    id: req.body.inspectionId,
    userId: Number(req.body.userId),
    inspectionFormId:
      req.body.inspectionFormId == "null"
        ? null
        : Number(req.body.inspectionFormId),
    prevInspectionId:
     ( req.body.prevInspectionId == "null" ||  req.body.prevInspectionId == "")
        ? null
        : req.body.prevInspectionId,
    inspectionTypeId:
      req.body.inspectionTypeId == "null"
        ? null
        : Number(req.body.inspectionTypeId),
    followUpDate:
      req.body.followUpDate == "null" ? null : req.body.followUpDate,
    doFollowUp: Number(req.body.doFollowUp),
    startedAt: new Date(req.body.startedAt),
    completedAt:  new Date(req.body.completedAt),
  };

  console.log(data);
  const response = await prisma.inspection.create({ data });

  res.status(200).json({ statusCode: 1, message: "Data saved" });
    // } catch (error) {
    //   console.log("Error: " + error);
    //   if (error.code === "P2002")
    //     return res
    //       .status(400)
    //       .json({ statusCode: 0, message: "dataVersion s should be unique" });
    // }
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
