export const dynamic = "force-dynamic";

import { NextResponse } from "next/server";
import { prisma } from "@/prisma/db";
import { logActivity } from "@/utils/log";

import { getServerSession } from "next-auth";
import AWS from "aws-sdk";
import fs from "fs";
import { authOptions } from "../../../auth/[...nextauth]/options";
const XLSX = require("xlsx");

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const session: any = await getServerSession(authOptions);
    const selectedDistrict =
      searchParams.get("districtId") == null || ""
        ? undefined
        : Number(searchParams.get("districtId"));

    const searchText =
      searchParams.get("searchText")?.toString() == "undefined"
        ? ""
        : searchParams.get("searchText")?.toString();

    const formId =
      searchParams.get("formId")?.toString() == "undefined"
        ? undefined
        : Number(searchParams.get("formId")?.toString());

    const published =
      searchParams.get("published")?.toString() == "undefined"
        ? undefined
        : Number(searchParams.get("published")?.toString());

    const fileName =
      searchParams.get("fileName")?.toString() == "undefined"
        ? ""
        : searchParams.get("fileName")?.toString();

    const userLevel = session?.user?.userLevelId;
    const userDistrict = session?.user?.districtId;
    const userRegion = session?.user?.regionId;

    if (userLevel == 1) {
      let count = await prisma.followUpInspection.count({
        // where: getSearchParams(req, searchText).where,
        where:
          // searchText != ""
          //   ?
          {
           OR: [
              {
                accuracy: {
                  contains: searchText,
                  mode: "insensitive",
                },
              },
             {
                  Region: {
                    name: { contains: searchText, mode: "insensitive" },
                  },
                
              },
              {
                  District: {
                    name: { contains: searchText, mode: "insensitive" },
                  },
                
              },
              {
             
                  User: {
                    surname: { contains: searchText, mode: "insensitive" },
                  },
                
              },
              {
                  User: {
                    otherNames: { contains: searchText, mode: "insensitive" },
                  },
                
              },
              {
                  Community: {
                    name: { contains: searchText, mode: "insensitive" },
                  },
                
              },
              {
                  ElectoralArea: {
                    name: { contains: searchText, mode: "insensitive" },
                  },
                
              },
           ],
  
              inspectionFormId: formId,
              deleted: 0,
             
            
          },
        // : {
        //     Inspection: {
        //       inspectionFormId: formId,
        //       isPublished: published,
        //       deleted: 0,
  
        //     },
        //   },
      });
  
  
  
      // console.log(( searchText != ""  && searchText != "undefined"));
  
      const response = await prisma.followUpInspection.findMany({
        where: {
          OR: [
            {
              accuracy: {
                contains: searchText,
                mode: "insensitive",
              },
            },
            {
                premisesCode: {
                  contains: searchText,
                  mode: "insensitive",
                },
              
            },
            {
                Region: {
                  name: { contains: searchText, mode: "insensitive" },
                },
         
            },
            {
            
                District: {
                  name: { contains: searchText, mode: "insensitive" },
                },
            
            },
            {
                ElectoralArea: {
                  name: { contains: searchText, mode: "insensitive" },
                },
         
            },
            {
                Community: {
                  name: { contains: searchText, mode: "insensitive" },
        
              },
            },
            {
                User: {
                  surname: { contains: searchText, mode: "insensitive" },
         
              },
            },
            {
      
                User: {
                  otherNames: { contains: searchText, mode: "insensitive" },
                },
  
            },
          ],
  
   
            //isPublished: published,
            inspectionFormId: formId,
            deleted: 0,
  
          
       
        },
  
        orderBy: {
          createdAt: "desc",
        },
        include: {
          // Inspection: {
          //   include: {
          //     InspectionType: true,
          //     Region: true,
          //   },
          // },
  
          Community: {
            include: {
              ElectoralArea: {
                include: {
                  District: {
                    include: {
                      Region: true,
                    },
                  },
                },
              },
            },
          },
          User: true,
        },
      });
  

      let url = await export2Excel(response, fileName);

      return NextResponse.json(url);
    }

    if (userLevel == 2) {
      let count = await prisma.followUpInspection.count({
        // where: getSearchParams(req, searchText).where,
        where:
          // searchText != ""
          //   ?
          {
           OR: [
              {
                accuracy: {
                  contains: searchText,
                  mode: "insensitive",
                },
              },
             {
                  Region: {
                    name: { contains: searchText, mode: "insensitive" },
                  },
                
              },
              {
                  District: {
                    name: { contains: searchText, mode: "insensitive" },
                  },
                
              },
              {
             
                  User: {
                    surname: { contains: searchText, mode: "insensitive" },
                  },
                
              },
              {
                  User: {
                    otherNames: { contains: searchText, mode: "insensitive" },
                  },
                
              },
              {
                  Community: {
                    name: { contains: searchText, mode: "insensitive" },
                  },
                
              },
              {
                  ElectoralArea: {
                    name: { contains: searchText, mode: "insensitive" },
                  },
                
              },
           ],
  
              inspectionFormId: formId,
              deleted: 0,
           
            
          },
        // : {
        //     Inspection: {
        //       inspectionFormId: formId,
        //       isPublished: published,
        //       deleted: 0,
  
        //     },
        //   },
      });
  
  
  
      // console.log(( searchText != ""  && searchText != "undefined"));
  
      const response = await prisma.followUpInspection.findMany({
        where: {
          OR: [
            {
              accuracy: {
                contains: searchText,
                mode: "insensitive",
              },
            },
            {
                premisesCode: {
                  contains: searchText,
                  mode: "insensitive",
                },
              
            },
            {
                Region: {
                  name: { contains: searchText, mode: "insensitive" },
                },
         
            },
            {
            
                District: {
                  name: { contains: searchText, mode: "insensitive" },
                },
            
            },
            {
                ElectoralArea: {
                  name: { contains: searchText, mode: "insensitive" },
                },
         
            },
            {
                Community: {
                  name: { contains: searchText, mode: "insensitive" },
        
              },
            },
            {
                User: {
                  surname: { contains: searchText, mode: "insensitive" },
         
              },
            },
            {
      
                User: {
                  otherNames: { contains: searchText, mode: "insensitive" },
                },
  
            },
          ],
  
   
            //isPublished: published,
            inspectionFormId: formId,
            deleted: 0,
  
           
       
        },
  
    
        orderBy: {
          createdAt: "desc",
        },
        include: {
          // Inspection: {
          //   include: {
          //     InspectionType: true,
          //     Region: true,
          //   },
          // },
  
          Community: {
            include: {
              ElectoralArea: {
                include: {
                  District: {
                    include: {
                      Region: true,
                    },
                  },
                },
              },
            },
          },
          User: true,
        },
      });
  

      let url = await export2Excel(response, fileName);

      return NextResponse.json(url);
    }

    if (userLevel == 3) {
      let count = await prisma.followUpInspection.count({
        // where: getSearchParams(req, searchText).where,
        where:
          // searchText != ""
          //   ?
          {
           OR: [
              {
                accuracy: {
                  contains: searchText,
                  mode: "insensitive",
                },
              },
             {
                  Region: {
                    name: { contains: searchText, mode: "insensitive" },
                  },
                
              },
              {
                  District: {
                    name: { contains: searchText, mode: "insensitive" },
                  },
                
              },
              {
             
                  User: {
                    surname: { contains: searchText, mode: "insensitive" },
                  },
                
              },
              {
                  User: {
                    otherNames: { contains: searchText, mode: "insensitive" },
                  },
                
              },
              {
                  Community: {
                    name: { contains: searchText, mode: "insensitive" },
                  },
                
              },
              {
                  ElectoralArea: {
                    name: { contains: searchText, mode: "insensitive" },
                  },
                
              },
           ],
  
              inspectionFormId: formId,
              deleted: 0,
              
            
          },
        // : {
        //     Inspection: {
        //       inspectionFormId: formId,
        //       isPublished: published,
        //       deleted: 0,
  
        //     },
        //   },
      });
  
  
  
      // console.log(( searchText != ""  && searchText != "undefined"));
  
      const response = await prisma.followUpInspection.findMany({
        where: {
          OR: [
            {
              accuracy: {
                contains: searchText,
                mode: "insensitive",
              },
            },
            {
                premisesCode: {
                  contains: searchText,
                  mode: "insensitive",
                },
              
            },
            {
                Region: {
                  name: { contains: searchText, mode: "insensitive" },
                },
         
            },
            {
            
                District: {
                  name: { contains: searchText, mode: "insensitive" },
                },
            
            },
            {
                ElectoralArea: {
                  name: { contains: searchText, mode: "insensitive" },
                },
         
            },
            {
                Community: {
                  name: { contains: searchText, mode: "insensitive" },
        
              },
            },
            {
                User: {
                  surname: { contains: searchText, mode: "insensitive" },
         
              },
            },
            {
      
                User: {
                  otherNames: { contains: searchText, mode: "insensitive" },
                },
  
            },
          ],
  
   
            //isPublished: published,
            inspectionFormId: formId,
            deleted: 0,
  
           
       
        },
  
     
        orderBy: {
          createdAt: "desc",
        },
        include: {
          // Inspection: {
          //   include: {
          //     InspectionType: true,
          //     Region: true,
          //   },
          // },
  
          Community: {
            include: {
              ElectoralArea: {
                include: {
                  District: {
                    include: {
                      Region: true,
                    },
                  },
                },
              },
            },
          },
          User: true,
        },
      });
  

      let url = await export2Excel(response, fileName);

      return NextResponse.json(url);
    }
  } catch (error) {
    console.error(error);
    return NextResponse.json(error);
  }
}

