"use client";
import Image from "next/image";
import { useTranslation } from "react-i18next";

export default function AboutPartners() {
  const { t } = useTranslation();
  const partnerNames = t("about.partners.partners", { returnObjects: true }) as string[];
  const partners = [
    { name: partnerNames[0], id: 1, logo: "/partners/metro.png" },
    { name: partnerNames[1], id: 2, logo: "/partners/klass.png" },
    { name: partnerNames[2], id: 3, logo: "/partners/foodex.png" },
    { name: partnerNames[3], id: 4, logo: "/partners/logo-leis.png" },
    { name: partnerNames[4], id: 5, logo: "/partners/AGROMIX_logo.jpg" },
  ];

  return (
    <section className="relative pt-8 sm:pt-10 pb-10 sm:pb-12 md:pb-14 overflow-hidden bg-[#F4E8DA]">
      
      <div className="relative z-20">
        <div className="max-w-6xl mx-auto flex flex-col items-center px-4 sm:px-6 md:px-8">
          
          {/* HEADING */}
          <div className="flex flex-col items-center mb-8 sm:mb-10">
            
            {/* Main heading */}
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#2C1810] leading-tight tracking-tight text-center mb-2">
              {t("about.partners.title")}
            </h2>

            {/* Subtitle */}
            <p className="text-base sm:text-lg md:text-xl text-gray-600 font-medium text-center max-w-3xl leading-relaxed">
              {t("about.partners.description")}
            </p>
          </div>

          {/* PARTNERS */}
          <div className="w-full">
            <div className="flex flex-wrap justify-center gap-8 sm:gap-10 md:gap-12">
              
              {partners.map((partner) => (
                <div
                  key={partner.id}
                  className="group flex items-center justify-center"
                >
                  {/* Circle */}
                  <div className="relative w-36 h-36 sm:w-44 sm:h-44 md:w-48 md:h-48">
                    
                    <div className="w-full h-full rounded-full bg-white border border-orange-100 shadow-md hover:shadow-xl hover:shadow-orange-100/40 transition-all duration-500 overflow-hidden group-hover:scale-105">
                      
                      {/* Logo */}
                      <div className="w-full h-full flex items-center justify-center p-6">
                        <Image
                          src={partner.logo}
                          alt={partner.name}
                          width={150}
                          height={150}
                          className="object-contain max-w-full max-h-full transition-transform duration-300 group-hover:scale-110"
                        />
                      </div>

                    </div>
                  </div>
                </div>
              ))}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}