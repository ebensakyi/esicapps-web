import prisma from "../../../../../../prisma/MyPrismaClient";
import { getUserCookie } from "../../../../../../helpers/cookies-manager";
import { verifyToken } from "../../../../../../helpers/token-verifier";

const put = async (req, res) => {

  if (req.body.districtId) {
    await prisma.district.update({
      where: {
        id: req.body.districtId,
      },
      data: {
        name: req.body.name,
        regionId:req.body.regionId,
        abbrv: req.body.abbrv
      },
    });

    return res
      .status(200)
      .json({ statusCode: 1, message: "District update" });
  }
}

const post = async (req, res) => {
  try {

    let userCookie = await getUserCookie(req, res);
    // if (userCookie.user.districtId == null) {
    //   return res
    //     .status(401)
    //     .json({ message: "You don't have permission to save community" });
    // }
   
    if (userCookie?.user?.regionId) {
      const data = {
        name: req.body.name,
        regionId: Number(userCookie.user.regionId),
      };

      const district = await prisma.district.create({ data });
      return res
        .status(200)
        .json({
          statusCode: 1,
          message: "District saved",
          data: { district },
        });
    }
    if (req.body.regionId) {
    
      const data = {
      
        name: req.body.name,
        regionId: Number(req.body.regionId),
        abbrv: req.body.abbrv
      };
console.log("data===", data);

      const district = await prisma.district.create({ data });
      return res
        .status(200)
        .json({
          statusCode: 1,
          message: "District saved",
          data: { district },
        });
    }
  } catch (error) {
    console.log(error);
    if (error.code === "P2002")
      return res
        .status(200)
        .json({ statusCode: 0, message: "District not saved" });
  }
};

const getSearchParams = async (req, searchText) => {
  let data = await verifyToken(req.query.token);

  let district =
    data.user.districtId == null || isNaN(data.user.districtId)
      ? undefined
      : Number(data.user.districtId);
  if (searchText != "" && searchText != null) {
    return {
      where: {
        deleted: 0,
        districtId: district,
        name: { search: searchText.replace(/[\s\n\t]/g, "_") },
      },
    };
  }
  return { where: { deleted: 0, districtId: district } };
};

const get = async (req, res) => {
  try {
    let curPage = req?.query?.page;
    console.log("curPage",curPage);
    let searchText = req?.query?.searchText?.trim();

    let perPage = 10;
    let skip = Number((curPage - 1) * perPage);
    let count = await prisma.district.count({
      where: getSearchParams(req, searchText).where,
    });

    let district = await prisma.district.findMany({
      where: getSearchParams(req, searchText).where,
      skip: skip,
      take: perPage,
      orderBy: {
        name: "asc",
      },
      include: {  Region: true  },
    });

    console.log(district);


    return res.status(200).json({
      statusCode: 1,
      district,
      curPage: curPage,
      maxPage: Math.ceil(count / perPage),
    });

    // return res.status(200).json(community);
  } catch (error) {
    console.log("Error: " + error);
  }
};
const Delete = async (req, res) => {
  await prisma.district.update({
    where: {
      id: Number(req.body.id),
    },
    data: {
      deleted: 1,
    },
  });
  return res.status(200).json();
};
export default (req, res) => {
  req.method === "POST"
    ? post(req, res)
    : req.method === "PUT"
    ? put(req, res)
    : req.method === "DELETE"
    ? Delete(req, res)
    : req.method === "GET"
    ? get(req, res)
    : res.status(404).send("");
};
