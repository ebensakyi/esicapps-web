import prisma from "../../../../prisma/MyPrismaClient";
import AWS from "aws-sdk";
import fs from "fs";
const flatten = require('flat').flatten;
const XLSX = require("xlsx");

const post = async (req, res) => {
  try {
    let fileName = req.body.fileName;
    let inspectionFormId = req.body.inspectionFormId;

    let data = await prisma.basicInfoSection.findMany({
      where: {
        deleted: 0,
        Inspection: {
          // isPublished: 0,
          inspectionFormId: inspectionFormId,
        },
      },

      include: {
        Inspection: {
          include: {
            LicencePermitSection: {
              include: {
                animalsPermitAvailability: true,
                buildingPermitAvailability: true,

                businessLicenceAvailability: true,
                fumigationCertificateAvailability: true,
                habitationCertificateAvailability: true,
                medicalCertificateAvailability: true,
                operatingLicenceAvailability: true,
                propertyRateAvailability: true,
                structurePermitAvailability: true,
                gtaOperatingLicenceAvailability: true,
                waterAnalysisReport: true,
                regGeneralCertAvailability: true,
                suitabilityCertificateAvailability: true,
                pharmacyCertAvailability: true,
              },
            },
            WaterSection: {
              include: {
                WaterFlowFrequency: true,
                waterSourceCondition: true,
                waterStorageConditionSafe: true,
                safeDistanceWaterStorageSanitary: true,
                PremisesDrinkingWaterSources: {
                  include: { DrinkingWaterSourceType: true },
                },
                PremisesWaterSources: {
                  include: { WaterSourceType: true },
                },
                PremisesWaterStorage: {
                  include: { WaterStorageType: true },
                },
                PremisesWaterSupply: {
                  include: { WaterSupplyType: true },
                },
                PremisesWaterTreatmentType: {
                  include: { WaterTreatmentType: true },
                },
              },
            },
          },
        },
        Community: { include: { District: { include: { Region: true } } } },
        User: true,
      },
    });

   let newData =flatten(data);
    console.log(newData);

    const workSheet = XLSX.utils.json_to_sheet(newData);
    const workBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workBook, workSheet, "Sheet 1");
    let filePath = `./public/temp/${fileName}`;
    XLSX.writeFile(workBook, filePath);

    let url = await uploadFile(fileName);

    res.status(200).json(url);
  } catch (error) {
    console.log(error);
  }
};



const uploadFile = async (fileName) => {
  try {
    AWS.config.update({
      accessKeyId: process.env.AWS_ACCESS_KEY,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    });

    var s3 = new AWS.S3();

    var filePath = `./public/temp/${fileName}`;

    var params = {
      Bucket: "esicapps-exports",
      Body: fs.createReadStream(filePath),
      // Key: prefix + "/" + fileName,
      Key: fileName,
    };

    let stored = await s3.upload(params).promise();
    console.log("STORE ", stored.Location);

    return stored.Location;
  } catch (error) {
    console.log("UploadFile Error ", error);
    return error;
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
