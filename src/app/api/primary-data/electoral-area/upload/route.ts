import { prisma } from "@/prisma/db";
import { NextResponse } from "next/server";
import { createReadStream } from "fs";
import { parse } from "fast-csv";
import fs from "fs";
import { nanoid } from "nanoid";
import { writeFile } from "fs/promises";

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

    const dirPath = './public/temp/';
    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath, { recursive: true });
    }

    let fileName = nanoid() + file.name;
    const path = `${dirPath}${fileName}`;

    await writeFile(path, buffer);

    if (fs.existsSync(path)) {
      let response = await readCSV(path, districtId);
      return NextResponse.json(response);
    } else {
      throw new Error('File was not created successfully.');
    }

  } catch (error: any) {
    console.log("==>", error);
    return NextResponse.json(error);
  }
}

const readCSV = async (filePath: string, districtId: number) => {
  try {
    let data: any = [];
    let insertRowCount = 0;

    console.log("new filePath", filePath);

    createReadStream(filePath)
      .pipe(parse({ headers: true, trim: true })) // Use the `trim: true` option to automatically trim all data, including headers.
      .on("error", (error) => {
        throw error.message;
      })
      .on("data", (row) => {
        console.log("data row", row);

        // Optionally trim and sanitize each field in the row
        Object.keys(row).forEach((key) => {
          const trimmedKey = key.trim(); // Ensure the header is trimmed
          row[trimmedKey] = row[trimmedKey]?.trim(); // Trim the value
        });

        data.push(row);
      })
      .on("end", async () => {
        let newData = await formatData(data, districtId);
        insertRowCount = await insertData(newData, filePath);

        console.log("new data", newData);
        
        // fs.unlink(filePath, (err) => {
        //   if (err) {
        //     console.error("Error deleting CSV file:", err);
        //     return;
        //   }
        // });
      });

    return insertRowCount;

  } catch (error) {
    console.log("csvUploader ==>", error);
  }
};


const formatData = async (data: any, districtId: number) => {
  try {
    const newData: any = [];
    const processedNames = new Set<string>();
    console.log("==> formatted data ",data);

    data.forEach((row: any) => {
      let trimmedName = row.name?.trim().toLowerCase();
      console.log("==> trimmedName ",trimmedName);

      if (trimmedName) {
        trimmedName = trimmedName.replace(/[\/\\]/g, ' ');
      }

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

const insertData = async (data: any, filePath: string) => {
  try {
    let result = await prisma.electoralArea.createMany({ data });
    fs.unlink(filePath, (err) => {
      if (err) {
        console.error("Error deleting CSV file:", err);
        return;
      }
    });
    return result.count;
  } catch (error) {
    console.error("Error inserting data:", error);
    return 0;
  }
};
