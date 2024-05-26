import fs from "fs";
import { writeFile } from "fs/promises";
import AWS from "aws-sdk";

// export const saveFileOnDisk = async (file: File) => {
//   try {
//     const bytes = await file.arrayBuffer();
//     const buffer = Buffer.from(bytes);

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

// export const uploadBase64toS3 = async (buffer: any, bucketName: any) => {
//   try {
//     AWS.config.update({
//       accessKeyId: process.env.AWS_ACCESS_KEY,
//       secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
//     });

//     var s3 = new AWS.S3();

//     //var filePath = `./public/temp/${fileName}`;

//     var params = {
//       Bucket: bucketName,

//       Key: `${Date.now()}.jpg`,

//       Body: buffer,
//       ContentEncoding: "base64", // required for base64
//       ContentType: "image/jpeg",
//     };

//     let stored = await s3.upload(params).promise();

//     console.log("STORE ",stored);
    

//     return stored.Location;
//   } catch (error) {
//     console.log("UploadFile Error ", error);
//     return error;
//   }
// };


export const uploadBase64Image = async (base64String:string, bucketName:any) => {
  
  AWS.config.update({
    accessKeyId: process.env.AWS_ACCESS_KEY,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  });
const fileName = `${Date.now()}.jpg`
  var s3 = new AWS.S3();
  const buffer = Buffer.from(base64String, 'base64');
  const params = {
    Bucket: bucketName,
    Key:fileName ,
        Body: buffer,
    ContentEncoding: 'base64', // required for base64
    ContentType: 'image/jpeg', // adjust if your image is a different type
  };

  try {
    const data = await s3.upload(params).promise();
    
    return fileName; // URL of the uploaded image
  } catch (error) {
    console.error('Error uploading image:', error);
    throw error;
  }
};