export const logActivity = async (activity, userId) => {
  try {
    let data = {
      activity,
      userId,
    };
    const response = await prisma.logs.create({ data });
  } catch (error) {
    console.log(error);
    if (error.code === "P2002")
      return res
        .status(200)
        .json({  });
  }
};
