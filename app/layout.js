import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Bit-Links",
  description: "bitlinks helps you shorten your URls easily",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <style>
          {`@import url('https://fonts.googleapis.com/css2?family=Baloo+2:wght@400..800&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Rubik+Vinyl&display=swap');`}
        </style>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-purple-50 antialiased`} 
      >
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
