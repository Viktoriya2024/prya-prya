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
        if (pathname.includes('about')) return 'Про нас';
        if (pathname.includes('investors')) return 'Investors';
        if (pathname.includes('vision')) return 'Our Vision';
        if (pathname.includes('news')) return 'News';
        if (pathname.includes('contact')) return 'Контакти';
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
      <header className="w-full fixed top-0 left-0 z-50 bg-linear-to-r from-[#ff9800] via-[#ff9800] to-[#ffb74d] backdrop-blur-md shadow-[0_2px_20px_rgba(255,152,0,0.15)] h-16 sm:h-18 md:h-20 lg:h-20 flex items-center border-b border-orange-300/20">
        <div className="w-full lg:w-[85%] xl:w-[80%] max-w-7xl mx-auto flex items-center justify-between px-3 xs:px-4 sm:px-5 md:px-6 lg:px-8">
          {/* LOGO */}
          <Link 
            href="/" 
            className="flex items-center shrink-0 transform hover:scale-105 hover:opacity-95 transition-all duration-300 ease-out active:scale-100"
          >
            <Image
              src="/logotransp.png"
              alt="LOT40 Logo"
              width={400}
              height={160}
              className="object-contain h-12 xs:h-14 sm:h-14 md:h-16 lg:h-18 xl:h-20 w-auto drop-shadow-sm hover:drop-shadow-md transition-all duration-300"
            />
          </Link>

          {/* DESKTOP MENU */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-lg font-bold tracking-wide text-white">
            <Link
              href="/#home"
              className="relative px-3 py-2 hover:text-white transition-colors duration-200 group whitespace-nowrap"
            >
              <span className="relative z-10">головна</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white rounded-full group-hover:w-full transition-all duration-300 ease-out"></span>
              <span className="absolute inset-0 bg-white/0 group-hover:bg-white/10 rounded-lg transition-all duration-300 -z-10"></span>
            </Link>
            <Link
              href="/components/About"
              className={`relative px-3 py-2 hover:text-white transition-colors duration-200 group whitespace-nowrap ${
                pathname === '/components/About' ? 'text-white' : ''
              }`}
            >
              <span className="relative z-10">про нас</span>
              <span className={`absolute bottom-0 left-0 h-0.5 bg-white rounded-full transition-all duration-300 ease-out ${
                pathname === '/components/About' ? 'w-full' : 'w-0 group-hover:w-full'
              }`}></span>
              <span className="absolute inset-0 bg-white/0 group-hover:bg-white/10 rounded-lg transition-all duration-300 -z-10"></span>
            </Link>
            <Link
              href="#product"
              className={`relative px-3 py-2 hover:text-white transition-colors duration-200 group whitespace-nowrap ${
                pathname.includes('product') ? 'text-white' : ''
              }`}
            >
              <span className="relative z-10">продукція</span>
              <span className={`absolute bottom-0 left-0 h-0.5 bg-white rounded-full transition-all duration-300 ease-out ${
                pathname.includes('product') ? 'w-full' : 'w-0 group-hover:w-full'
              }`}></span>
              <span className="absolute inset-0 bg-white/0 group-hover:bg-white/10 rounded-lg transition-all duration-300 -z-10"></span>
            </Link>
            <Link
              href="#production"
              className={`relative px-3 py-2 hover:text-white transition-colors duration-200 group whitespace-nowrap ${
                pathname.includes('production') ? 'text-white' : ''
              }`}
            >
              <span className="relative z-10">виробництво</span>
              <span className={`absolute bottom-0 left-0 h-0.5 bg-white rounded-full transition-all duration-300 ease-out ${
                pathname.includes('production') ? 'w-full' : 'w-0 group-hover:w-full'
              }`}></span>
              <span className="absolute inset-0 bg-white/0 group-hover:bg-white/10 rounded-lg transition-all duration-300 -z-10"></span>
            </Link>
            <Link
              href="#vacancy"
              className={`relative px-3 py-2 hover:text-white transition-colors duration-200 group whitespace-nowrap ${
                pathname.includes('vacancy') ? 'text-white' : ''
              }`}
            >
              <span className="relative z-10">вакансії</span>
              <span className={`absolute bottom-0 left-0 h-0.5 bg-white rounded-full transition-all duration-300 ease-out ${
                pathname.includes('vacancy') ? 'w-full' : 'w-0 group-hover:w-full'
              }`}></span>
              <span className="absolute inset-0 bg-white/0 group-hover:bg-white/10 rounded-lg transition-all duration-300 -z-10"></span>
            </Link>
            <Link
              href="/contact"
              className={`relative px-3 py-2 hover:text-white transition-colors duration-200 group whitespace-nowrap ${
                pathname.includes('contact') ? 'text-white' : ''
              }`}
            >
              <span className="relative z-10">контакти</span>
              <span className={`absolute bottom-0 left-0 h-0.5 bg-white rounded-full transition-all duration-300 ease-out ${
                pathname.includes('contact') ? 'w-full' : 'w-0 group-hover:w-full'
              }`}></span>
              <span className="absolute inset-0 bg-white/0 group-hover:bg-white/10 rounded-lg transition-all duration-300 -z-10"></span>
            </Link>
            
           
            {/* DESKTOP LANGUAGE BUTTON */}
            <div className="hidden lg:flex ml-4">
              <button className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full hover:bg-white/30 transition-all duration-300 text-sm font-medium shadow-lg hover:shadow-xl border border-white/30 relative overflow-hidden group">
                <span className="relative z-10">UKR/EN</span>
                <span className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-all duration-300"></span>
              </button>
            </div>
          </nav>

          {/* MOBILE BURGER WITH PAGE NAME */}
          <div className="lg:hidden flex items-center gap-2 sm:gap-3 md:gap-4">
            <span className={`text-xs xs:text-sm sm:text-base font-medium truncate max-w-[120px] xs:max-w-[150px] sm:max-w-[180px] md:max-w-[220px] ${
              pathname === '/altu-duo' ? 'text-white/90' : 'text-white/95'
            }`}>
              {getCurrentPageName()}
            </span>
            <button
              className="relative z-50 w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 flex flex-col justify-center items-center bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-all duration-300 border border-white/30 hover:scale-105 active:scale-95 hover:rotate-0 hover:shadow-lg group shrink-0"
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
            >
              <span
                className={`w-5 sm:w-6 h-0.5 bg-white rounded-full transition-all duration-300 ease-in-out ${
                  open ? "rotate-45 translate-y-0.5" : "rotate-0 -translate-y-1.5"
                }`}
              />
              <span
                className={`w-5 sm:w-6 h-0.5 bg-white rounded-full transition-all duration-300 ease-in-out ${
                  open ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`w-5 sm:w-6 h-0.5 bg-white rounded-full transition-all duration-300 ease-in-out ${
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
          fixed top-16 sm:top-18 md:top-20 right-0 w-[280px] xs:w-[300px] sm:w-[340px] md:w-[380px] max-w-[90vw] sm:max-w-[85vw]
          h-[calc(100vh-4rem)] sm:h-[calc(100vh-4.5rem)] md:h-[calc(100vh-5rem)] bg-linear-to-b from-[#ff9800] to-[#ffb74d] backdrop-blur-lg shadow-2xl z-50
          transform transition-transform duration-300 ease-in-out
          ${open ? "translate-x-0" : "translate-x-full"}
          lg:hidden p-4 xs:p-5 sm:p-6 md:p-8
        `}
      >
        <nav className="flex flex-col gap-2 text-lg md:text-xl font-bold tracking-wide text-white overflow-y-auto h-full pb-4">
          <Link
            href="/#home"
            onClick={() => setOpen(false)}
            className={`hover:bg-white/20 transition-all duration-300 py-2.5 sm:py-3 md:py-3.5 px-3 sm:px-4 md:px-5 rounded-xl hover:translate-x-1 hover:shadow-md active:translate-x-0 ${
              pathname === '/#home' ? 'bg-white/25 shadow-md' : ''
            }`}
          >
             головна 🏠︎
          </Link>
          <Link
            href="/components/About"
            onClick={() => setOpen(false)}
            className={`hover:bg-white/20 transition-all duration-300 py-2.5 sm:py-3 md:py-3.5 px-3 sm:px-4 md:px-5 rounded-xl hover:translate-x-1 hover:shadow-md active:translate-x-0 ${
              pathname === '/components/About' ? 'bg-white/25 shadow-md' : ''
            }`}
          >
            про нас
          </Link>
          <Link
            href="#product"
            onClick={() => setOpen(false)}
            className={`hover:bg-white/20 transition-all duration-300 py-2.5 sm:py-3 md:py-3.5 px-3 sm:px-4 md:px-5 rounded-xl hover:translate-x-1 hover:shadow-md active:translate-x-0 ${
              pathname.includes('product') ? 'bg-white/25 shadow-md' : ''
            }`}
          >
            продукція 
          </Link>
          <Link
            href="#production"
            onClick={() => setOpen(false)}
            className={`hover:bg-white/20 transition-all duration-300 py-2.5 sm:py-3 md:py-3.5 px-3 sm:px-4 md:px-5 rounded-xl hover:translate-x-1 hover:shadow-md active:translate-x-0 ${
              pathname.includes('production') ? 'bg-white/25 shadow-md' : ''
            }`}
          >
            виробництво
          </Link>
          <Link
            href="#vacancy"
            onClick={() => setOpen(false)}
            className={`hover:bg-white/20 transition-all duration-300 py-2.5 sm:py-3 md:py-3.5 px-3 sm:px-4 md:px-5 rounded-xl hover:translate-x-1 hover:shadow-md active:translate-x-0 ${
              pathname.includes('vacancy') ? 'bg-white/25 shadow-md' : ''
            }`}
          >
            вакансії
          </Link>
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className={`hover:bg-white/20 transition-all duration-300 py-2.5 sm:py-3 md:py-3.5 px-3 sm:px-4 md:px-5 rounded-xl hover:translate-x-1 hover:shadow-md active:translate-x-0 ${
              pathname.includes('contact') ? 'bg-white/25 shadow-md' : ''
            }`}
          >
            контакти
          </Link>

          <div className="mt-4 sm:mt-5 md:mt-6 pt-3 sm:pt-4 md:pt-5 border-t border-white/20">
            <button className="w-full bg-white/25 backdrop-blur-sm text-white px-4 py-2.5 sm:py-3 md:py-3.5 rounded-2xl hover:bg-white/35 transition-all duration-300 font-medium text-sm sm:text-base md:text-lg shadow-lg hover:shadow-xl border border-white/30 hover:scale-105 hover:translate-x-1 active:scale-100 active:translate-x-0 relative overflow-hidden group">
              <span className="relative z-10">UKR/EN</span>
              <span className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-all duration-300"></span>
            </button>
          </div>
        </nav>
      </div>
    </>
  );
}
