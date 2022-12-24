import prisma from "../../../../prisma/MyPrismaClient";

const post = async (req, res) => {
  try {
  } catch (error) {}
};

const get = async (req, res) => {
  try {
    let inspectionId = req.query.id;

    // const data = await prisma.basicInfoSection.findMany({
    //   where: {
    //     deleted: 0,
    //     Inspection: {
    //       id: inspectionId,
    //     },
    //   },
    //   include: {
    //     Inspection: {
    //       include: { LicencePermitSection: true },
    //     },
    //     Community: { include: { District: { include: { Region: true } } } },
    //     User: true,
    //   },

    // });

    const data = await prisma.inspection.findFirst({
      where: {
        deleted: 0,

        id: inspectionId,
      },
      include: {
        BasicInfoSection: {
          include: {
            Community: { include: { District: { include: { Region: true } } } },
            RespondentDesignation: true,
          },
        },
      
        LicencePermitSection: {
          include: {
            animalsPermitAvailability:true,
            buildingPermitAvailability:true,

            businessLicenceAvailability:true,
            fumigationCertificateAvailability:true,
            habitationCertificateAvailability:true,
            medicalCertificateAvailability:true,
            operatingLicenceAvailability:true,
            propertyRateAvailability:true,
            structurePermitAvailability:true,
            gtaOperatingLicenceAvailability:true,
            waterAnalysisReport: true,
            regGeneralCertAvailability: true,
            suitabilityCertificateAvailability: true,
            pharmacyCertAvailability: true,

          }
        },
        ResidentialPremisesInfoSection: {
          include: {
            PremisesAnimal: {
              include: {
                AnimalType:true
              }
            },
            animalAvailability: true,
            toiletAvailability: true,
            urinalAvailability: true,
            vaccinationProof: true,
            drainsAvailability:true,
            approvedHandwashingFacilityAvailability: true,
            bathRoomAvailability: true,
            animalSpaceCondition: true,
          },
        },

        WaterSection: true,
        LiquidWasteSection: true,
        SolidWasteSection: true,
        ConclusionSection: true,

        // User: true,
      },
    });

    console.log(data);

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
