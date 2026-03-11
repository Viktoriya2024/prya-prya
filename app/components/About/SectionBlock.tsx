"use client";
import Image from "next/image";

export type ThemeVariant = "light" | "warm" | "accent" | "dark";

interface SectionBlockProps {
  title: string;
  text: string;
  image?: string;
  bgImage?: string;
  reverse?: boolean;
  theme?: ThemeVariant;
  isHero?: boolean;
}

const themeStyles = {
  light: {
    background: "bg-white",
    text: "text-gray-800",
    title: "text-gray-900",
    divider: "from-[#FF9800] to-[#FFB74D]",
    overlay: "bg-black/0",
  },
  warm: {
    background: "bg-gradient-to-br from-orange-50 to-yellow-50/30",
    text: "text-gray-700",
    title: "text-gray-900",
    divider: "from-[#FF9800] to-[#FFB74D]",
    overlay: "bg-white/60",
  },
  accent: {
    background: "bg-gradient-to-br from-[#FF9800] to-[#FFB74D]",
    text: "text-white",
    title: "text-white",
    divider: "from-white to-white/80",
    overlay: "bg-black/0",
  },
  dark: {
    background: "bg-gradient-to-br from-gray-900 to-gray-800",
    text: "text-gray-300",
    title: "text-white",
    divider: "from-[#FF9800] to-[#FFB74D]",
    overlay: "bg-black/70",
  },
};

export default function SectionBlock({
  title,
  text,
  image,
  bgImage,
  reverse = false,
  theme = "light",
  isHero = false,
}: SectionBlockProps) {
  const styles = themeStyles[theme];

  return (
    <section className={`relative ${isHero ? 'h-[70vh] min-h-[520px] flex items-center justify-center' : 'py-16 md:py-24 lg:py-28'} overflow-hidden ${styles.background}`}>
      {/* Background Image with Overlay */}
      {bgImage && (
        <>
          <div className="absolute inset-0 z-0">
            <Image
              src={bgImage}
              alt={title}
              fill
              className="object-cover"
              priority={true}
              quality={90}
            />
          </div>
          <div className={`absolute inset-0 z-10 ${styles.overlay}`}></div>
        </>
      )}

      {/* Content */}
      <div className="relative z-20">
        <div
          className={`max-w-7xl mx-auto flex flex-col ${
            image ? "md:flex-row" : ""
          } items-center gap-12 md:gap-16 lg:gap-20 px-4 sm:px-6 md:px-8 lg:px-10 ${
            reverse ? "md:flex-row-reverse" : ""
          }`}
        >
          {/* TEXT CONTENT */}
          <div
            className={`${
              image ? "md:w-1/2" : "max-w-4xl mx-auto text-center"
            } space-y-6 ${
              isHero 
                ? 'bg-black/40 backdrop-blur-md rounded-3xl p-8 sm:p-10 md:p-12 lg:p-14 shadow-2xl border border-white/30' 
                : ''
            }`}
          >
            <h2
              className={`text-3xl sm:text-4xl md:text-5xl ${isHero ? 'lg:text-6xl' : 'lg:text-6xl'} font-extrabold ${styles.title} mb-4 leading-tight tracking-tight ${
                image ? "text-center md:text-left" : ""
              } ${isHero || bgImage ? 'drop-shadow-[0_3px_10px_rgba(0,0,0,0.6)]' : ''}`}
            >
              {title}
            </h2>
            
            <div
              className={`w-20 h-1 bg-linear-to-r ${styles.divider} rounded-full ${
                image ? "mx-auto md:mx-0" : "mx-auto"
              }`}
            ></div>

            <p
              className={`text-lg sm:text-xl ${isHero ? 'md:text-2xl' : 'md:text-xl'} ${styles.text} text-white leading-relaxed font-semibold whitespace-pre-line ${
                image ? "text-center md:text-left" : ""
              } ${isHero || bgImage ? 'drop-shadow-lg' : ''} ${isHero ? 'text-white' : ''}`}
            >
              {text}
            </p>
          </div>

          {/* SIDE IMAGE */}
          {image && (
            <div className="md:w-1/2 flex justify-center">
              <div className="relative w-full max-w-[500px] h-80 sm:h-[380px] md:h-[420px] group">
                {/* Glow effect */}
                <div className="absolute inset-0 bg-linear-to-br from-orange-400/20 to-yellow-400/20 rounded-3xl opacity-40 group-hover:opacity-60 transition-opacity duration-500"></div>
                
                {/* Image */}
                <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.15)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.25)] transition-all duration-500">
                  <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
