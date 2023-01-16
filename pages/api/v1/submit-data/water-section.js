import prisma from "../../../../prisma/MyPrismaClient";

const post = async (req, res) => {
  try {

    const data = {
      id: req.body.id,

      inspectionId: req.body.inspectionId,
      userId: Number(req.body.userId),
      waterStorageConditionId:
        req.body.waterStorageConditionId == "null"
          ? null
          : Number(req.body.waterStorageConditionId),
      waterFlowFrequencyId:
        req.body.waterFlowFrequencyId == "null"
          ? null
          : Number(req.body.waterFlowFrequencyId),
      waterSourceConditionId:
        req.body.waterSourceConditionId == "null"
          ? null
          : Number(req.body.waterSourceConditionId),
          safeDistanceWaterStorageSanitaryId:
        req.body.safeDistanceWaterStorageSanitaryId == "null"
          ? null
          : Number(req.body.safeDistanceWaterStorageSanitaryId),
      rating: req.body.rating == "null" ? null : Number(req.body.rating),
    };


    const response = await prisma.waterSection.create({ data });

    res.status(200).json({ statusCode: 1, message: "Data saved" });
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