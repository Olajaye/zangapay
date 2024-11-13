import type { Metadata } from "next";
import { Inter } from 'next/font/google';
import "./globals.css";
// import Navbar from "@/components/Navbar";
import AppDownload from "@/components/DownloadApp";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Zangapay Payment Solutions',
  description: 'Simplify and manage your bill payments',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        {children}
        <AppDownload/>
        <Footer/>
      </body>
    </html>
  );
}
