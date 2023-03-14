const get = async (req, res) => {
  try {
    let userId = Number(req.query.userId);
    let user = await prisma.user.findFirst({
      where: { id: userId, deleted: 0 },
      include: { District: { include: { Region: true } } },
    });

    return res.status(200).json(user);
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
