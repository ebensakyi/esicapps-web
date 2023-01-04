import prisma from "../../../../prisma/MyPrismaClient";
const post = async (req, res) => {
  try {

    console.log(req.body);
    const data = {
      fullName: req.body.fullName,
      email: req.body.email,
      phoneNumber: req.body.phoneNumber,
      districtId: Number(req.body.district),
      latitude: Number(req.body.latitude),
      longitude: Number(req.body.longitude),
      reportTypeId: Number(req.body.reportType)
    }
   
    const sanitationReport = await prisma.sanitationReport.create({ data });
    res
      .status(200)
      .json({ statusCode: 1, message: "Data saved", data: { sanitationReport } });
  } catch (error) {
    console.log(error);
    if (error.code === "P2002")
      return res
        .status(200)
        .json({ statusCode: 0, message: "sanitationReport should be unique" });
  }
};

const get = async (req, res) => {
  try {
    const data = await prisma.sanitationReport.findMany({
      where: { deleted: 0 },
    });
    //return res.status(200).json({ statusCode: 1, data: action });
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
