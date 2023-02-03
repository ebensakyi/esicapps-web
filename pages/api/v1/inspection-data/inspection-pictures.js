import prisma from "../../../../prisma/MyPrismaClient";
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
        inspectionId: fields.inspectionId,
        imagePath: image,
        formSectionImageId:
          fields.formSectionImageId == "null"
            ? 1
            : Number(fields.formSectionImageId),
      };
      const ip = await prisma.inspectionPictures.create({ data });

      //   const data = {
      //     inspectionId: fields.inspectionId,
      //     _key:fields.key,
      //     // waterPicture: waterPicture,
      //     // liquidWastePicture1: liquidWastePicture1,
      //     // liquidWastePicture2: liquidWastePicture2,
      //     // solidWastePicture: solidWastePicture,
      //   };

      //Move to payment
      return res.status(200).json();
    });
  } catch (error) {
    console.log(error);
    return res.status(400).json();
  }
};

const saveFile = async (file) => {
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
      Bucket: "esicapps-images",
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