"use client";
import React from "react";
import Image from "next/image";
import styles from "./NuestrosTrabajos.module.css";
import FlechaAbajo from "../FlechaAbajo/FlechaAbajo";

const NuestrosTrabajos = () => {
  const trabajos = [
    {
      id: 1,
      imagen: "/nuestros-trabajos/car1.webp",
      modelo: "Modelo auto",
      año: "Año",
      trabajo: "Trabajo realizado",
    },
    {
      id: 2,
      imagen: "/nuestros-trabajos/car2.webp",
      modelo: "Modelo auto",
      año: "Año",
      trabajo: "Trabajo realizado",
    },
    {
      id: 3,
      imagen: "/nuestros-trabajos/car3.webp",
      modelo: "Modelo auto",
      año: "Año",
      trabajo: "Trabajo realizado",
    },
    {
      id: 4,
      imagen: "/nuestros-trabajos/car4.webp",
      modelo: "Modelo auto",
      año: "Año",
      trabajo: "Trabajo realizado",
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
        <h2 className={styles.mainTitle}>
          Aspectos claves a atender
          <br />
          en la reparación del automóvil
        </h2>

        <div className={styles.aspectosGrid}>
          <div className={styles.aspectoItem}>
            <h3 className={styles.aspectoTitle}>SEGURIDAD</h3>
            <p className={styles.aspectoDesc}>
              Devolver el auto con el mismo nivel de seguridad pasiva y activa
              con los que fue construido.
            </p>
          </div>

          <div className={styles.aspectoItem}>
            <h3 className={styles.aspectoTitle}>ESTÉTICA</h3>
            <p className={styles.aspectoDesc}>
              Reestablecer la cualidades de diseño original de brillo, color y
              textura; sin evidenciar que el auto fue intervenido.
            </p>
          </div>

          <div className={styles.aspectoItem}>
            <h3 className={styles.aspectoTitle}>FUNCIONALIDAD</h3>
            <p className={styles.aspectoDesc}>
              Devolver a cada uno de los elementos del automóvil su capacidad
              funcional original.
            </p>
          </div>
        </div>
      </div>

      <FlechaAbajo horizontalPosition={3} />

      <div className={styles.trabajosContainer}>
        <h2 className={styles.trabajosTitle}>Nuestros Trabajos</h2>

        <div className={styles.trabajosGrid}>
          {trabajos.map((trabajo) => (
            <div key={trabajo.id} className={styles.trabajoCard}>
              <div className={styles.trabajoImageContainer}>
                <Image
                  src={trabajo.imagen}
                  alt={trabajo.modelo}
                  width={400}
                  height={300}
                  className={styles.trabajoImage}
                />
              </div>
              <div className={styles.trabajoInfo}>
                <h3 className={styles.trabajoModelo}>{trabajo.modelo}</h3>
                <p className={styles.trabajoAño}>{trabajo.año}</p>
                <p className={styles.trabajoDesc}>{trabajo.trabajo}</p>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.verMasContainer}>
          <button className={styles.verMasBtn}>Ver más trabajos</button>
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
