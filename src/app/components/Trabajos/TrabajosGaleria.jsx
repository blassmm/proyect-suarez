"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./TrabajosGaleria.module.css";
// import { AwardBadge } from "../Insignia";

// Datos de ejemplo para las restauraciones
const trabajosRestauracion = [
  {
    id: 1,
    nombre: "Alfa Romeo 6C",
    modelo: "2500cc (1948)",
    imagenes: ["/trabajos/1.webp"],
    premiado: true,
    anio: "2022",
  },
  {
    id: 2,
    nombre: "Mercedes Benz",
    modelo: "300SL Gullwing (1955)",
    imagenes: ["/trabajos/1.webp"],
    premiado: true,
    anio: "2025",
  },
  {
    id: 3,
    nombre: "Ferrari",
    modelo: "250 GT (1962)",
    imagenes: ["/trabajos/1.webp"],
    premiado: false,
  },
];

const TrabajosGaleria = () => {
  const [activeScene, setActiveScene] = useState("todos");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  // Filtrar trabajos según la escena activa
  const trabajosFiltrados =
    activeScene === "todos"
      ? trabajosRestauracion
      : trabajosRestauracion.filter(
          (trabajo) => trabajo.id.toString() === activeScene
        );

  // Calcular paginación
  const totalPages = Math.ceil(trabajosFiltrados.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const trabajosPaginados = trabajosFiltrados.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  // Cambiar de página
  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className={styles.galeriaContainer}>
      <div className={styles.header}>
        <div className={styles.logo}>
          <h2>Trabajos Premiados</h2>
        </div>
        <div className={styles.navigation}>
          <button
            className={`${styles.navButton} ${
              activeScene === "todos" ? styles.active : ""
            }`}
            onClick={() => {
              setActiveScene("todos");
              setCurrentPage(1);
            }}
          >
            TODOS LOS TRABAJOS
          </button>
          {trabajosRestauracion.map((trabajo) => (
            <button
              key={trabajo.id}
              className={`${styles.navButton} ${
                activeScene === trabajo.id.toString() ? styles.active : ""
              }`}
              onClick={() => {
                setActiveScene(trabajo.id.toString());
                setCurrentPage(1);
              }}
            >
              {trabajo.nombre}
            </button>
          ))}
        </div>
        <div className={styles.actions}>
          <Link href="/" className={styles.backButton}>
            Volver al Inicio
          </Link>
        </div>
      </div>

      <div className={styles.gallery}>
        {trabajosPaginados.flatMap((trabajo) =>
          trabajo.imagenes.map((imagen, index) => (
            <div key={`${trabajo.id}-${index}`} className={styles.galleryItem}>
              <div className={styles.imageContainer}>
                <Image
                  src={imagen}
                  alt={`${trabajo.nombre} ${trabajo.modelo} - Vista ${
                    index + 1
                  }`}
                  width={500}
                  height={300}
                  className={styles.carImage}
                />
                {/* {trabajo.premiado && index === 0 && (
                  <AwardBadge year={trabajo.anio} />
                )} */}
              </div>
              <div className={styles.carInfo}>
                <h3>{trabajo.nombre}</h3>
                <p>{trabajo.modelo}</p>
              </div>
            </div>
          ))
        )}
      </div>

      {totalPages > 1 && (
        <div className={styles.pagination}>
          <button
            className={styles.pageButton}
            onClick={prevPage}
            disabled={currentPage === 1}
          >
            &lt; Página anterior
          </button>
          <button
            className={styles.pageButton}
            onClick={nextPage}
            disabled={currentPage === totalPages}
          >
            Siguiente página &gt;
          </button>
        </div>
      )}
    </div>
  );
};

export default TrabajosGaleria;
