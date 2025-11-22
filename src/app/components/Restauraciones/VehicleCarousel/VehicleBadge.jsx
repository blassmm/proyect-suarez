"use client";

export default function VehicleBadge({ brand, model, year }) {
  return (
    <div className="absolute! bottom-8! right-8! bg-[#1FB8A1]! bg-opacity-95! px-6! py-4! backdrop-blur-sm!">
      <p className="text-white! text-xs! md:text-sm! font-medium! mb-1! tracking-wide!">
        {brand}
      </p>
      <h3 className="text-white! text-lg! md:text-2xl! font-bold! leading-tight!">
        {model}
      </h3>
      <p className="text-white! text-sm! md:text-base! mt-1!">({year})</p>
    </div>
  );
}
