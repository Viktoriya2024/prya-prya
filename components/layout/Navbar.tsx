"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslation } from "react-i18next";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  const { t, i18n } = useTranslation();

  useEffect(() => {
    setMounted(true);
  }, []);

  const navLinks = [
    { label: t("common.navigation.home"), href: "/" },
    { label: t("common.navigation.about"), href: "/about" },
    { label: t("common.navigation.products"), href: "/products" },
    { label: t("common.navigation.production"), href: "/production" },
    { label: t("common.navigation.vacancies"), href: "/vacancy" },
    { label: t("common.navigation.contacts"), href: "/contact" },
  ];

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  const handleLanguageChange = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  const currentLang = i18n.language;
  const otherLang = currentLang === 'uk' ? 'de' : 'uk';
  const langDisplay = currentLang === 'uk' ? 'UK/DE' : 'DE/UK';

  if (!mounted) return null;

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-linear-to-r from-[#ff9800] via-[#ff9800] to-[#ffb74d] shadow-[0_4px_20px_rgba(255,152,0,0.18)]">
        <div className="flex h-16 w-full items-center justify-between gap-1 px-2 sm:gap-2 sm:px-4 md:gap-4 md:px-6 lg:h-20 lg:gap-6 lg:px-8">
          {/* LOGO */}
          <Link
            href="/"
            className="relative z-60 flex items-center"
            aria-label={t("common.navigation.home")}
          >
            <Image
              src="/logotransp.png"
              alt="Пря-Пря"
              width={180}
              height={72}
              className="h-10 w-auto object-contain sm:h-12 md:h-14 lg:h-16 xl:h-18"
              priority
            />
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden items-center gap-2 lg:flex">
            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`relative rounded-xl px-4 py-2 text-base font-semibold capitalize tracking-wide text-white transition-all duration-300 ${
                  isActive(item.href)
                    ? "bg-white/12"
                    : "hover:bg-white/10"
                }`}
              >
                {item.label}
                <span
                  className={`absolute bottom-1 left-4 h-0.5 rounded-full bg-white transition-all duration-300 ${
                    isActive(item.href) ? "w-[calc(100%-2rem)]" : "w-0"
                  }`}
                />
              </Link>
            ))}

            <button
              type="button"
              onClick={() => handleLanguageChange(otherLang)}
              className="ml-3 inline-flex items-center rounded-full bg-white/20 backdrop-blur-sm border border-white/40 p-1 transition-all hover:bg-white/30 hover:border-white/60"
              aria-label={`Switch language to ${otherLang}`}
            >
              <span className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all ${
                currentLang === 'uk' 
                  ? 'bg-white/30 text-white shadow-md' 
                  : 'text-white/80 hover:text-white'
              }`}>
                UK
              </span>
              <span className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all ${
                currentLang === 'de' 
                  ? 'bg-white/30 text-white shadow-md' 
                  : 'text-white/80 hover:text-white'
              }`}>
                DE
              </span>
            </button>
          </nav>

          {/* MOBILE BURGER */}
          <button
            type="button"
            onClick={() => setOpen((prev) => !prev)}
            aria-label={open ? t("common.navigation.menu.close") : t("common.navigation.menu.open")}
            aria-expanded={open}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white shadow-lg hover:bg-gray-50 active:bg-gray-100 sm:h-11 sm:w-11 lg:hidden"
          >
            <span className="relative block h-5 w-6">
              <span
                className={`absolute block h-0.5 w-full rounded-full bg-gray-900 transition-all duration-300 ${
                  open ? "top-2.5 rotate-45" : "top-1"
                }`}
              />
              <span
                className={`absolute top-2.5 block h-0.5 w-full rounded-full bg-gray-900 transition-all duration-300 ${
                  open ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute block h-0.5 w-full rounded-full bg-gray-900 transition-all duration-300 ${
                  open ? "top-2.5 -rotate-45" : "top-4"
                }`}
              />
            </span>
          </button>
        </div>

        {/* MOBILE MENU */}
        {open && (
          <div className="absolute inset-x-0 top-16 z-40 bg-linear-to-b from-[#ff9800] to-[#ffb74d] border-b border-white/10 lg:hidden">
            <nav className="flex flex-col gap-2 px-4 py-4 sm:px-6">
              {navLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`rounded-lg px-4 py-3 text-base font-semibold text-white transition-all ${
                    isActive(item.href)
                      ? "bg-white/20"
                      : "hover:bg-white/10"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <button
                type="button"
                onClick={() => handleLanguageChange(otherLang)}
                className="mt-2 inline-flex w-full items-center justify-center rounded-full bg-white/20 backdrop-blur-sm border border-white/40 p-1 transition-all hover:bg-white/30 hover:border-white/60"
              >
                <span className={`flex-1 px-3 py-2 rounded-full text-sm font-bold transition-all text-center ${
                  currentLang === 'uk' 
                    ? 'bg-white/30 text-white shadow-md' 
                    : 'text-white/80 hover:text-white'
                }`}>
                  UK
                </span>
                <span className={`flex-1 px-3 py-2 rounded-full text-sm font-bold transition-all text-center ${
                  currentLang === 'de' 
                    ? 'bg-white/30 text-white shadow-md' 
                    : 'text-white/80 hover:text-white'
                }`}>
                  DE
                </span>
              </button>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}