"use client";
import Image from "next/image";

interface SectionBlockProps {
  title: string;
  text: string;
  image?: string;
  reverse?: boolean;
}

export default function SectionBlock({ title, text, image, reverse }: SectionBlockProps) {
  return (
    <section className="py-24 md:py-32 bg-linear-to-b from-white to-orange-50/20">
      <div
        className={`max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16 md:gap-20 px-6 md:px-10 ${
          reverse ? "md:flex-row-reverse" : ""
        }`}
      >
        {/* TEXT */}
        <div className="md:w-1/2 text-center md:text-left space-y-6">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#2B2B2B] mb-3 leading-tight tracking-tight">
            {title}
          </h2>
          <div className="w-16 h-0.5 bg-linear-to-r from-[#FF9800] to-[#FFB74D] mx-auto md:mx-0 mb-6 rounded-full"></div>

          <p className="text-base md:text-lg text-gray-700 leading-relaxed font-light whitespace-pre-line">
            {text}
          </p>
        </div>

        {/* IMAGE */}
        {image && (
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-full max-w-[500px] h-[380px] group">
              <div className="absolute inset-0 bg-linear-to-br from-orange-400/20 to-yellow-400/20 rounded-3xl blur-2xl opacity-50 group-hover:opacity-70 transition-opacity duration-500"></div>
              <Image
                src={image}
                alt={title}
                fill
                className="object-cover rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_20px_50px_rgb(0,0,0,0.15)] transition-all duration-500 hover:scale-[1.02] relative z-10"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
