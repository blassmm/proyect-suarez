"use client";

export default function ProcessStepper({ steps }) {
  return (
    <div className="flex! flex-col! md:flex-row! items-center! justify-center! gap-8! md:gap-16! my-12! md:my-16!">
      {steps.map((step, index) => (
        <div
          key={step.number}
          className="flex! flex-col! md:flex-row! items-center! gap-4! md:gap-8!"
        >
          <div className="flex! flex-col! items-center! text-center! min-w-[200px]!">
            <div className="w-12! h-12! rounded-full! border-2! border-gray-800! flex! items-center! justify-center! mb-3! text-xl! font-semibold!">
              {step.number}
            </div>
            <p className="text-base! md:text-lg! font-medium! text-gray-800! leading-tight!">
              {step.title}
            </p>
          </div>

          {index < steps.length - 1 && (
            <div className="hidden! md:block! w-16! lg:w-24! border-t-2! border-dotted! border-gray-400! -mt-8!" />
          )}
        </div>
      ))}
    </div>
  );
}
