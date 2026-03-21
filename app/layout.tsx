import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "张新 - 心理咨询师 | 子人格疗法创始人",
  description: "专业心理咨询师张新的个人网站，介绍子人格疗法、心理咨询服务、心理学专业背景与学习经历。",
  keywords: ["心理咨询", "子人格疗法", "心理治疗", "心理咨询师", "心理健康", "心理学", "张新"],
  authors: [{ name: "张新" }],
  creator: "张新",
};

export const viewport: Viewport = {
  themeColor: "#3b82f6",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className="scroll-smooth">
      <body className={`${inter.className} bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-black text-gray-900 dark:text-gray-100 transition-colors duration-300`}>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
