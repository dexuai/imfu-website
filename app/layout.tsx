import type { Metadata } from "next";
import { Inter } from "next/font/google"; // Using Inter as a close alternative to system-ui
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "imfu.ai | 老傅 - AI 生产力方案专家",
  description: "医疗器械高管的管理经验、硬核的软硬件开发能力，与前沿 AI 技术深度融合，解决真实世界的效率难题。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />
      </head>
      <body className={`${inter.className} antialiased selection:bg-emerald-500/30 flex flex-col min-h-screen`}>
        <div className="glow-bg"></div>
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
