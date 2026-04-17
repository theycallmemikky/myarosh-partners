import type { Metadata } from "next";
import { Inter, Instrument_Serif } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const instrument = Instrument_Serif({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "М. Ярош & Партнёры — Московская коллегия адвокатов",
    template: "%s · М. Ярош & Партнёры",
  },
  description:
    "Московская коллегия адвокатов им. генерал-майора юстиции А.С. Кудряшова. С 2003 года защищаем интересы частных лиц, бизнеса и государственных организаций.",
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
      className={`${inter.variable} ${instrument.variable} h-full`}
    >
      <body className="min-h-full flex flex-col bg-bg text-ink antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
