import { prisma } from "@/prisma/db";
import { NextResponse } from "next/server";
import { createReadStream } from "fs";
import { parse } from "fast-csv";
import formidable from "formidable";
import fs from "fs";
import { nanoid } from "nanoid";
import { writeFile } from "fs/promises";

// export const config = {
//     api: {
//       bodyParser: false,
//     },
//   };
export async function POST(request: Request) {
  try {
    const data = await request.formData();

    const file: File | null = data.get("csvFile") as unknown as File;
    const districtId = Number(data?.get("districtId"));

    if (!file) {
      return NextResponse.json({ success: false });
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    let fileName = nanoid() + file.name;

    const path = `./public/temp/${fileName}`;

    console.log("fileName ====>", fileName);

    await writeFile(path, buffer);

    let response = await readCSV(path, districtId);

   // await fs.unlinkSync(path);

    return NextResponse.json({});
    // });
  } catch (error: any) {
    console.error(error);
    return NextResponse.json(error);
  }
}

const readCSV = async (filePath: any, districtId: any) => {
  try {
    let data: any = [];


    console.log("filePathfilePath", filePath);

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
    return data.length;
  } catch (error) {
    console.log("csvUploader ==>", error);
  }
};

const formatData = async (data: any, districtId: any) => {
  try {
    let newData = data.map((row: any) => ({
      districtId: Number(districtId),
      name: row.name,
    }));
    console.log("newdata =>", newData);

    return newData;
  } catch (error) {
    console.log(error);
  }
};
