'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const navigationLinks = [
    { label: 'Головна', href: '/' },
    { label: 'Про нас', href: '/about' },
    { label: 'Продукція', href: '/products' },
    { label: 'Виробництво', href: '/production' },
    { label: 'Вакансії', href: '/vacancy' },
    { label: 'Контакти', href: '/contact' },
  ];

  const informationLinks = [
    { label: 'Політика конфіденційності', href: '/privacy-policy' },
    { label: 'Політика Cookies', href: '/cookie-policy' },
    { label: 'Умови використання', href: '/terms-of-use' },
  ];

  const contactInfo = [
    { icon: MapPin, text: 'Україна, вул. Стуса Василя, 11' },
    { icon: Phone, text: '+4915140416749', href: 'tel:+4915140416749' },
    { icon: Phone, text: '+380503258008', href: 'tel:+380503258008' },
    { icon: Mail, text: 'gbronshpak@gmail.com', href: 'mailto:gbronshpak@gmail.com' },
  ];

  return (
    <footer className="w-full">
      {/* Separator Section */}
      <section className="bg-[#F5EFE0] py-4 sm:py-6">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm sm:text-base font-light text-[#2D241C]">
            Працюємо по всій Україні та відкриті до міжнародної співпраці.
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
                Традиції української якості.
              </p>

              {/* Contact Info */}
              <div className="space-y-2 pt-2">
                {contactInfo.map((item, index) => {
                  const Icon = item.icon;
                  const content = (
                    <div className="flex items-start gap-2">
                      <Icon className="h-4 w-4 flex-shrink-0 text-[#FFB74D] mt-0.5" />
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
              <h4 className="text-sm font-semibold tracking-wide">Навігація</h4>
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
              <h4 className="text-sm font-semibold tracking-wide">Інформація</h4>
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
            <p>© {currentYear} ПРЯ-ПРЯ. Всі права захищені.</p>
            <p>Made in Ukraine 🇺🇦</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
