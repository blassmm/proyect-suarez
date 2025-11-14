import { Geist, Geist_Mono } from "next/font/google";
import { Montserrat } from "next/font/google";
import "./globals.css";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import LenisWrapper from "./components/LenisWrapper";
import FloatingBarSocials from "./components/FloatingBarSocials";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

export const metadata = {
  title: "Taller Suarez",
  description: "Excelencia y compromiso en cada detalle",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${montserrat.variable} antialiased`}
      >
        <LenisWrapper>
          <header>
            <Navbar />
          </header>
          <main>{children}</main>
          <Footer />
          <FloatingBarSocials
            socials={[
              { name: "Twitter", url: "https://twitter.com" },
              { name: "Instagram", url: "https://instagram.com" },
              { name: "Telegram", url: "https://t.me/" },
              { name: "Discord", url: "https://discord.com" },
            ]}
          />
        </LenisWrapper>
      </body>
    </html>
  );
}
