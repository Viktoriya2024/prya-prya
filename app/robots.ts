import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/", disallow: "/api/" },
    sitemap: "https://prya-prya.com/sitemap.xml",
    host: "https://prya-prya.com",
  };
}
