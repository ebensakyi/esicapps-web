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
      let regionId = Number(fields.regionId);

      console.log(regionId);



      let filePath = await saveFile(files, regionId);

      return res.status(201).json({});
    });
  } catch (error) {
    console.log(error);
  }
};

// const get = async (req, res) => {
//   try {
//     await csvUploader();
//   } catch (error) {}
// };

const saveFile = async (files, regionId) => {
  try {
    const csvFile = await files.csvFile;

    const fileName = nanoid() + ".csv";
    const data = fs.readFileSync(csvFile.filepath);
    let filePath = `./public/temp/${fileName}`;

    console.log(filePath);

    let x = fs.writeFileSync(filePath, data);

    await csvUploader(filePath, regionId);
     //fs.unlinkSync(filePath);

    return fileName;
  } catch (error) {
    console.log("saveFile>> ", error);
  }
};

const csvUploader = async (path, regionId) => {
  try {
     let data = [];

  createReadStream(path)
    .pipe(parse({ headers: true }))
    .on("error", (error) => {
      throw error.message;
    })
    .on("data", (row) => {
      data.push(row);
    })
    .on("end", async () => {
      let newData = await formatData(data, regionId);
      await prisma.district.createMany({
        data: newData,
      });
    });
  } catch (error) {
    console.log(error);
  }
 
};

const formatData = async (data, regionId) => {
  try {
     let newData = data.map((row) => ({
    regionId: Number(regionId),
    name: row.name,
    abbrv: row.abbrv
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
