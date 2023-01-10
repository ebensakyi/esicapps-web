import jwt from "jsonwebtoken";

export const verifyToken = async (token) => {
  try {
    let verify = jwt.verify(token, process.env.TOKEN_SECRET);
    console.log(verify);
    let userId = verify.id;
    return userId;
  } catch (error) {
    console.log("error>>>> "+error);
  }
};
