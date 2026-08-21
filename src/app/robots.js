export default function robots() {
  const baseUrl = "https://binyameentravel.pk";

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}