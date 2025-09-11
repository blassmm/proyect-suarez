"use client";
import { memo, useEffect, useState } from "react";
import Image from "next/image";
import {
  Marquee,
  MarqueeContent,
  MarqueeFade,
  MarqueeItem,
} from "@/components/ui/shadcn-io/marquee";

// Lista de marcas usando las imágenes de la carpeta logos-marcas
const brands = [
  { name: "Marca 1", logo: "/logos-marcas/1.webp" },
  { name: "Marca 2", logo: "/logos-marcas/2.webp" },
  { name: "Marca 3", logo: "/logos-marcas/3.webp" },
  { name: "Marca 4", logo: "/logos-marcas/4.webp" },
  { name: "Marca 5", logo: "/logos-marcas/5.webp" },
  { name: "Marca 6", logo: "/logos-marcas/6.webp" },
];

// Componente de logo optimizado
const BrandLogo = memo(({ brand, index }) => (
  <div
    style={{ marginLeft: "100px", marginRight: "100px" }}
    className="flex items-center"
  >
    <div className="h-24 flex items-center justify-center">
      <Image
        src={brand.logo}
        alt={brand.name}
        width={160}
        height={80}
        quality={90}
        priority={index < 3}
        loading={index < 3 ? "eager" : "lazy"}
        className="h-auto max-h-24 w-auto object-contain transition-transform hover:scale-110 duration-300"
        style={{ maxWidth: "none" }}
        sizes="(max-width: 768px) 120px, 160px"
      />
    </div>
  </div>
));

BrandLogo.displayName = "BrandLogo";

function LogoMarquee() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Función para actualizar el estado basado en el ancho de la ventana
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Establecer el estado inicial
    handleResize();

    // Agregar el event listener
    window.addEventListener("resize", handleResize);

    // Limpiar el event listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className="py-16 bg-gray-50">
      <Marquee className="bg-white py-16 shadow-sm">
        <MarqueeFade side="left" className={isMobile ? "w-40" : "w-150"} />
        <MarqueeFade side="right" className={isMobile ? "w-40" : "w-150"} />
        <MarqueeContent
          autoFill={false}
          pauseOnHover={false}
          speed={100}
          gradient={false}
        >
          {brands.map((brand, index) => (
            <BrandLogo key={index} brand={brand} index={index} />
          ))}
        </MarqueeContent>
      </Marquee>
    </section>
  );
}

export default memo(LogoMarquee);
