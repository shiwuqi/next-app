/*
 * @Author: shiqi liziw2012@gmail.com
 * @Date: 2024-03-27 10:22:02
 * @LastEditors: shiqi liziw2012@gmail.com
 * @LastEditTime: 2024-03-27 15:38:33
 * @FilePath: /next-app/src/app/layout.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import GlobalContext from "@/context/GlobalContext";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "next-app",
  description: "next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="business">
      <body className={inter.className}>
        <GlobalContext>
          {children}
        </GlobalContext>
      </body>
    </html>
  );
}
