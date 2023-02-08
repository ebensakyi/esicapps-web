import prisma from "../../../../../prisma/MyPrismaClient";
import { send } from "../../../../../helpers/send-sms";
import { append_233 } from "../../../../../helpers/append-233";

const post = async (req, res) => {
  // try {


  let recipient =
    req.body.recipient 

  const data = {
    recipient: recipient,
    message: req.body.message,
    title: req.body.title,
   
    sender: req.body.sendingType,
    messageType: 2,
    sendingType: Number(req.body.sendingType),
  };

  const response = await prisma.messaging.create({ data });
  // if (recipient != null || recipient != "") {
  //   const res = await prisma.user.findMany({
  //     where: { deleted: 0, id: recipient },
  //   });

  //   for (let i = 0; i < res.length; i++) {
  //     let phoneNumber = await append_233(res[i].phoneNumber);
  //     await send(phoneNumber, req.body.message);
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
