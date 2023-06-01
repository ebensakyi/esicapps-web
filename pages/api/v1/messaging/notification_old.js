import { sendFCM } from "../../../../utils/send-fcm";
import prisma from "../../../../prisma/MyPrismaClient";

const post = async (req, res) => {
  // try {

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

  if (recipient != null && recipient != "") {
    const response = await prisma.user.findMany({
      where: { deleted: 0, id: recipient },
    });

let x =    await sendFCM(title, message, response[0].fcmId);

console.log(x);
  }
  if (regionRecipient != null && regionRecipient != "") {
    const response = await prisma.user.findMany({
      where: { deleted: 0, regionId: regionRecipient },
    });
    for (let i = 0; i < response.length; i++) {
      await sendFCM(title, message, response[i].fcmId);
    }
  }
  if (districtRecipient != null && districtRecipient != "") {
    const response = await prisma.user.findMany({
      where: { deleted: 0, districtId: Number(districtRecipient) },
    });

    for (let i = 0; i < response.length; i++) {
      console.log(response.phoneNumber);
      await sendFCM(title, message, response[i].fcmId);
    }
  }

  return res.status(200).json({ statusCode: 1, message: "Data saved" });
  // } catch (error) {
  //   console.log("Error: " + error);
  //   if (error.code === "P2002")
  //     return res
  //       .status(400)
  //       .json({ statusCode: 0, message: "Should be unique" });
  // }
};

const get = async (req, res) => {
  try {
    if (req.query.userId) {
      let userId = Number(req.query.userId);
      let userDetails = await prisma.user.findFirst({
        where: { id: userId },
      });

      if (!userDetails) {
        return res.status(200).json([]);
      }
      let districtId = userDetails.districtId;
      let regionId = userDetails.regionId;

      const messaging = await prisma.messaging.findMany({
        where: {
          deleted: 0,
          messageType: 1,
        },

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
      if (!messaging) {
        return res.status(200).json([]);
      }

      console.log(messaging);

      let messages = [];

      await messaging.map((msg) => {
        let sendingType = msg.sendingType;
        let recipient = msg.recipient;
        let regionRecipient = msg.regionRecipient;
        let districtRecipient = msg.districtRecipient;
        if (sendingType == 1 && recipient == userId) {
          console.log("sendingType ", sendingType);
          console.log("recipient ", recipient);
          console.log("userId ", userId);

          messages.push(msg);
        }

        if (sendingType == 2 && regionRecipient == regionId) {
          messages.push(msg);
        }

        if (sendingType == 2 && districtRecipient == districtId) {
          messages.push(msg);
        }
      });
      return res.status(200).json(messages);
    } else {
      const messages = await prisma.messaging.findMany({
        where: {
          deleted: 0,
          messageType: 1,
        },

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
      return res.status(200).json(messages);
    }

    // console.log("sendingType", sendingType);
    // console.log("recipient", recipient);
    // console.log("regionRecipient", regionRecipient);
    // console.log("districtRecipient", districtRecipient);

    // return res.status(200).json([]);
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
