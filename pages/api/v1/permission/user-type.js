import prisma from "../../../../prisma/db";
import { logActivity } from "../../../../utils/Log";
import { getSession } from "../../../../utils/session-manager";

const post = async (req, res) => {
  try {
    let userData = await getSession(req);
    await logActivity("User type added", userData.id);

    let name = req.body.userTypeName;
    let selectedPages = req.body.selectedPages;

    const userType = await prisma.userType.create({
      data: {
        name,
      },
    });

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
    if (error.code === "P2002") return res.status(201).json({});
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

const Delete = async (req, res) => {
  try {
    let id = Number(req.query.id);

    const userType = await prisma.userType.update({
      where: {
        id: id,
      },
      data: {
        deleted: 1,
      },
    });
    const pageAccess = await prisma.pageAccess.deleteMany({
      where: {
        userTypeId: id,
      },
    });

    return res.status(200).json();
  } catch (error) {
    console.log(error);
  }
};

const put = async (req, res) => {
  try {
    console.log(req.body);
    let userTypeId = req.body.userTypeId;
    let name = req.body.userTypeName;
    let selectedPages = req.body.selectedPages;

    let pages = await selectedPages.map((page) => {
      return {
        pageId: page.value,
        userTypeId: userTypeId,
      };
    });

    console.log(pages);

     await prisma.pageAccess.deleteMany({
      where: {
        userTypeId: userTypeId,
      },
    });

     await prisma.userType.update({
      data: {
         name,
      },
      where: {
        id: userTypeId,
      },
    });


    const pageAccess = await prisma.pageAccess.createMany({
      data: {
        userTypeId: userTypeId,
        userTypeName: name,
      },
      data: pages,
      skipDuplicates: true,
    });


    return res.status(200).json();
  } catch (error) {
    console.log(error);
  }
};

export default (req, res) => {
  req.method === "POST"
    ? post(req, res)
    : req.method === "PUT"
    ? put(req, res)
    : req.method === "DELETE"
    ? Delete(req, res)
    : req.method === "GET"
    ? get(req, res)
    : res.status(404).send("");
};
