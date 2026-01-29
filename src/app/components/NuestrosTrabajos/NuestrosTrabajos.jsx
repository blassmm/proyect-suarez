"use client";
import React from "react";
import Image from "next/image";
import styles from "./NuestrosTrabajos.module.css";
import FlechaAbajo from "../FlechaAbajo/FlechaAbajo";
// import AwardBadge from "../Insignia/AwardBadge";
import Copy from "../Copy/Copy";
import Link from "next/link";
import CardSlider from "../CardSlider";

//ESTE COMPONENTE SE USA SOLO EN EL INICIO-----------------------------------------------------

const NuestrosTrabajos = () => {
  // Datos mapeados al formato del CardSlider
  const trabajos = [
    {
      id: 0,
      imagen: "/trabajos/1.webp",
      titulo: "Alfa Romeo 6C 2500cc",
      subtitulo: "1948",
      descripcion: "2022",
      descripcion2:
        "Se realizó la restauración integral de este Alfa Romeo, a través de un largo proceso, en el que Jorge Martucci líderando la restauración, Héctor y Diego Bustos en la carrocería, Bruno Andreozzi en la tapicería, Cromado Los Primos en los cromados, y todo el equipo de Taller Suarez; lograron revivir la magia de un auto que es una joya casi sin igual en nuestro país.",
      etiqueta: "RESTAURACIÓN PREMIADA",
      trabajo: "Restauración Premiada",
    },
    {
      id: 1,
      imagen: "/nuestros-trabajos/jaguar-pepe/Principal.png",
      titulo: "JAGUAR XK 120 OTS",
      subtitulo: "1953",
      descripcion: "Cliente Pepe Gustavo",
      descripcion2:
        "Restauración completa de la carroceria y chasis de 1500hs de trabajo, equivalente a 7 meses y medio, que incluyó un pelado manual seguido de un arenado. Se conservan todas las piezas originales, las cuales fueron restauradas tanto en chapa como en aluminio, utilizando una bancada de estirado y medición universal con calibres móviles, permitiendo medir las tres dimensiones para lograr un ajuste perfecto. Pintura completa en bicapa, en el color original Pastel Blue. Se trabajó bajo las normas de PPG, con procesos de garantía y productos de alta performance. Trabajo realizado en el año 2024. Trabajo en conjunto, en colaboracion con Diego Bustos en chasis y parte de carroceria, cromados por “Los Primos”, tapicería por Ricardo Martire, mecanica y armado Jorge Martucci",
      // etiqueta: "TRABAJO DESTACADO",
      trabajo: "Restauración Completa",
      masImagenes: [
        "/nuestros-trabajos/jaguar-pepe/1.jpg",
        "/nuestros-trabajos/jaguar-pepe/2.jpg",
        "/nuestros-trabajos/jaguar-pepe/3.jpg",
        "/nuestros-trabajos/jaguar-pepe/4.jpg",
        "/nuestros-trabajos/jaguar-pepe/5.jpg",
        "/nuestros-trabajos/jaguar-pepe/6.jpg",
      ],
    },
    {
      id: 2,
      imagen: "/nuestros-trabajos/car2.webp",
      titulo: "Dodge Charger",
      subtitulo: "1969",
      descripcion: "2024",
      descripcion2:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.",
      etiqueta: "TRABAJO DESTACADO",
      trabajo: "Chapa y pintura",
    },
    {
      id: 3,
      imagen: "/nuestros-trabajos/car3.webp",
      titulo: "Audi A4",
      subtitulo: "2020",
      descripcion: "2024",
      descripcion2:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.",
      etiqueta: "TRABAJO DESTACADO",
      trabajo: "Reparación mecánica",
    },
    {
      id: 4,
      imagen: "/nuestros-trabajos/car4.webp",
      titulo: "BMW M4",
      subtitulo: "2021",
      descripcion: "2025",
      descripcion2:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.",
      etiqueta: "TRABAJO DESTACADO",
      trabajo: "Detailing completo",
    },
    {
      id: 5,
      imagen: "/nuestros-trabajos/car4.webp",
      titulo: "BMW M4",
      subtitulo: "2021",
      descripcion: "2025",
      descripcion2:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.",
      etiqueta: "TRABAJO DESTACADO",
      trabajo: "Detailing completo",
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
                <Image
                  src={item.imagen}
                  alt={item.titulo}
                  width={400}
                  height={300}
                  className={styles.trabajoImage}
                />
              </div>
              <div className={styles.trabajoInfo}>
                <h3 className={styles.trabajoModelo}>{item.titulo}</h3>
                <p className={styles.trabajoAño}>{item.subtitulo}</p>
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
