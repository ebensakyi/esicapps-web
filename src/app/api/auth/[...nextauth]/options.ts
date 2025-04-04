import type { NextAuthOptions, Session } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { randomBytes, randomUUID } from "crypto";
import { SERVER_BASE_URL } from "@/config";

export const authOptions: NextAuthOptions = {
  // secret: process.env.NEXTAUTH_SECRET,
  providers: [

    CredentialsProvider({
      type: "credentials",
      id: 'credentials',
      name: 'credentials',
      credentials: {
        username: {
          label: "Phone number:",
          type: "tel",
          placeholder: "Enter your phone number",
        },
        password: {
          label: "Password:",
          type: "password",
          placeholder: "Enter your password",
        },
      },
      async authorize(credentials) {
        const { phoneNumber, password } = credentials as any;

        //AUTO LOGIN FORM

        const res = await fetch(`${SERVER_BASE_URL}/api/auth/login`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ phoneNumber, password }),
        });
        const user : any = await res.json();

        
        if (res.ok && user) {
          return user;
        } 
         return null;

      },
    }),
  ],
  session: {
    strategy: "jwt",
    maxAge: 3 * 60 * 60, //3hrs
    generateSessionToken: () => {
      return randomUUID?.() ?? randomBytes(32).toString("hex");
    },
  },
  callbacks: {
		async jwt({ token, user }) {
      
			return { ...token, ...user };
		},
		async session({ session, token }: { session: Session; token: any }) {
      
			return { ...session, user: token };
		},
	},

  pages: { signIn: `${SERVER_BASE_URL}/auth/login` },
};
