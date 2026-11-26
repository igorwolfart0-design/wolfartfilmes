import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://wolfartfilms.com.br"),
  title: {
    default: "Wolfart Filmes | Filmes emocionais para eventos e marcas",
    template: "%s | Wolfart Filmes"
  },
  description:
    "Filmes premium para casamentos, 15 anos, ensaios e projetos comerciais. A Wolfart Filmes transforma momentos reais em narrativas cinematograficas.",
  keywords: [
    "Wolfart Filmes",
    "filmagem de casamento",
    "videomaker casamento",
    "filmes de eventos",
    "video institucional",
    "audiovisual premium"
  ],
  openGraph: {
    title: "Wolfart Filmes",
    description:
      "Narrativas cinematograficas para eventos e marcas que merecem ser lembrados com elegancia.",
    url: "https://wolfartfilms.com.br",
    siteName: "Wolfart Filmes",
    images: [
      {
        url: "/images/hero-cinematic.png",
        width: 1792,
        height: 768,
        alt: "Cena cinematografica premium de producao audiovisual em evento"
      }
    ],
    locale: "pt_BR",
    type: "website"
  },
  icons: {
    icon: [
      { url: "/brand/favicon/favicon.ico" },
      { url: "/brand/favicon/favicon.svg", type: "image/svg+xml" },
      { url: "/brand/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/brand/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" }
    ],
    apple: "/brand/favicon/apple-touch-icon.png"
  },
  manifest: "/brand/favicon/site.webmanifest",
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
