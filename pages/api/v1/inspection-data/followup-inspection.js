import prisma from "../../../../prisma/db";

const post = async (req, res) => {
  try {

    console.log(req.body);
    const data = {
      id: req.body.id,

      prevInspectionId: req.body.prevInspectionId,
      inspectionFormId: Number(req.body.inspectionFormId),
      premisesCode: req.body.premisesCode,

      userId: Number(req.body.userId),
      communityId:
        req.body.communityId == "null" ? null : Number(req.body.communityId),
        community:
        req.body.community == "null" ? "" : req.body.community,
        electoralAreaId:
        req.body.electoralAreaId == "null" ? null : Number(req.body.electoralAreaId),
        electoralArea:
        req.body.electoralArea == "null" ? null : req.body.electoralArea,
        ghanaPostGps:
        req.body.ghanaPostGps == "null" ? "" : req.body.ghanaPostGps,
        latitude:
        req.body.latitude == "null" ? null : req.body.latitude,
        longitude:
        req.body.longitude == "null" ? null : req.body.longitude,
        accuracy:
        req.body.accuracy == "null" ? null : req.body.accuracy,
        respondentName:
        req.body.respondentName == "null" ? null : req.body.respondentName,
        respondentPhoneNumber:
        req.body.respondentPhoneNumber == "null" ? null :req.body.respondentPhoneNumber,
        respondentDesignationId:
        req.body.respondentDesignationId == "null" ? null : Number( req.body.respondentDesignationId),

        waterRating:
        req.body.waterRating == "null" ? "" : req.body.waterRating,
        solidWasteRating:
        req.body.solidWasteRating == "null" ? "" : req.body.solidWasteRating,
        liquidWasteRating:
        req.body.liquidWasteRating == "null" ? null : req.body.liquidWasteRating,
        totalRating:
        req.body.totalRating == "null" ? null : req.body.totalRating,


      officerComment:
        req.body.officerComment == "null" ? null : req.body.officerComment,

      obnoxiousTradeExistFollowUpId:
        req.body.obnoxiousTradeExistId == "null"
          ? null
          : Number(req.body.obnoxiousTradeExistId),

      obnoxiousTrade:
        req.body.obnoxiousTrade == "null" ? null : req.body.obnoxiousTrade,

      isNuisanceObservedId:
        req.body.isNuisanceObservedId == "null"
          ? null
          : Number(req.body.isNuisanceObservedId),
    };
    console.log(data);

    const response = await prisma.followUpInspection.create({ data });

    res.status(200).json({ statusCode: 1, message: "Data saved" });
  } catch (error) {
    console.log("Error: " + error);
    // if (error.code === "P2002")
    //   return res
    //     .status(400)
    //     .json({ statusCode: 0, message: "dataVersion s should be unique" });
    res.status(500).json({ statusCode: 1, message: "Data skipped" });
  }
};

const get = async (req, res) => {
  try {
    let userId = Number(req.query.userId);
    const response = await prisma.conclusionSection.findMany({
      where: { userId: userId, deleted: 0 },
    });

    console.log("response", response);
    return res.status(200).json(response);
  } catch (error) {
    console.log(error);
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
