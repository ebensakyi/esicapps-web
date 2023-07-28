import { withAuth } from "next-auth/middleware"

export default withAuth(
  // `withAuth` augments your `Request` with the user's token.
  function middleware(req) {
    console.log(req.body)
  },
  {
    callbacks: {
      authorized: ({ token }) => token?.path === "admin",
    },
  }
)


export const config = { matcher: ["/", "/user","/submitted-data","/data-transfer","/user","/user/role","/user/log"] }