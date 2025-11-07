"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "./HomeMision.module.css";

export default function HomeMision() {
  return (
    <section className={styles.misionSection}>
      <div className={styles.diagonalOverlay}></div>
      <div className={styles.backgroundImage}>
        <Image
          src="/images/HomeMision-carImage.webp"
          alt="Audi car"
          fill
          priority
          quality={90}
          sizes="100vw"
          style={{ objectFit: "cover", objectPosition: "center" }}
        />
      </div>

      <div className={styles.misionContent}>
        <div className={styles.decorativeArrows}></div>

        <div className={styles.textContainer}>
          <h2 className={styles.sectionTitle}>Misión y Visión</h2>

          <div className={styles.misionText}>
            <p>
              Nuestra <span className={styles.highlight}>misión</span> va más
              allá de las reparaciones automotrices: nos esforzamos por{" "}
              <span className={styles.highlight}>
                construir una comunidad que comparte una visión común y busca la
                excelencia en cada aspecto de nuestra labor diaria.
              </span>
            </p>
          </div>

          <Link href="/about" className={styles.knowMoreButton}>
            Conocé más
          </Link>
        </div>
      </div>
    </section>
  );
}
