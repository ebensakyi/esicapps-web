import prisma from "../../../../prisma/MyPrismaClient";

const post = async (req, res) => {
  try {
 

    const data = {
      inspectionId: req.body.inspectionId,
      userId: Number(req.body.userId),
      wasteServiceProviderRegistrationId: req.body.wasteServiceProviderRegistrationId == "null" ? null : Number(req.body.wasteServiceProviderRegistrationId),
      wasteCollectorName: req.body.wasteCollectorName == "null" ? null : req.body.wasteCollectorName,
      wasteSortingAvailabilityId: req.body.wasteSortingAvailabilityId == "null" ? null : Number(req.body.wasteSortingAvailabilityId),
      wasteCollectionFrequencyId: req.body.wasteCollectionFrequencyId == "null" ? null : Number(req.body.wasteCollectionFrequencyId),
      approvedWasteStorageReceptacleId: req.body.approvedWasteStorageReceptacleId == "null" ? null : Number(req.body.approvedWasteStorageReceptacleId),
      adequateWasteStorageReceptacleId: req.body.adequateWasteStorageReceptacleId == "null" ? null : Number(req.body.adequateWasteStorageReceptacleId),
      wasteCollectionServiceTypeId: req.body.wasteCollectionServiceTypeId == "null" ? null : Number(req.body.wasteCollectionServiceTypeId),
      unservicedWasteDisposalId: req.body.unservicedWasteDisposalId == "null" ? null : Number(req.body.unservicedWasteDisposalId),
      wastePaymentEvidenceId: req.body.wastePaymentEvidenceId == "null" ? null : Number(req.body.wastePaymentEvidenceId),
      wasteContainerVolumeId: req.body.wasteContainerVolumeId == "null" ? null : Number(req.body.wasteContainerVolumeId),
      wasteProviderAccredittedId: req.body.wasteProviderAccredittedId == "null" ? null : Number(req.body.wasteProviderAccredittedId),
      containerNumber: req.body.containerNumber == "null" ? null : Number(req.body.containerNumber),
      rating: req.body.rating == "null" ? null : Number(req.body.rating),
    };

    // console.log(data);

   const response = await prisma.solidWasteSection.create({ data });

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
