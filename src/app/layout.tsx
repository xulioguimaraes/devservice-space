import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import GoogleTagManager, {
  GoogleTagManagerNoscript,
} from "@/components/GoogleTagManager";
const GTM_ID_WEB = "GTM-WTNSLQ73";
const GTM_ID_SERVER = "GTM-59DXRW8N";
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "DevService.Space - Transforme ideias em soluções digitais",
  description:
    "Desenvolvimento de sites, soluções personalizadas, consultoria e mentoria online. Ajude seu negócio a crescer no digital com tecnologia e estratégia.",
  keywords:
    "desenvolvimento web, sites, soluções digitais, consultoria, mentoria, tecnologia",
  authors: [{ name: "DevService.Space" }],
  openGraph: {
    title: "DevService.Space - Transforme ideias em soluções digitais",
    description:
      "Desenvolvimento de sites, soluções personalizadas, consultoria e mentoria online.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <GoogleTagManager gTM_ID={GTM_ID_WEB} />
        <GoogleTagManager gTM_ID={GTM_ID_SERVER} />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        <GoogleTagManagerNoscript gTM_ID={GTM_ID_WEB} />
        <GoogleTagManagerNoscript gTM_ID={GTM_ID_SERVER} />
        {children}
      </body>
    </html>
  );
}
