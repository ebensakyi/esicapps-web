import prisma from "../../../../prisma/MyPrismaClient";

const post = async (req, res) => {
  try {
    let latitude = req.body.latitude;
    let longitude = req.body.longitude;

    var point = {
      type: "Point",
      coordinates: [longitude, latitude],
      crs: {
        type: "name",
        properties: {
          name: "EPSG:4326",
        },
      },
    };
    const data = {
      id: req.body.id,
      inspectionId: req.body.inspectionId,
      userId: Number(req.body.userId),
      geom: point,
      //coords: point,
      communityId:
        req.body.communityId == "null" ? null : Number(req.body.communityId),
      community: req.body.community == "null" ? null : req.body.community,
      electoralAreaId:
      req.body.electoralAreaId == "null" ? null : Number(req.body.electoralAreaId),
      electoralArea: req.body.electoralArea == "null" ? null : req.body.electoralArea,
      ghanaPostGps: req.body.ghanaPostGps,
      latitude: req.body.latitude,
      longitude: req.body.longitude,
      accuracy: req.body.accuracy,
      respondentName: req.body.respondentName,
      respondentPhoneNumber: req.body.respondentPhoneNumber,
      respondentDesignationId: Number(req.body.respondentDesignationId),
    };
    


 const response = await prisma.basicInfoSection.create({ data });

 if(response){
  return  res.status(200).json({ statusCode: 1, message: "Data saved" });
  }

  return  res.status(500).json({ statusCode: 0, message: "Data skipped" });  } catch (error) {
    console.log("BError: " + error);
    // if (error.code === "P2002")
    //   return res
    //     .status(400)
    //     .json({ statusCode: 0, message: "dataVersion s should be unique" });
    res.status(500).json({ statusCode: 1, message: "Data skipped" });
  }
};

const get = async (req, res) => {
  try {
    const data = await prisma.basicInfoSection.findMany({
      where: { deleted: 0, userId: Number(req.query.userId) },
    });
    //return res.status(200).json({ statusCode: 1, data: dataVersion });
    return res.status(200).json(data);
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
