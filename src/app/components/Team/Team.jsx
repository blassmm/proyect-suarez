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
      name: "Andrea Keiliff",
      role: "Socia Directora",
      secondaryRole: "Directora de Operaciones Administrativas",
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
        <div className={styles.featuredTeamGrid}>
          {teamMembers.slice(0, 2).map((member) => (
            <div key={member.id} className={styles.featuredMember}>
              <div className={styles.imageContainer}>
                <Image
                  src={member.image}
                  alt={member.name}
                  width={600}
                  height={600}
                  className={styles.memberImage}
                  priority
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
        <div className={styles.ctaButton}>
          <button>Conocé al resto del equipo</button>
        </div>
      </div>
    </section>
  );
};

export default Team;
