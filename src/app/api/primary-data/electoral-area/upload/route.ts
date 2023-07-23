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
        const data = await request.formData()

        

        const file: File | null = data.get('csvFile') as unknown as File
        const districtId = Number(data?.get('districtId'));


        if (!file) {
          return NextResponse.json({ success: false })
        }
      
        const bytes = await file.arrayBuffer()
        const buffer = Buffer.from(bytes)

       // const fileName = nanoid() + ".csv";

      
        // With the file data in the buffer, you can do whatever you want with it.
        // For this, we'll just write it to the filesystem in a new location

        let fileName = file.name
        const path = `./public/temp/${file.name}`


        

        console.log("fileName ====>",fileName);
        
        await writeFile(path, buffer);


              let response = await readCSV(fileName, districtId);

   
  
  
   return NextResponse.json({});
    // });
    } catch (error: any) {
      console.error(error);
      return NextResponse.json(error);
    }
  }


  const readCSV = async (fileName:any, districtId:any) => {
    try {
      let data:any = [];
  //Upload file to temp folder
    //   const csvFile = await file.csvFile;
  
    //   const csvData = fs.readFileSync(csvFile.filepath);
       let filePath = `./public/temp/${fileName}`;
  
    //   let x = fs.writeFileSync(filePath, csvData);
  
console.log("filePathfilePath",filePath);


  
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
        return data.length
    } catch (error) {
      console.log("csvUploader ==>", error);
    }
  };
  
  const formatData = async (data:any, districtId:any) => {
    try {
      let newData = data.map((row:any) => ({
        districtId: Number(districtId),
        name: row.name,
      }));
      console.log("newdata =>",newData);
      
      return newData;
    } catch (error) {
      console.log(error);
    }
  };