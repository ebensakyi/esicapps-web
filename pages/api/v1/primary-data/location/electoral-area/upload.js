import prisma from "../../../../../../prisma/MyPrismaClient";
import { verifyToken } from "../../../../../../helpers/token-verifier";
import { createReadStream } from "fs";
import { parse } from "fast-csv";
import formidable from "formidable";
import fs from "fs";
import { nanoid } from "nanoid";

export const config = {
  api: {
    bodyParser: false,
  },
};
const post = async (req, res) => {
  try {
    const form = new formidable.IncomingForm({ multiples: true });

    form.parse(req, async function (err, fields, files) {
      let districtId = Number(fields.districtId);

      let response = await csvUploader(files, districtId);
      

      return res.status(201).json(response);
    });
  } catch (error) {
    console.log("post==> " + error);
  }
};

// const get = async (req, res) => {
//   try {
//     await csvUploader();
//   } catch (error) {}
// };

// const saveFile = async (files, districtId) => {
//   try {
//     const csvFile = await files.csvFile;

//     const fileName = nanoid() + ".csv";
//     const data = fs.readFileSync(csvFile.filepath);
//     let filePath = `./public/temp/${fileName}`;

//     let x = fs.writeFileSync(filePath, data);

//     await csvUploader(filePath, districtId);
//      //fs.unlinkSync(filePath);

//     return fileName;
//   } catch (error) {
//     console.log("saveFile>> ", error);
//   }
// };

const csvUploader = async (file, districtId) => {
  try {
    let data = [];
//Upload file to temp folder
    const csvFile = await file.csvFile;

    const fileName = nanoid() + ".csv";
    const csvData = fs.readFileSync(csvFile.filepath);
    let filePath = `./public/temp/${fileName}`;

    let x = fs.writeFileSync(filePath, csvData);


//Read file
    createReadStream(filePath)
      .pipe(parse({ headers: true }))
      .on("error", (error) => {
        throw error.message;
      })
      .on("data", (row) => {
        data.push(row);
      })
      .on("end", async () => {
        let newData = await formatData(data, districtId);

        await prisma.electoralArea.createMany({
          data: newData,
        });
      });
console.log(data);
      return data.length
  } catch (error) {
    console.log("csvUploader ==>", error);
  }
};

const formatData = async (data, districtId) => {
  try {
    let newData = data.map((row) => ({
      districtId: Number(districtId),
      name: row.name,
    }));
    return newData;
  } catch (error) {
    console.log(error);
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
