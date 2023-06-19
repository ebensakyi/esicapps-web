import prisma from "../../../../prisma/db";
import bcrypt from "bcryptjs";
import { nanoid } from "nanoid";
import { send } from "../../../../utils/send-sms";
import { getSession } from "../../../../utils/session-manager";

const post = async (req, res) => {
  try {
  } catch (error) {
    console.log(error);
    if (error.code === "P2002") return res.status(200).json({ statusCode: 0 });
  }
};

const get = async (req, res) => {
  try {
    let userData = await getSession(req);
    let userLevel = userData?.userLevelId;
    let region = userData?.regionId;
    let district = userData?.districtId;
    let logs;
    let count;
    let curPage = req?.query?.page;
    let perPage = 10;
    let skip = Number((curPage - 1) * perPage) || 0;
    let searchText = req?.query?.searchText;




    if (userLevel == 1) {
      logs = await prisma.logs.findMany({
        where:
          searchText != ""
            ? {
                OR: searchArr(),
                deleted: 0,
              }
            : {
                deleted: 0,
              },
        include: {
          User: true,
        },
        skip: skip,
        take: perPage,
        orderBy: {
          id: "desc",
        },
      });

      count = await prisma.logs.count({
        where:
          searchText != ""
            ? {
                OR: searchArr(),
                deleted: 0,
              }
            : {
                deleted: 0,
              },
      });
    }

    // const result = await prisma.user.findMany({
    //   where: {
    //     email: {
    //       endsWith: 'prisma.io',
    //     },
    //     posts: {
    //       some: {
    //         published: true,
    //       },
    //     },
    //   },
    //   include: {
    //     posts: {
    //       where: {
    //         published: true,
    //       },
    //     },
    //   },
    // })

    if (userLevel == 2) {
      logs = await prisma.logs.findMany({
        where:
          searchText != ""
            ? {
                OR: searchArr(),
                deleted: 0, 
       
              }
            : {
                deleted: 0, 
              },
               include: {
                  User: true,
                }, 
    
        skip: skip,
        take: perPage,
        orderBy: {
          id: "desc",
        },
      });
       let  logsCount = await prisma.logs.findMany({
        where:
          searchText != ""
            ? {
                OR: searchArr(),
                deleted: 0,
              }
            : {
                deleted: 0,
              },
        include: {
          User: true,
        },
      
      });


      logs = logs.filter(function (el) {
        return el.User.regionId == region;
      })

    

      count = logsCount.filter(function (el) {
        return el.User.regionId == region;
      }).length
    }
    if (userLevel == 3) {
      logs = await prisma.logs.findMany({
        where:
          searchText != ""
            ? {
                OR: searchArr(),
                deleted: 0,
              }
            : {
                deleted: 0,
              },
        include: {
          User: true,
        },
        skip: skip,
        take: perPage,
        orderBy: {
          id: "desc",
        },
      });

   

      let  logsCount = await prisma.logs.findMany({
        where:
          searchText != ""
            ? {
                OR: searchArr(),
                deleted: 0,
              }
            : {
                deleted: 0,
              },
        include: {
          User: true,
        },
      
      });


      logs = logs.filter(function (el) {
        return el.User.districtId == district;
      })

    

      count = logsCount.filter(function (el) {
        return el.User.districtId == district;
      }).length
    }

    let max = Math.ceil(count / perPage);

    return res.status(200).json({ logs, curPage: curPage, maxPage: max });
  } catch (error) {
    console.log("Error: " + error);
  }
};

const searchArr = () => {
  return [
    {
      activity: {
        contains: searchText,
        mode: "insensitive",
      },
    },
    {
      User: {
        surname: {
          contains: searchText,
          mode: "insensitive",
        },
      },
    },
    {
      User: {
        otherNames: {
          contains: searchText,
          mode: "insensitive",
        },
      },
    },
    {
      User: {
        email: {
          contains: searchText,
          mode: "insensitive",
        },
      },
    },
    {
      User: {
        designation: {
          contains: searchText,
          mode: "insensitive",
        },
      },
    },
  ];
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
