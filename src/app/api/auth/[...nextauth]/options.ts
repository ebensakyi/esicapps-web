import type { NextAuthOptions } from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";

export const options: NextAuthOptions = {
  providers: [
    // GitHubProvider({
    //     clientId: process.env.GITHUB_ID as string,
    //     clientSecret: process.env.GITHUB_SECRET as string,
    // }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: {
          label: "Username:",
          type: "text",
          placeholder: "your-cool-username",
        },
        password: {
          label: "Password:",
          type: "password",
          placeholder: "your-awesome-password",
        },
      },
      async authorize(credentials) {
        // // This is where you need to retrieve user data
        // // to verify with credentials
        // // Docs: https://next-auth.js.org/configuration/providers/credentials
        // const user = { id: "42", name: "Dave", password: "nextauth" }

        // if (credentials?.username === user.name && credentials?.password === user.password) {
        //     return user
        // } else {
        //     return null
        // }
        const { phoneNumber, password } = credentials as any;

        const res = await fetch("/api/auth/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ phoneNumber, password }),
        });

        const user = res.json();
        if (res.ok && user) {
          return user;
        } else return null;
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }) {
      return { ...token, ...user };
    },
    async session({ session, token, user }) {
      // Send properties to the client, like an access_token from a provider.
      session.user = token;

      return session;
    },
  },
  pages: { signIn: "/auth/login" },
};
