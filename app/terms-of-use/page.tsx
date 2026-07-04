"use client";
import { useTranslation } from "react-i18next";

export default function TermsOfUse() {
  const { t } = useTranslation();
  const company = t("policies.terms.company");

  return (
    <div className="min-h-screen bg-white pt-24 pb-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
        <h1 className="text-4xl font-bold text-[#2D241C] mb-8">{t("policies.terms.title")}</h1>

        <div className="max-w-none text-gray-700 space-y-6">
          <section>
            <h2 className="text-2xl font-semibold text-[#2D241C] mt-8 mb-4">{t("policies.terms.section1")}</h2>
            <p>{t("policies.terms.section1Text1", { company: `«${company}»` })}</p>
            <p>{t("policies.terms.section1Text2")}</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#2D241C] mt-8 mb-4">{t("policies.terms.section2")}</h2>
            <p>{t("policies.terms.section2Text1")}</p>
            <p>{t("policies.terms.section2Text2")}</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#2D241C] mt-8 mb-4">{t("policies.terms.section3")}</h2>
            <p>{t("policies.terms.section3Text1", { company: `«${company}»` })}</p>
            <p>{t("policies.terms.section3Text2")}</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#2D241C] mt-8 mb-4">{t("policies.terms.section4")}</h2>
            <p>{t("policies.terms.section4Text1")}</p>
            <p>{t("policies.terms.section4Text2")}</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#2D241C] mt-8 mb-4">{t("policies.terms.section5")}</h2>
            <p>{t("policies.terms.section5Text1")}</p>
            <p>{t("policies.terms.section5Text2", { company: `«${company}»` })}</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#2D241C] mt-8 mb-4">{t("policies.terms.section6")}</h2>
            <p>{t("policies.terms.section6Text1")}</p>
            <p>{t("policies.terms.section6Text2")}</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#2D241C] mt-8 mb-4">{t("policies.terms.section7")}</h2>
            <p>{t("policies.terms.section7Text")}</p>
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
              <strong>{t("policies.terms.lastUpdated")}:</strong> {t("policies.terms.lastUpdatedDate")}.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}