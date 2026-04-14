import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { Reveal, RevealStagger, StaggerItem } from "@/components/Reveal";
import { team } from "@/lib/content";

export const metadata: Metadata = {
  title: "Команда",
  description:
    "Адвокаты Московской коллегии им. А. С. Кудряшова: доктора юридических наук, бывшие работники прокуратуры и следственных органов.",
};

export default function TeamPage() {
  const [lead, ...rest] = team;
  return (
    <>
      <PageHeader
        num="III"
        kicker="Команда коллегии"
        title="Четырнадцать адвокатов,"
        italic="одна профессиональная школа."
        lede="Наши адвокаты — выпускники ведущих юридических школ, доктора и кандидаты наук, бывшие работники органов прокуратуры, следствия и военной юстиции. Каждый принёс в коллегию личный опыт и профессиональное кредо."
      />

      {/* Lead partner — full-width feature */}
      <section className="py-24 md:py-32 border-b border-gold/15">
        <Container>
          <div className="grid md:grid-cols-12 gap-12 items-start">
            <Reveal as="div" className="md:col-span-5 md:sticky md:top-32" dir="left">
              <div className="label mb-6">Руководитель коллегии</div>
              <h2 className="font-display text-5xl md:text-6xl text-parchment leading-[1.05]">
                {lead.name}
              </h2>
              <div className="mt-4 text-gold italic font-display text-xl">
                {lead.role}
              </div>
              <div className="mt-10 rule-gold" />
              <blockquote className="mt-10 font-display italic text-2xl md:text-3xl text-gold/90 leading-snug border-l-2 border-gold pl-6">
                «{lead.principle}»
              </blockquote>
            </Reveal>
            <Reveal as="div" className="md:col-span-7 space-y-8" delay={0.15} dir="right">
              <ul className="space-y-3">
                {lead.credentials.map((c) => (
                  <li
                    key={c}
                    className="flex items-start gap-4 text-cream/80 text-lg"
                  >
                    <span className="roman text-sm mt-2">◆</span>
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
              <p className="drop-cap text-cream/80 text-lg leading-[1.8]">
                {lead.bio}
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Rest of team grid */}
      <section className="py-24 md:py-32">
        <Container>
          <div className="label mb-10">Адвокаты коллегии</div>
          <RevealStagger
            gap={0.06}
            className="grid md:grid-cols-2 gap-px bg-gold/15 border border-gold/15"
          >
            {rest.map((t, i) => (
              <StaggerItem
                as="article"
                key={t.name}
                className="bg-ink p-10 md:p-12 flex flex-col min-h-[360px] group hover:bg-ink-soft transition-colors"
              >
                <div className="flex items-baseline justify-between mb-6">
                  <span className="roman text-xl">
                    {romanize(i + 2)}
                  </span>
                  <span className="label opacity-60">{t.role}</span>
                </div>
                <h3 className="font-display text-3xl md:text-[2rem] text-parchment leading-[1.1]">
                  {t.name}
                </h3>
                <ul className="mt-5 space-y-1.5 text-cream/60 text-sm">
                  {t.credentials.map((c) => (
                    <li key={c}>— {c}</li>
                  ))}
                </ul>
                <p className="mt-6 text-cream/75 leading-relaxed flex-1">
                  {t.bio}
                </p>
                <blockquote className="mt-6 pt-6 border-t border-gold/15 italic font-display text-gold/80 text-lg">
                  «{t.principle}»
                </blockquote>
              </StaggerItem>
            ))}
          </RevealStagger>
        </Container>
      </section>

      <ConsultationCTA />
    </>
  );
}

function romanize(n: number): string {
  const map: [number, string][] = [
    [10, "X"],
    [9, "IX"],
    [5, "V"],
    [4, "IV"],
    [1, "I"],
  ];
  let result = "";
  let num = n;
  for (const [v, s] of map) {
    while (num >= v) {
      result += s;
      num -= v;
    }
  }
  return result;
}
