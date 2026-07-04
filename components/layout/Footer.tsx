'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MapPin } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';

export default function Footer() {
  const { t } = useTranslation();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const currentYear = new Date().getFullYear();

  const navigationLinks = [
    { label: t("common.footer.links.home"), href: "/" },
    { label: t("common.footer.links.about"), href: "/about" },
    { label: t("common.footer.links.products"), href: "/products" },
    { label: t("common.footer.links.production"), href: "/production" },
    { label: t("common.footer.links.vacancies"), href: "/vacancy" },
    { label: t("common.footer.links.contacts"), href: "/contact" },
  ];

  const informationLinks = [
    { label: t("common.footer.links.privacyPolicy"), href: "/privacy-policy" },
    { label: t("common.footer.links.cookiePolicy"), href: "/cookie-policy" },
    { label: t("common.footer.links.termsOfUse"), href: "/terms-of-use" },
  ];

  const contactInfo = [
    { icon: MapPin, text: t("common.footer.address") },
    { icon: Phone, text: "+4915140416749", href: "tel:+4915140416749" },
    { icon: Phone, text: "+380503258008", href: "tel:+380503258008" },
    { icon: Mail, text: "gbronshpak@gmail.com", href: "mailto:gbronshpak@gmail.com" },
  ];

  if (!mounted) return null;

  return (
    <footer className="w-full">
      {/* Separator Section */}
      <section className="bg-[#F5EFE0] py-4 sm:py-6">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm sm:text-base font-light text-[#2D241C]">
            {t("common.footer.workingArea")}
          </p>
        </div>
      </section>

      {/* Main Footer */}
      <div className="bg-[#2D241C] text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Column 1: Company Info */}
            <div className="flex flex-col space-y-3">
              {/* Logo */}
              <div className="flex items-center gap-2">
                <Image
                  src="/logotransp.png"
                  alt="ПРЯ-ПРЯ"
                  width={40}
                  height={40}
                  className="h-10 w-auto object-contain"
                />
                <h3 className="text-lg font-bold tracking-wide">ПРЯ-ПРЯ</h3>
              </div>

              {/* Description */}
              <p className="text-xs leading-relaxed text-gray-400">
                {t("common.footer.slogan")}
              </p>

              {/* Contact Info */}
              <div className="space-y-2 pt-2">
                {contactInfo.map((item, index) => {
                  const Icon = item.icon;
                  const content = (
                    <div className="flex items-start gap-2">
                      <Icon className="h-4 w-4 shrink-0 text-[#FFB74D] mt-0.5" />
                      <span className="text-xs text-gray-400">{item.text}</span>
                    </div>
                  );

                  return (
                    <div key={index}>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="hover:text-[#FFB74D] transition-colors duration-200"
                        >
                          {content}
                        </a>
                      ) : (
                        content
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Column 2: Navigation */}
            <div className="flex flex-col space-y-2">
              <h4 className="text-sm font-semibold tracking-wide">{t("common.footer.navigationTitle")}</h4>
              <nav className="space-y-1.5">
                {navigationLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block text-xs text-gray-400 hover:text-[#FFB74D] transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Column 3: Information */}
            <div className="flex flex-col space-y-2">
              <h4 className="text-sm font-semibold tracking-wide">{t("common.footer.informationTitle")}</h4>
              <nav className="space-y-1.5">
                {informationLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block text-xs text-gray-400 hover:text-[#FFB74D] transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>
          </div>

          {/* Divider */}
          <div className="mt-6 sm:mt-8 border-t border-gray-700" />

          {/* Bottom Bar */}
          <div className="mt-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-gray-500">
            <p>{t("common.footer.copyright", { year: currentYear })}</p>
            <p>{t("common.footer.madeIn")}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
