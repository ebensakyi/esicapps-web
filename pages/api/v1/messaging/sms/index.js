import prisma from "../../../../../prisma/db";



const get = async (req, res) => {
  try {
    const messaging = await prisma.messaging.findMany({
      where: { deleted: 0, messageType: 2 },
      include: {
        SendingType: true,
        MessageType: true,
       
      }, orderBy: {
        id: "desc",
      },
    });

    return res.status(200).json(messaging);
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
