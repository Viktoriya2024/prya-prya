"use client";
import { useTranslation } from "react-i18next";

export default function CookiePolicy() {
  const { t } = useTranslation();
  const company = t("policies.cookies.company");

  return (
    <div className="min-h-screen bg-white pt-24 pb-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
        <h1 className="text-4xl font-bold text-[#2D241C] mb-8">{t("policies.cookies.title")}</h1>

        <div className="max-w-none text-gray-700 space-y-6">
          <section>
            <h2 className="text-2xl font-semibold text-[#2D241C] mt-8 mb-4">{t("policies.cookies.section1")}</h2>
            <p>{t("policies.cookies.section1Text")}</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#2D241C] mt-8 mb-4">{t("policies.cookies.section2")}</h2>
            <p>{t("policies.cookies.section2Text", { company: `«${company}»` })}</p>

            <h3 className="text-xl font-semibold text-[#2D241C] mt-6 mb-3">{t("policies.cookies.section2_1")}</h3>
            <p>{t("policies.cookies.section2_1Text")}</p>

            <h3 className="text-xl font-semibold text-[#2D241C] mt-6 mb-3">{t("policies.cookies.section2_2")}</h3>
            <p>{t("policies.cookies.section2_2Text", { analytics: t("policies.cookies.analytics") })}</p>
            <p className="mt-3">{t("policies.cookies.section2_2SubText")}</p>
            <ul className="list-disc list-inside space-y-2 ml-4 mt-2">
              <li>{t("policies.cookies.section2_2Item1")}</li>
              <li>{t("policies.cookies.section2_2Item2")}</li>
              <li>{t("policies.cookies.section2_2Item3")}</li>
              <li>{t("policies.cookies.section2_2Item4")}</li>
            </ul>
            <p className="mt-4">{t("policies.cookies.section2_2SubText2")}</p>

            <h3 className="text-xl font-semibold text-[#2D241C] mt-6 mb-3">{t("policies.cookies.section2_3")}</h3>
            <p>{t("policies.cookies.section2_3Text")}</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#2D241C] mt-8 mb-4">{t("policies.cookies.section3")}</h2>
            <p>{t("policies.cookies.section3Text")}</p>
            <p className="mt-3">{t("policies.cookies.section3SubText")}</p>
            <ul className="list-disc list-inside space-y-2 ml-4 mt-2">
              <li>{t("policies.cookies.section3Item1")}</li>
              <li>{t("policies.cookies.section3Item2")}</li>
              <li>{t("policies.cookies.section3Item3")}</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#2D241C] mt-8 mb-4">{t("policies.cookies.section4")}</h2>
            <p>{t("policies.cookies.section4Text")}</p>
            <p className="mt-3">{t("policies.cookies.section4SubText")}</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#2D241C] mt-8 mb-4">{t("policies.cookies.section5")}</h2>
            <p>{t("policies.cookies.section5Text")}</p>
            <ul className="list-disc list-inside space-y-2 ml-4 mt-2">
              <li>{t("policies.cookies.section5Item1")}</li>
            </ul>
            <p className="mt-4">{t("policies.cookies.section5SubText")}</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#2D241C] mt-8 mb-4">{t("policies.cookies.section6")}</h2>
            <p>{t("policies.cookies.section6Text", { company: `«${company}»` })}</p>
            <p className="mt-3">{t("policies.cookies.section6SubText")}</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#2D241C] mt-8 mb-4">{t("policies.cookies.section7")}</h2>
            <p>{t("policies.cookies.section7Text")}</p>
            <p className="font-semibold mt-4">{company}</p>
            <p className="space-y-2">
              📍 {t("common.footer.address")}<br/>
              ✉ E-mail:{' '}
              <a href="mailto:gbronshpak@gmail.com" className="text-[#FF9800] hover:text-[#FFB74D] underline">
                gbronshpak@gmail.com
              </a>
              <br/>
              ☎ +49 1514 0416749<br/>
              ☎ +38 050 3258008
            </p>
          </section>

          <section className="mt-8 pt-6 border-t border-gray-300">
            <p className="text-sm text-gray-600">
              <strong>{t("policies.cookies.lastUpdated")}:</strong> {t("policies.cookies.lastUpdatedDate")}.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}