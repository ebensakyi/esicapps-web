import prisma from "../../../../prisma/MyPrismaClient";
import { GeoJSON } from "geojson";

const post = async (req, res) => {
  try {
  } catch (error) {}
};

// const getSearchParams = async (req, searchText) => {
//   let data = await verifyToken(req.query.token);

//   let district =
//     data.user.districtId == null || isNaN(data.user.districtId)
//       ? undefined
//       : Number(data.user.districtId);
//       console.log(district);
//   if (searchText != "" && searchText != null) {
//     return {
//       where: {
//         deleted: 0,
//         ins: district,
//         name: { search: searchText.replace(/[\s\n\t]/g, "_") },
//       },
//     };
//   }
//   return { where: { deleted: 0, districtId: district } };
// };

const get = async (req, res) => {
  try {
    let curPage = req.query.page;
    //let searchText = req.query.searchText.trim();

    let perPage = 10;
    let skip = Number((curPage - 1) * perPage);
    let count = await prisma.inspection.count({
      //where: getSearchParams(req, searchText).where,
      where: {
        inspectionFormId: 1,
      },
    });

    let inspection = await prisma.basicInfoSection.findMany({
     // where: getSearchParams(req, searchText).where,
      skip: skip,
      take: perPage,
      orderBy: {
        createdAt: "asc",
      },
      include: {
        Inspection: true,
        Community: { include: { District: { include: { Region: true } } } },
        User: true,
      },
    });

    return res.status(200).json({
      inspection,
      curPage: curPage,
      maxPage: Math.ceil(count / perPage),
    });

    // return res.status(200).json(community);
  } catch (error) {
    console.log("Error: " + error);
  }
};

// const get = async (req, res) => {
//   try {
//     let published = Number(req.query.published);
//     const data = await prisma.basicInfoSection.findMany({
//       where: {
//         deleted: 0,
//         Inspection: {
//           isPublished: published,
//           inspectionFormId: 1,
//         },
//       },
//       include: {
//         Inspection: true,
//         Community: { include: { District: { include: { Region: true } } } },
//         User: true,
//       },
//     });

//     //return res.status(200).json({ statusCode: 1, data: dataVersion });
//     return res.status(200).json(data);
//   } catch (error) {
//     console.log("Error: " + error);
//   }
// };

export default (req, res) => {
  req.method === "POST"
    ? post(req, res)
    : req.method === "PUT"
    ? console.log("PUT")
    : req.method === "DELETE"
    ? console.log("DELETE")
    : req.method === "GET"
    ? get(req, res)
    : res.status(404).send("");
};
