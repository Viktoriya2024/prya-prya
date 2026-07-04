"use client";
import Link from "next/link";
import Breadcrumb from "@/components/shared/Breadcrumb";
import { useTranslation } from "react-i18next";

interface CategoryBannerProps {
  title: string;
  subtitle: string;
  colorClass: string;
}

export default function CategoryBanner({
  title,
  subtitle,
  colorClass,
}: CategoryBannerProps) {
  const { t } = useTranslation();
  return (
    <div className={`relative py-12 md:py-20 bg-linear-to-r ${colorClass}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        {/* Breadcrumb */}
        <div className="mb-6">
          <Breadcrumb
            items={[
              { label: t("common.navigation.products"), href: "/products" },
              { label: title },
            ]}
          />
        </div>

        {/* Category Title */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-3">
          {title}
        </h1>
        <p className="text-lg md:text-xl text-gray-700 max-w-2xl">
          {subtitle}
        </p>
      </div>
    </div>
  );
}
