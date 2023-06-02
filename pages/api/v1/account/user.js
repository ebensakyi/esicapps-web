import prisma from "../../../../prisma/db";
import bcrypt from "bcryptjs";
import { getUserCookie } from "../../../../utils/cookies-manager";
import { nanoid } from "nanoid";
import { logActivity } from "../../../../utils/Log";
import { sendSMS } from "../../../../utils/send-hubtel-sms";
import { generateCode } from "../../../../utils/generate-code";

const post = async (req, res) => {
  try {
    // let password = await nanoid(8); //req.body.password;
    let password = await generateCode(4);

    const salt = bcrypt.genSaltSync(10);

    let hashedPassword = await bcrypt.hashSync(password, salt);
    let userCookie = await getUserCookie(req, res);

    let regionId;
    let data = {};
    if (userCookie.user.userTypeId == 1) {
      if (req.body.region == null) {
        let districtData = await prisma.district.findFirst({
          where: {
            id: Number(req.body.district),
          },
        });
        regionId = districtData == null ? null : Number(districtData.regionId);
      } else {
        regionId = Number(req.body.region);
      }

      await logActivity(
        `Added user ${req.body.surname} ${req.body.otherNames} `,
        Number(userCookie.user.id)
      );
      data = {
        userTypeId: Number(req.body.userTypeId),
        surname: req.body.surname,
        otherNames: req.body.otherNames,
        email: req.body.email,
        phoneNumber: req.body.phoneNumber,
        password: hashedPassword,
        tempPassword: password,
        designation: req.body.designation,
        regionId: regionId,
        districtId:
          req.body.district == null ? null : Number(req.body.district),
      };
    }
    if (userCookie.user.userTypeId == 3) {
      let regionId = Number(userCookie.user.regionId);
      // let districtData = await prisma.district.findFirst({
      //   where: {
      //     id: Number(req.body.district),
      //   },
      // });
      //   districtData == null ? null : Number(districtData.regionId);
      await logActivity(
        `Added user ${req.body.surname} ${req.body.otherNames} `,
        Number(userCookie.user.id)
      );
      data = {
        userTypeId: Number(req.body.userTypeId),
        surname: req.body.surname,
        otherNames: req.body.otherNames,
        email: req.body.email,
        phoneNumber: req.body.phoneNumber,
        password: hashedPassword,
        designation: req.body.designation,
        tempPassword: password,

        regionId: regionId,
        districtId:
          req.body.district == null ? null : Number(req.body.district),
      };
    }

    if (userCookie.user.userTypeId == 5) {
      await logActivity(
        `Added user ${req.body.surname} ${req.body.otherNames} `,
        Number(userCookie.user.id)
      );

      let districtId = Number(userCookie.user.districtId);
      let districtData = await prisma.district.findFirst({
        where: {
          id: districtId,
        },
      });
      let regionId =
        districtData == null ? null : Number(districtData.regionId);
      data = {
        userTypeId: Number(req.body.userTypeId),
        surname: req.body.surname,
        otherNames: req.body.otherNames,
        email: req.body.email,
        phoneNumber: req.body.phoneNumber,
        password: hashedPassword,
        designation: req.body.designation,
        tempPassword: password,

        regionId: regionId,
        districtId: districtId,
      };
    }

    const user = await prisma.user.create({ data });
    if (Number(req.body.userTypeId) == 7) {
      await sendSMS(
        req.body.phoneNumber,
        `The temporal password for ESICApps Mobile App is ${password}`
      );
    } else {
      await sendSMS(
        req.body.phoneNumber,
        `The password for ESICApps Web App is ${password}`
      );
    }

    await prisma.userAddedByUser.create({
      data: { addeeId: user.id, adderId: Number(userCookie.user.id) },
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
    let user;

    if (req.query.districtId) {
      user = await prisma.user.findMany({
        where: { deleted: 0, districtId: Number(req.query.districtId) },

        orderBy: {
          id: "desc",
        },
      });
      return res.status(200).json(user);
    }

    let data = await getSession(req);

    let userType = data.user.UserType.id;
    let region = data.user.regionId;
    let district = data.user.districtId;

    if (userType == 1) {
      user = await prisma.user.findMany({
        // where: { deleted: 0 },
        include: { Region: true, District: true, UserType: true },
        orderBy: {
          id: "desc",
        },
      });
      return res.status(200).json(user);
    }
    if (userType == 2) {
      user = await prisma.user.findMany({
        where: { regionId: Number(region) },
        include: { Region: true, District: true, UserType: true },
        orderBy: {
          id: "desc",
        },
      });
      return res.status(200).json(user);
    }

    if (userType == 3) {
      user = await prisma.user.findMany({
        where: {  districtId: Number(district) },
        include: { Region: true, District: true, UserType: true },
        orderBy: {
          id: "desc",
        },
      });
      return res.status(200).json(user);
    }
  } catch (error) {
    console.log("Error: " + error);
  }
};

const put = async (req, res) => {
let user =  await prisma.user.findFirst({ where: { id: Number(req.body.id) },})

  await prisma.user.update({
    where: { id: Number(req.body.id) },
    data: { deleted: Math.abs(user.deleted-1)},
  });
  return res.status(200).json();
};

export default (req, res) => {
  req.method === "POST"
    ? post(req, res)
    : req.method === "PUT"
    ? put(req, res)
    : req.method === "DELETE"
    ? console.log("DELETE")
    : req.method === "GET"
    ? get(req, res)
    : res.status(404).send("");
};
