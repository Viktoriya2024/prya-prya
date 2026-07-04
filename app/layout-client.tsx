'use client';

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { CookieConsent } from "@/components/CookieConsent";
import { I18nProvider } from "@/lib/I18nProvider";

export function LayoutClient({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <I18nProvider>
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
      <CookieConsent />
    </I18nProvider>
  );
}
