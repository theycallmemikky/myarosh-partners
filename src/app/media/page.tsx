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
    title: "Право на самооборону и защиту жилища",
    outlet: "Петербургский Международный юридический форум",
    length: "42 мин",
  },
  {
    title: "Дискуссия о роли прокуратуры в современной России",
    outlet: "ТВ-эфир",
    length: "28 мин",
  },
  {
    title: "Комментарий по громкому уголовному делу",
    outlet: "Федеральные СМИ",
    length: "15 мин",
  },
];

export default function MediaPage() {
  return (
    <>
      <PageHeader
        kicker="Медиатека"
        title="Публичные выступления"
        italic="и видеоматериалы коллегии."
        lede="Участие адвокатов коллегии в юридических форумах, телевизионных дискуссиях и авторитетных отраслевых изданиях."
      />

      <section className="py-20 md:py-28">
        <Container>
          <RevealStagger gap={0.08} className="grid md:grid-cols-3 gap-8">
            {videos.map((v) => (
              <StaggerItem
                as="article"
                key={v.title}
                className="group cursor-pointer"
              >
                <div className="aspect-[4/3] bg-surface border border-line relative overflow-hidden mb-5 group-hover:border-ink transition-colors">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-ink text-bg flex items-center justify-center group-hover:scale-110 transition-transform">
                      <span className="text-[1rem] ml-0.5">▶</span>
                    </div>
                  </div>
                  <div className="absolute bottom-3 right-3 text-muted text-[0.75rem] bg-bg/80 backdrop-blur px-2 py-1 rounded">
                    {v.length}
                  </div>
                </div>
                <div className="kicker mb-2">{v.outlet}</div>
                <h3 className="font-display text-[1.3rem] md:text-[1.45rem] text-ink leading-tight">
                  {v.title}
                </h3>
              </StaggerItem>
            ))}
          </RevealStagger>
          <Reveal
            as="p"
            className="mt-20 text-muted italic font-display text-[1.15rem]"
          >
            Новые материалы публикуются по мере выхода в эфир.
          </Reveal>
        </Container>
      </section>

      <ConsultationCTA />
    </>
  );
}
