import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { RevealStagger, StaggerItem } from "@/components/Reveal";
import { services } from "@/lib/content";

export const metadata: Metadata = {
  title: "Сфера деятельности",
  description:
    "Десять направлений юридической практики Московской коллегии адвокатов им. А. С. Кудряшова.",
};

export default function SpecializationPage() {
  return (
    <>
      <PageHeader
        kicker="Сфера деятельности"
        title="Десять практик,"
        italic="выстроенных вокруг доверителя."
        lede="От сопровождения повседневных коммерческих споров до представительства в Верховном и Конституционном судах Российской Федерации. Мы беремся за дела, в которых цена ошибки высока."
      />

      <section className="py-20 md:py-28">
        <Container>
          <RevealStagger
            gap={0.06}
            className="grid md:grid-cols-2 border-t border-line"
          >
            {services.map((s, i) => (
              <StaggerItem
                as="article"
                key={s.num}
                className="group p-8 md:p-12 flex flex-col min-h-[320px] border-b border-line md:border-r md:[&:nth-child(2n)]:border-r-0 hover:bg-surface transition-colors"
              >
                <div className="flex items-baseline justify-between mb-8">
                  <span className="font-display text-[1.5rem] text-ink tabular-nums leading-none">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="kicker">Практика</span>
                </div>
                <h2 className="font-display text-[1.65rem] md:text-[2rem] text-ink leading-[1.15]">
                  {s.title}
                </h2>
                <p className="mt-5 text-muted text-[1rem] leading-relaxed flex-1">
                  {s.blurb}
                </p>
                <div className="mt-8 pt-6 border-t border-line-2">
                  <Link
                    href="/contacts#form"
                    className="link-quiet text-[0.92rem]"
                  >
                    Обсудить дело →
                  </Link>
                </div>
              </StaggerItem>
            ))}
          </RevealStagger>
        </Container>
      </section>

      <ConsultationCTA />
    </>
  );
}
