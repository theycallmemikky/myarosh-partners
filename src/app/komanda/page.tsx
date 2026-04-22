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
        kicker="Команда коллегии"
        title="Четырнадцать адвокатов,"
        italic="одна профессиональная школа."
        lede="Наши адвокаты — выпускники ведущих юридических школ, доктора и кандидаты наук, бывшие работники органов прокуратуры, следствия и военной юстиции. Каждый принёс в коллегию личный опыт и профессиональное кредо."
      />

      <section className="py-20 md:py-28 border-b border-line">
        <Container>
          <div className="grid md:grid-cols-12 gap-12 md:gap-16 items-start">
            <Reveal
              as="div"
              className="md:col-span-5 md:sticky md:top-28"
              dir="left"
            >
              <div className="kicker mb-6">Руководитель коллегии</div>
              <h2 className="font-display display-tight text-[2.25rem] md:text-[3.25rem] text-ink">
                {lead.name}
              </h2>
              <div className="mt-3 italic font-display text-muted text-[1.15rem]">
                {lead.role}
              </div>
              <div className="hairline mt-8 mb-8" />
              <blockquote className="font-display italic text-[1.35rem] md:text-[1.65rem] text-ink leading-snug">
                «{lead.principle}»
              </blockquote>
            </Reveal>
            <Reveal
              as="div"
              className="md:col-span-7 space-y-8"
              delay={0.1}
              dir="right"
            >
              <ul className="space-y-2.5">
                {lead.credentials.map((c) => (
                  <li
                    key={c}
                    className="flex items-start gap-3 text-ink/85 text-[1rem] leading-relaxed"
                  >
                    <span className="w-3 h-px bg-muted shrink-0 mt-[0.85em]" />
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
              <p className="text-ink/80 text-[1.05rem] leading-[1.8]">
                {lead.bio}
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="py-20 md:py-28">
        <Container>
          <div className="kicker mb-10">Адвокаты коллегии</div>
          <RevealStagger
            gap={0.04}
            className="grid md:grid-cols-2 border-t border-line"
          >
            {rest.map((t, i) => (
              <StaggerItem
                as="article"
                key={t.name}
                className="group p-8 md:p-12 flex flex-col min-h-[340px] border-b border-line md:border-r md:[&:nth-child(2n)]:border-r-0 hover:bg-surface transition-colors"
              >
                <div className="flex items-baseline justify-between mb-6">
                  <span className="font-display text-[1.5rem] text-ink tabular-nums leading-none">
                    {String(i + 2).padStart(2, "0")}
                  </span>
                  <span className="kicker">{t.role}</span>
                </div>
                <h3 className="font-display text-[1.55rem] md:text-[1.85rem] text-ink leading-[1.1]">
                  {t.name}
                </h3>
                <ul className="mt-4 space-y-1 text-muted text-[0.9rem]">
                  {t.credentials.map((c) => (
                    <li key={c}>— {c}</li>
                  ))}
                </ul>
                <p className="mt-5 text-ink/80 text-[0.98rem] leading-relaxed flex-1">
                  {t.bio}
                </p>
                <blockquote className="mt-6 pt-5 border-t border-line-2 italic font-display text-muted text-[1.05rem]">
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
