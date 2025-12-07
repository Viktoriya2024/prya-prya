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
      <header className="w-full fixed top-0 left-0 z-50 bg-[#ff9800] shadow-md h-16 sm:h-20 flex items-center">
        <div className="w-full lg:w-[75%] max-w-7xl mx-auto flex items-center justify-between px-3 sm:px-4 lg:px-6">
          {/* LOGO */}
          <Link href="/" className="flex items-center shrink-0">
            <Image
              src="/logotransp.png"
              alt="LOT40 Logo"
              width={400}
              height={160}
              className="object-contain h-20 sm:h-10 lg:h-20 w-auto"
            />
          </Link>

          {/* DESKTOP MENU */}
          <nav className="hidden lg:flex items-center gap-4 xl:gap-8 text-sm lg:text-base xl:text-lg font-semibold text-white">
            <Link
              href="/#home"
              className="hover:text-[#452829] transition-colors focus:outline-none focus:text-[#452829] focus:border-b-2 focus:border-red-600 focus:pb-1 whitespace-nowrap"
            >
              головна
            </Link>
            <Link
              href="/#about"
              className={`hover:text-[#452829] transition-colors focus:outline-none focus:text-white focus:border-b-2 focus:border-red-600 focus:pb-1 whitespace-nowrap ${
                pathname === '/about' ? 'text-white border-b-2 border-white pb-1' : ''
              }`}
            >
              про нас
            </Link>
            <Link
              href="#product"
              className={`hover:text-[#452829] transition-colors focus:outline-none focus:text-white focus:border-b-2 focus:border-red-600 focus:pb-1 whitespace-nowrap ${
                pathname.includes('product') ? 'text-white border-b-2 border-white pb-1' : ''
              }`}
            >
              продукція 
            </Link>
            <Link
              href="#production"
              className={`hover:text-[#452829] transition-colors focus:outline-none focus:text-white focus:border-b-2 focus:border-red-600 focus:pb-1 whitespace-nowrap ${
                pathname.includes('production') ? 'text-white border-b-2 border-white pb-1' : ''
              }`}
            >
              виробництво
            </Link>
            <Link
              href="#vacancy"
              className={`hover:text-[#452829] transition-colors focus:outline-none focus:text-white focus:border-b-2 focus:border-red-600 focus:pb-1 whitespace-nowrap ${
                pathname.includes('vacancy') ? 'text-white border-b-2 border-white pb-1' : ''
              }`}
            >
              вакансії
            </Link>
            <Link
              href="#contact"
              className={`hover:text-[#452829] transition-colors focus:outline-none focus:text-white focus:border-b-2 focus:border-red-600 focus:pb-1 whitespace-nowrap ${
                pathname.includes('contact') ? 'text-white border-b-2 border-white pb-1' : ''
              }`}
            >
              контакти
            </Link>
            
           
            {/* DESKTOP LANGUAGE BUTTON */}
            <div className="hidden lg:flex">
              <button className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700 transition-colors text-sm font-medium">
                PT/EN
              </button>
            </div>
          </nav>

          {/* MOBILE BURGER WITH PAGE NAME */}
          <div className="lg:hidden flex items-center gap-3">
            <span className={`text-sm sm:text-base font-semibold truncate max-w-[150px] sm:max-w-[200px] ${
              pathname === '/altu-duo' ? 'text-[#35543C]' : 'text-[#222]'
            }`}>
              {getCurrentPageName()}
            </span>
            <button
              className="relative z-50 w-10 h-10 flex flex-col justify-center items-center bg-gray-50 rounded-md hover:bg-gray-100 transition-colors"
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
            >
              <span
                className={`w-6 h-0.5 bg-red-600 transition-all duration-300 ease-in-out ${
                  open ? "rotate-45 translate-y-0.5" : "rotate-0 -translate-y-1.5"
                }`}
              />
              <span
                className={`w-6 h-0.5 bg-red-600 transition-all duration-300 ease-in-out ${
                  open ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`w-6 h-0.5 bg-red-600 transition-all duration-300 ease-in-out ${
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
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* MOBILE SIDEBAR */}
      <div
        className={`
          fixed top-16 sm:top-20 right-0 w-[320px] max-w-[85vw]
          h-[calc(100vh-4rem)] sm:h-[calc(100vh-5rem)]  bg-[#ff9800] shadow-2xl z-50
          transform transition-transform duration-300 ease-in-out
          ${open ? "translate-x-0" : "translate-x-full"}
          lg:hidden p-6
        `}
      >
        <nav className="flex flex-col gap-4 text-base font-semibold text-white overflow-y-auto h-full">
          <Link
            href="/#home"
            onClick={() => setOpen(false)}
            className={`hover:text-red-600 transition-colors focus:outline-none focus:text-red-600 py-3 px-4 hover:bg-gray-50 rounded-lg border-b border-gray-100 ${
              pathname === '/#home' ? 'text-red-600 bg-red-50' : ''
            }`}
          >
             головна 🏠︎
          </Link>
          <Link
            href="/#about"
            onClick={() => setOpen(false)}
            className={`hover:text-red-600 transition-colors focus:outline-none focus:text-red-600 py-3 px-4 hover:bg-gray-50 rounded-lg border-b border-gray-100 ${
              pathname === '/about' ? 'text-red-600 bg-red-50' : ''
            }`}
          >
            про нас
          </Link>
          <Link
            href="#product"
            onClick={() => setOpen(false)}
            className={`hover:text-red-600 transition-colors focus:outline-none focus:text-red-600 py-3 px-4 hover:bg-gray-50 rounded-lg border-b border-gray-100 ${
              pathname.includes('product') ? 'text-red-600 bg-red-50' : ''
            }`}
          >
            продукція 
          </Link>
          <Link
            href="#production"
            onClick={() => setOpen(false)}
            className={`hover:text-red-600 transition-colors focus:outline-none focus:text-red-600 py-3 px-4 hover:bg-gray-50 rounded-lg border-b border-gray-100 ${
              pathname.includes('production') ? 'text-red-600 bg-red-50' : ''
            }`}
          >
            виробництво
          </Link>
          <Link
            href="#vacancy"
            onClick={() => setOpen(false)}
            className={`hover:text-red-600 transition-colors focus:outline-none focus:text-red-600 py-3 px-4 hover:bg-gray-50 rounded-lg border-b border-gray-100 ${
              pathname.includes('vacancy') ? 'text-red-600 bg-red-50' : ''
            }`}
          >
            вакансії
          </Link>
          <Link
            href="#contact"
            onClick={() => setOpen(false)}
            className={`hover:text-red-600 transition-colors focus:outline-none focus:text-red-600 py-3 px-4 hover:bg-gray-50 rounded-lg border-b border-gray-100 ${
              pathname.includes('contact') ? 'text-red-600 bg-red-50' : ''
            }`}
          >
            контакти
          </Link>

          <div className="mt-6 pt-4 border-t border-gray-200">
            <button className="w-full bg-red-600 text-white px-4 py-3 rounded-lg hover:bg-red-700 transition-colors font-medium">
              PT/EN
            </button>
          </div>
        </nav>
      </div>
    </>
  );
}
