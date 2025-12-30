"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./Crecimiento.module.css";
// import { AwardBadge } from "../Insignia";

const Crecimiento = () => {
  const [activeDecade, setActiveDecade] = useState("1980");
  const [isSticky, setIsSticky] = useState(false);
  const navRef = React.useRef(null);
  const navOffsetRef = React.useRef(0);
  const decades = ["1980", "1990", "2000", "2010", "2020"];

  useEffect(() => {
    if (navRef.current) {
      navOffsetRef.current = navRef.current.offsetTop;
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const decadeElements = decades.map((decade) =>
        document.getElementById(`decade-${decade}`)
      );

      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (let i = decadeElements.length - 1; i >= 0; i--) {
        const element = decadeElements[i];
        if (element && element.offsetTop <= scrollPosition) {
          setActiveDecade(decades[i]);
          break;
        }
      }

      const currentScroll = window.scrollY;
      if (currentScroll >= navOffsetRef.current - 80) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToDecade = (decade) => {
    const element = document.getElementById(`decade-${decade}`);
    if (element) {
      const offset = isSticky ? 180 : 100;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className={`${styles.crecimientoContainer} mt-9! sm:mt-15!`}>
      <section className={styles.headerSection}>
        <h1 className={styles.mainTitle}>
          Nuestro crecimiento
          <br />
          en el tiempo
        </h1>
      </section>

      <section className={styles.timelineSection}>
        {/* Navegación interactiva de décadas */}
        <nav
          ref={navRef}
          className={`${styles.decadeNavigation} ${
            isSticky ? styles.sticky : ""
          }`}
        >
          <div className={styles.decadeNavContainer}>
            {decades.map((decade) => (
              <button
                key={decade}
                onClick={() => scrollToDecade(decade)}
                className={`${styles.decadeNavButton} ${
                  activeDecade === decade ? styles.active : ""
                }`}
                aria-label={`Ir a la década de ${decade}`}
              >
                <span className={styles.decadeNavYear}>{decade}</span>
                <span className={styles.decadeNavIndicator}></span>
              </button>
            ))}
          </div>
        </nav>

        {isSticky && <div className={styles.navSpacer}></div>}
        {/* 1980 */}
        <div id="decade-1980" className={styles.decadeMarker}>
          <h2 className={styles.decadeTitle}>1980</h2>
          <div className={styles.timelineLine}></div>
          <div className={styles.timelineArrow}></div>
        </div>

        <div className={styles.timelineEvent}>
          <div className={styles.yearMarker}>1985</div>
          <div className={styles.eventContent}>
            <h3 className={styles.eventTitle}>
              Tras años de experiencia en reparación de autos, forjada en un
              ambiente familiar, Taller Suarez inicia su actividad.
            </h3>
          </div>
        </div>

        <div className={styles.timelineEvent}>
          <div className={styles.yearMarker}>1988</div>
          <div className={styles.eventContent}>
            <h3 className={styles.eventText}>
              Visita de Emilio De Luca del{" "}
              <span className={styles.highlight}>
                European Autobody Toronto
              </span>{" "}
              (Canadá), Taller Oficial de{" "}
              <span className={styles.highlight}>Ferrari</span> y{" "}
              <span className={styles.highlight}>BMW</span>.
            </h3>
          </div>
        </div>

        {/* 1990 */}
        <div id="decade-1990" className={styles.decadeMarker}>
          <h2 className={styles.decadeTitle}>1990</h2>
          <div className={styles.timelineLine}></div>
          <div className={styles.timelineArrow}></div>
        </div>

        <div className={styles.timelineEvent}>
          <div className={styles.yearMarker}>1991</div>
          <div className={styles.eventContent}>
            <h3 className={styles.eventText}>
              Incorporación de materiales de sistema de pintura 2K.
            </h3>
          </div>
        </div>

        <div className={styles.timelineEvent}>
          <div className={styles.yearMarker}>1993</div>
          <div className={styles.eventContent}>
            <h3 className={styles.eventText}>
              Curso de Cesvi Map España, dictado en Arg.
            </h3>
          </div>
        </div>

        <div className={styles.timelineEvent}>
          <div className={styles.yearMarker}>1994</div>
          <div className={styles.eventContent}>
            <h3 className={styles.eventText}>
              Incorporación del Sistema Mixing Glasurit Basf.
            </h3>
          </div>
        </div>

        <div className={styles.timelineEvent}>
          <div className={styles.yearMarker}>1995</div>
          <div className={styles.eventContent}>
            <h3 className={styles.eventText}>
              Elegido "Taller referente de la región" tras visita de autoridades
              de CESVI Argentina.
            </h3>
          </div>
        </div>

        <div className={styles.timelineEvent}>
          <div className={styles.yearMarker}>1996</div>
          <div className={styles.eventContent}>
            <h3 className={styles.eventText}>
              Inicio de relación comercial con PPG Industries INC. Incorporación
              de bancada de estirado de autos Spanesi
            </h3>
          </div>
        </div>

        <div className={styles.timelineEvent}>
          <div className={styles.yearMarker}>1997</div>
          <div className={styles.eventContent}>
            <h3 className={styles.eventText}>
              Taller Colaborador de CESVI Argentina. Feria del automotor en
              NACE-Las Vegas, Invitados por PPG.
            </h3>
          </div>
        </div>

        <div className={styles.timelineEvent}>
          <div className={styles.yearMarker}>1998</div>
          <div className={styles.eventContent}>
            <h3 className={styles.eventText}>
              Elegido 3° puesto como "Mejor Taller del País" por CESVI Arg.
            </h3>
            <h3 className={styles.eventText}>
              Inauguración del Taller en 19 y 516
            </h3>
          </div>
        </div>

        <div className={styles.timelineEvent}>
          <div className={styles.yearMarker}>1999</div>
          <div className={styles.eventContent}>
            <h3 className={styles.eventText}>
              Elegido 2° puesto como "Mejor Taller del País" por CESVI Arg.
            </h3>
            <h3 className={styles.eventText}>
              Desarrollo y puesta en marcha del programa MVP Mayor Velocidad y
              Performance de PPG.
            </h3>
          </div>
        </div>

        {/* 2000 */}
        <div id="decade-2000" className={styles.decadeMarker}>
          <h2 className={styles.decadeTitle}>2000</h2>
          <div className={styles.timelineLine}></div>
          <div className={styles.timelineArrow}></div>
        </div>

        <div className={styles.timelineEvent}>
          <div className={styles.yearMarker}>2000</div>
          <div className={styles.eventContent}>
            <h3 className={styles.eventText}>
              Elegido "Mejor Taller del País" por CESVI Arg. y premiado con
              capacitaciones en España y Francia.
            </h3>
          </div>
        </div>

        <div className={styles.timelineEvent}>
          <div className={styles.yearMarker}>2002</div>
          <div className={styles.eventContent}>
            <h3 className={styles.eventText}>
              Se incorpora el servicio de blindado de automotores.
            </h3>
          </div>
        </div>

        <div className={styles.timelineEvent}>
          <div className={styles.yearMarker}>2003</div>
          <div className={styles.eventContent}>
            <h3 className={styles.eventText}>
              Ampliación de las instalaciones y producción: 600m² con nuevas
              cabinas de pintura y bancos para chapistas.
            </h3>
          </div>
        </div>

        <div className={styles.timelineEvent}>
          <div className={styles.yearMarker}>2004</div>
          <div className={styles.eventContent}>
            <h3 className={styles.eventText}>
              Incorporación de tecnología para nuevas carrocerías de acero
              especiales, aluminio y otros materiales.
            </h3>
          </div>
        </div>

        <div className={styles.timelineEvent}>
          <div className={styles.yearMarker}>2008</div>
          <div className={styles.eventContent}>
            <h3 className={styles.eventText}>
              1° taller en Sudamérica en aplicar la nueva tecnología en pinturas
              de base acuosa PPG ENVIROBASE.
            </h3>
          </div>
        </div>

        {/* 2010 */}
        <div id="decade-2010" className={styles.decadeMarker}>
          <h2 className={styles.decadeTitle}>2010</h2>
          <div className={styles.timelineLine}></div>
          <div className={styles.timelineArrow}></div>
        </div>

        <div className={styles.timelineEvent}>
          <div className={styles.yearMarker}>2010</div>
          <div className={styles.eventContent}>
            <h3 className={styles.eventText}>
              Feria Automechanika de Frankfurt. Capacitaciones en centro de
              entrenamiento de PPG en Milán (Italia). Visita a talleres de chapa
              y pintura de{" "}
              <span className={styles.highlight}>
                Lamborghini "Taller Imperiale"
              </span>{" "}
              y de <span className={styles.highlight}>Alfa Romeo</span> y{" "}
              <span className={styles.highlight}>
                Maserati "Taller Nova GM"
              </span>{" "}
              en Módena (Italia).
            </h3>
          </div>
        </div>

        <div className={styles.timelineEvent}>
          <div className={styles.yearMarker}>2011</div>
          <div className={styles.eventContent}>
            <h3 className={styles.eventText}>
              Auto premiado Best of Show en Autoclásica.
              <br />
              Jaguar Drophead coupé (1947).
            </h3>

            <div className={styles.awardContainer}>
              {/* <div className={styles.badgePosition}>
                <AwardBadge year="2011" position="left" />
              </div> */}
              <div className={styles.awardCard}>
                <div className={styles.awardHeader}>
                  <span className={styles.awardTitle}>
                    2011 - RESTAURACIÓN PREMIADA
                  </span>
                </div>
                <h4 className={styles.awardCarName}>
                  Jaguar Drophead Coupé{" "}
                  <span className={styles.awardCarYear}>(1947)</span>
                </h4>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.timelineEvent}>
          <div className={styles.yearMarker}>2013</div>
          <div className={styles.eventContent}>
            <h3 className={styles.eventText}>
              Visita a la planta{" "}
              <span className={styles.highlight}>Volkswagen</span> Arg.
              produciendo Amarok.
              <br />
              Visita a la planta de pintura de{" "}
              <span className={styles.highlight}>Ferrari</span> en Módena
              (Italia), el Museo, la Fábrica y la Pista de Pruebas con personal
              de PPG.
            </h3>
          </div>
        </div>

        <div className={styles.timelineEvent}>
          <div className={styles.yearMarker}>2014</div>
          <div className={styles.eventContent}>
            <h3 className={styles.eventText}>
              Instalación de Cabinas de Pintura de alta performance. Nuevo
              layout del circuito de producción para mayor eficiencia
            </h3>
          </div>
        </div>

        <div className={styles.timelineEvent}>
          <div className={styles.yearMarker}>2015</div>
          <div className={styles.eventContent}>
            <h3 className={styles.eventText}>
              Invitación de PPG para capacitación en el{" "}
              <span className={styles.highlight}>"Taller Manhattan"</span> de{" "}
              <span className={styles.highlight}>Mercedes Benz</span> en Nueva
              York y <span className={styles.highlight}>"Taller Prestige"</span>{" "}
              de <span className={styles.highlight}>BMW</span> en Nueva Jersey
              (EE.UU.) Invitación de 3M para conocer procesos de aplicación de
              sus productos en talleres referentes de EE.UU.
            </h3>
          </div>
        </div>

        <div className={styles.timelineEvent}>
          <div className={styles.yearMarker}>2016</div>
          <div className={styles.eventContent}>
            <h3 className={styles.eventText}>
              Taller elegido por 3M como representantes en Argentina, para
              capacitación en Minnesota.
              <br />
              Viaje a Alemania{" "}
              <span className={styles.highlight}>Stuttgart</span> y{" "}
              <span className={styles.highlight}>Munich</span>
              <br />
              Capacitación en empresa{" "}
              <span className={styles.highlight}>SATA</span>, fábrica de
              pistolas especializadas para pintura de vehículos.
              <br />A <span className={styles.highlight}>Wislander+Schtil</span>
              , herramientas homologadas Professional body Shop Tools.
              <br />
              Visita a museo{" "}
              <span className={styles.highlight}>
                BMW, Mercedes Benz, Porsche
              </span>{" "}
              y <span className={styles.highlight}>Motorworld</span>.
            </h3>
          </div>
        </div>

        <div className={styles.timelineEvent}>
          <div className={styles.yearMarker}>2017</div>
          <div className={styles.eventContent}>
            <h3 className={styles.eventText}>
              Inicia obra del Taller en 19 y 514.
              <br />
              Capacitación en el Centro de Entrenamiento de PPG, Iberia,
              Barcelona (Esp.)
            </h3>
          </div>
        </div>

        <div className={styles.timelineEvent}>
          <div className={styles.yearMarker}>2018</div>
          <div className={styles.eventContent}>
            <h3 className={styles.eventText}>
              Visita a talleres de New York y New Jersey como invitados de 3M
              (EE.UU.)
            </h3>
          </div>
        </div>

        <div className={styles.timelineEvent}>
          <div className={styles.yearMarker}>2019</div>
          <div className={styles.eventContent}>
            <h3 className={styles.eventText}>
              Invitación a la presentación de la máquina MoonWalk PPG, San Pablo
              (Brasil)
              <br />
              Inauguración del 2° taller en 19 y 514.
            </h3>
          </div>
        </div>

        {/* 2020 */}
        <div id="decade-2020" className={styles.decadeMarker}>
          <h2 className={styles.decadeTitle}>2020</h2>
          <div className={styles.timelineLine}></div>
          <div className={styles.timelineArrow}></div>
        </div>

        <div className={styles.timelineEvent}>
          <div className={styles.yearMarker}>2020</div>
          <div className={styles.eventContent}>
            <h3 className={styles.eventText}>
              Inicio de la división "Autos Especiales"
            </h3>
          </div>
        </div>

        <div className={styles.timelineEvent}>
          <div className={styles.yearMarker}>2022</div>
          <div className={styles.eventContent}>
            <h3 className={styles.eventText}>
              Auto premiado 2° Best of Show en Autoclásica.
              <br />
              Alfa Romeo 6C 2500cc (1948)
            </h3>

            <div className={styles.carImageWrapper}>
              <div className={styles.carImageContainer}>
                <div className={styles.awardCarImage}>
                  <Image
                    src="/crecimiento/1.webp"
                    alt="Alfa Romeo 6C 2500cc (1948)"
                    fill
                    className={styles.carFullImage}
                  />
                </div>
              </div>

              <div className={styles.awardOverlayStandalone}>
                <div className={styles.awardBadge}>
                  <Image
                    src="/crecimiento/1.webp"
                    alt="Premio Best of Show 2022"
                    width={40}
                    height={40}
                    className={styles.awardBadgeImg}
                  />
                </div>
                <div className={styles.awardInfo}>
                  <span className={styles.awardYear}>
                    2022 - RESTAURACIÓN PREMIADA
                  </span>
                  <h4 className={styles.carName}>
                    Alfa Romeo 6C 2500cc{" "}
                    <span className={styles.carYear}>(1948)</span>
                  </h4>
                </div>
              </div>
            </div>

            <h3 className={styles.eventText} style={{ marginTop: "20px" }}>
              Capacitación White Belt Arg. MVP PPG.
              <br />
              Puesta en valor y en funcionamiento del taller inicial en 8 y 517
              Bis.
            </h3>
          </div>
        </div>

        <div className={styles.timelineEvent}>
          <div className={styles.yearMarker}>2023</div>
          <div className={styles.eventContent}>
            <h3 className={styles.eventText}>
              Participación en la 6ta edición de Classic Park en el Hipódromo
              del Highland Park Country Club Argentina, con la presentación de
              la restauración de los autos{" "}
              <span className={styles.highlight}>BMW M1 1978</span> y{" "}
              <span className={styles.highlight}>Mercedes-Benz 190 2.5</span>
            </h3>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Crecimiento;
