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
    <section id="contacts" className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-6 text-center">

        {/* Heading */}
        <h2 className="text-3xl font-bold text-gray-800 border-b-4 border-orange-500 pb-2 inline-block mb-6">
          Контакти
        </h2>

        <p className="text-gray-600 max-w-xl mx-auto mb-10">
          Маєте питання або хочете замовити? Напишіть нам — ми з радістю допоможемо!
        </p>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-start">

          {/* Contact Info */}
          <div className="text-left text-gray-600 space-y-5">

            <p className="flex gap-2">
              <span className="text-orange-500 text-xl">📍</span>
              Україна, м. Київ, вул. Солодка, 12
            </p>

            <p className="flex gap-2">
              <span className="text-orange-500 text-xl">☎</span>
              +380 (00) 123-45-67
            </p>

            <p className="flex gap-2">
              <span className="text-orange-500 text-xl">✉</span>
              info@prya-prya.com
            </p>

            <p className="flex gap-2">
              <span className="text-orange-500 text-xl">🕒</span>
              Пн–Пт: 09:00–18:00 • Сб–Нд: вихідний
            </p>

            {/* Buttons */}
            <div className="flex gap-4 pt-4">
              <a href="https://wa.me/380001234567"
                className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-5 rounded-lg transition">
                WhatsApp
              </a>

              <a href="viber://chat?number=+380001234567"
                className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-5 rounded-lg transition">
                Viber
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
