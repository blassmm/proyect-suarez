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


      <div className={`${styles.sectionTeamEntero} w-full border-4 border-red-500`}>
        <div className="flex flex-col md:relative md:h-[450px] lg:h-[500px] xl:h-[550px] md:flex-row md:items-center">
          <div className="relative w-full h-auto md:absolute md:left-0 md:z-20 md:w-[50vw] lg:w-[45vw] xl:w-[42vw] md:h-[80%] lg:h-[85%] xl:h-[88%] overflow-hidden">
            <Image
              src="/team-members/team-entero.webp"
              alt="Equipo Taller Suárez"
              width={1200}
              height={600}
              className="w-full h-full object-cover md:object-cover"
            />
          </div>

          <div className="bg-[#3eb6a5] text-white relative md:absolute md:right-0 md:z-10 md:w-[70vw] lg:w-[65vw] xl:w-[62vw] md:h-full">
            <div className="py-8 px-5 md:absolute md:right-[10%] md:top-1/2 md:-translate-y-1/2 flex flex-col items-start md:items-end">
              <p className="text-base sm:text-lg md:text-xl font-medium md:items-end leading-relaxed text-center md:text-right mb-4 md:mb-6 italic max-w-2xl">
                "De todos los valores que hoy garantizan la calidad de Taller
                Suárez, el capital humano es, desde nuestros inicios, el más
                importante"
              </p>
              <p className="text-sm md:text-base font-light text-left md:text-right opacity-85">
                Gustavo Suarez · Socio Gerente
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
