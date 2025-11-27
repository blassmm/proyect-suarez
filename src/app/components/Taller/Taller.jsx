"use client";
import React from "react";
import Image from "next/image";
import styles from "./Taller.module.css";

const Taller = () => {
  return (
    <div className={styles.tallerContainer}>
      <header className="w-auto! object-cover h-[20vh]! relative! mt-15! sm:mt-18! md:mt-24!">
        <div className=" w-full! h-full!">
          <Image
            src="/taller/taller-header.webp"
            alt="Taller Suarez - Chapa y Pintura"
            fill
            style={{
              objectFit: "cover",
              objectPosition: "60% 30%",
            }}
            priority
          />
        </div>
      </header>

      <section className={styles.infoSection}>
        <h2 className={styles.sectionTitle}>El taller</h2>

        <p className={styles.paragraph}>
          Actualmente funcionamos en{" "}
          <strong>3 talleres con más 3000mts²</strong> dedicados a la reparación
          de vehículos.
        </p>

        <p className={styles.paragraph}>
          Estos edificios de construcción sólida y segura fueron destinados
          desde su concepción para la actividad de reparación de autos con una
          diagramación funcional que{" "}
          <span className={styles.highlight}>
            optimiza los tiempos de procesos
          </span>
          . Cuentan con sistema de{" "}
          <span className={styles.highlight}>alarma</span> monitoreado,{" "}
          <span className={styles.highlight}>pólizas de seguro especial</span>{" "}
          para nuestra actividad y{" "}
          <span className={styles.highlight}>cámaras de seguridad</span> de
          filmación 24 horas.
        </p>
      </section>

      <section className={styles.quoteSection}>
        <div className={styles.quoteContent}>
          <blockquote className={styles.quote}>
            "Garantizamos que nuestros trabajos son realizados bajo procesos y
            esquemas preestablecidos, con herramientas y productos homologados
            por las principales terminales automotrices"
          </blockquote>
          <p className={styles.quoteAuthor}>Gustavo Suarez | Socio Gerente</p>
        </div>
      </section>

      <section className={styles.tallerLocationsSection}>
        <article className={styles.tallerLocation}>
          <div className={styles.locationImage}>
            <Image
              src="/taller/1.webp"
              alt="Taller de 514"
              width={500}
              height={300}
              className={styles.locationImg}
            />
          </div>
          <div className={styles.locationInfo}>
            <p className={styles.locationAddress}>19 y 514 - 1200m²</p>
            <h3 className={styles.locationTitle}>Taller de 514</h3>
            <p className={styles.locationSubtitle}>
              Administración y Terminaciones
            </p>
            <ul className={styles.locationFeatures}>
              <li>Atención al cliente</li>
              <li>Elaboración de presupuestos</li>
              <li>Gestión de trámites</li>
              <li>Recepción de vehículos</li>
              <li>Espacios para inspecciones de compañías</li>
              <li>Áreas de detailing y terminación</li>
              <li>Administración integral</li>
              <li>Sala de capacitaciones y reuniones</li>
            </ul>
          </div>
        </article>

        <article className={styles.tallerLocation}>
          <div className={styles.locationImage}>
            <Image
              src="/taller/2.webp"
              alt="Taller de 516 - Circuitos de Producción"
              width={500}
              height={300}
              className={styles.locationImg}
            />
          </div>
          <div className={styles.locationInfo}>
            <p className={styles.locationAddress}>
              19 n°1565 e/ 516 y 517 - 1500m²
            </p>
            <h3 className={styles.locationTitle}>Taller de 516</h3>
            <p className={styles.locationSubtitle}>Circuitos de Producción</p>
            <ul className={styles.locationFeatures}>
              <li>Almacén de repuestos</li>
              <li>Laboratorio de colores</li>
              <li>Cabinas y plano aspirante</li>
              <li>
                Circuito de producción de chapa{" "}
                <span className={styles.smallText}>
                  (desarme, reparación de plásticos y armado)
                </span>{" "}
                y pintura{" "}
                <span className={styles.smallText}>
                  (empapelado, lijado, preparación de pintura, aplicación de
                  color y secado)
                </span>
              </li>
            </ul>
          </div>
        </article>

        <article className={styles.tallerLocation}>
          <div className={styles.locationImage}>
            <Image
              src="/taller/3.webp"
              alt="Taller de 516 - Trabajos especiales y cochera"
              width={500}
              height={300}
              className={styles.locationImg}
            />
          </div>
          <div className={styles.locationInfo}>
            <p className={styles.locationAddress}>
              8 n°1434 esquina 517 bis - 500m²
            </p>
            <h3 className={styles.locationTitle}>Taller de 516</h3>
            <p className={styles.locationSubtitle}>
              Trabajos especiales y cochera
            </p>
            <ul className={styles.locationFeatures}>
              <li>Limpieza criogénica</li>
              <li>Detailing</li>
              <li>Guardado de vehículos</li>
            </ul>
          </div>
        </article>
      </section>

      <section className={styles.homologadoSection}>
        <div className={styles.homologadoContent}>
          <div className={styles.homologadoImage}>
            <Image
              src="/taller/4.webp"
              alt="Taller Homologado para pasantías"
              width={400}
              height={500}
              className={styles.homologadoImg}
            />
          </div>
          <div className={styles.homologadoInfo}>
            <h3 className={styles.homologadoTitle}>
              Taller Homologado
              <br />
              para pasantías
            </h3>

            <p className={styles.paragraph}>
              Esta certificación necesaria para ofrecer oportunidades de
              pasantías, es testimonio de nuestro{" "}
              <span className={styles.bold}>
                compromiso con los más altos estándares de calidad y seguridad
                en el ámbito de la reparación automotriz
              </span>
              .
            </p>

            <p className={styles.paragraph}>
              En nuestro taller, brindamos a los pasantes la oportunidad única
              de
              <span className={styles.bold}>
                {" "}
                adquirir experiencia práctica en un entorno profesional y
                dinámico
              </span>
              . Estamos comprometidos con el{" "}
              <span className={styles.bold}>
                desarrollo de nuevos talentos
              </span>{" "}
              en la industria automotriz, proporcionando a los pasantes un
              acceso directo a las últimas tecnologías y técnicas en reparación
              de chapa y pintura.
            </p>

            <p className={styles.paragraph}>
              Además de la formación técnica, fomentamos un{" "}
              <span className={styles.bold}>
                ambiente de trabajo colaborativo
              </span>{" "}
              donde los pasantes pueden interactuar con profesionales
              experimentados, aprender las mejores prácticas de la industria y
              desarrollar habilidades esenciales para su futura carrera.
            </p>

            <p className={styles.homologadoHighlight}>
              Nuestro taller homologado se esfuerza por ser un espacio educativo
              que no solo se centra en la excelencia técnica, sino también en el
              crecimiento personal y profesional de cada pasante.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Taller;
