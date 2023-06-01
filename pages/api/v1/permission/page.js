import prisma from "../../../../prisma/MyPrismaClient";
import { logActivity } from "../../../../helpers/Log";
import { getUserCookie } from "../../../../helpers/cookies-manager";

const post = async (req, res) => {
  try {

    let userCookie = await getUserCookie(req, res);
    await logActivity("Action summaries report generated",  userCookie.user.id);

    let name = req.body.name;
    let href = req.body.href;
    let icon = req.body.icon;

    let filterValue = Number(req.body.filterValue);
    

    const page = await prisma.page.create({
      data: {
       
      },
     
    });

    res.status(200).json({
      data: page,
    });
  } catch (error) {
    console.log(error);
    if (error.code === "P2002")
      return res
        .status(200)
        .json({ statusCode: 0, message: "Page  should be unique" });
  }
};


const get = async (req, res) => {
    try {
      const page = await prisma.page.findMany({ where: { deleted: 0 } });
      return res.status(200).json( page);
  
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
