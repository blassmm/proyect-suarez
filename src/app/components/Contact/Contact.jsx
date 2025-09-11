"use client";

import { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import styles from "./Contact.module.css";
import L from "leaflet";

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

// Fix Leaflet marker icon issue in Next.js
const MarkerIcon = () => {
  useEffect(() => {
    // Only fix the icons once the component is mounted on the client
    delete L.Icon.Default.prototype._getIconUrl;
    L.Icon.Default.mergeOptions({
      iconRetinaUrl:
        "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
      iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
      shadowUrl:
        "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
    });
  }, []);

  return null;
};

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

          <h2 className={styles.socialTitle}>Redes sociales</h2>
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
          <MapContainer
            center={position}
            zoom={15}
            scrollWheelZoom={false}
            className={styles.map}
          >
            <MarkerIcon />
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}>
              <Popup>
                <strong>Taller Suarez</strong>
                <br />
                C. 19 N 1794 Esq. 514
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
    </div>
  );
}
