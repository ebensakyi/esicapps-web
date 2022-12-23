import prisma from "../../../../prisma/MyPrismaClient";
var GeoJSON = require("geojson");

const post = async (req, res) => {
  try {
  } catch (error) {}
};

const get = async (req, res) => {
  try {
    // const data = await prisma.basicInfoSection.findMany({
    //   where: {
    //     deleted: 0,

    //   },
    //   include: {
    //     Inspection: true,
    //     Community: { include: { District: { include: { Region: true } } } },
    //     User: true,
    //   },
    // });

    const data = await prisma.inspection.findMany({
      where: {
        isPublished: 0,
        inspectionFormId:1
      },
      include: {
        BasicInfoSection: {
          include: {
            Community: true,
          },
        },
      },
      // include: {
      //   BasicInfoSection: {  Community: { include: { District: { include: { Region: true } } } },},

      //   User: true,
      // },
    });
    // GeoJSON.parse(data, {Point: ['lat', 'lng']});

    console.log(data);
    //return res.status(200).json({ statusCode: 1, data: dataVersion });
    return res.status(200).json(data);
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
