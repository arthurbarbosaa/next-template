export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/api/auth/",
    },
    sitemap: `${process.env.NEXTAUTH_URL}/sitemap.xml`,
  };
}
