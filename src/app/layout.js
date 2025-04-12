import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Providers from "@/components/providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Template",
  description: "Breve descrição do seu site.",
  keywords: ["template"],
  openGraph: {
    title: "Template",
    description: "Breve descrição do seu site.",
    url: `${process.env.NEXTAUTH_URL}`,
    siteName: "Template",
    images: [
      {
        url: "/teplate-brand-image.jpg",
        width: 1200,
        height: 630,
        alt: "Imagem representativa do Tempalte",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-default-50">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
