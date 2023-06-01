import prisma from "../../../../../prisma/MyPrismaClient";
import { send } from "../../../../../utils/send-sms";
import { append_233 } from "../../../../../utils/append-233";
import { getUserCookie } from "../../../../../utils/cookies-manager";
import { logActivity } from "../../../../../utils/Log";
const post = async (req, res) => {
  try {

    let userCookie = await getUserCookie(req, res);

    await logActivity("Broadcast SMS sent",  userCookie.user.id);

    let recipientId = Number(req.body.recipientId);
    let recipient = req.body.recipient;
    let title = req.body.title;
    let message = req.body.message;
    let recipientGroup 

    if (recipient=="districtId") {
      let rec = await prisma.district.findFirst({where: {id: recipientId}})
      recipientGroup = rec.name
    }

    if (recipient=="regionId") {
      let rec = await prisma.region.findFirst({where: {id: recipientId}})
      recipientGroup = rec.name
    }

    const data = {
      recipient: recipientGroup,
      message: message,
      title: title,
      // recipientTag: Number(req.body.group),
      recipientId: Number(recipientId),
      sender: Number(userCookie.user.id),
      messageType: 2,
      sendingType: Number(req.body.sendingType),
    };

 await prisma.messaging.create({ data });

    const userGroup = await prisma.user.findMany({
      where: { [recipient]: Number(recipientId) },
    });

    for (let i = 0; i < userGroup.length; i++) {
      let phoneNumber = await append_233(userGroup[i].phoneNumber);
      await send(phoneNumber, req.body.message);
    }

   


    res.status(200).json({ statusCode: 1, message: "Data saved" });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ statusCode: 0, message: "Error" });
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
