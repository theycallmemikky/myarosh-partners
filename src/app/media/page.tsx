import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { RevealStagger, StaggerItem, Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Медиатека",
};

const videos = [
  {
    num: "I",
    title: "Право на самооборону и защиту жилища",
    outlet: "Петербургский Международный юридический форум",
    length: "42 мин",
  },
  {
    num: "II",
    title: "Дискуссия о роли прокуратуры в современной России",
    outlet: "ТВ-эфир",
    length: "28 мин",
  },
  {
    num: "III",
    title: "Комментарий по громкому уголовному делу",
    outlet: "Федеральные СМИ",
    length: "15 мин",
  },
];

export default function MediaPage() {
  return (
    <>
      <PageHeader
        num="V"
        kicker="Медиатека"
        title="Публичные выступления"
        italic="и видеоматериалы коллегии."
        lede="Участие адвокатов коллегии в юридических форумах, телевизионных дискуссиях и авторитетных отраслевых изданиях."
      />

      <section className="py-24 md:py-32">
        <Container>
          <RevealStagger
            gap={0.1}
            className="grid md:grid-cols-3 gap-px bg-gold/15 border border-gold/15"
          >
            {videos.map((v) => (
              <StaggerItem
                as="article"
                key={v.title}
                className="bg-ink p-8 md:p-10 flex flex-col min-h-[420px] group cursor-pointer"
              >
                <div className="aspect-[4/3] border border-gold/25 relative overflow-hidden mb-8 group-hover:border-gold transition-colors">
                  <div
                    className="absolute inset-0 opacity-30"
                    style={{
                      background:
                        "radial-gradient(circle at 30% 30%, rgba(186,139,76,0.3), transparent 70%)",
                    }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 rounded-full border border-gold flex items-center justify-center group-hover:bg-gold group-hover:text-ink transition-all">
                      <span className="text-gold group-hover:text-ink text-2xl ml-1">
                        ▶
                      </span>
                    </div>
                  </div>
                  <div className="absolute top-4 left-4 roman text-lg">
                    {v.num}
                  </div>
                  <div className="absolute bottom-4 right-4 label">
                    {v.length}
                  </div>
                </div>
                <div className="label mb-3">{v.outlet}</div>
                <h3 className="font-display text-2xl text-parchment leading-tight group-hover:text-gold-light transition-colors">
                  {v.title}
                </h3>
              </StaggerItem>
            ))}
          </RevealStagger>
          <Reveal as="p" className="mt-14 text-center text-cream/60 italic font-display text-xl">
            Новые материалы публикуются по мере выхода в эфир.
          </Reveal>
        </Container>
      </section>

      <ConsultationCTA />
    </>
  );
}
