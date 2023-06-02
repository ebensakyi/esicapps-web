import cookie from "cookie";
import jwt from "jsonwebtoken";

export async function setSession(res, session) {
  const token = jwt.sign(session, process.env.TOKEN_SECRET);

  
  const cookieValue = cookie.serialize("session", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    maxAge: 60 * 60 , // 1 week
    sameSite: "strict",
    path: "/",
  });
  res.setHeader("Set-Cookie", cookieValue);

  res.status(200).json({session});
}

export async function getSession(req) {
let token =req.query.session

  // const cookies = cookie.parse(req.headers.cookie || "");
  // const token = cookies.session;
  if (!token) return null;
  try {
    return jwt.verify(token, process.env.TOKEN_SECRET);
  } catch (err) {
    return null;
  }
}

export async function destroySession(res) {
  try {


    res.setHeader(
      "Set-Cookie",
      cookie.serialize("session", "", {
        httpOnly: true,
        secure:
          process.env.NODE_ENV === "production" ,
        expires: new Date(0),
        sameSite: "strict",
        path: "/",
      })
    );
  } catch (error) {
    console.log(error);
  }
}
