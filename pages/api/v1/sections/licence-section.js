import prisma from "../../../../prisma/MyPrismaClient";

const post = async (req, res) => {
  try {

    console.log(req.body);

    // const data = {
    //   inspectionId: req.body.inspectionId,
    //   userId: Number(req.body.userId),
    //   communityId: Number(req.body.communityId),
    //   community: req.body.community == "null" ? "" : req.body.community,
    //   ghanaPostGps: req.body.ghanaPostGps,
    //   latitude: req.body.latitude,
    //   longitude: req.body.longitude,
    //   accuracy: req.body.accuracy,
    //   respondentName: req.body.respondentName,
    //   respondentPhoneNumber: req.body.respondentPhoneNumber,
    //   respondentDesignationId: Number(req.body.respondentDesignationId),
    // };


    // const response = await prisma.basicInfoSection.create({ data });

    // console.log(response);
    // res.status(200).json({ statusCode: 1, message: "Data saved" });
  } catch (error) {
    console.log("Error: " + error);
    if (error.code === "P2002")
      return res
        .status(400)
        .json({ statusCode: 0, message: "dataVersion s should be unique" });
  }
};

const get = async (req, res) => {
  try {
    const dataVersion = await prisma.dataVersion.findMany({
      where: { deleted: 0 },
    });
    //return res.status(200).json({ statusCode: 1, data: dataVersion });
    return res.status(200).json(dataVersion);
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
