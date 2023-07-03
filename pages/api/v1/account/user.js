import prisma from "../../../../prisma/db";
import bcrypt from "bcryptjs";
import { getSession } from "../../../../utils/session-manager";
import { logActivity } from "../../../../utils/log";
import { sendSMS } from "../../../../utils/send-hubtel-sms";
import { generateCode } from "../../../../utils/generate-code";
import { log } from "console";

const post = async (req, res) => {
  try {
    let userData = await getSession(req);

    // let password = await nanoid(8); //req.body.password;
    let loggedInUserRegionId = userData?.regionId;
    let loggedInUserDistrictId = userData?.districtId;
    let loggedInUserLevelId = userData?.userLevelId;

    let userLevelId = Number(req?.body?.userLevelId);

    let password = await generateCode(4);
    const salt = bcrypt.genSaltSync(10);
    let hashedPassword = await bcrypt.hashSync(password, salt);

    let regionId, districtId;
    let data = {};
    await logActivity(
      `Added user ${req.body.surname} ${req.body.otherNames} `,
      Number(userData.id)
    );

    //National Level
    if (loggedInUserLevelId == "1") {
     
      regionId = req?.body?.region == 0 ? null : req?.body?.region;
      districtId = req?.body?.district == 0 ? null : req?.body?.district;
     // password = await generateCode(8);
      console.log("districtId",districtId);
    }

    //Regional Level
    if (loggedInUserLevelId == "2") {
      regionId = loggedInUserRegionId;
      districtId = Number(req.body.district);
      if (districtId == 0) {
        districtId = null;
        userLevelId = loggedInUserLevelId;
      }
    }
    console.log("loggedInUserLevelId:",loggedInUserLevelId);

    //District Level
    if (loggedInUserLevelId == "3") {
      regionId = req.body.region;
      districtId = Number(req.body.district);

     

      if (districtId == 0) {
        districtId = loggedInUserDistrictId;
        userLevelId = loggedInUserLevelId;
        regionId = loggedInUserRegionId;
      }
    }
    data = {
      userTypeId: Number(req.body.userTypeId),
      userLevelId: userLevelId,
      surname: req?.body?.surname,
      otherNames: req?.body?.otherNames,
      email: req?.body?.email,
      phoneNumber: req?.body?.phoneNumber,
      password: hashedPassword,
      tempPassword: password,
      designation: req?.body?.designation,
      regionId: regionId,
      districtId: districtId,
    };

    console.log(data);

    const user = await prisma.user.create({ data });
    await sendSMS(
      req.body.phoneNumber,
      `The temporal password for ESICApps App is ${password}`
    );

    await prisma.userAddedByUser.create({
      data: { addeeId: user.id, adderId: Number(userData.id) },
    });

    return res
      .status(200)
      .json({ statusCode: 1, message: "Data saved", data: { user } });
  } catch (error) {
    console.log(error);
    if (error.code === "P2002")
      return res.status(500).json({
        statusCode: 0,
        message: "Phone number and Email should be unique",
      });
  }
};

