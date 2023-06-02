import prisma from "../../../../../prisma/db";
import { send } from "../../../../../utils/send-sms";
import { sendSMS } from "../../../../../utils/send-hubtel-sms";

import { append_233 } from "../../../../../utils/append-233";
import { getSession } from "../../../../../utils/session-manager";
import { logActivity } from "../../../../../utils/Log";

const post = async (req, res) => {
try {
  let userCookie = await getSession(req);
  await logActivity("Single SMS sent",  userCookie.user.id);


  console.log(req.body);

  let recipientId = req.body.recipient.split("$")[0];
  let recipient = req.body.recipient.split("$")[1];

  const data = {
    recipient: recipient,   
     recipientId: Number(recipientId),

    message: req.body.message,
    title: "",
   // recipient: Number(req.body.group),

    sender: Number(userCookie.user.id),
    messageType: 2,
    sendingType: 1,
  };

  const response = await prisma.messaging.create({ data });
  const user = await prisma.user.findFirst({
    where: { id: response.recipientId },
  });

  console.log(user);
  // if (recipient != null || recipient != "") {
  //   const res = await prisma.user.findMany({
  //     where: { deleted: 0, id: recipient },
  //   });

  //   for (let i = 0; i < res.length; i++) {
  let phoneNumber = await append_233(user.phoneNumber);
  await sendSMS(phoneNumber, req.body.message);
  //   }
  // }
  // if (regionRecipient != null || regionRecipient != "") {
  //   const res = await prisma.user.findMany({
  //     where: { deleted: 0, regionId: regionRecipient },
  //   });
  //   for (let i = 0; i < res.length; i++) {
  //     await send(res[i].phoneNumber, req.body.message);

  //   }
  // }
  // if (districtRecipient != null || districtRecipient != "") {
  //   const res = await prisma.user.findMany({
  //     where: { deleted: 0, districtId: districtRecipient },
  //   });
  //   for (let i = 0; i < res.length; i++) {
  //     console.log(res.phoneNumber);
  //     await send(res[i].phoneNumber, req.body.message);
  //   }
  // }

  res.status(200).json({ });
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
