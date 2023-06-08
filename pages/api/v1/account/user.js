import prisma from "../../../../prisma/db";
import bcrypt from "bcryptjs";
import { getSession } from "../../../../utils/session-manager";
import { nanoid } from "nanoid";
import { logActivity } from "../../../../utils/Log";
import { sendSMS } from "../../../../utils/send-hubtel-sms";
import { generateCode } from "../../../../utils/generate-code";

const post = async (req, res) => {
  try {
    let userData = await getSession(req);

    // let password = await nanoid(8); //req.body.password;
    let userRegionId = userData?.RegionId;
    let userDistrictId = userData?.DistrictId;

    let password = await generateCode(4);
    const salt = bcrypt.genSaltSync(10);
    let hashedPassword = await bcrypt.hashSync(password, salt);

    let regionId;
    let data = {};

    await logActivity(
      `Added user ${req.body.surname} ${req.body.otherNames} `,
      Number(userData.id)
    );
    data = {
      userTypeId: Number(req.body.userTypeId),
      userLevelId: Number(req.body.userLevelId),
      surname: req?.body?.surname,
      otherNames: req?.body?.otherNames,
      email: req?.body?.email,
      phoneNumber: req?.body?.phoneNumber,
      password: hashedPassword,
      tempPassword: password,
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

    // }

    const user = await prisma.user.create({ data });
    // if (Number(req.body.userTypeId) == 7) {
    //   await sendSMS(
    //     req.body.phoneNumber,
    //     `The temporal password for ESICApps Mobile App is ${password}`
    //   );
    // } else {
    //   await sendSMS(
    //     req.body.phoneNumber,
    //     `The password for ESICApps Web App is ${password}`
    //   );
    // }

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
    let data = await getSession(req);
    let page = req.query.page;
    let perPage = 10;
    let skip = Number((page - 1) * perPage) || 0;

    let userLevel = data.userLevelId;
    let region = data.regionId;
    let district = data.districtId;
    let users;

    let searchText = req.query.searchText;

    // if (req.query.districtId) {
    //   user = await prisma.user.findMany({
    //     where: { deleted: 0, districtId: Number(req.query.districtId) },

    //     orderBy: {
    //       id: "desc",
    //     },
    //   });
    //   return res.status(200).json(user);
    // }

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
              }
            : {},
        skip: skip,
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

      let count = users.length;

      return res
        .status(200)
        .json({ user, curPage: page, maxPage: Math.ceil(count / perPage) });
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
              }
            : { regionId: Number(region) },
        skip: skip,

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
      let count = users.length;

      return res
        .status(200)
        .json({ users, curPage: page, maxPage: Math.ceil(count / perPage) });
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
              }
            : { districtId: Number(district) },
        skip: skip,

        include: { Region: true, District: true, UserType: true },
        orderBy: {
          id: "desc",
        },
      });
      let count = users.length;

      return res
        .status(200)
        .json({ users, curPage: page, maxPage: Math.ceil(count / perPage) });
    }
  } catch (error) {
    console.log("Error: " + error);
  }
};

const Delete = async (req, res) => {
  try {
    console.log("req.params", req.body);
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

    console.log(data);

    // let user = await prisma.user.findFirst({
    //   where: { id: Number(req.body.id) },
    // });

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
