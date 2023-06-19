import prisma from "../../../../prisma/db";
import { logActivity } from "../../../../utils/Log";
import { getSession } from "../../../../utils/session-manager";

const post = async (req, res) => {
  try {

    let userCookie = await getSession(req);
    await logActivity("Action summaries report generated",  userCookie.user.id);

    let filterBy = req?.body?.filterBy;
    let filterValue = Number(req?.body?.filterValue);
    let fromDate = new Date(req?.body?.from);
    let toDate = new Date(req?.body?.to);

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
        .json({ statusCode: 0, message: "action  should be unique" });
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
