import prisma from "../../../../prisma/db";
import { logActivity } from "../../../../utils/Log";
import { getUserCookie } from "../../../../utils/cookies-manager";

const post = async (req, res) => {
  try {
    let userCookie = await getUserCookie(req, res);
    await logActivity("User type added", userCookie.user.id);

    let name = req.body.userTypeName;
    let selectedPages = req.body.selectedPages;

    const userType = await prisma.userType.create({
      data: {
        name,
      },
    });

    console.log(selectedPages);

    let pages = await selectedPages.map((page) => {
      return {
        pageId: page.value,
        userTypeId: userType.id,
      };
    });

    const pageAccess = await prisma.pageAccess.createMany({
      data: {
        userTypeId: userType.id,
      },
      data: pages,
      skipDuplicates: true,
    });

    res.status(200).json({
      data: pageAccess,
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
    const page = await prisma.userType.findMany({
      where: { deleted: 0 },
      include: { PageAccess: { include: { Page: true } } },
    });

    return res.status(200).json(page);
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
