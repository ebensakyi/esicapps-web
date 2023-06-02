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

const Delete = async (req, res) => {
  try {
     let id = Number(req.query.id);

     const userType = await prisma.userType.update({
      where: {
        id: id
      },
      data: {
        deleted: 1
      },
    });

    const pageAccess = await prisma.pageAccess.deleteMany({
      where: {
        userTypeId: id
      },
      
    });
  

  
  return res.status(200).json()
  } catch (error) {
    console.log(error);
  }
 

}

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

  const userType = await prisma.pageAccess.delete({
    where: {
      id: userTypeId
    },
    
  });


    //  const userType = await prisma.userType.update({
    //   where: {
    //     id: userTypeId
    //   },
    //   data: {
    //     deleted: 1
    //   },
    // });

  
  return res.status(200).json()
  } catch (error) {
    console.log(error);
  }
 

}

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
