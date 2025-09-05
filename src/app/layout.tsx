import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "DevService.Space - Transforme ideias em soluções digitais",
  description: "Desenvolvimento de sites, soluções personalizadas, consultoria e mentoria online. Ajude seu negócio a crescer no digital com tecnologia e estratégia.",
  keywords: "desenvolvimento web, sites, soluções digitais, consultoria, mentoria, tecnologia",
  authors: [{ name: "DevService.Space" }],
  openGraph: {
    title: "DevService.Space - Transforme ideias em soluções digitais",
    description: "Desenvolvimento de sites, soluções personalizadas, consultoria e mentoria online.",
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
      <body
        className={`${inter.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
