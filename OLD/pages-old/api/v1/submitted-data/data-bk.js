import prisma from "../../../../prisma/db";

const post = async (req, res) => {
  try {
  } catch (error) {}
};

const get = async (req, res) => {
  try {
    let published = Number(req.query.published);
    let inspectionFormId  =  Number(req.query.inspectionFormId);
    let curPage = req.query.page;
    //let searchText = req.query.searchText.trim();

    let perPage = 10;
    let skip = Number((curPage - 1) * perPage);
    let count = await prisma.inspection.count({
      //where: getSearchParams(req, searchText).where,
      where: {
        inspectionFormId: inspectionFormId,
      },
    });

    let inspection = await prisma.basicInfoSection.findMany({
      where: {
        deleted: 0,
        Inspection: {
          isPublished: published,
          inspectionFormId: inspectionFormId,
        },
      },
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
