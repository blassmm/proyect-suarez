"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(data) {
  // Lógica del servidor: por ej. usar Nodemailer, Resend, o escribir en la DB

  console.log("Guardando en el servidor:", data); //Esto no consologea en el browser, pero si en la consola del servidor (lo deje para entender la server action)

  try {
    const response = await resend.emails.send({
      from: "Formulario Web <onboarding@resend.dev>", // mejor usar dominio verificado
      to: "montanariblas@hotmail.com",
      subject: "🚀 Nuevo contacto registrado",
      html: `
        <div style="font-family: Inter, Arial, sans-serif; background-color: #0f0f1a; padding: 30px; color: #fff;">
          <div style="max-width: 600px; margin: auto; background: linear-gradient(135deg, #111827, #1f2937); border-radius: 16px; overflow: hidden; box-shadow: 0 8px 25px rgba(0,0,0,0.3);">
            
            <!-- Header -->
            <div style="padding: 30px; text-align: center; border-bottom: 1px solid rgba(255,255,255,0.1);">
              <h1 style="margin: 0; font-size: 28px; background: linear-gradient(90deg,#06b6d4,#3b82f6,#8b5cf6); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">
                Contacto Web
              </h1>
            </div>

            <!-- Body -->
            <div style="padding: 30px; font-size: 16px; line-height: 1.6; color: #e5e7eb;">
              <p>Hola 👋,</p>
              <p>Se ha registrado un nuevo contacto via formulario web:</p>

              <div style="margin-top: 20px; background: #1f2937; padding: 20px; border-radius: 12px; font-family: monospace; color: #93c5fd;">
                <p><strong>Email:</strong> ${data.email}</p>
                <p><strong>Asunto:</strong> ${data.subject}</p>
                <p><strong>Mensaje:</strong> ${data.message}</p>
              </div>

              <p style="margin-top: 20px;">Esta esperando tu respuesta!</p>
            </div>

            <!-- Footer -->
            <div style="padding: 20px; text-align: center; font-size: 14px; color: #9ca3af; border-top: 1px solid rgba(255,255,255,0.1);">
              © ${new Date().getFullYear()} Taller Suarez. Todos los derechos reservados.
            </div>
          </div>
        </div>
      `,
    })

    console.log("✅ Email enviado con Resend:", response)
    return response
  } catch (error) {
    console.error("❌ Error al enviar con Resend:", error)
    throw new Error("No se pudo enviar el email")
  }
}
