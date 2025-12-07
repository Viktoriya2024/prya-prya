"use client";

import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section id="home" className="relative w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[60vh] min-h-[400px]" >
      
      {/* Background Image */}
      <Image
        src="/main-head-bg.jpg"
        alt="Hero background"
        fill
        priority
        className="absolute inset-0 object-cover z-0"
      />
         <div className="absolute inset-0 bg-black/25 z-10" />
      {/* Centered Text Block */}
      <div className="absolute inset-0 flex flex-col items-center justify-end z-20 px-4 py-5 text-white text-center">
          
        {/* TITLE */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold leading-tight drop-shadow-[0_4px_10px_rgba(0,0,0,0.7)] whitespace-pre-line">
          Фабрика{"\n"}кондитерських виробів
        </h1>
          <h2 className="mt-3 text-lg  sm:text-xl md:text-2xl lg:text-3xl font-bold drop-shadow-[0_4px_10px_rgba(0,0,0,0.7)]">
          НАТУРАЛЬНЕ, ТОМУ І СМАЧНЕ!
        </h2>
        {/* BUTTON */}
        <Link
          href="#properties"
          className="
            mt-6 inline-block px-8 py-3 
            bg-[#ff9800] hover:bg-yellow-700 
            transition text-white hover:text-white
            text-lg font-semibold 
            "
        >
         Обрати смаколики
        </Link>
        </div>
    
    </section>
  );
}
