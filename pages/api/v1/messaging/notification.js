import prisma from "../../../../prisma/MyPrismaClient";

const post = async (req, res) => {
  // try {

  //   console.log(req.body);
  //   const single = {
  //     recipient: Number(req.body.recipient),
  //     messageType: 1,
  //     sendingType: 1,
  //     message: req.body.message,
  //     title: req.body.title,

  //   };

  console.log(req.body);

  let recipient =
    req.body.recipient == null ? null : Number(req.body.recipient);
  let regionRecipient =
    req.body.regionRecipient == null ? null : Number(req.body.regionRecipient);
  let districtRecipient =
    req.body.districtRecipient == null
      ? null
      : Number(req.body.districtRecipient);

  const data = {
    recipient: recipient,
    message: req.body.message,
    title: req.body.title,
    regionRecipient: regionRecipient,
    districtRecipient: districtRecipient,
    sender: req.body.sendingType,
    messageType: 1,
    sendingType: Number(req.body.sendingType),
  };

  console.log(data);

  const response = await prisma.messaging.create({ data });

  res.status(200).json({ statusCode: 1, message: "Data saved" });
  // } catch (error) {
  //   console.log("Error: " + error);
  //   if (error.code === "P2002")
  //     return res
  //       .status(400)
  //       .json({ statusCode: 0, message: "dataVersion s should be unique" });
  // }
};

const get = async (req, res) => {
  try {
    const messaging = await prisma.messaging.findMany({
      where: { deleted: 0, messageType: 1 },
      include: {
        SendingType: true,
        MessageType: true,
        Region: true,
        District: true,
        Recipient: true,
      },
    });

    console.log(messaging);
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
