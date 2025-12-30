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
              {
                name: "Whatsapp",
                num: "5492213523273",
                defaultMsj: "Hola, somos Taller Suarez ¿cómo estás? ",
              },
              {
                name: "Facebook",
                url: "https://www.facebook.com/TallerSuarezChapayPintura",
              },
              { name: "Instagram", url: "https://instagram.com/taller_suarez" },
              {
                name: "Youtube",
                url: "https://www.youtube.com/@tallersuarez2220",
              },
              {
                name: "LinkedIn",
                url: "https://www.linkedin.com/company/taller-suarez-chapa-y-pintura",
              },
              { name: "Tiktok", url: "https://www.tiktok.com/@taller_suarez" },
            ]}
          />
        </LenisWrapper>
      </body>
    </html>
  );
}
