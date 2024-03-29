/*
 * @Author: shiqi liziw2012@gmail.com
 * @Date: 2024-03-27 16:24:19
 * @LastEditors: shiqi liziw2012@gmail.com
 * @LastEditTime: 2024-03-29 11:51:19
 * @FilePath: /next-app/src/lib/auth.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import prisma from "@/lib/prisma";
import { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GithubProvider from "next-auth/providers/github"

export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "Please enter Email",
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "Please enter password",
        },
      },
      async authorize(credentials: any, req) {
        const { email, password } = credentials;
        const user = await prisma.user.findUnique({
          where: { email },
        });
        if (!user) throw new Error("Invalid credentials");
        const validPassword = password === user.password;
        if (!validPassword) throw new Error("Invalid credentials");
        return {
          id: String(user.id),
          name: user.username,
          email: user.email,
        };
      },
    }),
    GithubProvider({
      clientId: process.env.GITHUB_ID ?? "",
      clientSecret: process.env.GITHUB_SECRET ?? "",
    })
  ],
  pages: {
    signIn: "/auth/login",
  },
  callbacks: {
    async signIn({ user, account }) {
      if (account?.provider === 'github' || account?.provider === 'google') {
        await prisma.user.upsert({
          where: { email: user?.email ?? "" },
          update: { username: user?.name ?? "" },
          create: { username: user?.name ?? "", email: user?.email ?? "", loginType: account?.provider },
        });
      }
      return true;
    },
    async redirect({ url, baseUrl }) {
      return baseUrl;
    },
    async session({ session, user, token }) {
      if (token) {
        session.user.id = token.id as string;
      }
      return session;
    },
    async jwt({ token, user, account, profile }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
  },
};