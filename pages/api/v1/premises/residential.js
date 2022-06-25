import prisma from "../../../../prisma/MyPrismaClient";

const post = async (req, res) => {
  try {
    const inspectionData = req.body.inspection;
    const populationData = req.body.population;
    const facilityData = req.body.facility;

    console.log(req.body);
    ///Save facility section, population, water, sanitation, hygiene, conclusion, picture
    const inspection = await prisma.inspection.create({ data:inspectionData });
    const population = await prisma.population.create({ data:populationData });
    const facility = await prisma.facilitySection.create({ data:facilityData });
    const facility = await prisma.facilitySection.create({ data:facilityData });

    // res
    //   .status(200)
    //   .json({ statusCode: 1, message: "Data saved", data: { action } });
  } catch (error) {
    if (error.code === "P2002")
      return res
        .status(200)
        .json({ statusCode: 0, message: "action prefix should be unique" });
  }
};

const get = async (req, res) => {
   try {
//     const action = await prisma.action.findMany({ where: { deleted: 0 } });
//     //return res.status(200).json({ statusCode: 1, data: action });
//     return res.status(200).json( action);

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
