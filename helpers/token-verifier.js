import jwt from "jsonwebtoken";

export const verifyToken = async (token) => {
    let verify = jwt.verify(token, process.env.TOKEN_SECRET);
    let userId = verify.id;
    return userId;
  };