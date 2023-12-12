import { prisma } from "@/prisma/db";
import { NextResponse } from "next/server";
import { createReadStream } from "fs";
import { parse } from "fast-csv";
import formidable from "formidable";
import fs from "fs";
import { nanoid } from "nanoid";
import { writeFile } from "fs/promises";
import { district } from '../../../../../../prisma/seed/district';


export async function POST(request: Request) {
  try {
    const data = await request.formData();

    const file: File | null = data.get("csvFile") as unknown as File;
    const electoralAreaId = Number(data?.get("electoralAreaId"));
    const districtId = Number(data?.get("districtId"));


    if (!file) {
      return NextResponse.json({ success: false });
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    let fileName = nanoid() + file.name;

    const path = `./public/temp/${fileName}`;


    await writeFile(path, buffer);

    let response = await readCSV(path, electoralAreaId,districtId);


    return NextResponse.json({});
  } catch (error: any) {
    console.error(error);
    return NextResponse.json(error,{status:500});
  }
}

const readCSV = async (filePath: any, electoralAreaId: any,districtId: any) => {
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
        let newData = await formatData(data, electoralAreaId,districtId);

        await prisma.community.createMany({
          data: newData,
        });
  fs.unlink(filePath, (err) => {
        if (err) {
          console.error('Error deleting CSV file:', err);
          return;
        }
      });
      });
    
     /// await fs.unlinkSync(filePath);
    return data.length;
  } catch (error) {
    console.log("csvUploader ==>", error);
  }
};

// const formatData1 = async (data: any, electoralAreaId: any, districtId: any) => {
//   try {
//     let newData = data
//     .filter((row: any) => row.name.trim() !== '')
//     .map((row: any) => ({
//       electoralAreaId: Number(electoralAreaId),
//       districtId: Number(districtId),
//       name: row.name,
//     }));

//     console.log(newData);
    

//     return newData
//   } catch (error) {
//     console.log(error);
//   }
// };


const formatData = async (data: any, electoralAreaId: any, districtId: any) => {
  try {
    const newData:any = [];
    const processedNames = new Set<string>();
    
    data.forEach((row: any) => {
      const trimmedName = row.name.trim();
    
      if (trimmedName !== '' && !processedNames.has(trimmedName)) {
        processedNames.add(trimmedName);
    
        newData.push({
          electoralAreaId: Number(electoralAreaId),
          districtId: Number(districtId),
          name: trimmedName,
        });
      } else {
        // console.log(`Duplicate or empty name found: "${trimmedName}"`);

        return newData
        // You can add more specific handling or return a message as needed
      }
    });
    
    // console.log('Processing completed:', newData);
    return newData
  } catch (error) {
    console.log(error);
  }
};




// async function importData() {
//   var filePath = `./public/temp/${fileName}`;
//   const rows: any[] = [];
//   fs.createReadStream(filePath)
//     .pipe(parse({ delimiter: "," }))
//     .on("data", (row: any) => {
//       // Trim empty cells
//       const trimmedRow = Object.fromEntries(
//         Object.entries(row).map(([key, value]) => [key, value.trim()])
//       );
//       rows.push(trimmedRow);
//     })
//     .on("end", async () => {
//       for (const row of rows) {
//         await prisma.community.create({
//           data: row,
//         });
//       }
//       console.log("Data import completed.");
//       await prisma.$disconnect();
//     });
// }
