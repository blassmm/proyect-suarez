"use client";
import { memo, useEffect, useState } from "react";
import Image from "next/image";
import {
  Marquee,
  MarqueeContent,
  MarqueeFade,
} from "@/components/ui/shadcn-io/marquee";

const BrandLogo = memo(({ brand, index }) => (
  <div
    style={{ marginLeft: "100px", marginRight: "100px" }}
    className="flex items-center"
  >
    <div className="w-52 h-28 flex items-center justify-center py-3">
      <Image
        src={brand.logo}
        alt={brand.name}
        width={200}
        height={90}
        quality={90}
        priority={index < 3}
        loading={index < 3 ? "eager" : "lazy"}
        className="object-contain transition-transform hover:scale-110 duration-300"
        style={{
          width: "auto",
          height: "auto",
          maxHeight: "90px",
          maxWidth: "180px",
        }}
        sizes="180px"
      />
    </div>
  </div>
));

BrandLogo.displayName = "BrandLogo";

function LogoMarquee({ logos = [] }) {
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
      <Marquee className="bg-white py-20 shadow-sm">
        <MarqueeFade side="left" className={isMobile ? "w-40" : "w-150"} />
        <MarqueeFade side="right" className={isMobile ? "w-40" : "w-150"} />
        <MarqueeContent
          autoFill={false}
          pauseOnHover={false}
          speed={100}
          gradient={false}
        >
          {logos.map((brand, index) => (
            <BrandLogo key={index} brand={brand} index={index} />
          ))}
        </MarqueeContent>
      </Marquee>
    </section>
  );
}

export default memo(LogoMarquee);
