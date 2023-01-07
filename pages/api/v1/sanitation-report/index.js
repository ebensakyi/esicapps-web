import formidable from "formidable";
import nextConnect from "next-connect";
import fs from "fs";
import { nanoid } from "nanoid";
import AWS from "aws-sdk";
import moment from "moment";

import prisma from "../../../../prisma/MyPrismaClient";

export const config = {
  api: {
    bodyParser: false,
  },
};

const post = async (req, res) => {
  try {
    const form = new formidable.IncomingForm({ multiples: true });
    form.parse(req, async function (err, fields, files) {
      // console.log("FORM==>", files);

     let image = await saveFile(files);
      const data = {
        fcmId: fields.fcmId,
        fullName: fields.fullName,
        email: fields.email,
        phoneNumber: fields.phoneNumber,
        description: fields.description,
        districtId: Number(fields.district),
        latitude: Number(fields.latitude),
        longitude: Number(fields.longitude),
        reportTypeId: Number(fields.reportType),
        image: image,
      };

      console.log(data);

     const sanitationReport = await prisma.sanitationReport.create({ data });

      //Move to payment
      return res.status(200).json();
    });
  } catch (error) {
    console.log(error);
    return res.status(400).json();
  }
};

const saveFile = async (file) => {
  const imageFile = await file.nuisancePicture;

  console.log(file.nuisancePicture.originalFilename);

  const ext = await imageFile.originalFilename.split(".").pop();
  const fileName = nanoid() + "." + ext;
  const data = fs.readFileSync(imageFile.filepath);
  fs.writeFileSync(`./public/uploads/${fileName}`, data);
  // fs.unlinkSync(imageFile.filepath);

  let fileUrl = await uploadFile(fileName);
 // if (fileUrl) {
  console.log(imageFile.filepath);
    fs.unlinkSync(`./public/uploads/${fileName}`);
 // }
return fileName;
};

const uploadFile = async (fileName) => {
   try {

  var now	= moment();
  let prefix = now.format('YYYYMM');

 
  AWS.config.update({
    accessKeyId: process.env.AWS_ACCESS_KEY,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  });

  var s3 = new AWS.S3();

  var filePath = `./public/uploads/${fileName}`;

  var params = {
    Bucket: "sanitation-reporter-images",
    Body: fs.createReadStream(filePath),
    Key: prefix + "/" + fileName,
  };

  let stored = await s3.upload(params).promise();
  console.log("STORE ", stored.Location);

  return stored.Location;
  } catch (error) {
    console.log("UploadFile Error ", error);
    return error;
  }
};

const get = async (req, res) => {
  try {
    const data = await prisma.sanitationReport.findMany({
      where: { deleted: 0 },
    });
    //return res.status(200).json({ statusCode: 1, data: action });
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
