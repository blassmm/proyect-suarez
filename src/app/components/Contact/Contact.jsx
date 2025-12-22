"use client";

import styles from "./Contact.module.css";
import MapComponent from "./MapComponent";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import {
  FaMapMarkerAlt,
  FaWhatsapp,
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

import { sendEmail } from "./actions";

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
    <div className="flex! flex-col! pt-20! md:pt-30! lg:pt-35! p-4! gap-6! min-h-screen! lg:p-12!">
      {/* Contenedor para Mapa y Formulario lado a lado en lg+ */}
      <div className="flex! flex-col! gap-6! w-full! lg:flex-row! lg:gap-8!">
        {/* Mapa - Primero en mobile, derecha en lg+ */}
        <div className="order-1! w-full! h-[400px]! rounded-none! overflow-hidden! shadow-lg! border-2! border-gray-200! md:h-[500px]! lg:order-2! lg:w-1/2! lg:h-[600px]!">
          <MapComponent />
        </div>

        {/* Formulario - Segundo en mobile, izquierda en lg+ */}
        <form
          className="order-2! bg-white! rounded-none! p-6! shadow-lg! w-full! lg:order-1! lg:w-1/2! lg:p-8!"
          onSubmit={handleSubmit(onSubmit)}
        >
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
      </div>

      {/* Info de contacto y socials - Tercero, full width abajo */}
      <div className="bg-white! rounded-none! p-8! shadow-lg! w-full! lg:p-10!">
        <h2 className="text-3xl! font-bold! mb-8! text-gray-900! text-center! lg:text-4xl!">
          Información de Contacto
        </h2>

        {/* Grid de información de contacto */}
        <div className="grid! grid-cols-1! gap-6! mb-10! md:grid-cols-3! md:gap-8!">
          {/* Dirección */}
          <div className="flex! flex-col! items-center! text-center! p-6! rounded-none! bg-gray-50! transition-all! duration-300! hover:bg-teal-50! hover:shadow-md!">
            <div className="flex! items-center! justify-center! w-14! h-14! bg-teal-500! rounded-full! mb-4! shadow-md!">
              <FaMapMarkerAlt className="text-white! text-2xl!" />
            </div>
            <h3 className="font-semibold! text-gray-800! mb-2! text-lg!">
              Dirección
            </h3>
            <p className="text-gray-600! text-sm! leading-relaxed!">
              C. 19 N° 1794 ESQ 514
              <br />
              B1897 Gonnet
              <br />
              Buenos Aires, La Plata
            </p>
          </div>

          {/* WhatsApp */}
          <div className="flex! flex-col! items-center! text-center! p-6! rounded-none! bg-gray-50! transition-all! duration-300! hover:bg-teal-50! hover:shadow-md!">
            <div className="flex! items-center! justify-center! w-14! h-14! bg-slate-700! rounded-full! mb-4! shadow-md!">
              <FaWhatsapp className="text-white! text-2xl!" />
            </div>
            <h3 className="font-semibold! text-gray-800! mb-2! text-lg!">
              WhatsApp
            </h3>
            <a
              href="https://wa.me/5492214956079"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-600! hover:text-teal-700! font-medium! transition-colors!"
            >
              +54 221 495-6079
            </a>
            <a
              href="https://wa.me/5492215991586"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-600! hover:text-teal-700! font-medium! transition-colors!"
            >
              +54 221 599-1586
            </a>
          </div>

          {/* Email */}
          <div className="flex! flex-col! items-center! text-center! p-6! rounded-none! bg-gray-50! transition-all! duration-300! hover:bg-teal-50! hover:shadow-md!">
            <div className="flex! items-center! justify-center! w-14! h-14! bg-teal-500! rounded-full! mb-4! shadow-md!">
              <FaEnvelope className="text-white! text-2xl!" />
            </div>
            <h3 className="font-semibold! text-gray-800! mb-2! text-lg!">
              Email
            </h3>
            <a
              href="mailto:info@tallersuarez.com.ar"
              className="text-teal-600! hover:text-teal-700! font-medium! transition-colors! break-all!"
            >
              info@tallersuarez.com.ar
            </a>
          </div>
        </div>

        {/* Separador */}
        <div className="border-t! border-gray-200! mb-8!"></div>

        {/* Redes Sociales */}
        <div className="flex! flex-col! items-center!">
          <h3 className="text-xl! font-semibold! text-gray-800! mb-6! text-center!">
            Síguenos en Redes Sociales
          </h3>
          <div className="flex! flex-wrap! gap-4! justify-center!">
            <a
              href="https://www.facebook.com/TallerSuarezChapaYPintura"
              target="_blank"
              rel="noopener noreferrer"
              className="flex! items-center! gap-3! px-6! py-3! bg-slate-700! text-white! rounded-none! font-semibold! uppercase! tracking-wide! shadow-md! transition-all! duration-300! hover:bg-slate-800! hover:shadow-lg! hover:-translate-y-1!"
            >
              <FaFacebook className="text-xl!" />
              <span>Facebook</span>
            </a>

            <a
              href="https://www.instagram.com/taller_suarez"
              target="_blank"
              rel="noopener noreferrer"
              className="flex! items-center! gap-3! px-6! py-3! bg-teal-500! text-white! rounded-none! font-semibold! uppercase! tracking-wide! shadow-md! transition-all! duration-300! hover:bg-teal-600! hover:shadow-lg! hover:-translate-y-1!"
            >
              <FaInstagram className="text-xl!" />
              <span>Instagram</span>
            </a>
            <a
              href="https://www.linkedin.com/company/taller-suarez-chapa-y-pintura"
              target="_blank"
              rel="noopener noreferrer"
              className="flex! items-center! gap-3! px-6! py-3! bg-slate-700! text-white! rounded-none! font-semibold! uppercase! tracking-wide! shadow-md! transition-all! duration-300! hover:bg-slate-800! hover:shadow-lg! hover:-translate-y-1!"
            >
              <FaLinkedin className="text-xl!" />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
