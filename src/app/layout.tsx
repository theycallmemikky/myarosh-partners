import type { Metadata } from "next";
import { Cormorant_Garamond, Source_Sans_3 } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const source = Source_Sans_3({
  variable: "--font-source",
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "М. Ярош & Партнёры — Московская коллегия адвокатов",
    template: "%s · М. Ярош & Партнёры",
  },
  description:
    "Московская коллегия адвокатов им. генерал-майора юстиции А.С. Кудряшова. С 2003 года защищаем интересы частных лиц, бизнеса и государственных организаций. Уголовная защита, арбитраж, Верховный и Конституционный суды.",
  openGraph: {
    title: "М. Ярош & Партнёры",
    description:
      "Московская коллегия адвокатов с 2003 года. Свобода, независимость, профессионализм.",
    locale: "ru_RU",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ru"
      className={`${cormorant.variable} ${source.variable} h-full`}
    >
      <body className="grain min-h-full flex flex-col bg-ink text-cream">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
