import { prisma } from "@/prisma/db";
import { NextResponse } from "next/server";
import { createReadStream } from "fs";
import { parse } from "fast-csv";
import formidable from "formidable";
import fs from "fs";
import { nanoid } from "nanoid";
import { writeFile } from "fs/promises";
import { Prisma } from "@prisma/client";

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

    await writeFile(path, buffer);

    let response = await readCSV(path, districtId);
    

    return NextResponse.json(response);
    // });
  } catch (error: any) {
    console.log("==>", error);

    return NextResponse.json(error);
  }
}

const readCSV = async (filePath: any, districtId: any) => {
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
        let newData = await formatData(data, districtId);

     insertRowCount =   await insertData(newData, filePath);
      });

      fs.unlink(filePath, (err) => {
        if (err) {
          console.error("Error deleting CSV file:", err);
          return;
        }
      });
    
    return insertRowCount
  } catch (error) {
    console.log("csvUploader ==>", error);
  }
};

// const formatData = async (data: any, districtId: any) => {
//   try {
//     let newData = data.map((row: any) => ({
//       districtId: Number(districtId),
//       name: row.name,
//     }));

//     return newData;
//   } catch (error) {
//     console.log(error);
//   }
// };


// const formatData = async (data: any, districtId: any) => {
//   try {
//     console.log("UNPRO DATA ",data);
    
//     const newData: any = [];
//     const processedNames = new Set<string>();

//     data.forEach((row: any) => {
//       // Convert the name to lowercase
//       const trimmedName = row.name.trim().toLowerCase();

//       // Ensure the name is not empty and hasn't been processed already
//       if (trimmedName !== "" && !processedNames.has(trimmedName)) {
//         processedNames.add(trimmedName);

//         newData.push({
//           districtId: Number(districtId),
//           name: trimmedName,
//         });
//       } else {
//         // Handle duplicates or empty names as needed
//       }
//     });
//     console.log("PRO DATA ",newData);

//     return newData;
//   } catch (error) {
//     console.log("formatData error ",error);
//   }
// };

const formatData = async (data: any,  districtId: any) => {
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


const insertData = async (data: any, filePath: any) => {
  try {

    // Attempt to insert data
    let result = await prisma.electoralArea.createMany({
      data: data,
    });

    fs.unlink(filePath, (err) => {
      if (err) {
        console.error("Error deleting CSV file:", err);
        return;
      }
    });

    return result.count;
  } catch (error) {
  //   console.log(`>>>>insertData ERROR 1<<<<< ${error}`);

  //   // Check if it's a known request error
  //   if (error instanceof Prisma.PrismaClientKnownRequestError) {
  //     if (error.code === 'P2002') {
  //       // P2002 indicates a unique constraint violation
  //       console.error(`Unique constraint failed on: ${error.meta?.target}`);

  //       // Find the conflicting name by querying existing records
  //       for (const entry of data) {
  //         const existing = await prisma.electoralArea.findUnique({
  //           where: { name: entry.name },
  //         });

  //         if (existing) {
  //           console.log(`Conflict on entry: ${entry.name}`);
  //           break;
  //         }
  //       }
  //     }
  //   } else {
  //     console.log(`>>>>insertData ERROR<<<<< ${error}`);
  //   }

  //   return NextResponse.json(
  //     { message: "Name of electoral area isn't unique" },
  //     { status: 500 }
  //   );
  return 0
   }
}