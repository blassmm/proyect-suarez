import Image from "next/image";

function Equipamiento() {
  return (
    <div className="mt-20! sm:mt-16! md:mt-20! w-full! overflow-hidden!">
      {/* Hero Section */}
      <div className="w-full! flex! flex-col! md:flex-row! min-h-[50vh]! md:min-h-[60vh]!">
        {/* Columna Imagen */}
        <div className="w-full! md:basis-1/2! relative! min-h-[40vh]! md:min-h-[60vh]!">
          <Image
            src="/equipamiento/img-1.webp"
            alt="Equipamiento"
            className="w-full! h-full! object-cover! object-[center_30%]!"
            fill
            priority
          />
        </div>

        {/* Columna Texto */}
        <div className="w-full! md:basis-1/2! bg-teal-500! flex! items-center! justify-start! min-h-[40vh]! md:min-h-[60vh]! px-6! sm:px-10! md:px-12! lg:px-16! xl:px-20! py-8! sm:py-12! md:py-16! lg:py-20! xl:py-24!">
          <h2 className="text-white! text-2xl! sm:text-3xl! md:text-4xl! lg:text-5xl! xl:text-5xl! text-left! font-bold! leading-[1.15]! italic!">
            Todos nuestros equipos
            <br />
            están homologados
            <br />
            por las principales
            <br />
            terminales automotrices.
          </h2>
        </div>
      </div>

      {/* Marcas */}
      <div className="w-full! bg-white!">
        <div className="">
          <Image
            src="/equipamiento/Screenshot_2.png"
            alt="Marcas homologadas"
            width={1200}
            height={100}
            className="w-full! h-auto!"
          />
        </div>
      </div>

      {/* Reparación de Chapa */}
      <section className="w-full! py-12! sm:py-16! md:py-20! bg-white!">
        <div className="max-w-4xl! mx-auto! px-6! sm:px-8! md:px-12!">
          <h3 className="text-teal-500! text-2xl! sm:text-3xl! md:text-4xl! font-bold! italic! mb-8!">
            Reparación de Chapa
          </h3>
          <ul className="space-y-6! text-gray-800! text-base! sm:text-lg! leading-relaxed!">
            <li>
              <span className="font-bold!">• 2 Bancadas de Estiramiento:</span>
              <br />
              Universal, apta para todas las marcas y modelos de vehículos.
            </li>
            <li>
              <span className="font-bold!">
                • Sistema de medición electrónica Car-O-Liner:
              </span>
              <br />
              Sistema de alta precisión, homologado por automotrices. Realiza
              mediciones de las carrocerías en tres dimensiones.
            </li>
            <li>
              <span className="font-bold!">• 1 Bancada GLOBALJIG</span> con
              sistema de Dimas, más preciso, homologado por las principales
              automotrices.
            </li>
            <li>
              <span className="font-bold!">
                • Máquinas y herramientas para aluminio:
              </span>
              <br />
              Para reparar vehículos de alta gama con aluminios especiales.
            </li>
            <li>
              <span className="font-bold!">• Soldadoras de Punto:</span>
              <br />
              Homologadas por terminales, 15000 Amp, 500n de fuerza, para aceros
              de ultra alta resistencia.
            </li>
            <li>
              <span className="font-bold!">• Soldadoras MIG Brazing:</span>
              <br />
              Une aceros con aporte de material (cobre y silicio) que no altera
              las propiedades de las chapas
            </li>
            <li>
              <span className="font-bold!">• Soldadora TIG ESAB</span>{" "}
              automática.
            </li>
            <li>
              <span className="font-bold!">• Remachadora:</span> Para unir
              aceros con aluminio
            </li>
            <li>
              <span className="font-bold!">• Sacabollos de Aluminio Gys</span>
            </li>
            <li>
              <span className="font-bold!">
                • Soldadora de Aluminio Gys Mig Brazing
              </span>
            </li>
            <li>
              <span className="font-bold!">• Soldadora de Aluminio</span>
            </li>
            <li>
              <span className="font-bold!">
                • Escáner electrónico universal:
              </span>
              <br />
              Verifica el funcionamiento de los componentes electrónicos.
            </li>
          </ul>
        </div>
      </section>

      {/* Pintura y Terminación */}
      <section className="w-full! py-12! sm:py-16! md:py-20! bg-white!">
        <div className="max-w-4xl! mx-auto! px-6! sm:px-8! md:px-12!">
          <h3 className="text-teal-500! text-2xl! sm:text-3xl! md:text-4xl! font-bold! italic! mb-8!">
            Pintura y Terminación
          </h3>
          <ul className="space-y-6! text-gray-800! text-base! sm:text-lg! leading-relaxed!">
            <li>
              <span className="font-bold!">
                • 4 Cabinas de pintura de última tecnología:
              </span>
              <br />
              Para la aplicación de colores y lacas.
            </li>
            <li>
              <span className="font-bold!">• 2 Cabinas de pintura:</span>
              <br />
              Para aplicación de bases y fondos.
            </li>
            <li>
              <span className="font-bold!">
                • 4 Zonas de lijado con aspiración
              </span>
            </li>
            <li>
              <span className="font-bold!">
                • Enfriadores y secadores de aire comprimido:
              </span>
              <br />
              Para asegurar la pureza del aire en el proceso de pintura.
            </li>
            <li>
              <span className="font-bold!">• Lámparas de onda corta IRT:</span>
              <br />
              Para secado de materiales de pintura en tiempos breves.
            </li>
            <li>
              <span className="font-bold!">• Laboratorio de pintura:</span>
              <br />
              Equipado con software para desarrollar colores que cuenta con una
              base de datos internacional con actualización continua.
            </li>
            <li>
              <span className="font-bold!">• Sopletes alemanes</span> de última
              generación <span className="font-bold!">SATA.</span>
            </li>
            <li>
              <span className="font-bold!">• Espectrofotómetro:</span>
              <br />
              Para búsqueda y ajuste de colores.
            </li>
            <li>
              <span className="font-bold!">• Sistema ENVIROBASE - PPG</span> de
              pintura al agua.
            </li>
            <li>
              <span className="font-bold!">• Máquina Cold Jet</span> de hielo
              seco:
              <br />
              Para limpieza criogénica.
            </li>
            <li>
              <span className="font-bold!">
                • Máquinas rotorbitales para sistema de pulido
              </span>
            </li>
          </ul>
        </div>
      </section>

      {/* Sección Final */}
      <section className="w-full! flex! flex-col! md:flex-row! min-h-[50vh]! md:min-h-[60vh]!">
        {/* Imagen Auto */}
        <div className="w-full! md:basis-1/2! relative! min-h-[40vh]! md:min-h-[60vh]!">
          <Image
            src="/equipamiento/auto-6.png"
            alt="BMW en Taller Suarez"
            fill
            className="w-full! h-full! object-cover!"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

        {/* Texto Final */}
        <div className="w-full! md:basis-1/2! bg-slate-700! flex! flex-col! justify-center! min-h-[40vh]! md:min-h-[60vh]! px-6! sm:px-10! md:px-12! lg:px-16! py-10! sm:py-14! md:py-16! relative!">
          {/* Patrón de puntos decorativo */}
          <div
            className="absolute! inset-0! opacity-20! pointer-events-none!"
            style={{
              backgroundImage:
                "radial-gradient(circle, #fff 1px, transparent 1px)",
              backgroundSize: "20px 20px",
            }}
          ></div>

          <p className="text-white! text-lg! sm:text-xl! md:text-2xl! leading-relaxed! mb-6! relative! z-10!">
            Hoy somos líderes en el mercado de la reparación de automóviles
            gracias al cuidado del detalle en cada uno de estos aspectos claves.
          </p>
          <p className="text-teal-200! text-xl! sm:text-2xl! md:text-3xl! font-bold! italic! leading-tight! relative! z-10!">
            Quien trae su auto al Taller Suarez,
            <br />
            lo retira como nuevo.
          </p>
        </div>
      </section>
    </div>
  );
}
export default Equipamiento;
