import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Navbar from "./components/Navbar/Navbar";
import LenisWrapper from "./components/LenisWrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Suarez Project",
  description: "Modern Next.js application with navigation",
};

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LenisWrapper>
          <header>
            <Navbar />
          </header>
          <main>
            {children}
          </main>
        </LenisWrapper>
      </body>
    </html>
  );
}
