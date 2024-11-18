import { prisma } from "@/prisma/db";
import { NextResponse } from "next/server";
import { createReadStream } from "fs";
import { parse } from "fast-csv";
import fs from "fs";
import { nanoid } from "nanoid";
import { writeFile } from "fs/promises";
import { logActivity } from '../../../../../../utils/log';

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
    const buffer:any = Buffer.from(bytes);

    let fileName = nanoid() + file.name;
    

    const path = `./public/temp/${fileName}`;

    await writeFile(path, buffer);

    let response = await readCSV(path, electoralAreaId, districtId);



    return NextResponse.json({});
  } catch (error: any) {
    console.log(">>>>>>>>>>> errr ", error);
    return NextResponse.json(error, { status: 500 });
  }
}

const readCSV = async (
  filePath: any,
  electoralAreaId: any,
  districtId: any
) => {
  try {
    let data: any = [];

    let insertRowCount: any = 0;

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
        let newData = await formatData(data, electoralAreaId, districtId);

        data = newData;

        let res = await prisma.community.createMany({
          data: newData,
        });


console.log("RES COUNT===> " + res.count);


        insertRowCount = res.count;
      

        fs.unlink(filePath, (err) => {
          if (err) {
            console.error("Error deleting CSV file:", err);
            return;
          }
        });
      });

    /// await fs.unlinkSync(filePath);
    return insertRowCount;
  } catch (error) {
    console.log("csvUploader ==>", error);
  }
};

const formatData = async (data: any, electoralAreaId: any, districtId: any) => {
  try {
    const newData: any = [];
    const processedNames = new Set<string>();

    data.forEach((row: any) => {
      // Convert the name to uppercase, trim whitespace, and replace both slashes with spaces
      let trimmedName = row.name?.trim().toLowerCase();
      
      if (trimmedName) {
        // Replace both forward slashes (/) and backslashes (\) with spaces
        trimmedName = trimmedName.replace(/[\/\\]/g, ' ');
      }

      // Skip if the name is empty or a duplicate
      if (trimmedName && !processedNames.has(trimmedName)) {
        processedNames.add(trimmedName);

        newData.push({
          electoralAreaId: Number(electoralAreaId),
          districtId: Number(districtId),
          name: trimmedName.toUpperCase(),
        });
      }
    });

    return newData;
  } catch (error) {
    console.error("Error formatting data:", error);
    return [];
  }
};



// const formatData = async (data: any, electoralAreaId: any, districtId: any) => {
//   try {
//     const newData: any = [];
//     const processedNames = new Set<string>();

//     data.forEach((row: any) => {
//       const trimmedName = row.name.trim();

//       if (trimmedName !== "" && !processedNames.has(trimmedName)) {
//         processedNames.add(trimmedName);

//         newData.push({
//           electoralAreaId: Number(electoralAreaId),
//           districtId: Number(districtId),
//           name: trimmedName,
//         });
//       } else {
//         //  console.log(`Duplicate or empty name found: "${trimmedName}"`);

//         return newData;
//         // You can add more specific handling or return a message as needed
//       }
//     });

//     return newData;
//   } catch (error) {
//     console.log(error);
//   }
// };
