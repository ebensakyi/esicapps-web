import { sendFCM } from "../../../../helpers/send-fcm";
import prisma from "../../../../prisma/MyPrismaClient";

const post = async (req, res) => {
 try {

  //   console.log(req.body);
  //   const single = {
  //     recipient: Number(req.body.recipient),
  //     messageType: 1,
  //     sendingType: 1,
  //     message: req.body.message,
  //     title: req.body.title,

  //   };
  let title = req.body.title;
  let message = req.body.message;
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
    message: message,
    title: title,
    regionRecipient: regionRecipient,
    districtRecipient: districtRecipient,
    sender: req.body.sendingType,
    messageType: 1,
    sendingType: Number(req.body.sendingType),
  };

  const response = await prisma.messaging.create({ data });

  if (recipient != null || recipient != "") {
    const response = await prisma.user.findMany({
      where: { deleted: 0, id: recipient },
    });

    
      await sendFCM(title, message, response[0].fcmId);
    
  }
  if (regionRecipient != null || regionRecipient != "") {
    console.log("regionRecipient");

    const response = await prisma.user.findMany({
      where: { deleted: 0, regionId: regionRecipient },
    });
    for (let i = 0; i < response.length; i++) {
      console.log(response.phoneNumber);
    }
  }
  if (districtRecipient != null || districtRecipient != "") {
    console.log("districtRecipient: ", districtRecipient);

    const response = await prisma.user.findMany({
      where: { deleted: 0, districtId: districtRecipient },
    });

    for (let i = 0; i < response.length; i++) {
      console.log(response.phoneNumber);
    }
  }

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
    const messaging = await prisma.messaging.findMany({
      where: { deleted: 0, messageType: 1 },
      orderBy: {
        createdAt: "desc",
      },
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