const get = async (req, res) => {
  try {
    let loggedInUserData = await getSession(req);
    let page = req.query.page || 1;
    let perPage = 10;
    let skip = Number((page - 1) * perPage) || 0;

    let districtId = Number(req?.query?.districtId) || undefined;

    let userLevel = loggedInUserData?.userLevelId;
    let region = loggedInUserData?.regionId;
    let district = loggedInUserData?.districtId;
    let users;

    let searchText = req?.query?.searchText;

    //National User
    if (userLevel == 1) {
      users = await prisma.user.findMany({
        where:
          searchText != ""
            ? {
                OR: [
                  {
                    surname: {
                      contains: searchText,
                      mode: "insensitive",
                    },
                  },
                  {
                    otherNames: {
                      contains: searchText,
                      mode: "insensitive",
                    },
                  },
                  {
                    phoneNumber: {
                      contains: searchText,
                      mode: "insensitive",
                    },
                  },
                  {
                    email: {
                      contains: searchText,
                      mode: "insensitive",
                    },
                  },
                  {
                    Region: {
                      name: { contains: searchText, mode: "insensitive" },
                    },
                  },
                  {
                    District: {
                      name: { contains: searchText, mode: "insensitive" },
                    },
                  },
                  {
                    UserLevel: {
                      name: { contains: searchText, mode: "insensitive" },
                    },
                  },
                ],
                districtId: districtId,
              }
            : {},
        skip: skip,
        take: perPage,

        include: {
          Region: true,
          District: true,
          UserType: true,
          UserLevel: true,
        },
        orderBy: {
          id: "desc",
        },
      });

      let count = await prisma.user.count({
        where:
          searchText != ""
            ? {
                OR: [
                  {
                    surname: {
                      contains: searchText,
                      mode: "insensitive",
                    },
                  },
                  {
                    otherNames: {
                      contains: searchText,
                      mode: "insensitive",
                    },
                  },
                  {
                    phoneNumber: {
                      contains: searchText,
                      mode: "insensitive",
                    },
                  },
                  {
                    email: {
                      contains: searchText,
                      mode: "insensitive",
                    },
                  },
                  {
                    Region: {
                      name: { contains: searchText, mode: "insensitive" },
                    },
                  },
                  {
                    District: {
                      name: { contains: searchText, mode: "insensitive" },
                    },
                  },
                  {
                    UserLevel: {
                      name: { contains: searchText, mode: "insensitive" },
                    },
                  },
                ],
              }
            : {},
      });

      return res.status(200).json({
        users,
        pagination: { curPage: page, maxPage: Math.ceil(count / perPage) },
      });
    }
    //Regional User
    if (userLevel == 2) {
      users = await prisma.user.findMany({
        where:
          searchText != ""
            ? {
                regionId: Number(region),
                OR: [
                  {
                    surname: {
                      contains: searchText,
                      mode: "insensitive",
                    },
                  },
                  {
                    otherNames: {
                      contains: searchText,
                      mode: "insensitive",
                    },
                  },
                  {
                    phoneNumber: {
                      contains: searchText,
                      mode: "insensitive",
                    },
                  },
                  {
                    email: {
                      contains: searchText,
                      mode: "insensitive",
                    },
                  },
                  {
                    Region: {
                      name: { contains: searchText, mode: "insensitive" },
                    },
                  },
                  {
                    District: {
                      name: { contains: searchText, mode: "insensitive" },
                    },
                  },
                  {
                    UserLevel: {
                      name: { contains: searchText, mode: "insensitive" },
                    },
                  },
                ],
                regionId: Number(region),
              }
            : { regionId: Number(region) },
        skip: skip,
        take: perPage,

        include: {
          Region: true,
          District: true,
          UserType: true,
          UserLevel: true,
        },
        orderBy: {
          id: "desc",
        },
      });
      let count = await prisma.user.count({
        where:
          searchText != ""
            ? {
                OR: [
                  {
                    surname: {
                      contains: searchText,
                      mode: "insensitive",
                    },
                  },
                  {
                    otherNames: {
                      contains: searchText,
                      mode: "insensitive",
                    },
                  },
                  {
                    phoneNumber: {
                      contains: searchText,
                      mode: "insensitive",
                    },
                  },
                  {
                    email: {
                      contains: searchText,
                      mode: "insensitive",
                    },
                  },
                  {
                    Region: {
                      name: { contains: searchText, mode: "insensitive" },
                    },
                  },
                  {
                    District: {
                      name: { contains: searchText, mode: "insensitive" },
                    },
                  },
                  {
                    UserLevel: {
                      name: { contains: searchText, mode: "insensitive" },
                    },
                  },
                ],
                regionId: Number(region),
              }
            : { regionId: Number(region) },

        orderBy: {
          id: "desc",
        },
      });

      return res.status(200).json({
        users,
        pagination: { curPage: page, maxPage: Math.ceil(count / perPage) },
      });
    }

    if (userLevel == 3) {
      users = await prisma.user.findMany({
        where:
          searchText != ""
            ? {
                districtId: Number(district),
                OR: [
                  {
                    surname: {
                      contains: searchText,
                      mode: "insensitive",
                    },
                  },
                  {
                    otherNames: {
                      contains: searchText,
                      mode: "insensitive",
                    },
                  },
                  {
                    phoneNumber: {
                      contains: searchText,
                      mode: "insensitive",
                    },
                  },
                  {
                    email: {
                      contains: searchText,
                      mode: "insensitive",
                    },
                  },
                  {
                    Region: {
                      name: { contains: searchText, mode: "insensitive" },
                    },
                  },
                  {
                    District: {
                      name: { contains: searchText, mode: "insensitive" },
                    },
                  },
                  {
                    UserLevel: {
                      name: { contains: searchText, mode: "insensitive" },
                    },
                  },
                ],
                districtId: Number(district),
              }
            : { districtId: Number(district) },
        skip: skip,
        take: perPage,

        include: { Region: true, District: true, UserType: true },
        orderBy: {
          id: "desc",
        },
      });
      let count = await prisma.user.count({
        where:
          searchText != ""
            ? {
                OR: [
                  {
                    surname: {
                      contains: searchText,
                      mode: "insensitive",
                    },
                  },
                  {
                    otherNames: {
                      contains: searchText,
                      mode: "insensitive",
                    },
                  },
                  {
                    phoneNumber: {
                      contains: searchText,
                      mode: "insensitive",
                    },
                  },
                  {
                    email: {
                      contains: searchText,
                      mode: "insensitive",
                    },
                  },
                  {
                    Region: {
                      name: { contains: searchText, mode: "insensitive" },
                    },
                  },
                  {
                    District: {
                      name: { contains: searchText, mode: "insensitive" },
                    },
                  },
                  {
                    UserLevel: {
                      name: { contains: searchText, mode: "insensitive" },
                    },
                  },
                ],
                districtId: Number(district),
              }
            : { districtId: Number(district) },

        orderBy: {
          id: "desc",
        },
      });
      return res.status(200).json({
        users,
        pagination: { curPage: page, maxPage: Math.ceil(count / perPage) },
      });
    }
  } catch (error) {
    console.log("Error->: " + error);
  }
};

const Delete = async (req, res) => {
  try {
    let user = await prisma.user.findFirst({
      where: { id: Number(req.body.id) },
    });

    await prisma.user.update({
      where: { id: Number(req.body.id) },
      data: { deleted: Math.abs(user.deleted - 1) },
    });
    return res.status(200).json();
  } catch (error) {}
};

const put = async (req, res) => {
  try {
    console.log(req.body);
    let data = {
      userTypeId: Number(req.body.userTypeId),
      userLevelId: Number(req.body.userLevelId),
      surname: req?.body?.surname,
      otherNames: req?.body?.otherNames,
      email: req?.body?.email,
      phoneNumber: req?.body?.phoneNumber,

      designation: req?.body?.designation,
      regionId:
        req?.body?.region == null || req?.body?.region == ""
          ? null
          : Number(req?.body?.region),
      districtId:
        req?.body?.district == null || req?.body?.district == ""
          ? null
          : Number(req?.body?.district),
    };

    await prisma.user.update({
      where: { id: Number(req.body.userId) },
      data: data,
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
