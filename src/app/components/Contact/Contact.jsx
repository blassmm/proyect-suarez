"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import styles from "./Contact.module.css";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import {
  FaMapMarkerAlt,
  FaWhatsapp,
  FaEnvelope,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";

import { sendEmail } from "./actions";

// Cargando el mapa dinámicamente solo en el cliente
const MapComponent = dynamic(
  () => import("./MapComponent").then((mod) => mod.default),
  {
    ssr: false, // No renderizar en el servidor
    loading: () => <div className={styles.mapLoading}>Cargando mapa...</div>,
  }
);

const schema = z.object({
  email: z.email("Debe ser un email válido"),
  subject: z
    .string()
    .min(3, "Mínimo 3 caracteres")
    .max(50, "Max 50 caracteres"),
  message: z
    .string()
    .min(10, "Mínimo 10 caracteres")
    .max(500, "Max 500 caracteres"),
});

export default function Contact() {
  // Map position
  const position = [-34.8966957, -58.0030307]; // Argentina coordinates

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      await sendEmail(data);
      console.log("✅ Email enviado correctamente");
      reset(); // Reset form after successful submission
    } catch (error) {
      console.error(error);
      console.log("❌ Error al enviar el email");
    }
  };

  return (
    <div className={styles.contactContainer}>
      <form className={styles.contactForm} onSubmit={handleSubmit(onSubmit)}>
        <h2 className={styles.formTitle}>Contáctanos</h2>

        <div className={styles.formGroup}>
          <label className={styles.formLabel}>Email</label>
          <input
            type="email"
            className={styles.formInput}
            placeholder="tu@email.com"
            {...register("email")}
          />
          {errors.email && (
            <p className={styles.errorMessage}>{errors.email.message}</p>
          )}
        </div>

        <div className={styles.formGroup}>
          <label className={styles.formLabel}>Asunto</label>
          <input
            type="text"
            className={styles.formInput}
            placeholder="¿En qué podemos ayudarte?"
            {...register("subject")}
          />
          {errors.subject && (
            <p className={styles.errorMessage}>{errors.subject.message}</p>
          )}
        </div>

        <div className={styles.formGroup}>
          <label className={styles.formLabel}>Tu mensaje</label>
          <textarea
            className={styles.formTextarea}
            placeholder="Escribe tu mensaje aquí..."
            {...register("message")}
            rows="4"
          />
          {errors.message && (
            <p className={styles.errorMessage}>{errors.message.message}</p>
          )}
        </div>

        <button type="submit" className={styles.submitButton}>
          Enviar mensaje
        </button>
      </form>

      <div className={styles.contactInfoAndMap}>
        <div className={styles.contactInfo}>
          <h1>Contacto</h1>

          <div className={styles.infoItemsContainer}>
            <div className={styles.infoItem}>
              <FaMapMarkerAlt className={styles.infoIcon} />
              <div className={styles.infoContent}>
                <span>Dirección:</span> C. 19 N 1794 Esq. 514
              </div>
            </div>

            <div className={styles.infoItem}>
              <FaWhatsapp className={styles.infoIcon} />
              <div className={styles.infoContent}>
                <span>WhatsApp:</span> 221 495-6079
              </div>
            </div>

            <div className={styles.infoItem}>
              <FaEnvelope className={styles.infoIcon} />
              <div className={styles.infoContent}>
                <span>Email:</span> info@tallersuarez.com.ar
              </div>
            </div>
          </div>

          <div className={styles.socialLinks}>
            <a
              href="https://www.facebook.com/TallerSuarezChapaYPintura"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
            >
              <FaFacebook className={styles.socialIcon} />
              <span>/TallerSuarezChapaYPintura</span>
            </a>

            <a
              href="https://www.instagram.com/taller.suarez"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
            >
              <FaInstagram className={styles.socialIcon} />
              <span>@taller.suarez</span>
            </a>
          </div>
        </div>

        <div className={styles.mapContainer}>
          <MapComponent position={position} />
        </div>
      </div>
    </div>
  );
}
