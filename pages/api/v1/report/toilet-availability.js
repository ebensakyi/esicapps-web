import prisma from "../../../../prisma/MyPrismaClient";
import { logActivity } from "../../../../utils/Log";
import { getUserCookie } from "../../../../utils/cookies-manager";


const post = async (req, res) => {
  try {
    let userCookie = await getUserCookie(req, res);
    await logActivity("Toilet Availabilty Report generated",  userCookie.user.id);

    await getToiletAvailability(req, res);
  } catch (error) {
    console.log(error);
    if (error.code === "P2002")
      return res
        .status(200)
        .json({ statusCode: 0, message: "action prefix should be unique" });
  }
};

const getToiletAvailability = async (req, res) => {
  let filterBy = req.body.filterBy;
  let filterValue = Number(req.body.filterValue);

  const resAvailCount = await prisma.ResidentialPremisesInfoSection.count({
    where: {
      Inspection: {
        [filterBy]: filterValue,
      },

      toiletAvailabilityId: 1,
    },
  });
  const resNotAvailCount = await prisma.ResidentialPremisesInfoSection.count({
    where: {
      Inspection: {
        [filterBy]: filterValue,
      },
      toiletAvailabilityId: 2,
    },
  });

  const eateryAvailCount = await prisma.EateryPremisesInfoSection.count({
    where: {
      Inspection: {
        [filterBy]: filterValue,
      },
      toiletAvailabilityId: 1,
    },
  });
  const eateryNotAvailCount = await prisma.EateryPremisesInfoSection.count({
    where: {
      Inspection: {
        [filterBy]: filterValue,
      },
      toiletAvailabilityId: 2,
    },
  });

  const healthAvailCount = await prisma.HealthPremisesInfoSection.count({
    where: {
      Inspection: {
        [filterBy]: filterValue,
      },
      toiletAvailabilityId: 1,
    },
  });
  const healthNotAvailCount = await prisma.HealthPremisesInfoSection.count({
    where: {
      Inspection: {
        [filterBy]: filterValue,
      },
      toiletAvailabilityId: 2,
    },
  });

  const hospAvailCount = await prisma.HospitalityPremisesInfoSection.count({
    where: {
      Inspection: {
        [filterBy]: filterValue,
      },
      toiletAvailabilityId: 1,
    },
  });
  const hospNotAvailCount = await prisma.HospitalityPremisesInfoSection.count({
    where: {
      Inspection: {
        [filterBy]: filterValue,
      },
      toiletAvailabilityId: 2,
    },
  });


  const industryAvailCount = await prisma.IndustryPremisesInfoSection.count({
    where: {
      Inspection: {
        [filterBy]: filterValue,
      },
      toiletAvailabilityId: 1,
    },
  });
  const industryNotAvailCount = await prisma.IndustryPremisesInfoSection.count({
    where: {
      Inspection: {
        [filterBy]: filterValue,
      },
      toiletAvailabilityId: 2,
    },
  });
  const institutionAvailCount = await prisma.InstitutionPremisesInfoSection.count({
    where: {
      Inspection: {
        [filterBy]: filterValue,
      },
      toiletAvailabilityId: 1,
    },
  });
  const institutionNotAvailCount = await prisma.InstitutionPremisesInfoSection.count({
    where: {
      Inspection: {
        [filterBy]: filterValue,
      },
      toiletAvailabilityId: 2,
    },
  });
  const marketAvailCount = await prisma.MarketPremisesInfoSection.count({
    where: {
      Inspection: {
        [filterBy]: filterValue,
      },
      toiletAvailabilityId: 1,
    },
  });
  const marketNotAvailCount = await prisma.MarketPremisesInfoSection.count({
    where: {
      Inspection: {
        [filterBy]: filterValue,
      },
      toiletAvailabilityId: 2,
    },
  });
  const sanitaryAvailCount = await prisma.SanitaryPremisesInfoSection.count({
    where: {
      Inspection: {
        [filterBy]: filterValue,
      },
      toiletAvailabilityId: 1,
    },
  });
  const sanitaryNotAvailCount = await prisma.SanitaryPremisesInfoSection.count({
    where: {
      Inspection: {
        [filterBy]: filterValue,
      },
      toiletAvailabilityId: 2,
    },
  });
  let report = [
    {
      name: "Residential Premises",
      available: resAvailCount,
      notAvailable: resNotAvailCount,
    },
    {
      name: "Eating & Drinking Premises",
      available: eateryAvailCount,
      notAvailable: eateryNotAvailCount,
    },
    {
      name: "Health Premises",
      available: healthAvailCount,
      notAvailable: healthNotAvailCount,
    },
    {
      name: "Hospitality Premises",
      available: hospAvailCount,
      notAvailable: hospNotAvailCount,
    },
    {
      name: "Industry Premises",
      available: industryAvailCount,
      notAvailable: industryNotAvailCount,
    },  {
      name: "Institution Premises",
      available: institutionAvailCount,
      notAvailable: institutionNotAvailCount,
    },  {
      name: "Sanitary Premises",
      available: sanitaryAvailCount,
      notAvailable: sanitaryNotAvailCount,
    },  {
      name: "Markets & Lorry Parks Premises",
      available: marketAvailCount,
      notAvailable: marketNotAvailCount,
    },
  ];

  res.status(200).json({
    data: report,
  });
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
