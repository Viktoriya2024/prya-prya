"use client";

import { useState, FormEvent } from "react";

export default function ContactSection() {
  const [status, setStatus] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    const formData = new FormData(e.target as HTMLFormElement);
    
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(formData)),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus("success");
        (e.target as HTMLFormElement).reset();
        // Reset status after 5 seconds
        setTimeout(() => setStatus(""), 5000);
      } else {
        setStatus("error");
        setErrorMessage(data.error || "Помилка відправки. Будь ласка, спробуйте ще раз.");
      }
    } catch (err) {
      setStatus("error");
      setErrorMessage("Помилка відправки. Будь ласка, спробуйте ще раз.");
    }
  }

  return (
    <section id="contacts" className="bg-linear-to-b from-[#FFF8F1] to-white py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 md:px-10">

        {/* MODERN SECTION HEADER */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
            Контакти
          </h2>
          <div className="w-20 h-1 bg-linear-to-r from-[#ff9800] to-[#ffb74d] rounded-full mx-auto mb-6"></div>
          <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto font-light">
            Маєте питання або хочете замовити? Напишіть нам — ми з радістю допоможемо!
          </p>
        </div>

        {/* MODERN CARD CONTAINER */}
        <div className="bg-white rounded-3xl shadow-[0_10px_60px_rgba(0,0,0,0.08)] overflow-hidden mb-16">
          <div className="grid md:grid-cols-2 gap-0">

            {/* CONTACT INFO SIDE */}
            <div className="bg-linear-to-br from-orange-50 to-yellow-50/50 p-8 md:p-12 lg:p-14">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
                Зв'яжіться з нами
              </h3>

              <div className="space-y-6 mb-10">
                <div className="flex items-start gap-4 group">
                  <div className="shrink-0 w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow duration-300">
                    <span className="text-2xl">📍</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Адреса</p>
                    <p className="text-gray-600 text-sm md:text-base">Україна, вул. Стуса Василя, 11</p>
                  </div>
                </div>

                {/* Contact Person 1: Геннадий Броншпак */}
                <div className="border-t pt-6">
                  <p className="font-semibold text-gray-900 mb-1">Председатель совета директоров</p>
                  <p className="text-gray-700 font-bold mb-3">Геннадий Броншпак</p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="text-lg">☎</span>
                      <a href="tel:+4915140416749" className="text-gray-600 hover:text-[#FF9800] text-sm md:text-base transition-colors">
                        +4915140416749
                      </a>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-lg">☎</span>
                      <a href="tel:+380503258008" className="text-gray-600 hover:text-[#FF9800] text-sm md:text-base transition-colors">
                        +380503258008
                      </a>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-lg">✉</span>
                      <a href="mailto:gbronshpak@gmail.com" className="text-gray-600 hover:text-[#FF9800] text-sm md:text-base transition-colors">
                        gbronshpak@gmail.com
                      </a>
                    </div>
                  </div>
                </div>

                {/* Contact Person 2: Сальников Вячеслав */}
                <div className="border-t pt-6">
                  <p className="font-semibold text-gray-900 mb-1">Коммерческий директор</p>
                  <p className="text-gray-700 font-bold mb-3">Сальников Вячеслав</p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="text-lg">☎</span>
                      <a href="tel:+380660953201" className="text-gray-600 hover:text-[#FF9800] text-sm md:text-base transition-colors">
                        +380660953201
                      </a>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-lg">✉</span>
                      <a href="mailto:ssaa.82@ukr.net" className="text-gray-600 hover:text-[#FF9800] text-sm md:text-base transition-colors">
                        ssaa.82@ukr.net
                      </a>
                    </div>
                  </div>
                </div>
              </div>              

              {/* MESSENGER BUTTONS - Removed */}
            </div>

            {/* FORM SIDE */}
            <div className="p-8 md:p-12 lg:p-14">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
                Напишіть нам
              </h3>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Ваше ім'я *
                  </label>
                  <input 
                    className="
                      w-full px-4 py-3.5
                      bg-gray-50
                      border-2 border-gray-200
                      rounded-xl
                      text-gray-900
                      placeholder-gray-400
                      focus:bg-white
                      focus:border-[#ff9800]
                      focus:ring-4 focus:ring-orange-100/50
                      outline-none
                      transition-all duration-300
                    " 
                    name="name" 
                    required 
                    placeholder="Введіть ваше ім'я"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email *
                  </label>
                  <input 
                    type="email"
                    className="
                      w-full px-4 py-3.5
                      bg-gray-50
                      border-2 border-gray-200
                      rounded-xl
                      text-gray-900
                      placeholder-gray-400
                      focus:bg-white
                      focus:border-[#ff9800]
                      focus:ring-4 focus:ring-orange-100/50
                      outline-none
                      transition-all duration-300
                    " 
                    name="email" 
                    required 
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Телефон
                  </label>
                  <input 
                    type="tel"
                    className="
                      w-full px-4 py-3.5
                      bg-gray-50
                      border-2 border-gray-200
                      rounded-xl
                      text-gray-900
                      placeholder-gray-400
                      focus:bg-white
                      focus:border-[#ff9800]
                      focus:ring-4 focus:ring-orange-100/50
                      outline-none
                      transition-all duration-300
                    " 
                    name="phone" 
                    placeholder="+380 (00) 000-00-00"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Повідомлення *
                  </label>
                  <textarea 
                    className="
                      w-full px-4 py-3.5
                      bg-gray-50
                      border-2 border-gray-200
                      rounded-xl
                      text-gray-900
                      placeholder-gray-400
                      focus:bg-white
                      focus:border-[#ff9800]
                      focus:ring-4 focus:ring-orange-100/50
                      outline-none
                      transition-all duration-300
                      resize-none
                    " 
                    name="message" 
                    required 
                    rows={4} 
                    placeholder="Розкажіть нам про ваш запит..."
                  />
                </div>

                <button 
                  type="submit"
                  disabled={status === "loading"}
                  className="
                    group w-full inline-flex items-center justify-center gap-3
                    bg-linear-to-r from-[#ff9800] to-[#ffb74d]
                    hover:from-[#ff9800] hover:to-[#ff9800]
                    text-white font-bold text-base md:text-lg
                    py-4 px-8
                    rounded-xl
                    shadow-[0_6px_24px_rgba(255,152,0,0.3)]
                    hover:shadow-[0_10px_32px_rgba(255,152,0,0.5)]
                    hover:scale-[1.02]
                    transition-all duration-300
                    border-2 border-white/20
                    disabled:opacity-70 disabled:cursor-not-allowed
                  "
                >
                  <span>{status === "loading" ? "Надсилання..." : "Надіслати повідомлення"}</span>
                  {status !== "loading" && (
                    <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  )}
                </button>

                {status === "success" && (
                  <div className="bg-green-50 border-2 border-green-200 rounded-xl p-4 flex items-center gap-3">
                    <span className="text-2xl">✓</span>
                    <p className="text-green-700 font-semibold">Дякуємо! Ваше повідомлення надіслано.</p>
                  </div>
                )}
                {status === "error" && (
                  <div className="bg-red-50 border-2 border-red-200 rounded-xl p-4 flex items-center gap-3">
                    <span className="text-2xl">✕</span>
                    <p className="text-red-700 font-semibold">{errorMessage || "Помилка відправки. Будь ласка, спробуйте ще раз."}</p>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
