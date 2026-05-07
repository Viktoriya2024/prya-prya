"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks: { label: string; href: string }[] = [
  { label: "головна", href: "/" },
  { label: "про нас", href: "/about" },
  { label: "продукція", href: "/products" },
  { label: "виробництво", href: "/production" },
  { label: "вакансії", href: "/vacancy" },
  { label: "контакти", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

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

  const isActive = (href:string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-linear-to-r from-[#ff9800] via-[#ff9800] to-[#ffb74d] shadow-[0_4px_20px_rgba(255,152,0,0.18)]">
        <div className="flex h-16 w-full items-center justify-between gap-1 px-2 sm:gap-2 sm:px-4 md:gap-4 md:px-6 lg:h-20 lg:gap-6 lg:px-8">
          {/* LOGO */}
          <Link
            href="/"
            className="relative z-60 flex items-center"
            aria-label="На головну"
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
              className="ml-3 rounded-full border border-white/30 bg-white/20 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/30"
            >
              UKR/EN
            </button>
          </nav>

          {/* MOBILE BURGER */}
          <button
            type="button"
            onClick={() => setOpen((prev) => !prev)}
            aria-label={open ? "Закрити меню" : "Відкрити меню"}
            aria-expanded={open}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white shadow-lg hover:bg-gray-50 active:bg-gray-100 sm:h-11 sm:w-11 lg:hidden"
          >
            <span className="relative block h-5 w-6">
              <span
                className={`absolute left-0 top-0 h-0.5 w-6 rounded-full bg-orange-600 transition-all duration-300 ${
                  open ? "top-2 rotate-45" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-2 h-0.5 w-6 rounded-full bg-orange-600 transition-all duration-300 ${
                  open ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 top-4 h-0.5 w-6 rounded-full bg-orange-600 transition-all duration-300 ${
                  open ? "top-2 -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </header>

      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 z-40 bg-black/35 backdrop-blur-[2px] transition-opacity duration-300 lg:hidden ${
          open
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      />

      <aside
        className={`fixed right-0 top-0 z-50 h-screen w-[85%] max-w-[360px] border-l border-white/10 bg-linear-to-b from-[#ff9800] to-[#ffb74d] px-6 pb-8 pt-24 shadow-2xl transition-transform duration-300 ease-out lg:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <nav className="flex flex-col gap-2">
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className={`rounded-2xl px-4 py-3 text-base font-semibold capitalize text-white transition-all duration-300 ${
                isActive(item.href)
                  ? "bg-white/20 shadow-md"
                  : "hover:bg-white/15"
              }`}
            >
              {item.label}
            </Link>
          ))}

          <button
            type="button"
            className="mt-4 rounded-2xl border border-white/30 bg-white/20 px-4 py-3 text-left text-sm font-semibold text-white transition hover:bg-white/30"
          >
            UKR/EN
          </button>
        </nav>
      </aside>
    </>
  );
}