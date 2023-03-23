import prisma from "../../../../prisma/MyPrismaClient";
import { verifyToken } from "../../../../helpers/token-verifier";
import { createReadStream } from 'fs';
import { parse } from 'fast-csv';

const post = async (req, res) => {
  try {
  } catch (error) {}
};

const get = async (req, res) => {
    try {
        await csvUploader()
    } catch (error) {}
  };


  const  csvUploader= async()=>{
    let data = []
    let path = "./public/uploads/community.csv";

    createReadStream(path)
    .pipe(parse({ headers: true }))
    .on("error", (error) => {
      throw error.message;
    })
    .on("data", (row) => {
      data.push(row);
    })
    .on("end", async()  => {
let newData =  await formatData(data)
await prisma.community.createMany({
  data: newData,
});

    })

  }

  const formatData= async(data) => {

 let newData =   data.map((row) =>({"districtId": Number(row.districtId),"name": row.name}))
return newData
  }
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
  