const export2Excel = async (data: any, fileName: any) => {
  try {
    let flatData = await flattenArray(data);

    const workSheet = XLSX.utils.json_to_sheet(flatData);
    const workBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workBook, workSheet, "Sheet 1");
    let filePath = `./public/temp/${fileName}.xlsx`;
    XLSX.writeFile(workBook, filePath);

    let url = await uploadFile(`${fileName}.xlsx`);

    return url;
  } catch (error) {
    console.log("error NextResponse=> ", error);
  }
};

const flattenArray = async (data: any) => {
  let newData = [];

  for (let i = 0; i < data?.length; i++) {
    newData?.push({
      // "Inspection Id": data[i]?.inspectionId,
      // "Inspection Date": data[i]?.Inspection?.createdAt,

      "Inspection Officer": `${data[i]?.User?.surname} ${data[i]?.User?.otherNames}`,
      "Premises Code": data[i]?.Inspection?.premisesCode,
      "Premises Rating": data[i]?.Inspection?.totalRating,
      Region: data[i]?.Community?.District?.Region?.name,
      District: data[i]?.Community?.District?.name,
      "Electoral Area": data[i]?.electoralArea,

      Community: data[i]?.community,
      "Ghana Post GPS": data[i]?.ghanaPostGps,
      Latitude: data[i]?.latitude,
      Longitude: data[i]?.longitude,
      Accuracy: data[i]?.accuracy,
      "Respondent Name": data[i]?.respondentName,
      "Respondent Designation": data[i]?.RespondentDesignation?.name,

     
      ///CONCLUSION
      // "Obnoxious Trade ":
      //   data[i]?.Inspection?.ConclusionSection?.obnoxiousTrade,
      // "Officer Comment": data[i]?.Inspection?.ConclusionSection?.officerComment,
      // Nuisance: data[
      //   i
      // ]?.Inspection?.ConclusionSection?.PremisesNuisanceDetected?.map(
      //   (data: any) => data?.Nuisance?.name
      // ).toString(),
      // "Premises Action Taken": data[
      //   i
      // ]?.Inspection?.ConclusionSection?.PremisesActionTaken?.map(
      //   (data: any) => data?.Action?.name
      // ).toString(),
    });
  }

  return newData;
};

const uploadFile = async (fileName: any) => {
  try {
    AWS.config.update({
      accessKeyId: process.env.AWS_ACCESS_KEY,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    });

    var s3 = new AWS.S3();

    var filePath = `./public/temp/${fileName}`;

    var params = {
      Bucket: "esicapps-exports",
      Body: fs.createReadStream(filePath),
      // Key: prefix + "/" + fileName,
      Key: fileName,
    };

    let stored = await s3.upload(params).promise();

    return stored.Location;
  } catch (error) {
    console.log("Upload File Error ", error);
    return error;
  }
};
