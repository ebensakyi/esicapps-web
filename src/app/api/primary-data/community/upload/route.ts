import { prisma } from "@/prisma/db";
import { NextResponse } from "next/server";
import { createReadStream } from "fs";
import { parse } from "fast-csv";
import formidable from "formidable";
import fs from "fs";
import { nanoid } from "nanoid";
import { writeFile } from "fs/promises";


export async function POST(request: Request) {
  try {
    const data = await request.formData();

    const file: File | null = data.get("csvFile") as unknown as File;
    const electoralAreaId = Number(data?.get("electoralAreaId"));

    if (!file) {
      return NextResponse.json({ success: false });
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    let fileName = nanoid() + file.name;

    const path = `./public/temp/${fileName}`;


    await writeFile(path, buffer);

    let response = await readCSV(path, electoralAreaId);


    return NextResponse.json({});
  } catch (error: any) {
    console.error(error);
    return NextResponse.json(error,{status:500});
  }
}

const readCSV = async (filePath: any, electoralAreaId: any) => {
  try {
    let data: any = [];



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
        let newData = await formatData(data, electoralAreaId);

        await prisma.community.createMany({
          data: newData,
        });
  fs.unlink(filePath, (err) => {
        if (err) {
          console.error('Error deleting CSV file:', err);
          return;
        }
        console.log('CSV file has been deleted successfully.');
      });
      });
    
     /// await fs.unlinkSync(filePath);
    return data.length;
  } catch (error) {
    console.log("csvUploader ==>", error);
  }
};

const formatData = async (data: any, electoralAreaId: any) => {
  try {
    let newData = data.map((row: any) => ({
      electoralAreaId: Number(electoralAreaId),
      name: row.name,
    }));

    console.log(newData);
    

    return newData;
  } catch (error) {
    console.log(error);
  }
};
