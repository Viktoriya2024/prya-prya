# REMAINING COMPONENTS - COPY & PASTE READY

This file contains all the remaining component code needed to complete i18n implementation.

## 1. HomePage/ContactSection.tsx

Copy this entire file content:

```typescript
"use client";

import { useState, FormEvent, useEffect } from "react";
import { useTranslation } from "react-i18next";

export default function ContactSection() {
  const [status, setStatus] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [mounted, setMounted] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    setMounted(true);
  }, []);

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
        setTimeout(() => setStatus(""), 5000);
      } else {
        setStatus("error");
        setErrorMessage(data.error || t("common.errors.sendError"));
      }
    } catch (err) {
      setStatus("error");
      setErrorMessage(t("common.errors.sendError"));
    }
  }

  if (!mounted) return null;

  return (
    <section id="contacts" className="bg-linear-to-b from-[#FFF8F1] to-white py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 md:px-10">

        {/* MODERN SECTION HEADER */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
            {t("contact.form.title")}
          </h2>
          <div className="w-20 h-1 bg-linear-to-r from-[#ff9800] to-[#ffb74d] rounded-full mx-auto mb-6"></div>
          <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto font-light">
            {t("contact.form.subtitle")}
          </p>
        </div>

        {/* MODERN CARD CONTAINER */}
        <div className="bg-white rounded-3xl shadow-[0_10px_60px_rgba(0,0,0,0.08)] overflow-hidden mb-16">
          <div className="grid md:grid-cols-2 gap-0">

            {/* CONTACT INFO SIDE */}
            <div className="bg-linear-to-br from-orange-50 to-yellow-50/50 p-8 md:p-12 lg:p-14">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
                {t("contact.form.contactWithUs")}
              </h3>

              <div className="space-y-6 mb-10">
                <div className="flex items-start gap-4 group">
                  <div className="shrink-0 w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow duration-300">
                    <span className="text-2xl">📍</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">{t("contact.form.address")}</p>
                    <p className="text-gray-600 text-sm md:text-base">{t("contact.form.fullAddress")}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* FORM SIDE */}
            <div className="p-8 md:p-12 lg:p-14">
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    {t("contact.form.name")}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff9800]"
                    placeholder={t("contact.form.name")}
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    {t("contact.form.email")}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff9800]"
                    placeholder={t("contact.form.email")}
                  />
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                    {t("contact.form.phone")}
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff9800]"
                    placeholder={t("contact.form.phone")}
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    {t("contact.form.message")}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff9800] resize-none"
                    placeholder={t("contact.form.message")}
                  />
                </div>

                {/* Error Message */}
                {errorMessage && (
                  <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
                    {errorMessage}
                  </div>
                )}

                {/* Success Message */}
                {status === "success" && (
                  <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-700 text-sm">
                    {t("contact.form.successMessage")}
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full px-6 py-3 bg-[#ff9800] text-white font-semibold rounded-lg hover:bg-[#f57c00] transition-colors duration-200 disabled:opacity-50"
                >
                  {status === "loading" ? t("contact.form.sending") : t("contact.form.send")}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
```

---

## 2. CookieConsent/index.ts

Make sure this file exports the component:

```typescript
export { default as CookieConsent } from "./CookieConsent";
export { default as CookieSettings } from "./CookieSettings";
```

---

## 3. How to Apply These Changes

1. Copy the code above for HomePage/ContactSection.tsx
2. Replace the content of `/components/HomePage/ContactSection.tsx` with the code above
3. Ensure the CookieConsent/index.ts file exists with proper exports

---

## 4. Testing Checklist

After applying all changes:

✅ Run `npm run dev` to start development server
✅ Visit http://localhost:3000
✅ Click language switcher (UKR/DE button) in navbar
✅ Verify text changes to German when switching to DE
✅ Verify text changes back to Ukrainian when switching to UK
✅ Test form submission on /contact page
✅ Test cookie banner at bottom of page
✅ Verify language persists after page reload

---

## 5. Production Build

When ready for production:

```bash
npm run build
npm run start
```

---

## 6. Deployment Notes

- Ensure `public/locales/` directory is included in deployment
- Make sure `.env.local` file is not committed to git
- Test language switching on production URL
- Verify translations load correctly in production build

---

## 7. Future Translations

To add more languages:

1. Create new directory: `public/locales/[language_code]/`
2. Copy `uk/common.json` to new directory
3. Translate all values to new language
4. Update language options in Navbar component
5. Test language switcher with new language

---

## 8. Translation Key Reference

Common patterns used:

- `t("common.buttons.save")` - Save button
- `t("common.navigation.home")` - Home link
- `t("home.hero.title1")` - Home hero title
- `t("contact.form.name")` - Contact form field
- `t("common.errors.required")` - Error messages
- `t("common.footer.copyright", { year: 2024 })` - With parameters

---

## 9. Known Limitations

1. API error messages are still in Ukrainian (can be addressed with server-side i18n)
2. Product names in `/data/products.ts` are hardcoded (can be moved to translations)
3. Some policy page content may still have hardcoded strings (review policy pages)

---

## 10. Support

If you encounter issues:

1. Clear browser cache and localStorage
2. Restart development server
3. Check that translation keys exist in both uk and de JSON files
4. Verify all client components have `'use client'` directive
5. Check console for any i18n initialization errors
