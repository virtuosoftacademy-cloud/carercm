import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";  // ← YE KARO (path sahi karo)
import Header from "@/components/layout/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CareRCM",
  description: "Revenue Cycle Management for Healthcare Practices",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}