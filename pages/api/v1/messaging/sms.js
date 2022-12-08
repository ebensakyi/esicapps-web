import prisma from "../../../../prisma/MyPrismaClient";

const post = async (req, res) => {
  // try {

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

  const response = await prisma.messaging.create({ data });

  if (recipient != null) {

    const res = await prisma.user.findMany({
      where: { deleted: 0, id: recipient },
    });

    for (let i = 0; i < res.length; i++) {
      console.log(res.phoneNumber);
    }
  }
  if (regionRecipient != null) {
    const res = await prisma.user.findMany({
      where: { deleted: 0, regionId: regionRecipient },
    });
    for (let i = 0; i < res.length; i++) {
      console.log(res.phoneNumber);
    }
  }
  if (districtRecipient != null) {
    const res = await prisma.user.findMany({
      where: { deleted: 0, districtId: districtRecipient },
    });
    for (let i = 0; i < res.length; i++) {
      console.log(res.phoneNumber);
    }
  }

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
      where: { deleted: 0, messageType: 2 },
      include: {
        SendingType: true,
        MessageType: true,
        Region: true,
        District: true,
        Recipient: true,
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
