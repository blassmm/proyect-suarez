import { Geist, Geist_Mono } from "next/font/google";
import { Montserrat } from "next/font/google";
import "./globals.css";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import LenisWrapper from "./components/LenisWrapper";
import FloatingBarSocials from "./components/FloatingBarSocials";
import { Toaster } from "sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  display: "swap",
});

export const metadata = {
  title: "Taller Suarez",
  description: "Excelencia y compromiso en cada detalle",
  icons: {
    icon: [
      {
        url: "/favicon/favicon-dark.ico",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/favicon/favicon-light.ico",
        media: "(prefers-color-scheme: dark)",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${montserrat.variable} antialiased`}
      >
        <Toaster richColors position="top-center" />
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
                num: "5492214956079",
                defaultMsj: "Hola, queria consultar..",
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
