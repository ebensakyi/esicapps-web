import prisma from "../../../../prisma/MyPrismaClient";
import bcrypt from "bcryptjs";
import { getUserCookie } from "../../../../helpers/cookies-manager";
import { verifyToken } from "../../../../helpers/token-verifier";
import { nanoid } from "nanoid";
import { logActivity } from "../../../../helpers/Log";

const post = async (req, res) => {
  try {
    let password = await nanoid(8); //req.body.password;
    const salt = bcrypt.genSaltSync(10);

    let hashedPassword = await bcrypt.hashSync(password, salt);
    let userCookie = await getUserCookie(req, res);

    let data = {};
    if (userCookie.user.userTypeId == 1) {
      await logActivity(
        `Added national user ${req.body.surname} ${req.body.otherNames} `,
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
        regionId: req.body.region == null ? null : Number(req.body.region),
        districtId:
          req.body.district == null ? null : Number(req.body.district),
        addedByUserId: Number(userCookie.user.id),
      };

      console.log(data);
    }
    if (userCookie.user.userTypeId == 3) {
      await logActivity(
        `Added regional user ${req.body.surname} ${req.body.otherNames} `,
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
        regionId:
          req.body.region == null ? null : Number(userCookie.user.regionId),
        districtId:
          req.body.district == null ? null : Number(req.body.district),
        addedByUserId: Number(userCookie.user.id),
      };

      console.log("R DATA ", data);
    }

    if (userCookie.user.userTypeId == 5) {
      await logActivity(
        `Added mmda user ${req.body.surname} ${req.body.otherNames} `,
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
        regionId: req.body.region == null ? null : Number(req.body.region),
        districtId:
          req.body.district == null ? null : Number(req.body.district),
        addedByUserId: Number(userCookie.user.id),
      };
    }

    const user = await prisma.user.create({ data });
    return res
      .status(200)
      .json({ statusCode: 1, message: "Data saved", data: { user } });
  } catch (error) {
    console.log(error);
    if (error.code === "P2002")
      return res
        .status(200)
        .json({ statusCode: 0, message: "Data should be unique" });
  }
};

const get = async (req, res) => {
  try {
    let user;
    let data = await verifyToken(req.query.token);

    let userLevel = data.user.UserType.userLevelId;
    let region = data.user.regionId;
    let district = data.user.districtId;

    if (userLevel == 1) {
      user = await prisma.user.findMany({
        where: { deleted: 0 },
        include: { Region: true, District: true, UserType: true },
        orderBy: {
          id: "desc",
        },
      });
      return res.status(200).json(user);
    }
    if (userLevel == 2) {
      console.log("here 2");

      user = await prisma.user.findMany({
        where: { deleted: 0, regionId: Number(region) },
        include: { Region: true, District: true, UserType: true },
        orderBy: {
          id: "desc",
        },
      });
      return res.status(200).json(user);
    }

    if (userLevel == 3) {
      user = await prisma.user.findMany({
        where: { deleted: 0, districtId: Number(district) },
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
