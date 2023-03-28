import prisma from "../../../../prisma/MyPrismaClient";
import { verifyToken } from "../../../../helpers/token-verifier";
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

      console.log(districtId);

      let filePath = await saveFile(files, districtId);

      return res.status(201).json({});
    });
  } catch (error) {}
};

const get = async (req, res) => {
  try {
    await csvUploader();
  } catch (error) {}
};

const saveFile = async (files, districtId) => {
  try {
    const communityCsv = await files.communityFile;

    const fileName = nanoid() + ".csv";
    const data = fs.readFileSync(communityCsv.filepath);
    let filePath = `./public/temp/${fileName}`;

    let x = fs.writeFileSync(filePath, data);

    await csvUploader(filePath, districtId);
     //fs.unlinkSync(filePath);

    return fileName;
  } catch (error) {
    console.log("saveFile>> ", error);
  }
};

const csvUploader = async (path, districtId) => {
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
      let newData = await formatData(data, districtId);
      await prisma.community.createMany({
        data: newData,
      });
    });
};

const formatData = async (data, districtId) => {
  let newData = data.map((row) => ({
    districtId: Number(districtId),
    name: row.name,
  }));
  return newData;
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