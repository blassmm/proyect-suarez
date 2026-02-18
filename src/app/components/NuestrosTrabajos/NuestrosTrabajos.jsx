"use client";
import React from "react";
import { CldImage } from "next-cloudinary";
import styles from "./NuestrosTrabajos.module.css";
import FlechaAbajo from "../FlechaAbajo/FlechaAbajo";
import Copy from "../Copy/Copy";
import Link from "next/link";
import CardSlider from "../CardSlider";

//ESTE COMPONENTE SE USA SOLO EN EL INICIO-----------------------------------------------------

const NuestrosTrabajos = () => {
  // Datos mapeados al formato del CardSlider
  const trabajos = [
    {
      id: 0,
      imagen: "principal-alfa-romeo",
      titulo: "Alfa Romeo 6C 2500cc",
      subtitulo: "1948",
      descripcion: "2022",
      descripcion2:
        "Se realizó la restauración integral de este Alfa Romeo, a través de un largo proceso, en el que Jorge Martucci líderando la restauración, Héctor y Diego Bustos en la carrocería, Bruno Andreozzi en la tapicería, Cromado Los Primos en los cromados, y todo el equipo de Taller Suarez; lograron revivir la magia de un auto que es una joya casi sin igual en nuestro país.",
      etiqueta: "RESTAURACIÓN PREMIADA",
      trabajo: "Restauración Premiada",
      masImagenes: [
        "alfa-romeo-1",
        "alfa-romeo-2",
        "alfa-romeo-3",
        "alfa-romeo-4",
        "alfa-romeo-5",
        "alfa-romeo-6",
        "alfa-romeo-7",
        "alfa-romeo-8",
        "alfa-romeo-9",
      ],
    },
    {
      id: 1,
      imagen: "Principal-Pepe",
      titulo: "JAGUAR XK 120 OTS",
      subtitulo: "1953",
      descripcion: "Cliente Pepe Gustavo",
      descripcion2:
        "Restauración completa de la carroceria y chasis de 1500hs de trabajo, equivalente a 7 meses y medio, que incluyó un pelado manual seguido de un arenado. Se conservan todas las piezas originales, las cuales fueron restauradas tanto en chapa como en aluminio, utilizando una bancada de estirado y medición universal con calibres móviles, permitiendo medir las tres dimensiones para lograr un ajuste perfecto. Pintura completa en bicapa, en el color original Pastel Blue. Se trabajó bajo las normas de PPG, con procesos de garantía y productos de alta performance. Trabajo realizado en el año 2024. Trabajo en conjunto, en colaboracion con Diego Bustos en chasis y parte de carroceria, cromados por 'Los Primos', tapicería por Ricardo Martire, mecanica y armado Jorge Martucci",
      trabajo: "Restauración Completa",
      masImagenes: [
        "1-pepe",
        "2-pepe",
        "3-pepe",
        "4-pepe",
        "5-pepe",
        "6-pepe",
      ],
    },
    {
      id: 2,
      imagen: "polara-principal",
      titulo: "DODGE GTX",
      subtitulo: "1974",
      descripcion: "Cliente Santuccione Leonardo",
      descripcion2:
        "Trabajo de restauración integral. Desmontaje general y reparación exhaustiva de la chapa, conservando y restaurando todas las piezas originales. Pintura completa en monocapa de poliuretano en su color original trabajando con procesos determinados por PPG de garantía con productos de alta performance. Cromado y reparación de partes de cristalería llevado a cabo por \"Los Primos\". Trabajo garantizado. Restauración interior, incluyendo tapicería y vinilos, en colaboración con Daniello Sport, y mecánica realizada por Peneta.",
      etiqueta: "TRABAJO DESTACADO",
      trabajo: "Restauración Integral",
      masImagenes: [
        "polara1",
        "polara2",
        "polara-3",
        "polara-4",
        "polara-5",
      ],
    },
    {
      id: 3,
      imagen: "m1-1",
      titulo: "BMW M1",
      subtitulo: "",
      descripcion: "Cliente Litvin Cesar",
      descripcion2:
        "Se realizó una puesta en valor integral del vehículo, con reparación de chasis y restauración completa de la carrocería en fibra de vidrio. El trabajo incluyó el desarme total, reparación estructural, pintura general y posterior armado de la carrocería. El proyecto se desarrolló en colaboración con Pastorino Clásicos y el tapicero Nicolás Rnsky, quienes participaron en este trabajo.",
      etiqueta: "TRABAJO DESTACADO",
      trabajo: "Puesta en Valor Integral",
      masImagenes: [
        "m1-2",
        "m1-3",
        "m1-4",
        "m1-5",
        "m1-6",
        "m1-7",
      ],
    },
    {
      id: 4,
      imagen: "toyota2000-principal",
      titulo: "TOYOTA 2000 GT ROJO",
      subtitulo: "1968",
      descripcion: "Cliente Scalise Claudio",
      descripcion2:
        "Restauración integral de carrocería con desarme completo de paragolpes delanteros y traseros, ópticas, faros traseros, cerraduras, manijas, colizas y molduras de cristalería, incluyendo desmontaje de luneta. Trabajo de pelado de carrocería manual mediante decapante en gel, reparación de parches y sectores intervenidos previamente en pasarruedas, preparación integral para proceso de pintura con aplicación de anticorrosivo epoxi y aparejos de alto espesor para nivelación y terminación superficial. El proceso de pintado incluyó pisos inferiores en color gris, piso de habitáculo, techo, capot, ambos guardabarros delanteros, frente, puertas, guardabarros traseros, portón y panel de cola. Terminación en sistema bicapa color rojo, respetando especificaciones técnicas y estándares de acabado profesional. Trabajo realizado bajo los estándares de calidad de Taller Suárez.",
      etiqueta: "TRABAJO DESTACADO",
      trabajo: "Restauración Integral",
      masImagenes: [
        "toyota2000-1",
        "toyota2000-2",
        "toyota2000-3",
        "toyota2000-4",
        "toyota2000-5",
        "toyota2000-6",
        "toyota2000-7",
      ],
    },
  ];

  const estadisticas = [
    {
      id: 1,
      valor: "+3.000",
      unidad: "m2",
      descripcion: "DISTRIBUIDOS EN 3 TALLERES",
    },
    {
      id: 2,
      valor: "+50",
      unidad: "",
      descripcion: "CÁMARAS DE SEGURIDAD",
    },
    {
      id: 3,
      valor: "+50.000",
      unidad: "",
      descripcion: "TRABAJOS PROCESADOS",
    },
    {
      id: 4,
      valor: "+50",
      unidad: "",
      descripcion: "PROVEEDORES RESPALDANDO",
    },
    {
      id: 5,
      valor: "+30",
      unidad: "",
      descripcion: "EMPLEADOS PERMANENTES",
    },
  ];

  return (
    <section className={styles.trabajosSection}>
      <div className={styles.aspectosClaves}>
        <Copy>
          <h2 className={styles.mainTitle}>
            Aspectos claves a atender
            <br />
            en la reparación del automóvil
          </h2>
        </Copy>

        <div className={styles.aspectosGrid}>
          <div className={styles.aspectoItem}>
            <Copy>
              <h3 className={styles.aspectoTitle}>SEGURIDAD</h3>
            </Copy>
            <Copy delay={0.2}>
              <p className={styles.aspectoDesc}>
                Devolver el auto con el mismo nivel de seguridad pasiva y activa
                con los que fue construido.
              </p>
            </Copy>
          </div>

          <div className={styles.aspectoItem}>
            <Copy>
              <h3 className={styles.aspectoTitle}>ESTÉTICA</h3>
            </Copy>
            <Copy delay={0.2}>
              <p className={styles.aspectoDesc}>
                Reestablecer la cualidades de diseño original de brillo, color y
                textura; sin evidenciar que el auto fue intervenido.
              </p>
            </Copy>
          </div>

          <div className={styles.aspectoItem}>
            <Copy>
              <h3 className={styles.aspectoTitle}>FUNCIONALIDAD</h3>
            </Copy>
            <Copy delay={0.2}>
              <p className={styles.aspectoDesc}>
                Devolver a cada uno de los elementos del automóvil su capacidad
                funcional original.
              </p>
            </Copy>
          </div>
        </div>
      </div>

      <FlechaAbajo horizontalPosition={3} />

      <div className={styles.trabajosContainer}>
        <CardSlider
          items={trabajos}
          sliderTitle="Nuestros Trabajos"
          renderItem={(item) => (
            <div className={styles.trabajoCard}>
              <div className={styles.trabajoImageContainer}>
                <CldImage
                  src={item.imagen}
                  alt={item.titulo}
                  width={400}
                  height={300}
                  format="webp"
                  quality="auto"
                  loading="lazy"
                  className={styles.trabajoImage}
                />
              </div>
              <div className={styles.trabajoInfo}>
                <h3 className={styles.trabajoModelo}>{item.titulo}</h3>
                <p className={styles.trabajoAño}>{item.subtitulo || "\u00A0"}</p>
                <p className={styles.trabajoDesc}>{item.trabajo}</p>
              </div>
            </div>
          )}
        />

        <div className={styles.verMasContainer}>
          <Link href="/trabajos" className={styles.verMasBtn}>
            Ver más trabajos
          </Link>
        </div>
      </div>

      <div className={styles.estadisticasSection}>
        <div className={styles.estadisticasContainer}>
          {estadisticas.map((stat) => (
            <div key={stat.id} className={styles.estadisticaItem}>
              <h3 className={styles.estadisticaValor}>
                {stat.valor}
                <span className={styles.estadisticaUnidad}>{stat.unidad}</span>
              </h3>
              <p className={styles.estadisticaDesc}>{stat.descripcion}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NuestrosTrabajos;
