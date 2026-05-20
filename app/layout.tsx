'use client';

import { Inter } from "next/font/google";
import { usePathname } from 'next/navigation';
import "./globals.css";
import Header from "@/components/Header/page";
import Footer from "@/components/Footer/page";
import ContactForm from "@/components/ContactForm/page";

const inter = Inter({ subsets: ["latin"] });

const hideContactForm = ['/thank-you', '/checkout'];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        
        {!hideContactForm.includes(pathname) && <ContactForm />}
        
        <Footer />
      </body>
    </html>
  );
}