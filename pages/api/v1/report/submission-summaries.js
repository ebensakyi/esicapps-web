import prisma from "../../../../prisma/db";
import { logActivity } from "../../../../utils/log";
import { getSession } from "../../../../utils/session-manager";

const post = async (req, res) => {
  try {
    await getSubmissionSummary(req, res);

    let userData = await getSession(req);

    await logActivity(`SubmissionSummary report generated`, userData.id);
  } catch (error) {
    console.log(error);
    if (error.code === "P2002")
      return res
        .status(200)
        .json({ statusCode: 0, message: "action prefix should be unique" });
  }
};

const getSubmissionSummary = async (req, res) => {
  let filterBy = req?.body?.filterBy;
  let filterValue = Number(req?.body?.filterValue);
  let fromDate = new Date(req?.body?.from);
  let toDate = new Date(req?.body?.to);

  console.log(req.body);

  const report = await prisma.inspection.groupBy({
    where: {
      [filterBy]: filterValue,

      createdAt:
      req?.body?.from != null ||  req?.body?.to != null
          ? {
              gte: fromDate,
              lte: toDate,
            }
          : {},
    },
    by: ["inspectionFormId"],
    _count: {
      inspectionFormId: true,
    },
    orderBy: {
      inspectionFormId: "asc",
    },
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
    data: report,
  });
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
