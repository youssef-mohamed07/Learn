"use client";
import Navbar from "@/component/Navbar";
import "./globals.css";
import Footer from "@/component/Footer";
import { SessionProvider } from "next-auth/react";

export default function RootLayout({ children }) {
  return (

         <html lang="en">
    <head>
      <meta charSet="UTF-8" />
      <title>Online courses</title>
    </head>
    <body>
      <Navbar />
      {children}
      <Footer />
    </body>
  </html>
       
   
  );
}
