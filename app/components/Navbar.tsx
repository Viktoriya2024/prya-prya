"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Get current page name based on pathname
  const getCurrentPageName = () => {
    switch (pathname) {
      case '/find-new-home':
        return 'Find a Home 🏠︎';
      case '/altu-duo':
        return 'Alto Duo';
      default:
        if (pathname.includes('buying-guide')) return 'Buying Guide';
        if (pathname.includes('about')) return 'About us';
        if (pathname.includes('investors')) return 'Investors';
        if (pathname.includes('vision')) return 'Our Vision';
        if (pathname.includes('news')) return 'News';
        if (pathname.includes('contact')) return 'Contact';
        return 'головна 🏠︎';
    }
  };

  // Close mobile menu when window is resized to desktop size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      {/* NAVBAR */}
      <header className="w-full fixed top-0 left-0 z-50 bg-linear-to-r from-[#ff9800] via-[#ff9800] to-[#ffb74d] backdrop-blur-md shadow-[0_2px_20px_rgba(255,152,0,0.15)] h-16 sm:h-20 flex items-center border-b border-orange-300/20">
        <div className="w-full lg:w-[80%] max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* LOGO */}
          <Link href="/" className="flex items-center shrink-0 transform hover:scale-105 transition-transform duration-300">
            <Image
              src="/logotransp.png"
              alt="LOT40 Logo"
              width={400}
              height={160}
              className="object-contain h-20 sm:h-10 lg:h-20 w-auto drop-shadow-sm"
            />
          </Link>

          {/* DESKTOP MENU */}
          <nav className="hidden lg:flex items-center gap-2 xl:gap-4 text-sm lg:text-base font-medium text-white">
            <Link
              href="/#home"
              className="relative px-3 py-2 hover:text-white/90 transition-all duration-300 group whitespace-nowrap"
            >
              <span className="relative z-10">головна</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white rounded-full group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link
              href="/components/About"
              className={`relative px-3 py-2 hover:text-white/90 transition-all duration-300 group whitespace-nowrap ${
                pathname === '/components/About' ? 'text-white' : ''
              }`}
            >
              <span className="relative z-10">про нас</span>
              <span className={`absolute bottom-0 left-0 h-0.5 bg-white rounded-full transition-all duration-300 ${
                pathname === '/components/About' ? 'w-full' : 'w-0 group-hover:w-full'
              }`}></span>
            </Link>
            <Link
              href="#product"
              className={`relative px-3 py-2 hover:text-white/90 transition-all duration-300 group whitespace-nowrap ${
                pathname.includes('product') ? 'text-white' : ''
              }`}
            >
              <span className="relative z-10">продукція</span>
              <span className={`absolute bottom-0 left-0 h-0.5 bg-white rounded-full transition-all duration-300 ${
                pathname.includes('product') ? 'w-full' : 'w-0 group-hover:w-full'
              }`}></span>
            </Link>
            <Link
              href="#production"
              className={`relative px-3 py-2 hover:text-white/90 transition-all duration-300 group whitespace-nowrap ${
                pathname.includes('production') ? 'text-white' : ''
              }`}
            >
              <span className="relative z-10">виробництво</span>
              <span className={`absolute bottom-0 left-0 h-0.5 bg-white rounded-full transition-all duration-300 ${
                pathname.includes('production') ? 'w-full' : 'w-0 group-hover:w-full'
              }`}></span>
            </Link>
            <Link
              href="#vacancy"
              className={`relative px-3 py-2 hover:text-white/90 transition-all duration-300 group whitespace-nowrap ${
                pathname.includes('vacancy') ? 'text-white' : ''
              }`}
            >
              <span className="relative z-10">вакансії</span>
              <span className={`absolute bottom-0 left-0 h-0.5 bg-white rounded-full transition-all duration-300 ${
                pathname.includes('vacancy') ? 'w-full' : 'w-0 group-hover:w-full'
              }`}></span>
            </Link>
            <Link
              href="#contact"
              className={`relative px-3 py-2 hover:text-white/90 transition-all duration-300 group whitespace-nowrap ${
                pathname.includes('contact') ? 'text-white' : ''
              }`}
            >
              <span className="relative z-10">контакти</span>
              <span className={`absolute bottom-0 left-0 h-0.5 bg-white rounded-full transition-all duration-300 ${
                pathname.includes('contact') ? 'w-full' : 'w-0 group-hover:w-full'
              }`}></span>
            </Link>
            
           
            {/* DESKTOP LANGUAGE BUTTON */}
            <div className="hidden lg:flex ml-2">
              <button className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full hover:bg-white/30 transition-all duration-300 text-sm font-medium shadow-lg hover:shadow-xl hover:scale-105 border border-white/30">
                PT/EN
              </button>
            </div>
          </nav>

          {/* MOBILE BURGER WITH PAGE NAME */}
          <div className="lg:hidden flex items-center gap-3">
            <span className={`text-sm sm:text-base font-medium truncate max-w-[150px] sm:max-w-[200px] ${
              pathname === '/altu-duo' ? 'text-white/90' : 'text-white/95'
            }`}>
              {getCurrentPageName()}
            </span>
            <button
              className="relative z-50 w-10 h-10 flex flex-col justify-center items-center bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-all duration-300 border border-white/30"
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
            >
              <span
                className={`w-6 h-0.5 bg-white rounded-full transition-all duration-300 ease-in-out ${
                  open ? "rotate-45 translate-y-0.5" : "rotate-0 -translate-y-1.5"
                }`}
              />
              <span
                className={`w-6 h-0.5 bg-white rounded-full transition-all duration-300 ease-in-out ${
                  open ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`w-6 h-0.5 bg-white rounded-full transition-all duration-300 ease-in-out ${
                  open
                    ? "-rotate-45 -translate-y-0.5"
                    : "rotate-0 translate-y-1.5"
                }`}
              />
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE OVERLAY */}
      {open && (
        <div
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-30 lg:hidden transition-opacity duration-300"
          onClick={() => setOpen(false)}
        />
      )}

      {/* MOBILE SIDEBAR */}
      <div
        className={`
          fixed top-16 sm:top-20 right-0 w-[320px] max-w-[85vw]
          h-[calc(100vh-4rem)] sm:h-[calc(100vh-5rem)] bg-linear-to-b from-[#ff9800] to-[#ffb74d] backdrop-blur-lg shadow-2xl z-50
          transform transition-transform duration-300 ease-in-out
          ${open ? "translate-x-0" : "translate-x-full"}
          lg:hidden p-6
        `}
      >
        <nav className="flex flex-col gap-2 text-base font-medium text-white overflow-y-auto h-full">
          <Link
            href="/#home"
            onClick={() => setOpen(false)}
            className={`hover:bg-white/20 transition-all duration-300 py-3 px-4 rounded-xl ${
              pathname === '/#home' ? 'bg-white/25 shadow-md' : ''
            }`}
          >
             головна 🏠︎
          </Link>
          <Link
            href="/components/About"
            onClick={() => setOpen(false)}
            className={`hover:bg-white/20 transition-all duration-300 py-3 px-4 rounded-xl ${
              pathname === '/components/About' ? 'bg-white/25 shadow-md' : ''
            }`}
          >
            про нас
          </Link>
          <Link
            href="#product"
            onClick={() => setOpen(false)}
            className={`hover:bg-white/20 transition-all duration-300 py-3 px-4 rounded-xl ${
              pathname.includes('product') ? 'bg-white/25 shadow-md' : ''
            }`}
          >
            продукція 
          </Link>
          <Link
            href="#production"
            onClick={() => setOpen(false)}
            className={`hover:bg-white/20 transition-all duration-300 py-3 px-4 rounded-xl ${
              pathname.includes('production') ? 'bg-white/25 shadow-md' : ''
            }`}
          >
            виробництво
          </Link>
          <Link
            href="#vacancy"
            onClick={() => setOpen(false)}
            className={`hover:bg-white/20 transition-all duration-300 py-3 px-4 rounded-xl ${
              pathname.includes('vacancy') ? 'bg-white/25 shadow-md' : ''
            }`}
          >
            вакансії
          </Link>
          <Link
            href="#contact"
            onClick={() => setOpen(false)}
            className={`hover:bg-white/20 transition-all duration-300 py-3 px-4 rounded-xl ${
              pathname.includes('contact') ? 'bg-white/25 shadow-md' : ''
            }`}
          >
            контакти
          </Link>

          <div className="mt-6 pt-4">
            <button className="w-full bg-white/25 backdrop-blur-sm text-white px-4 py-3 rounded-2xl hover:bg-white/35 transition-all duration-300 font-medium shadow-lg hover:shadow-xl border border-white/30">
              UK/EN
            </button>
          </div>
        </nav>
      </div>
    </>
  );
}
