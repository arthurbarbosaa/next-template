export default async function sitemap() {
  return [
    {
      url: `${process.env.NEXTAUTH_URL}`,
      lastModified: new Date(),
    },
  ];
}
