import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "aion",
  description: "AI Powered News & Media",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" >
      <body className={inter.className + " h-screen w-screen text-[#ebe8e8] dark bg-gradient-to-b from-black to-[#121212]"}>{children}</body>
    </html>
  );
}
