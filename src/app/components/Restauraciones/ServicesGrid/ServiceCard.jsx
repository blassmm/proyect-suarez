"use client";

export default function ServiceCard({ title, description }) {
  return (
    <article className="bg-[#ECECEC]! border-t-[5px]! border-[#1FB8A1]! p-8! md:p-10! transition-all! duration-300! hover:scale-[1.02]! hover:shadow-lg!">
      <h3 className="text-xl! md:text-2xl! font-bold! text-gray-900! mb-4! leading-tight!">
        {title}
      </h3>
      <p className="text-sm! md:text-base! text-gray-700! leading-relaxed!">
        {description}
      </p>
    </article>
  );
}
