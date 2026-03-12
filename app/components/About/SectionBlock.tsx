"use client";
import Image from "next/image";
import Link from "next/link";

export type ThemeVariant = "light" | "warm" | "accent" | "dark";

interface SectionBlockProps {
  title: string;
  text: string;
  image?: string;
  bgImage?: string;
  reverse?: boolean;
  theme?: ThemeVariant;
  isHero?: boolean;
  features?: string[];
  buttonText?: string;
  buttonLink?: string;
  circularImage?: boolean;
  certificateCard?: boolean;
  noBorder?: boolean;
}

const themeStyles = {
  light: {
    background: "bg-linear-to-b from-[#FFF8F1] to-white",
    text: "text-gray-800",
    title: "text-gray-900",
    divider: "from-[#FF9800] to-[#FFB74D]",
    overlay: "bg-black/0",
  },
  warm: {
    background: "bg-gradient-to-b from-[#FFF8F1] to-white",
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
  features,
  buttonText,
  buttonLink,
  circularImage = false,
  certificateCard = false,
  noBorder = false,
}: SectionBlockProps) {
  const styles = themeStyles[theme];

  return (
    <section className={`relative ${isHero ? 'min-h-[500px] sm:min-h-[550px] md:h-[70vh] md:min-h-[600px] flex items-center justify-center py-12 md:py-0' : 'py-12 sm:py-14 md:py-16 lg:py-20'} overflow-hidden ${bgImage ? '' : styles.background}`}
      style={bgImage ? { 
        backgroundImage: `url(${bgImage})`, 
        backgroundRepeat: isHero ? 'no-repeat' : 'repeat',
        backgroundSize: isHero ? 'cover' : 'auto',
        backgroundPosition: isHero ? 'center' : 'top left'
      } : undefined}
    >
      {/* Background Overlay */}
      {bgImage && (
        <div className={`absolute inset-0 z-10 ${styles.overlay}`}></div>
      )}

      {/* Content */}
      <div className="relative z-20">
        <div
          className={`max-w-7xl mx-auto flex flex-col ${
            image ? "md:flex-row" : ""
          } items-center gap-8 sm:gap-10 md:gap-12 lg:gap-16 xl:gap-20 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 ${
            reverse ? "md:flex-row-reverse" : ""
          }`}
        >
          {/* TEXT CONTENT */}
          <div
            className={`${
              image ? "md:w-1/2 w-full max-w-xl" : "max-w-4xl mx-auto text-center"
            } space-y-4 sm:space-y-5 md:space-y-6 ${
              isHero 
                ? 'bg-black/60 backdrop-blur-md rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 xl:p-14 shadow-2xl border border-white/30' 
                : ''
            }`}
          >
            <h2
              className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl ${isHero ? 'xl:text-6xl' : 'xl:text-5xl'} font-extrabold ${isHero ? 'text-white/95' : styles.title} mb-3 sm:mb-4 leading-tight tracking-tight ${
                image ? "text-center md:text-left" : ""
              } ${isHero || bgImage ? 'drop-shadow-[0_4px_10px_rgba(0,0,0,0.8)]' : ''}`}
            >
              {title}
            </h2>
            
            <div
              className={`w-16 sm:w-20 h-1 bg-linear-to-r ${styles.divider} rounded-full ${
                image ? "mx-auto md:mx-0" : "mx-auto"
              }`}
            ></div>

            <p
              className={`text-base sm:text-lg md:text-xl ${isHero ? 'lg:text-2xl' : 'lg:text-xl'} ${isHero ? 'text-white/90' : styles.text} leading-relaxed font-semibold whitespace-pre-line ${
                image ? "text-center md:text-left" : ""
              } ${isHero || bgImage ? 'drop-shadow-[0_4px_10px_rgba(0,0,0,0.8)]' : ''}`}
            >
              {text}
            </p>

            {/* Optional Features List */}
            {features && features.length > 0 && (
              <div className={`mt-6 sm:mt-8 space-y-3 sm:space-y-4 ${
                image ? "flex flex-col items-center md:items-start" : "flex flex-col items-center"
              }`}>
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 text-base sm:text-lg md:text-xl font-medium"
                  >
                    <span className="text-2xl sm:text-3xl shrink-0">
                      {feature.split(' ')[0]}
                    </span>
                    <span className={`${styles.text} leading-relaxed`}>
                      {feature.split(' ').slice(1).join(' ')}
                    </span>
                  </div>
                ))}
              </div>
            )}

            {/* Optional Button */}
            {buttonText && buttonLink && (
              <div className={`mt-6 sm:mt-8 ${image ? "flex justify-center md:justify-start" : "flex justify-center"}`}>
                <Link
                  href={buttonLink}
                  className="
                    group inline-flex items-center gap-2
                    bg-linear-to-r from-[#ff9800] to-[#ffb74d]
                    hover:from-[#ff9800] hover:to-[#ff9800]
                    text-white px-6 py-3
                    text-sm md:text-base font-semibold
                    rounded-full
                    shadow-[0_4px_16px_rgba(255,152,0,0.25)]
                    hover:shadow-[0_6px_24px_rgba(255,152,0,0.4)]
                    hover:scale-105
                    transition-all duration-300
                    border border-white/20
                  "
                >
                  <span>{buttonText}</span>
                  <svg 
                    className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </div>
            )}
          </div>

          {/* SIDE IMAGE */}
          {image && (
            <div className="md:w-1/2 w-full flex justify-center">
              {circularImage ? (
                <div className="relative w-[360px] h-[360px] group">
                  {/* Glow effect */}
                  <div className="absolute inset-0 rounded-full bg-orange-200/20 blur-3xl"></div>
                  
                  {/* Image */}
                  <div className="relative w-full h-full bg-white rounded-full overflow-hidden shadow-xl border border-orange-100 hover:shadow-2xl transition-all duration-500">
                    <Image
                      src={image}
                      alt={title}
                      fill
                      className="object-contain p-4 group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </div>
              ) : certificateCard ? (
                <div className="w-full max-w-lg mx-auto">
                  {/* Certificate Frame Card */}
                  <div className="bg-[#FFF3E6] border border-orange-200 rounded-3xl shadow-lg p-8 sm:p-10 hover:shadow-xl transition-shadow duration-300">
                    <div className="relative w-full aspect-3/4 rounded-lg shadow-md overflow-hidden bg-white">
                      <Image
                        src={image}
                        alt={title}
                        fill
                        className="object-contain p-4"
                      />
                    </div>
                  </div>
                </div>
              ) : noBorder ? (
                <div className="relative w-full max-w-[320px] sm:max-w-[360px] md:max-w-[420px] h-64 sm:h-80 md:h-[360px] lg:h-[440px]">
                  <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover rounded-xl"
                  />
                </div>
              ) : (
                <div className="relative w-full max-w-[320px] sm:max-w-[360px] md:max-w-[420px] h-64 sm:h-80 md:h-[360px] lg:h-[440px] group">
                  {/* Image */}
                  <div className="relative w-full h-full bg-white/95 rounded-4xl overflow-hidden shadow-xl border border-orange-100 hover:shadow-2xl transition-all duration-500">
                    <Image
                      src={image}
                      alt={title}
                      fill
                      className="object-contain p-4 group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
