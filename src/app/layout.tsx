import type { Metadata } from "next";
import Navbar from "@/components/home/Navbar";
import NavbarDiscount from "@/components/home/NavbarDiscount";
import Footer from "@/components/home/Footer";
import { ReactNode } from "react";
import '../styles/globals.css'
import "slick-carousel/slick/slick.css";  
import "slick-carousel/slick/slick-theme.css";

export const metadata: Metadata = {
  title: "Exclusive",
  description: "e-commerce Figma",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>
        {/* <div className="flex flex-col min-h-screen"> */}
          <div className="">
            <NavbarDiscount/>
            <Navbar />
            <div className="h-0 left-[1440px] border-t-[0.5px] opacity-30 border-black" />
          
          <main className="flex-1">
            {children}
          </main>
          <div className="h-[43px]" />
          <Footer/>            
        </div>
      </body>
    </html>
  );
}


