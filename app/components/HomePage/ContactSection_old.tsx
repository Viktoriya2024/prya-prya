"use client";

import { useState, FormEvent } from "react";

export default function ContactSection() {
  const [status, setStatus] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");

    const formData = new FormData(e.target as HTMLFormElement);
    const res = await fetch("/api/send-message", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Object.fromEntries(formData)),
    });

    res.ok ? setStatus("success") : setStatus("error");
    if (res.ok) (e.target as HTMLFormElement).reset();
  }

  return (
    <section id="contacts" className="bg-linear-to-b from-orange-50/30 to-white py-20 md:py-28">
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
                  <div className="flex-shrink-0 w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow duration-300">
                    <span className="text-2xl">📍</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Адреса</p>
                    <p className="text-gray-600 text-sm md:text-base">Україна, м. Київ, вул. Солодка, 12</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="flex-shrink-0 w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow duration-300">
                    <span className="text-2xl">☎</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Телефон</p>
                    <p className="text-gray-600 text-sm md:text-base">+380 (00) 123-45-67</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="flex-shrink-0 w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow duration-300">
                    <span className="text-2xl">✉</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Email</p>
                    <p className="text-gray-600 text-sm md:text-base">info@prya-prya.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="flex-shrink-0 w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow duration-300">
                    <span className="text-2xl">🕒</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Графік роботи</p>
                    <p className="text-gray-600 text-sm md:text-base">Пн–Пт: 09:00–18:00</p>
                    <p className="text-gray-600 text-sm md:text-base">Сб–Нд: вихідний</p>
                  </div>
                </div>
              </div>

              {/* MESSENGER BUTTONS */}
              <div className="space-y-3">
                <p className="text-sm font-semibold text-gray-700 mb-4">Зв'яжіться через месенджери:</p>
                <a 
                  href="https://wa.me/380001234567"
                  className="
                    flex items-center justify-center gap-3
                    w-full bg-white hover:bg-green-50
                    text-green-600 font-semibold
                    py-3 px-5 rounded-xl
                    transition-all duration-300
                    shadow-sm hover:shadow-md
                    border border-green-200/50
                    group
                  "
                >
                  <span className="text-xl">💬</span>
                  <span>WhatsApp</span>
                  <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                  </svg>
                </a>

                <a 
                  href="viber://chat?number=+380001234567"
                  className="
                    flex items-center justify-center gap-3
                    w-full bg-white hover:bg-purple-50
                    text-purple-600 font-semibold
                    py-3 px-5 rounded-xl
                    transition-all duration-300
                    shadow-sm hover:shadow-md
                    border border-purple-200/50
                    group
                  "
                >
                  <span className="text-xl">📱</span>
                  <span>Viber</span>
                  <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4 ">
            <input className="w-full placeholder-gray-400 border border-gray-600 rounded-lg p-3 focus:border-orange-500 outline-none " name="name" required placeholder="Ваше ім’я *"/>
            <input className="w-full border placeholder-gray-400rounded-lg border-gray-600 p-3 focus:border-orange-500 outline-none" name="email" required placeholder="Ваш Email *"/>
            <input className="w-full border placeholder-gray-400 rounded-lg p-3 border-gray-600 focus:border-orange-500 outline-none" name="phone" placeholder="Ваш номер телефону"/>
            <textarea className="w-full border  placeholder-gray-400 rounded-lg p-3 border-gray-600 focus:border-orange-500 outline-none" name="message" required rows={4} placeholder="Повідомлення *"></textarea>

            <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-semibold">
              {status === "loading" ? "Надсилання..." : "Надіслати"}
            </button>

            {status === "success" && <p className="text-green-600 font-semibold">✔ Повідомлення відправлено!</p>}
            {status === "error" && <p className="text-red-600 font-semibold">❌ Сталася помилка. Спробуйте ще раз.</p>}
          </form>
        </div>

        {/* MAP */}
        <div className="mt-14 rounded-lg shadow-lg overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2539.0806619774444!2d30.52466307640745!3d50.45003347159382!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4ce5c9bf3b0e9%3A0xcee2a6910fe5ad8d!2z0JrQsNC80LXQvdC40LXQvSDQuC4!5e0!3m2!1suk!2sua!4v1701893934103!5m2!1suk!2sua"
            className="w-full" height="350" allowFullScreen loading="lazy">
          </iframe>
        </div>
      </div>
    </section>
  );
}
