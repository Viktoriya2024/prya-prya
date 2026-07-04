"use client";
import { useTranslation } from "react-i18next";

export default function ProductsQuality() {
  const { t } = useTranslation();
  const features = t("products.quality.features", { returnObjects: true });

interface QualityFeature {
  icon: string;
  title: string;
  description: string;
}

  const qualityFeatures: QualityFeature[] = (features as any).map((feature: any, index: number) => ({
    icon: ["🌿", "✔️", "🏆", "⚙️"][index],
    title: feature.title,
    description: feature.description,
  }));
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-linear-to-b bg-[#F4E8DA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        {/* Section Title */}
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            {t("products.quality.title")}
          </h2>
          <div className="w-20 h-1 bg-linear-to-r from-[#FF9800] to-[#FFB74D] rounded-full mx-auto mb-4"></div>
          <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">
            {t("products.quality.subtitle")}
          </p>
        </div>

        {/* Quality Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {qualityFeatures.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center"
            >
              {/* Icon */}
              <div className="text-5xl sm:text-6xl mb-4">{feature.icon}</div>

              {/* Title */}
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
