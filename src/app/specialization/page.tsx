import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";
import { ConsultationCTA } from "@/components/ConsultationCTA";
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
        num="II"
        kicker="Сфера деятельности"
        title="Десять практик,"
        italic="выстроенных вокруг доверителя."
        lede="От сопровождения повседневных коммерческих споров до представительства в Верховном и Конституционном судах Российской Федерации. Мы беремся за дела, в которых цена ошибки высока."
      />

      <section className="py-24 md:py-32">
        <Container>
          <div className="grid md:grid-cols-2 gap-px bg-gold/15 border border-gold/15">
            {services.map((s) => (
              <article
                key={s.num}
                className="bg-ink p-10 md:p-14 flex flex-col min-h-[340px]"
              >
                <div className="flex items-baseline justify-between mb-8">
                  <span className="roman text-3xl">{s.num}</span>
                  <span className="label opacity-60">Практика</span>
                </div>
                <h2 className="font-display text-3xl md:text-4xl text-parchment leading-[1.1]">
                  {s.title}
                </h2>
                <p className="mt-6 text-cream/70 text-base leading-relaxed flex-1">
                  {s.blurb}
                </p>
                <div className="mt-8 pt-6 border-t border-gold/15">
                  <a
                    href="/contacts#form"
                    className="link-gold text-[0.72rem] tracking-[0.22em] uppercase"
                  >
                    Обсудить дело →
                  </a>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <ConsultationCTA />
    </>
  );
}
