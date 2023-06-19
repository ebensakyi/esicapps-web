export const logActivity = async (activity, userId) => {
  try {
    let data = {
      activity,
      userId,
    };
    await prisma.logs.create({ data });
  } catch (error) {
    return;
  }
};
