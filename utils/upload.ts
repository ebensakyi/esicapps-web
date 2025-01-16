import fs from "fs";
import { writeFile } from "fs/promises";
import AWS from "aws-sdk";
import { Buffer } from 'buffer';

export const saveFileOnDisk = async (file: File): Promise<string> => {
  try {
    // Supported file types for images and videos
    // const supportedImageTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/bmp', 'image/webp'];
    // const supportedVideoTypes = ['video/mp4', 'video/avi', 'video/mkv', 'video/webm', 'video/quicktime'];

    // Check if the file type is supported
    // const isSupportedType =
    //   supportedImageTypes.includes(file.type) || supportedVideoTypes.includes(file.type);

    // if (!isSupportedType) {
    //   throw new Error(`Unsupported file type: ${file.type}`);
    // }

    // Convert the file to a Buffer
    const bytes = await file.arrayBuffer();
    const buffer:any = Buffer.from(bytes);

    // Generate a unique file name (e.g., prepend timestamp)
    const timeStamp = Date.now();
    const fileName = `${timeStamp}-${file.name}`;

    // Set the file path
    const path = `./public/temp/${fileName}`;

    // Save the file to disk
    await writeFile(path, buffer);

    console.log(`File saved successfully at ${path}`);
    return fileName;
  } catch (error) {
    console.error('Error saving file:', error);
    return "0"; // Return "0" to indicate failure
  }
};


// export const saveFileOnDisk = async (file: File) => {
//   try {
//     const bytes = await file.arrayBuffer();
//     const buffer : any= Buffer.from(bytes);

//     //let fileName = nanoid(10) + file.name;
//     let fileName =  file.name;


//     const path = `./public/temp/${fileName}`;

//     let res = await writeFile(path, buffer);

    
//     return fileName;
//   } catch (error) {
//     console.log(error);
//     return "0"
//   }
// };


export const upload2S3 = async (fileName: any, bucketName: any) => {
  try {
    AWS.config.update({
      accessKeyId: process.env.AWS_ACCESS_KEY,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    });

    const s3 = new AWS.S3();
    const filePath = `./public/temp/${fileName}`;

    const params = {
      Bucket: bucketName,
      Body: fs.createReadStream(filePath),
      Key: fileName,
    };

    // Upload file to S3
    const stored = await s3.upload(params).promise();

    // Delete the local file after successful upload
    fs.unlink(filePath, (err) => {
      if (err) {
        console.error(`Error deleting file ${filePath}:`, err);
      } else {
        console.log(`File ${filePath} deleted successfully.`);
      }
    });

    return stored.Location;
  } catch (error) {
    console.error("UploadFile Error:", error);
    return error;
  }
};

