import prisma from "../../../../../prisma/db";
import formidable from "formidable";
import fs from "fs";
import { nanoid } from "nanoid";
import AWS from "aws-sdk";
import moment from "moment";

export const config = {
  api: {
    bodyParser: false,
  },
};

const post = async (req, res) => {
  try {
    const form = new formidable.IncomingForm({ multiples: true });
    form.parse(req, async function (err, fields, file) {
      // let imageFile = file.imageFile;
      let image = await saveFile(file);

      const data = {
        imagePath: image,
      };
      const ui = await prisma.user.update({
        data,
        where: { id: Number(fields.userId) },
      });

      return res.status(200).json();
    });
  } catch (error) {
    console.log(error);
    return res.status(400).json();
  }
};

const saveFile = async (file) => {
  try {
    const imageFile = await file.imageFile;

    var now = moment();

    let prefix = now.format("YYYYMM");

    const ext = await imageFile.originalFilename.split(".").pop();
    const fileName = prefix + "" + nanoid() + "." + ext;
    const data = fs.readFileSync(imageFile.filepath);
    fs.writeFileSync(`./public/uploads/${fileName}`, data);

    let fileUrl = await uploadFile(fileName);
    fs.unlinkSync(`./public/uploads/${fileName}`);
    return fileName;
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

    var filePath = `./public/uploads/${fileName}`;

    var params = {
      Bucket: "esicapps-profile-images",
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
