"use client";
import React from "react";
import Image from "next/image";
import styles from "./Team.module.css";

const Team = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Gustavo Suarez",
      role: "Socio Director",
      image: "/team-members/member-1.webp",
    },
    {
      id: 2,
      name: "Andrea Keili",
      role: "Socia Directora y Directora de Operaciones Administrativas",
      image: "/team-members/member-2.webp",
    },
    {
      id: 3,
      name: "Lucas Gutierrez",
      role: "Jefe de producción",
      image: "/team-members/member-3.webp",
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
      image: "/team-members/member-5.webp",
    },
  ];

  return (
    <section className={styles.teamSection}>
      <div className={styles.container}>
        <h2 className={styles.title}>Equipo Suarez</h2>
        <p className={styles.subtitle}>Conoce a los expertos detrás de nuestro éxito</p>

        <div className={styles.teamGrid}>
          {teamMembers.map((member) => (
            <div key={member.id} className={styles.teamMember}>
              <div className={styles.imageWrapper}>
                <Image
                  src={member.image}
                  alt={member.name}
                  width={300}
                  height={300}
                  className={styles.memberImage}
                />
              </div>
              <h3 className={styles.memberName}>{member.name}</h3>
              <p className={styles.memberRole}>{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
