import prisma from "../../../../prisma/db";
import moment from "moment";

const put = async (req, res) => {
  try {
    let inspectionId = req.body.inspectionId;

    const inspection = await prisma.inspection.findFirst({
      where: { id: inspectionId },
    });
    const basicInfoSection = await prisma.basicInfoSection.findFirst({
      where: { inspectionId },
    });
    const licencePermitSection = await prisma.licencePermitSection.findFirst({
      where: { inspectionId },
    });
    const liquidWasteSection = await prisma.liquidWasteSection.findFirst({
      where: { inspectionId },
    });
    const solidWasteSection = await prisma.solidWasteSection.findFirst({
      where: { inspectionId },
    });
    const waterSection = await prisma.waterSection.findFirst({
      where: { inspectionId },
    });
    const conclusionSection = await prisma.conclusionSection.findFirst({
      where: { inspectionId },
    });

    const residentialPremisesInfoSection =
      await prisma.residentialPremisesInfoSection.findFirst({
        where: { inspectionId },
      });
    const healthPremisesInfoSection =
      await prisma.healthPremisesInfoSection.findFirst({
        where: { inspectionId },
      });
    const hospitalityPremisesInfoSection =
      await prisma.hospitalityPremisesInfoSection.findFirst({
        where: { inspectionId },
      });
    const sanitaryPremisesInfoSection =
      await prisma.sanitaryPremisesInfoSection.findFirst({
        where: { inspectionId },
      });
    const marketPremisesInfoSection =
      await prisma.marketPremisesInfoSection.findFirst({
        where: { inspectionId },
      });
    const institutionPremisesInfoSection =
      await prisma.institutionPremisesInfoSection.findFirst({
        where: { inspectionId },
      });
    const industryPremisesInfoSection =
      await prisma.industryPremisesInfoSection.findFirst({
        where: { inspectionId },
      });
    const eateryPremisesInfoSection =
      await prisma.eateryPremisesInfoSection.findFirst({
        where: { inspectionId },
      });

    const premisesExcretaContainment =
      await prisma.premisesExcretaContainment.findFirst({
        where: { inspectionId },
      });
    const premisesGreyWaterDisposal =
      await prisma.premisesGreyWaterDisposal.findFirst({
        where: { inspectionId },
      });
    const premisesWasteReceptacle =
      await prisma.premisesWasteReceptacle.findFirst({
        where: { inspectionId },
      });
    const premisesPestSigns = await prisma.premisesPestSigns.findFirst({
      where: { inspectionId },
    });
    const premisesAnimal = await prisma.premisesAnimal.findFirst({
      where: { inspectionId },
    });
    const premisesDrainType = await prisma.premisesDrainType.findFirst({
      where: { inspectionId },
    });
    const premisesDrainBadCondition =
      await prisma.premisesDrainBadCondition.findFirst({
        where: { inspectionId },
      });
    const premisesHazardousWasteDisposal =
      await prisma.premisesHazardousWasteDisposal.findFirst({
        where: { inspectionId },
      });
    const premisesActionTaken = await prisma.premisesActionTaken.findFirst({
      where: { inspectionId },
    });
    const premisesNuisanceDetected =
      await prisma.premisesNuisanceDetected.findFirst({
        where: { inspectionId },
      });

    await prisma.inspectionHistory.create({ data: inspection });
    await prisma.basicInfoSectionHistory.create({ data: basicInfoSection });
    await prisma.licencePermitSectionHistory.create({
      data: licencePermitSection,
    });
    await prisma.liquidWasteSectionHistory.create({ data: liquidWasteSection });
    await prisma.solidWasteSectionHistory.create({ data: solidWasteSection });
    await prisma.waterSectionHistory.create({ data: waterSection });
    await prisma.conclusionSectionHistory.create({ data: conclusionSection });

    await prisma.residentialPremisesInfoSectionSectionHistory.create({
      data: residentialPremisesInfoSection,
    });
    await prisma.eateryPremisesInfoSectionSectionHistory.create({
      data: eateryPremisesInfoSection,
    });
    await prisma.healthPremisesInfoSectionSectionHistory.create({
      data: healthPremisesInfoSection,
    });
    await prisma.hospitalityPremisesInfoSectionHistroy.create({
      data: hospitalityPremisesInfoSection,
    });
    await prisma.sanitaryPremisesInfoSectionHistory.create({
      data: sanitaryPremisesInfoSection,
    });
    await prisma.marketPremisesInfoSectionHistory.create({
      data: marketPremisesInfoSection,
    });
    await prisma.institutionPremisesInfoSectionHistory.create({
      data: institutionPremisesInfoSection,
    });
    await prisma.industryPremisesInfoSectionHistory.create({
      data: industryPremisesInfoSection,
    });

    await prisma.premisesExcretaContainmentHistory.create({
      data: premisesExcretaContainment,
    });
    await prisma.premisesGreyWaterDisposalHistory.create({
      data: premisesGreyWaterDisposal,
    });
    await prisma.premisesWasteReceptacleHistory.create({
      data: premisesWasteReceptacle,
    });
    await prisma.premisesPestSignsHistory.create({ data: premisesPestSigns });
    await prisma.premisesAnimalHistory.create({ data: premisesAnimal });
    await prisma.premisesDrainTypeHistory.create({ data: premisesDrainType });
    await prisma.premisesDrainBadConditionHistory.create({
      data: premisesDrainBadCondition,
    });
    await prisma.premisesHazardousWasteDisposalHistory.create({
      data: premisesHazardousWasteDisposal,
    });
    await prisma.premisesActionTakenHistory.create({
      data: premisesActionTaken,
    });
    await prisma.premisesNuisanceDetectedHistory.create({
      data: premisesNuisanceDetected,
    });

    console.log("inspection", inspection);
    console.log("bas", basicInfoSection);

    console.log(req.body);

    const newBasicInfoSection = {};

    const response = await prisma.inspection.update({
      data: newBasicInfoSection,
    });

    // const data = {
    //   id: req.body.id,
    //   userId: Number(req.body.userId),
    //   totalRating: Number(req.body.totalRating),
    //   districtId: district,
    //   regionId: region,
    //   communityId: Number(req.body.communityId),
    //   electoralAreaId: Number(req.body.electoralAreaId),

    //   premisesCode: req.body.premisesCode,
    //   inspectionFormId:
    //     req.body.inspectionFormId == "null"
    //       ? null
    //       : Number(req.body.inspectionFormId),
    //   prevInspectionId:
    //     req.body.prevInspectionId == "null" || req.body.prevInspectionId == ""
    //       ? null
    //       : req.body.prevInspectionId,
    //   inspectionTypeId:
    //     req.body.inspectionTypeId == "null"
    //       ? null
    //       : Number(req.body.inspectionTypeId),
    //   followUpDate: req.body.followUpDate == null ? "" : req.body.followUpDate,
    //   doFollowUp:
    //     req.body.doFollowUp == "null" ? 0 : Number(req.body.doFollowUp),
    //   startedAt: new Date(req.body.startedAt),
    //   completedAt: new Date(req.body.completedAt),
    // };

    // console.log(data);

    // const response = await prisma.inspection.create({ data });

    // if (response) {
    //   return res.status(200).json({ statusCode: 1, message: "Data saved" });
    // }

    // return res.status(500).json({ statusCode: 0, message: "Data skipped" });
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
    if (!userId) return res.status(200).json();

    const response = await prisma.inspection.findMany({
      where: { userId: userId, deleted: 0 },
    });

    return res.status(200).json(response);
  } catch (error) {
    console.log(error);
  }
};

export default (req, res) => {
  req.method === "POST"
    ? post(req, res)
    : req.method === "PUT"
    ? put(req, res)
    : req.method === "DELETE"
    ? console.log("DELETE")
    : req.method === "GET"
    ? get(req, res)
    : res.status(404).send("");
};
