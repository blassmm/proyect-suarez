"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./equipoCompleto.module.css";
import Copy from "../components/Copy/Copy";

const EquipoCompleto = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Gustavo Suarez",
      role: "Socio Director",
      image: "/team-members/member-1.webp",
    },
    {
      id: 2,
      name: "Andrea Keiliff",
      role: "Socia Directora",
      secondaryRole: "Directora de Operaciones Administrativas",
      image: "/team-members/member-2.webp",
    },
    {
      id: 3,
      name: "Lucas Gutierrez",
      role: "Jefe de producción",
      image: "/team-members/member-5.webp",
    },
    {
      id: 4,
      name: "Federico Coniglio",
      role: "Jefe del Sector Pintura",
      image: "/team-members/member-4.webp",
    },
    {
      id: 5,
      name: "Marcelo Pacheco",
      role: "Jefe del taller",
      image: "/team-members/member-3.webp",
    },
  ];

  return (
    <section className={styles.teamSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <Copy>
            <h1 className={styles.title}>Nuestro Equipo</h1>
          </Copy>
          <Copy delay={0.2}>
            <p className={styles.subtitle}>
              Conocé a los profesionales que hacen posible nuestro trabajo
            </p>
          </Copy>
        </div>

        <div className={styles.teamGrid}>
          {teamMembers.map((member, index) => (
            <div key={member.id} className={styles.memberCard}>
              <div className={styles.imageContainer}>
                <Image
                  src={member.image}
                  alt={member.name}
                  width={600}
                  height={600}
                  className={styles.memberImage}
                  priority={index < 3}
                />
              </div>
              <div className={styles.memberInfo}>
                <h3 className={styles.memberName}>{member.name}</h3>
                <p className={styles.memberRole}>{member.role}</p>
                {member.secondaryRole && (
                  <p className={styles.memberSecondaryRole}>
                    {member.secondaryRole}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.sectionTeamEntero}>
        <div className="flex flex-col xl:relative xl:h-[550px] xl:flex-row xl:items-center">
          <div className="relative w-full  h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] xl:h-[600px xl:absolute xl:left-0 xl:z-20 xl:w-[42vw] xl:h-[88%]">
            <Image
              src="/team-members/team-entero.webp"
              alt="Equipo Taller Suárez"
              fill
              className="w-full h-full object-cover"
            />
          </div>

          <div className="bg-[#3eb6a5] text-white relative text-center xl:text-left p-5! xl:absolute xl:right-0 xl:z-10 xl:w-[62vw] xl:h-full">
            <div className="py-12 px-6 sm:py-14 sm:px-8 md:py-16 md:px-10 lg:py-20 lg:px-12 xl:absolute xl:right-[10%] xl:top-1/2 xl:-translate-y-1/2 flex flex-col items-start xl:items-end">
              <p className="text-lg sm:text-xl md:text-2xl lg:text-2xl font-medium leading-relaxed mb-6 sm:mb-7 md:mb-8 italic xl:text-right xl:max-w-2xl">
                "De todos los valores que hoy garantizan la calidad de Taller
                Suárez, el capital humano es, desde nuestros inicios, el más
                importante"
              </p>
              <p className="mx-auto! sm:text-lg md:text-lg font-light opacity-90">
                Gustavo Suarez | Socio Director
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.backButton}>
        <Link href="/">
          <button>Volver al inicio</button>
        </Link>
      </div>
    </section>
  );
};

export default EquipoCompleto;
