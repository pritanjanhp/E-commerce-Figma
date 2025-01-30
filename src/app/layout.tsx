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
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>
        {/* <div className="flex flex-col min-h-screen"> */}
          <div>
            <NavbarDiscount/>
            {/* <div className="left-[135px] p-4"> */}
              <Navbar />
            {/* </div> */}
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


