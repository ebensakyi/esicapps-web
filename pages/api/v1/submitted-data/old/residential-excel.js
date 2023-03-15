import prisma from "../../../../prisma/MyPrismaClient";
import AWS from "aws-sdk";
import fs from "fs";

const XLSX = require('xlsx');

const post = async (req, res) => {
  try {
    let data = await prisma.basicInfoSection.findMany({
      where: {
        deleted: 0,
        Inspection: {
          // isPublished: 0,
          inspectionFormId: 1,
        },
      },
    
      include: {
        Inspection: true,
        Community: { include: { District: { include: { Region: true } } } },
        User: true,
      },
    });
    console.log(data);

    const workSheet = XLSX.utils.json_to_sheet(data);
    const workBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workBook, workSheet, "Sheet 1");
    let filePath = "./public/temp/residential-data.xlsx"
    XLSX.writeFile(workBook, filePath);

   let url = await uploadFile("residential-data.xlsx");


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
