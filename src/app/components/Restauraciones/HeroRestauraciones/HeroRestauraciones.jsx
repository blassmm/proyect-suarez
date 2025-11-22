"use client";

import Image from "next/image";
import ProcessStepper from "./ProcessStepper";
import { processSteps } from "../data";

export default function HeroRestauraciones() {
  return (
    <section className="relative! min-h-[500px]! md:min-h-[600px]! bg-white!">
      <div className="relative! z-10! py-30! sm:py-40! max-w-5xl! mx-auto! px-6! md:px-8!">
        {/* Logo */}
        <div className="text-center! mb-2! flex! justify-center!">
          <Image
            src="/restauraciones/imagen2.webp"
            alt="Suarez Clásicos"
            fill
            className="absolute! top-[-70px]! sm:top-[-100px]! left-1/2! -translate-x-1/2! h-[200px]! sm:h-[300px]! w-auto!"
            priority
          />
        </div>

        {/* Intro Text */}
        <div className="text-center! max-w-3xl! mx-auto! mb-8!">
          <p className="text-base! md:text-lg! text-gray-700! leading-relaxed!">
            En la culminación de proyectos de primera calidad, nos enorgullece
            llevar a cabo la restauración, un trabajo que representa la cúspide
            de nuestra pericia.{" "}
            <span className="font-semibold!">El proceso abarca:</span>
          </p>
        </div>

        {/* Process Stepper */}
        <ProcessStepper steps={processSteps} />

        {/* Description */}
        <div className="text-center! max-w-3xl! mx-auto! mt-8!">
          <p className="text-sm! md:text-base! text-gray-600! leading-relaxed!">
            La Restauración es el trabajo más complejo que realizamos, que lleva
            a la terminación de un proyecto de primera calidad.
          </p>
          <p className="text-sm! md:text-base! text-gray-600! leading-relaxed! mt-4!">
            Tenemos las mejores instalaciones, máquinas, herramientas e insumos
            específicos para el servicio. Sabemos que es un trabajo totalmente
            manual, por lo que nuestro personal está capacitado a la altura de
            sus expectativas y{" "}
            <span className="font-semibold!">
              trabaja en equipo con colegas profesionales de distintos rubros
            </span>
            : mecánica, electrónica y tapicería, entre otras; combinando
            técnicas y herramientas de distintas generaciones.
          </p>
        </div>
      </div>
    </section>
  );
}
