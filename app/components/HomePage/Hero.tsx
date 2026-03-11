"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="home" className="relative w-full h-[85vh] sm:h-[90vh] md:h-[92vh] lg:h-screen min-h-[600px]" >
      
      {/* Background Image */}
      <Image
        src="/main-head-bg.jpg"
        alt="Hero background"
        fill
        priority
        className="absolute inset-0 object-cover z-0"
      />
      
      {/* Modern Gradient Overlay - Warmer and Lighter */}
      <div className="absolute inset-0 bg-linear-to-b from-black/20 via-black/10 to-orange-900/30 z-10" />
      
      {/* Decorative Glow Effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-400/10 rounded-full blur-3xl z-10 animate-pulse" />
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-yellow-400/10 rounded-full blur-3xl z-10 animate-pulse" style={{ animationDelay: '1s' }} />

      {/* Centered Content */}
      <div className={`absolute inset-0 flex flex-col items-center justify-center z-20 px-6 md:px-8 text-white text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        
        {/* Decorative Top Element */}
        <div className="mb-6 flex items-center gap-3">
          <div className="w-12 h-[2px] bg-linear-to-r from-transparent via-orange-300 to-orange-300 rounded-full" />
          <span className="text-orange-200 text-sm md:text-base font-light tracking-[0.3em] uppercase">З любов'ю створено</span>
          <div className="w-12 h-[2px] bg-linear-to-l from-transparent via-orange-300 to-orange-300 rounded-full" />
        </div>
          
        {/* MAIN TITLE - Larger and More Expressive */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold leading-[1.1] drop-shadow-[0_8px_24px_rgba(0,0,0,0.4)] mb-4 tracking-tight">
          <span className="block">Фабрика</span>
          <span className="block text-orange-300">кондитерських виробів</span>
        </h1>
        
        {/* SUBTITLE - More Space and Impact */}
        <h2 className="mt-6 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold drop-shadow-[0_4px_16px_rgba(0,0,0,0.5)] tracking-wide text-orange-100">
          НАТУРАЛЬНЕ, ТОМУ І СМАЧНЕ!
        </h2>

        {/* Decorative Divider */}
        <div className="mt-8 w-24 h-1 bg-linear-to-r from-orange-400 via-yellow-300 to-orange-400 rounded-full" />
        
        {/* MODERN CTA BUTTON */}
        <Link
          href="#properties"
          className="
            group mt-10 inline-flex items-center gap-3
            px-10 py-4 md:px-12 md:py-5
            bg-linear-to-r from-[#ff9800] to-[#ffb74d]
            hover:from-[#ff9800] hover:to-[#ff9800]
            transition-all duration-500
            text-white font-bold text-base md:text-lg
            rounded-full
            shadow-[0_10px_40px_rgba(255,152,0,0.4)]
            hover:shadow-[0_15px_50px_rgba(255,152,0,0.6)]
            hover:scale-105
            transform
            border-2 border-white/20
          "
        >
          <span>Обрати смаколики</span>
          <svg 
            className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </Link>

        {/* Subtle Bottom Hint */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    
    </section>
  );
}
