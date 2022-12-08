const post = async (req, res) => {
  console.log(req.body);

  try {
    const user = await prisma.user.update({
      where: { userId: Number(req.body.userId) },
      data: { fcmId: req.body.fcmId },
    });
    return res.status(200).json();
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
