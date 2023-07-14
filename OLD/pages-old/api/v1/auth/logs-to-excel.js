import prisma from "../../../../prisma/db";
import AWS from "aws-sdk";
import fs from "fs";
import { getSession } from "../../../../utils/session-manager";
import { logActivity } from "../../../../utils/log";

const XLSX = require("xlsx");

const post = async (req, res) => {
  try {
    let userData = await getSession(req);

    await logActivity("Exported data to excel", userData.id);

    let published = Number(req?.body?.published) || 0;
    let searchText = req?.body?.searchText.trim() || "";

    let filterBy = req?.body?.filterBy;
    // let filterValue = req?.body?.filterValue;
    // let filterValue = req?.body?.filterValue;
    let inspectionFormId = req?.body?.inspectionFormId;

    let filterValue =
      req?.body?.filterValue == "undefined"
        ? undefined
        : Number(req?.body?.filterValue);

    let from =
      req?.body?.from == "undefined" || req?.body?.from == ""
        ? undefined
        : new Date(req?.body?.from);

    let to =
      req.body.to == "" || req?.body?.to == "undefined"
        ? undefined
        : new Date(req?.body?.to);

    let fileName = req.body.fileName;

    let filterObject = {
      isPublished: published,
      inspectionFormId: inspectionFormId,
      [filterBy]: filterValue,
    };

    let data = await prisma.logs.findMany({
      where: {
        deleted: 0,
        // User: {

        //   [filterBy]: filterValue,
        // },
      },
      include: { User: true },
    });

    let newData = [];

    for (let i = 0; i < data?.length; i++) {
      newData?.push({
        "Name": data[i]?.User.surname,
        "Email": data[i]?.User?.email,

        "Designation": `${data[i]?.User?.designation} `,
        "Activity": data[i]?.activity,
        "Date": data[i]?.createdAt,
   
      });
    }

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
    console.log("Upload File Error ", error);
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
