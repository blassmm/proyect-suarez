"use client";
import React from "react";
import styles from "./About.module.css";
import Image from "next/image";

const About = () => {
  return (
    <div className={styles.aboutContainer}>
      <div className={styles.imageHeader}>
        {/* Imagen de cabecera */}
        <Image
          src="/about/3.webp"
          alt="Taller Suarez - Reparación de autos"
          fill
          className={styles.headerImage}
          priority
        />
      </div>

      <section className={styles.misionSection}>
        <h2 className={styles.sectionTitle}>Misión</h2>

        <p className={styles.introText}>
          Nuestra <span className={styles.highlight}>misión</span> va más allá
          de las reparaciones automotrices: nos esforzamos por{" "}
          <span className={styles.highlight}>
            construir una comunidad que comparte una visión común y busca la
            excelencia en cada aspecto de nuestra labor diaria.
          </span>
        </p>

        <p className={styles.paragraph}>
          Nos dedicamos a realizar reparaciones de autos con un{" "}
          <span className={styles.bold}>estándar de calidad excepcional</span>,
          asumiendo plena responsabilidad tanto por el vehículo como por nuestro
          equipo de trabajo. En Taller Suarez, abrazamos la misión de no sólo
          reparar vehículos, sino de{" "}
          <span className={styles.bold}>
            perfeccionar cada detalle con dedicación y precisión
          </span>
          .
        </p>

        <p className={styles.paragraph}>
          Además, nos esforzamos por promover iniciativas que fomenten el
          aprendizaje a través de la experiencia directa, así como mediante
          capacitaciones profesionales a nivel mundial. Creemos en la constante
          evolución y en la importancia de{" "}
          <span className={styles.bold}>
            mantenernos actualizados con las últimas tecnologías y prácticas en
            el mundo del automovilismo
          </span>
          .
        </p>

        <p className={styles.paragraph}>
          Más que un taller, nos consideramos una comunidad interrelacionada con
          valores compartidos. Buscamos crear un ambiente donde la
          <span className={styles.bold}>
            {" "}
            colaboración y el intercambio de conocimientos sean fundamentales
          </span>
          . En Taller Suarez creemos como profesionales y{" "}
          <span className={styles.bold}>
            facilitamos el desarrollo personal de cada miembro de nuestro equipo
          </span>
          .
        </p>
      </section>

      <section className={styles.visionSection}>
        <h2 className={styles.sectionTitle}>Visión</h2>

        <p className={styles.introText}>
          Nuestra visión no solo abarca la excelencia en el presente, sino
          también la{" "}
          <span className={styles.highlight}>
            capacidad de evolucionar y liderar en el futuro de la reparación
            automotriz
          </span>
          .
        </p>

        <p className={styles.paragraph}>
          Nos proyectamos como{" "}
          <span className={styles.bold}>
            líderes indiscutidos en el campo de la reparación automotriz
          </span>
          , abarcando desde vehículos convencionales hasta autos especiales y
          proyectos de restauración. Buscamos destacarnos por la{" "}
          <span className={styles.bold}>
            calidad excepcional de nuestro trabajo, la eficiencia en nuestra
            organización y el aprovechamiento óptimo de recursos profesionales
          </span>
          .
        </p>

        <p className={styles.paragraph}>
          En Taller Suarez, aspiramos a ser referentes en el sector, gestionando
          <span className={styles.bold}>
            {" "}
            nuestras instalaciones con un enfoque siempre a la vanguardia de la
            tecnología
          </span>
          : la modernidad y, crucialmente, el respeto por el medio ambiente.
          Creemos que el liderazgo implica no sólo alcanzar los estándares más
          altos en nuestras operaciones, sino{" "}
          <span className={styles.bold}>
            también abogar por prácticas sostenibles y responsables
          </span>
          .
        </p>

        <p className={styles.paragraph}>
          Nos esforzamos por desarrollar{" "}
          <span className={styles.bold}>
            propuestas de trabajo personalizadas para cada segmento
          </span>
          , manteniendo siempre el más alto estándar de calidad en cada proyecto
          que emprendemos. Desde la reparación de autos de calle hasta la
          restauración de vehículos icónicos, nuestra visión es{" "}
          <span className={styles.bold}>
            ofrecer soluciones que superen las expectativas de nuestros clientes
          </span>
          .
        </p>

        <p className={styles.paragraph}>
          Además, gestionamos cada área de nuestra empresa mediante indicadores
          que miden el rendimiento del negocio. Este{" "}
          <span className={styles.bold}>enfoque estratégico</span> posiciona al
          directorio en una perspectiva clave, permitiéndonos tomar decisiones
          informadas y mantenernos a la vanguardia en la industria automotriz.
        </p>
      </section>

      <section className={styles.compromisosSection}>
        <div className={styles.compromisosBackground}>
          <Image
            src="/about/6.webp"
            alt="Compromisos de la marca"
            fill
            className={styles.compromisosImage}
          />
        </div>
        <div className={styles.compromisosContent}>
          <h2 className={styles.compromisosTitle}>
            Compromisos
            <br />
            de la marca
          </h2>
          <ul className={styles.compromisosList}>
            <li>Alta calidad en reparación</li>
            <li>Celeridad a la gestión de lo trámites</li>
            <li>Enfoque profesional y técnico especializado</li>
            <li>Gestión del conocimiento</li>
          </ul>
        </div>
      </section>

      <section className={styles.staffSection}>
        <p className={styles.paragraph}>
          El taller cuenta con{" "}
          <span className={styles.bold}>más de 30 empleados</span> entre
          técnicos en chapa y pintura, mecánicos encargados de producción,
          recepcionista de repuestos, atención al cliente y administrativos con
          años de experiencia en el rubro.
        </p>

        <p className={styles.paragraph}>
          Colaboran en la capacitación del taller empresas como{" "}
          <span className={styles.bold}>PPG</span> en Arg. y en Milán (Italia),{" "}
          <span className={styles.bold}>BMW</span> Arg,{" "}
          <span className={styles.bold}>Mercedes Benz</span> Arg,{" "}
          <span className={styles.bold}>3M</span> Arg,{" "}
          <span className={styles.bold}>SATA</span> Arg,
          <span className={styles.bold}> Wislander Shield</span> Arg. y{" "}
          <span className={styles.bold}>Cesvi</span> Arg.
        </p>

        <p className={styles.paragraph}>
          Hace más de 10 años, se lleva adelante un programa de RRHH sobre el
          trabajo en equipo.
        </p>

        <div className={styles.partnersLogos}>
          <div className={styles.logoRow}>
            <div className={styles.logo}>
              <Image
                src="/about/1.webp"
                alt="PPG"
                width={70}
                height={35}
                className={styles.logoImage}
              />
            </div>
            <div className={styles.logo}>
              <Image
                src="/about/2.webp"
                alt="3M"
                width={70}
                height={35}
                className={styles.logoImage}
              />
            </div>
            <div className={styles.logo}>
              <Image
                src="/about/4.webp"
                alt="BMW"
                width={70}
                height={35}
                className={styles.logoImage}
              />
            </div>
            <div className={styles.logo}>
              <Image
                src="/about/5.webp"
                alt="SATA"
                width={70}
                height={35}
                className={styles.logoImage}
              />
            </div>
          </div>
          <div className={styles.logoRow}>
            <div className={styles.logo}>
              <Image
                src="/about/7.webp"
                alt="Mercedes-Benz"
                width={70}
                height={35}
                className={styles.logoImage}
              />
            </div>
            <div className={styles.logo}>
              <Image
                src="/about/8.webp"
                alt="WS"
                width={70}
                height={35}
                className={styles.logoImage}
              />
            </div>
            <div className={styles.logo}>
              <Image
                src="/about/9.webp"
                alt="TEROSON"
                width={70}
                height={35}
                className={styles.logoImage}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
