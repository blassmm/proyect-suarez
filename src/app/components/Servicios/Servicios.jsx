import Image from "next/image";

function Servicios() {
  return (
    <div className="mt-15! sm:mt-16! md:mt-20! w-full! overflow-hidden!">
      {/* Servicios Tradicionales */}
      <section className="w-full! flex! flex-col! md:flex-row! min-h-[50vh]! md:min-h-[60vh]!">
        <div className="w-full! md:basis-1/2! relative! min-h-[40vh]! md:min-h-[60vh]!">
          <Image
            src="/servicios/img-1.webp"
            alt="Servicios Tradicionales"
            className="w-full! h-full! object-cover!"
            fill
            priority
          />
        </div>

        <div className="w-full! md:basis-1/2! bg-slate-700! flex! items-center! justify-start! min-h-[40vh]! md:min-h-[60vh]! px-6! sm:px-10! md:px-12! lg:px-16! xl:px-20! py-8! sm:py-12! md:py-16! relative!">
          <div
            className="absolute! inset-0! opacity-20! pointer-events-none!"
            style={{
              backgroundImage:
                "radial-gradient(circle, #fff 1px, transparent 1px)",
              backgroundSize: "20px 20px",
            }}
          ></div>

          <div className="relative! z-10!">
            <h2 className="text-teal-400! text-xl! sm:text-2xl! md:text-3xl! font-bold! uppercase! tracking-wide! mb-6!">
              Servicios
              <br />
              Tradicionales
            </h2>
            <ul className="text-white! text-base! sm:text-lg! md:text-xl! space-y-2!">
              <li>» Tratamiento de pulido y abrillantamiento de la pintura</li>
              <li>» Protección de superficies</li>
              <li>» Polarizados</li>
              <li>» Cristalería</li>
              <li>» Carga de Aire Acondicionado</li>
              <li>» Mecánica por siniestro</li>
              <li>» Grúa de Traslado</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Servicios Complementarios */}
      <section className="w-full! flex! flex-col-reverse! md:flex-row! min-h-[50vh]! md:min-h-[60vh]!">
        <div className="w-full! md:basis-1/2! bg-teal-500! flex! items-center! justify-start! min-h-[40vh]! md:min-h-[60vh]! px-6! sm:px-10! md:px-12! lg:px-16! xl:px-20! py-8! sm:py-12! md:py-16!">
          <div>
            <h2 className="text-slate-800! text-xl! sm:text-2xl! md:text-3xl! font-bold! uppercase! tracking-wide! mb-6!">
              Servicios
              <br />
              Complementarios
            </h2>
            <ul className="text-white! text-base! sm:text-lg! md:text-xl! space-y-2! mb-6!">
              <li>» Detailing</li>
              <li>» Lavado Premium</li>
              <li>» Limpieza de Interior</li>
              <li>» Personalización de Vehículos</li>
              <li>» Cochera</li>
            </ul>
            <p className="text-slate-800! text-base! sm:text-lg! italic! leading-relaxed! max-w-md!">
              Trabajos que combinan un preciso oficio manual, con la última
              tecnología de marcas líderes.
            </p>
          </div>
        </div>

        <div className="w-full! md:basis-1/2! relative! min-h-[40vh]! md:min-h-[60vh]!">
          <Image
            src="/servicios/img-2.webp"
            alt="Servicios Complementarios"
            className="w-full! h-full! object-cover!"
            fill
          />
        </div>
      </section>

      {/* Limpieza Criogénica */}
      <section className="w-full! py-16! sm:py-20! md:py-24! bg-white!">
        <div className="max-w-3xl! mx-auto! px-6! sm:px-8! md:px-12! text-center!">
          <h3 className="text-teal-500! text-2xl! sm:text-3xl! md:text-4xl! font-bold! mb-6!">
            Limpieza criogénica
          </h3>
          <p className="text-gray-700! text-base! sm:text-lg! leading-relaxed! mb-4!">
            Remueve toda la suciedad sin dañar el circuito eléctrico. Contamos
            con la máquina con partículas de hielo seco peletizado 3 milímetros,
            que{" "}
            <strong>
              limpia profundamente el chasis, motor y superficies más
              inaccesibles del vehículo
            </strong>
            .
          </p>
          <p className="text-gray-700! text-base! sm:text-lg! leading-relaxed!">
            Tendencia mundial, por su capacidad de limpiar sin mojar, que
            permite detectar daños, fisuras y fatiga de materiales; evitando
            futuras roturas. Complementa un trabajo de restauración de la
            carrocería de una excelente manera, permitiéndote conservar en mejor
            estado su vehículo.
          </p>
        </div>
      </section>

      {/* Grúa de Traslado */}
      <section className="w-full! flex! flex-col! md:flex-row! min-h-[50vh]! md:min-h-[60vh]!">
        <div className="w-full! md:basis-1/2! bg-slate-700! flex! items-center! justify-start! min-h-[40vh]! md:min-h-[60vh]! px-6! sm:px-10! md:px-12! lg:px-16! xl:px-20! py-8! sm:py-12! md:py-16! relative!">
          <div
            className="absolute! inset-0! opacity-20! pointer-events-none!"
            style={{
              backgroundImage:
                "radial-gradient(circle, #fff 1px, transparent 1px)",
              backgroundSize: "20px 20px",
            }}
          ></div>

          <div className="relative! z-10!">
            <span className="text-teal-400! text-sm! sm:text-base! uppercase! tracking-widest! font-semibold!">
              Nuevo Servicio
            </span>
            <h2 className="text-white! text-2xl! sm:text-3xl! md:text-4xl! font-bold! mt-2! mb-6!">
              Grúa de Traslado
            </h2>
            <p className="text-white! text-base! sm:text-lg! md:text-xl! italic! leading-relaxed! max-w-md!">
              No importan las distancias, estés donde estés, con nuestra nueva
              grúa de traslados retiramos tu auto clásico o vehículo dañado para
              traerlo a nuestro taller.
            </p>
          </div>
        </div>

        <div className="w-full! md:basis-1/2! relative! min-h-[40vh]! md:min-h-[60vh]!">
          <Image
            src="/servicios/img-3.webp"
            alt="Grúa de Traslado"
            className="w-full! h-full! object-cover!"
            fill
          />
        </div>
      </section>

      {/* Servicios Adicionales */}
      <section className="w-full! flex! flex-col-reverse! md:flex-row! min-h-[50vh]! md:min-h-[60vh]!">
        <div className="w-full! md:basis-1/2! relative! min-h-[40vh]! md:min-h-[60vh]!">
          <Image
            src="/servicios/img-4.webp"
            alt="Recepción Taller Suarez"
            className="w-full! h-full! object-cover!"
            fill
          />
        </div>

        <div className="w-full! md:basis-1/2! bg-teal-500! flex! items-center! justify-start! min-h-[40vh]! md:min-h-[60vh]! px-6! sm:px-10! md:px-12! lg:px-16! xl:px-20! py-8! sm:py-12! md:py-16! relative!">
          <div
            className="absolute! inset-0! opacity-20! pointer-events-none!"
            style={{
              backgroundImage:
                "radial-gradient(circle, #fff 1px, transparent 1px)",
              backgroundSize: "20px 20px",
            }}
          ></div>

          <div className="relative! z-10!">
            <h2 className="text-slate-800! text-xl! sm:text-2xl! md:text-3xl! font-bold! uppercase! tracking-wide! mb-6!">
              Servicios
              <br />
              Adicionales
            </h2>
            <ul className="text-white! text-base! sm:text-lg! md:text-xl! space-y-2!">
              <li>» Asesoramiento sobre gestión de taller</li>
              <li>» Centro de Soluciones Digitales</li>
              <li>» Planes de desarrollo de carreras</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Quote Final */}
      <section className="w-full! py-16! sm:py-20! md:py-24! bg-white!">
        <div className="max-w-4xl! mx-auto! px-6! sm:px-8! md:px-12! text-center!">
          <p className="text-gray-700! text-lg! sm:text-xl! md:text-2xl! italic! leading-relaxed! mb-4!">
            "La capacitación y formación de nuestro personal,
            <br />
            la actualización constante de nuestro equipamiento
            <br />
            y la utilización de productos de alta performance
            <br />
            son la clave para realizar un buen trabajo"
          </p>
          <p className="text-gray-600! text-base! sm:text-lg!">
            Gustavo Suarez | Socio Director
          </p>
        </div>
      </section>
    </div>
  );
}

export default Servicios;
