'use client';

import { useState } from 'react';
import { X } from 'lucide-react';

interface CookieConsent {
  necessary: boolean;
  analytics: boolean;
}

interface CookieSettingsProps {
  consent: CookieConsent;
  onSave: (consent: CookieConsent) => void;
  onAcceptAll: () => void;
  onClose: () => void;
}

export default function CookieSettings({
  consent,
  onSave,
  onAcceptAll,
  onClose,
}: CookieSettingsProps) {
  const [localConsent, setLocalConsent] = useState(consent);

  const handleToggle = (key: keyof CookieConsent) => {
    if (key === 'necessary') return; // Necessary can't be disabled
    setLocalConsent((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const handleSave = () => {
    onSave(localConsent);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="bg-linear-to-r from-[#FF9800] to-[#FFB74D] px-6 py-4 flex items-center justify-between">
          <h2 className="text-xl font-bold text-white">Налаштування cookies</h2>
          <button
            onClick={onClose}
            className="text-white hover:bg-white/20 p-1 rounded-lg transition-colors duration-200"
            aria-label="Закрити"
          >
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="px-6 py-6 space-y-4">
          {/* Necessary Cookies */}
          <div className="flex items-start gap-4 pb-4 border-b border-gray-200">
            <div className="flex-1">
              <h3 className="font-semibold text-gray-900 mb-1">Необхідні cookies</h3>
              <p className="text-sm text-gray-600">
                Забезпечують базову роботу сайту та його безпеку.
              </p>
            </div>
            <div className="flex items-center">
              <div className="relative inline-block w-12 h-7 bg-[#FF9800] rounded-full cursor-not-allowed opacity-70">
                <div className="absolute top-1 right-1 w-5 h-5 bg-white rounded-full transition-transform duration-300"></div>
              </div>
            </div>
          </div>

          {/* Analytical Cookies */}
          <div className="flex items-start gap-4">
            <div className="flex-1">
              <h3 className="font-semibold text-gray-900 mb-1">Аналітичні cookies</h3>
              <p className="text-sm text-gray-600">
                Допомагають нам розуміти, як користувачі взаємодіють із сайтом, щоб його покращувати.
              </p>
            </div>
            <button
              onClick={() => handleToggle('analytics')}
              className={`relative inline-block w-12 h-7 rounded-full transition-colors duration-300 flex-shrink-0 ${
                localConsent.analytics ? 'bg-[#FF9800]' : 'bg-gray-300'
              }`}
              aria-label="Переключити аналітичні cookies"
            >
              <div
                className={`absolute top-1 ${
                  localConsent.analytics ? 'right-1' : 'left-1'
                } w-5 h-5 bg-white rounded-full transition-transform duration-300`}
              ></div>
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-gray-50 px-6 py-4 flex flex-col sm:flex-row gap-3">
          <button
            onClick={handleSave}
            className="flex-1 px-4 py-2.5 text-sm font-semibold text-white bg-[#FF9800] hover:bg-[#F57C00] rounded-lg transition-colors duration-200"
          >
            Зберегти налаштування
          </button>
          <button
            onClick={onAcceptAll}
            className="flex-1 px-4 py-2.5 text-sm font-semibold text-[#FF9800] bg-orange-50 hover:bg-orange-100 rounded-lg transition-colors duration-200 border border-orange-200"
          >
            Прийняти всі
          </button>
        </div>
      </div>
    </div>
  );
}
