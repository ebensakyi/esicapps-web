import prisma from "../../../../prisma/MyPrismaClient";

const post = async (req, res) => {
  try {
    const data = {
      name: req.body.data.name,
      districtId: req.body.data.districtId,
    };

    const community = await prisma.community.create({ data });
    res
      .status(200)
      .json({ statusCode: 1, message: "Data saved", data: { community } });
  } catch (error) {
    if (error.code === "P2002")
      return res
        .status(200)
        .json({ statusCode: 0, message: "community prefix should be unique" });
  }
};

const getSearchParams = (searchText) => {
  if (searchText != "" && searchText != null) {
    return { where: { deleted: 0, name: { search: searchText } } };
  }
  return { where: { deleted: 0 } };
};

const get = async (req, res) => {
  try {
    let curPage = req.query.page;
    let  searchText  = req.query.searchText.trim();

    let perPage = 10;
    let skip = Number((curPage - 1) * perPage);
    let count = await prisma.community.count({ where: getSearchParams(searchText).where });

    let community = await prisma.community.findMany({
      where: getSearchParams(searchText).where,
      skip: skip,
      take: perPage,
      orderBy: {
        name: "asc",
      
      },
      include: { District: { include: { Region: true } } },
    });

    console.log(community.length);
    return res.status(200).json({
      statusCode: 1,
      community,
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
