import prisma from "../../../../prisma/MyPrismaClient";
import { getUserCookie } from "../../../../helpers/cookies-manager";

const post = async (req, res) => {
  try {
    let userCookie = await getUserCookie(req, res);

    let inspection = await prisma.inspection.findFirst({
      where: {
        id: req.body.id,
      },
    });
    let isPublished = inspection.isPublished;

    await prisma.inspection.update({
      data: {
        isPublished: Math.abs(isPublished - 1),
        publishedById: Number(userCookie.user.id),
      },
      where: {
        id: req.body.id,
      },
    });

    res.status(200).json();
  } catch (error) {
    console.log(error);
  }
};

const get = async (req, res) => {
  try {
    let inspectionId = req.query.id;

    let followup = await prisma.followUpInspection.findFirst({
      where: {
        deleted: 0,
        id: inspectionId,
      },
      include: {
        InspectionType: true,
        Rating: true,
        Inspection: {
          include: {
            User: true,
            BasicInfoSection: {
              include: {
                Community: {
                  include: { District: { include: { Region: true } } },
                },
              },
            },
          },
        },
      },
    });

    let actionsTaken = await prisma.premisesActionTaken.findMany({
      where: {
        deleted: 0,
        inspectionId,
      },
      include: {
        Action: true,
      },
    });

    let nuisances = await prisma.premisesNuisanceDetected.findMany({
      where: {
        deleted: 0,
        inspectionId,
      },
      include: {
        Nuisance: true,
      },
    });

    //return res.status(200).json({ statusCode: 1, data: dataVersion });
    return res.status(200).json({followup,actionsTaken,nuisances});
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
