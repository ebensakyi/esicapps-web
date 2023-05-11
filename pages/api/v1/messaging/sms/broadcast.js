import prisma from "../../../../../prisma/MyPrismaClient";
import { send } from "../../../../../helpers/send-sms";
import { append_233 } from "../../../../../helpers/append-233";
import { getUserCookie } from "../../../../../helpers/cookies-manager";
import { logActivity } from "../../../../../helpers/Log";

const post = async (req, res) => {
   try {

  let userCookie = await getUserCookie(req, res);
  await logActivity("Broadcast SMS sent",  userCookie.user.id);

  let recipientId = req.body.recipient.split("$")[0];
  let recipient = req.body.recipient.split("$")[1];
  let group = Number(req.body.group);

  const data = {
    recipient: recipient,
    message: req.body.message,
    title: req.body.title,
    recipientTag: group,
    recipientId: Number(recipientId),
    sender: Number(userCookie.user.id),
    messageType: 2,
    sendingType: Number(req.body.sendingType),
  };

  const response = await prisma.messaging.create({ data });
  if (group == 1) {
    //Send broadcast sms to district
    const res = await prisma.user.findMany({
      where: { deleted: 0, districtId: Number(recipientId) },
    });

    for (let i = 0; i < res.length; i++) {
      let phoneNumber = await append_233(res[i].phoneNumber);
      await send(phoneNumber, req.body.message);
    }
  } else if (group == 2) {
    //Send broadcast sms to region

    const res = await prisma.user.findMany({
      where: { deleted: 0, regionId: Number(recipientId) },
    });

    for (let i = 0; i < res.length; i++) {
      let phoneNumber = await append_233(res[i].phoneNumber);
      await send(phoneNumber, req.body.message);
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
