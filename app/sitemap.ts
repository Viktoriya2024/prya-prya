import type { MetadataRoute } from "next";
import { products, categories } from "@/data/products";

const SITE_URL = "https://prya-prya.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    "",
    "/about",
    "/products",
    "/production",
    "/vacancy",
    "/contact",
    "/privacy-policy",
    "/cookie-policy",
    "/terms-of-use",
  ].map((path) => ({
    url: `${SITE_URL}${path}`,
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.7,
  }));

  const categoryPages = categories.map((c) => ({
    url: `${SITE_URL}/products/${c.id}`,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const productPages = products.map((p) => ({
    url: `${SITE_URL}/products/${p.category}/${p.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const all = [...staticPages, ...categoryPages, ...productPages];
  // data/products.ts has a few duplicate entries; list each URL once
  return all.filter((e, i) => all.findIndex((x) => x.url === e.url) === i);
}
