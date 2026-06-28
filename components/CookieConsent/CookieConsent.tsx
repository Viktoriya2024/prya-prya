'use client';

import { useState, useEffect } from 'react';
import CookieSettings from './CookieSettings';

interface CookieConsent {
  necessary: boolean;
  analytics: boolean;
}

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [consent, setConsent] = useState<CookieConsent>({
    necessary: true,
    analytics: false,
  });
  const [mounted, setMounted] = useState(false);

  // Initialize on client side only
  useEffect(() => {
    setMounted(true);
    const savedConsent = localStorage.getItem('cookieConsent');
    
    if (!savedConsent) {
      setShowBanner(true);
    } else {
      try {
        const parsed = JSON.parse(savedConsent);
        setConsent(parsed);
        // Load GA if analytics was accepted
        if (parsed.analytics) {
          loadGoogleAnalytics();
        }
      } catch (e) {
        setShowBanner(true);
      }
    }
  }, []);

  const loadGoogleAnalytics = () => {
    const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
    if (!gaId || typeof window === 'undefined') return;

    // Check if GA is already loaded
    if ((window as any).gtag) return;

    const script1 = document.createElement('script');
    script1.async = true;
    script1.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`;
    document.head.appendChild(script1);

    script1.onload = () => {
      (window as any).dataLayer = (window as any).dataLayer || [];
      function gtag(...args: any[]) {
        (window as any).dataLayer.push(args);
      }
      (window as any).gtag = gtag;
      gtag('js', new Date());
      gtag('config', gaId);
    };
  };

  const handleAcceptAll = () => {
    const newConsent = { necessary: true, analytics: true };
    localStorage.setItem('cookieConsent', JSON.stringify(newConsent));
    setConsent(newConsent);
    loadGoogleAnalytics();
    setShowBanner(false);
  };

  const handleReject = () => {
    const newConsent = { necessary: true, analytics: false };
    localStorage.setItem('cookieConsent', JSON.stringify(newConsent));
    setConsent(newConsent);
    setShowBanner(false);
  };

  const handleSaveSettings = (newConsent: CookieConsent) => {
    localStorage.setItem('cookieConsent', JSON.stringify(newConsent));
    setConsent(newConsent);
    if (newConsent.analytics) {
      loadGoogleAnalytics();
    }
    setShowSettings(false);
    setShowBanner(false);
  };

  if (!mounted) return null;

  return (
    <>
      {/* Cookie Banner */}
      {showBanner && (
        <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t-2 border-[#FF9800] shadow-2xl">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              {/* Text Content */}
              <div className="flex-1">
                <h3 className="text-lg font-bold text-[#2D241C] mb-2">
                  Ми використовуємо cookies
                </h3>
                <p className="text-sm text-gray-600">
                  Ми використовуємо необхідні cookies для роботи сайту та аналітичні cookies, щоб покращувати наш вебсайт. Ви можете прийняти всі cookies або відхилити необов'язкові.
                </p>
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 shrink-0">
                <button
                  onClick={handleReject}
                  className="px-4 py-2.5 text-sm font-semibold text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors duration-200 border border-gray-300"
                >
                  Відхилити
                </button>

                <button
                  onClick={() => setShowSettings(true)}
                  className="px-4 py-2.5 text-sm font-semibold text-[#FF9800] bg-orange-50 hover:bg-orange-100 rounded-lg transition-colors duration-200 border border-orange-200"
                >
                  Налаштування
                </button>

                <button
                  onClick={handleAcceptAll}
                  className="px-6 py-2.5 text-sm font-semibold text-white bg-[#FF9800] hover:bg-[#F57C00] rounded-lg transition-colors duration-200"
                >
                  Прийняти всі
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Cookie Settings Modal */}
      {showSettings && (
        <CookieSettings
          consent={consent}
          onSave={handleSaveSettings}
          onAcceptAll={handleAcceptAll}
          onClose={() => setShowSettings(false)}
        />
      )}

      {/* Cookie Settings Trigger Button (Footer or elsewhere) */}
      {mounted && !showBanner && (
        <div className="fixed bottom-4 right-4 z-40">
          <button
            onClick={() => setShowSettings(true)}
            className="text-xs text-gray-500 hover:text-gray-700 underline py-1 px-2 rounded hover:bg-gray-100 transition-colors duration-200"
            title="Відкрити налаштування cookies"
          >
            🍪 Налаштування cookies
          </button>
        </div>
      )}
    </>
  );
}
