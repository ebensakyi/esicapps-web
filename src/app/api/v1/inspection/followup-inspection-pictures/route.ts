// import prisma from "../../../../prisma/db";
// import formidable from "formidable";
// import fs from "fs";
// import { nanoid } from "nanoid";
// import AWS from "aws-sdk";
// import moment from "moment";

// export const config = {
//   api: {
//     bodyParser: false,
//   },
// };


// export async function POST(request: Request) {
//   try {
//     const res = await request.json();

//     res.connection.setTimeout(100000); 


//     const form = new formidable.IncomingForm({ multiples: true });
//     form.parse(res, async function (err, fields, file) {
    

//       let image = await saveFile(file);

//       const data = {
//         followUpInspectionId: fields.inspectionId,
//         imagePath: image,
//         formSectionImageId:
//           fields.formSectionImageId == "null"
//             ? 6
//             : Number(fields.formSectionImageId),
//       };
//       const ip = await prisma.followUpInspectionPictures.create({ data });
    
//     return new Response(
//       JSON.stringify({
//         action: 0,
//         message: [],
//       })
//     );
//     }
//    catch (error) {
   
//   }
// }
// const saveFile = async (file) => {
//   try {
//      const imageFile = await file.imageFile;

//   var now = moment();

//   let prefix = now.format("YYYYMM");

//   const ext = await imageFile.originalFilename.split(".").pop();
//   const fileName = prefix + "" + nanoid() + "." + ext;
//   const data = fs.readFileSync(imageFile.filepath);
//   fs.writeFileSync(`./public/uploads/${fileName}`, data);

//   let fileUrl = await uploadFile(fileName);
//   fs.unlinkSync(`./public/uploads/${fileName}`);
//   return fileName;
//   } catch (error) {
    
//   }
 
// };

// const uploadFile = async (fileName) => {
//   try {
//     AWS.config.update({
//       accessKeyId: process.env.AWS_ACCESS_KEY,
//       secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
//     });

//     var s3 = new AWS.S3();

//     var filePath = `./public/uploads/${fileName}`;

//     var params = {
//       Bucket: "esicapps-images",
//       Body: fs.createReadStream(filePath),
//       // Key: prefix + "/" + fileName,
//       Key: fileName,
//     };

//     let stored = await s3.upload(params).promise();
//     console.log("STORE ", stored.Location);

//     return stored.Location;
//   } catch (error) {
//     console.log("UploadFile Error ", error);
//     return error;
//   }
// export async function GET(request: Request) {
//   try {
//     const res = await request.json();

//     let userId = Number(res.userId);
//     if (!userId) return res.status(200).json();

//     const data = await prisma.eateryPremisesInfoSection.findMany({
//       where: { userId: userId, deleted: 0 },
//     });

//     return new Response(JSON.stringify([{ data }]));
//   } catch (error) {}
// }