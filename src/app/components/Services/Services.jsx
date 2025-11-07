"use client";

import Image from "next/image";
import styles from "./Services.module.css";

export default function Services() {
  return (
    <section className={styles.servicesSection}>
      <div className={styles.decorativeDots}></div>
      <div className={styles.decorativeArrows}></div>
      <div className={styles.servicesContent}>
        <div className={styles.servicesLayout}>
          <div className={styles.servicesHeader}>
            <p className={styles.serviceDescription}>
              Con más de 35 años en el mercado, lideramos como taller modelo a
              nivel mundial. Tenemos el respaldo de un gran equipo de
              profesionales que trabaja día a día para lograr la perfección en
              cada proceso abordado.
            </p>
          </div>

          <div className={styles.servicesGrid}>
            <div className={styles.serviceCard}>
              <div className={styles.serviceIconContainer}>
                <Image
                  src="/icons/icon-tools.png"
                  alt="Equipamiento de vanguardia"
                  width={80}
                  height={80}
                  className={styles.serviceIcon}
                />
              </div>
              <h3 className={styles.serviceTitle}>Equipamiento</h3>
              <h3 className={styles.serviceTitle}>de vanguardia</h3>
            </div>

            <div className={styles.serviceCard}>
              <div className={styles.serviceIconContainer}>
                <Image
                  src="/icons/icon-time.png"
                  alt="Alta velocidad en reparaciones"
                  width={80}
                  height={80}
                  className={styles.serviceIcon}
                />
              </div>
              <h3 className={styles.serviceTitle}>Alta velocidad</h3>
              <h3 className={styles.serviceTitle}>en reparaciones</h3>
            </div>

            <div className={styles.serviceCard}>
              <div className={styles.serviceIconContainer}>
                <Image
                  src="/icons/icon-profile.png"
                  alt="Profesionalismo y trato personalizado"
                  width={80}
                  height={80}
                  className={styles.serviceIcon}
                />
              </div>
              <h3 className={styles.serviceTitle}>Profesionalismo y</h3>
              <h3 className={styles.serviceTitle}>trato personalizado</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
