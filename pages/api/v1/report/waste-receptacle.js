import prisma from "../../../../prisma/MyPrismaClient";
import { logActivity } from "../../../../helpers/Log";
import { getUserCookie } from "../../../../helpers/cookies-manager";

const post = async (req, res) => {
  try {

    let userCookie = await getUserCookie(req, res);
    await logActivity("Report generated",  userCookie.user.id);

    let filterBy = req.body.filterBy;
    let filterValue = Number(req.body.filterValue);

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
