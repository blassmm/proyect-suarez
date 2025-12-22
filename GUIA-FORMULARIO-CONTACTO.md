# Guía: Formulario de Contacto con Next.js

## Stack Tecnológico

- **Next.js** (App Router + Server Actions)
- **React Hook Form** (manejo de formularios)
- **Zod** (validación)
- **Resend** (envío de emails)

---

## 1. Instalación de dependencias

```bash
npm install react-hook-form zod @hookform/resolvers resend
```

---

## 2. Estructura de archivos

```
src/app/components/Contact/
├── Contact.jsx        # Componente del formulario
├── actions.js         # Server Action para enviar email
└── Contact.module.css # Estilos (opcional)
```

---

## 3. Server Action (actions.js)

```js
"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(data) {
  try {
    const response = await resend.emails.send({
      from: "Formulario Web <onboarding@resend.dev>",
      to: "tu-email@ejemplo.com",
      subject: "Nuevo contacto",
      html: `
        <h1>Nuevo mensaje</h1>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Asunto:</strong> ${data.subject}</p>
        <p><strong>Mensaje:</strong> ${data.message}</p>
      `,
    });
    return response;
  } catch (error) {
    console.error("Error:", error);
    throw new Error("No se pudo enviar el email");
  }
}
```

**Importante**: `"use server"` al inicio convierte esto en una Server Action.

---

## 4. Componente del Formulario (Contact.jsx)

```jsx
"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { sendEmail } from "./actions";

// Schema de validación
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
      alert("Email enviado correctamente");
      reset();
    } catch (error) {
      alert("Error al enviar el email");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* Email */}
      <div>
        <label>Email</label>
        <input type="email" placeholder="tu@email.com" {...register("email")} />
        {errors.email && <p>{errors.email.message}</p>}
      </div>

      {/* Asunto */}
      <div>
        <label>Asunto</label>
        <input
          type="text"
          placeholder="¿En qué podemos ayudarte?"
          {...register("subject")}
        />
        {errors.subject && <p>{errors.subject.message}</p>}
      </div>

      {/* Mensaje */}
      <div>
        <label>Mensaje</label>
        <textarea
          placeholder="Escribe tu mensaje..."
          rows="4"
          {...register("message")}
        />
        {errors.message && <p>{errors.message.message}</p>}
      </div>

      <button type="submit">Enviar</button>
    </form>
  );
}
```

---

## 5. Variable de entorno (.env.local)

```env
RESEND_API_KEY=re_xxxxxxxxxx
```

Obtén tu API key en: https://resend.com

---

## 6. Conceptos clave

### useForm()

```js
const {
  register,
  handleSubmit,
  reset,
  formState: { errors },
} = useForm({
  resolver: zodResolver(schema),
});
```

| Propiedad      | Función                           |
| -------------- | --------------------------------- |
| `register`     | Conecta inputs al formulario      |
| `handleSubmit` | Valida antes de ejecutar onSubmit |
| `reset`        | Limpia el formulario              |
| `errors`       | Objeto con errores de validación  |

### register()

```jsx
<input {...register("nombreCampo")} />
```

Esto conecta el input con React Hook Form.

### Mostrar errores

```jsx
{
  errors.nombreCampo && <p>{errors.nombreCampo.message}</p>;
}
```

### Validaciones Zod comunes

```js
z.string(); // String requerido
z.string().min(3); // Mínimo 3 caracteres
z.string().max(100); // Máximo 100 caracteres
z.string().optional(); // Opcional
z.email(); // Email válido
z.string().url(); // URL válida
z.number().min(0).max(100); // Número entre 0-100
```

---

## 7. Checklist rápido

- [ ] Instalar dependencias
- [ ] Crear `actions.js` con `"use server"`
- [ ] Configurar Resend con API key
- [ ] Crear schema Zod
- [ ] Usar `useForm` con `zodResolver`
- [ ] Registrar inputs con `{...register("campo")}`
- [ ] Mostrar errores de validación
- [ ] Manejar submit con try/catch

---

## 8. Template HTML para el email (opcional)

```js
html: `
  <div style="font-family: Arial; padding: 20px; background: #f5f5f5;">
    <div style="max-width: 600px; margin: auto; background: white; padding: 30px; border-radius: 8px;">
      <h1 style="color: #333;">Nuevo Contacto</h1>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Asunto:</strong> ${data.subject}</p>
      <p><strong>Mensaje:</strong> ${data.message}</p>
    </div>
  </div>
`;
```

---

## Recursos

- [React Hook Form Docs](https://react-hook-form.com/)
- [Zod Docs](https://zod.dev/)
- [Resend Docs](https://resend.com/docs)
- [Next.js Server Actions](https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations)
