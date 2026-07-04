"use client";
import { useTranslation } from "react-i18next";

export default function PrivacyPolicy() {
  const { t } = useTranslation();
  const company = t("policies.privacy.company");

  return (
    <div className="min-h-screen bg-white pt-24 pb-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
        <h1 className="text-4xl font-bold text-[#2D241C] mb-8">{t("policies.privacy.title")}</h1>

        <div className="max-w-none text-gray-700 space-y-6">
          <section>
            <h2 className="text-2xl font-semibold text-[#2D241C] mt-8 mb-4">{t("policies.privacy.section1")}</h2>
            <p>{t("policies.privacy.section1Text1", { company: `«${company}»` })}</p>
            <p>{t("policies.privacy.section1Text2")}</p>
            <p>{t("policies.privacy.section1Text3")}</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#2D241C] mt-8 mb-4">{t("policies.privacy.section2")}</h2>
            <p>{t("policies.privacy.section2Text1")}</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>{t("policies.privacy.section2Item1")}</li>
              <li>{t("policies.privacy.section2Item2")}</li>
              <li>{t("policies.privacy.section2Item3")}</li>
              <li>{t("policies.privacy.section2Item4")}</li>
            </ul>
            <p className="mt-4">{t("policies.privacy.section2Text2")}</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#2D241C] mt-8 mb-4">{t("policies.privacy.section3")}</h2>
            <p>{t("policies.privacy.section3Text1")}</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>{t("policies.privacy.section3Item1")}</li>
              <li>{t("policies.privacy.section3Item2")}</li>
              <li>{t("policies.privacy.section3Item3")}</li>
              <li>{t("policies.privacy.section3Item4")}</li>
              <li>{t("policies.privacy.section3Item5")}</li>
            </ul>
            <p className="mt-4">{t("policies.privacy.section3Text2")}</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#2D241C] mt-8 mb-4">{t("policies.privacy.section4")}</h2>
            <p>{t("policies.privacy.section4Text1", { company: `«${company}»` })}</p>
            <p>{t("policies.privacy.section4Text2")}</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#2D241C] mt-8 mb-4">{t("policies.privacy.section5")}</h2>
            <p>{t("policies.privacy.section5Text")}</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>{t("policies.privacy.section5Item1")}</li>
              <li>{t("policies.privacy.section5Item2")}</li>
              <li>{t("policies.privacy.section5Item3")}</li>
              <li>{t("policies.privacy.section5Item4")}</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#2D241C] mt-8 mb-4">{t("policies.privacy.section6")}</h2>
            <p>{t("policies.privacy.section6Text1")}</p>
            <p>{t("policies.privacy.section6Text2")}</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#2D241C] mt-8 mb-4">{t("policies.privacy.section7")}</h2>
            <p>{t("policies.privacy.section7Text")}</p>
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
              <strong>{t("policies.privacy.lastUpdated")}:</strong> {t("policies.privacy.lastUpdatedDate")}.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
