import prisma from "../../../../prisma/db";
import { logActivity } from "../../../../utils/Log";
import { getSession } from "../../../../utils/session-manager";

const post = async (req, res) => {
  try {

    let userCookie = await getSession(req);
    await logActivity("Water Receptacle Report generated",  userCookie.id);

    let filterBy = req?.body?.filterBy;
    let filterValue = Number(req?.body?.filterValue);
    let fromDate = new Date(req?.body?.from);
    let toDate = new Date(req?.body?.to);

    const report = await prisma.premisesWasteReceptacle.groupBy({
      where: {
        SolidWasteSection: {
          Inspection: {
            [filterBy]: filterValue,
          },
        },
      },
      by: ["solidWasteReceptacleId"],
      _count: {
        solidWasteReceptacleId: true
         
      },
    //   orderBy: {
    //     _count: {
    //       waterSourceId: "desc",
    //     },
    //   },
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
