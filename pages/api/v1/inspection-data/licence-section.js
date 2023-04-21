import prisma from "../../../../prisma/MyPrismaClient";

const post = async (req, res) => {
  try {
    const data = {
      id: req.body.id,

      inspectionId: req.body.inspectionId,
      userId: Number(req.body.userId),
      animalsPermitAvailabilityId:
        req.body.animalsPermitAvailabilityId == "null"
          ? null
          : Number(req.body.animalsPermitAvailabilityId),
      propertyRateAvailabilityId:
        req.body.propertyRateAvailabilityId == "null"
          ? null
          : Number(req.body.propertyRateAvailabilityId),
      buildingPermitAvailabilityId:
        req.body.buildingPermitAvailabilityId == "null"
          ? null
          : Number(req.body.buildingPermitAvailabilityId),
      businessLicenceAvailabilityId:
        req.body.businessLicenceAvailabilityId == "null"
          ? null
          : Number(req.body.businessLicenceAvailabilityId),
      habitationCertificateAvailabilityId:
        req.body.habitationCertificateAvailabilityId == "null"
          ? null
          : Number(req.body.habitationCertificateAvailabilityId),
      operatingLicenceAvailabilityId:
        req.body.operatingLicenceAvailabilityId == "null"
          ? null
          : Number(req.body.operatingLicenceAvailabilityId),
      structurePermitAvailabilityId:
        req.body.structurePermitAvailabilityId == "null"
          ? null
          : Number(req.body.structurePermitAvailabilityId),
      fumigationCertificateAvailabilityId:
        req.body.fumigationCertificateAvailabilityId == "null"
          ? null
          : Number(req.body.fumigationCertificateAvailabilityId),
     
      gtaOperatingLicenceAvailabilityId:
        req.body.gtaOperatingLicenceAvailabilityId == "null"
          ? null
          : Number(req.body.gtaOperatingLicenceAvailabilityId),
      suitabilityCertificateAvailabilityId:
        req.body.suitabilityCertificateAvailabilityId == "null"
          ? null
          : Number(req.body.suitabilityCertificateAvailabilityId),
      waterAnalysisReportId:
        req.body.waterAnalysisReportId == "null"
          ? null
          : Number(req.body.waterAnalysisReportId),
      regGeneralCertAvailabilityId:
        req.body.regGeneralCertAvailabilityId == "null"
          ? null
          : Number(req.body.regGeneralCertAvailabilityId),
      pharmacyCertAvailabilityId:
        req.body.pharmacyCertAvailabilityId == "null"
          ? null
          : Number(req.body.pharmacyCertAvailabilityId),
    };

    console.log(data);

    const response = await prisma.licencePermitSection.create({ data });

    console.log(response);

    if(response){
      return  res.status(200).json({ statusCode: 1, message: "Data saved" });
      }
  
      return  res.status(500).json({ statusCode: 0, message: "Data skipped" });
  } catch (error) {
   console.log("Error: " + error);
    // if (error.code === "P2002")
    //   return res
    //     .status(400)
    //     .json({ statusCode: 0, message: "dataVersion s should be unique" });
    res.status(500).json({ statusCode: 0, message: "Data skipped" });

  }
};

    const get = async (req, res) => {
      try {
        let userId = Number(req.query.userId);
        const response = await prisma.licencePermitSection.findMany({
          where: { userId: userId, deleted: 0 },
        });
    
        console.log("response",response);
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
