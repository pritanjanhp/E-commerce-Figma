import type { Metadata } from "next";
import '../styles/globals.css'
import Navbar from "@/components/home/Navbar";
import NavbarDiscount from "@/components/home/NavbarDiscount";
import Footer from "@/components/home/Footer";

export const metadata: Metadata = {
  title: "Exclusive",
  description: "e-commerce Figma",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="flex flex-col min-h-screen">
            <NavbarDiscount/>
            <div className="ml-24 p-4">
              <Navbar />
            </div>
            <div className="h-0 left-[1440px] border-t-[0.5px] opacity-30 border-black" />
          
          <main className="flex-1">
            {children}
          </main>
          <Footer/>            
        </div>
      </body>
    </html>
  );
}


