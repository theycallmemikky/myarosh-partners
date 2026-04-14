import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { Reveal, RevealStagger, StaggerItem } from "@/components/Reveal";
import { historyTimeline } from "@/lib/content";

export const metadata: Metadata = {
  title: "История",
  description:
    "История Московской коллегии адвокатов им. генерал-майора юстиции А. С. Кудряшова.",
};

export default function HistoryPage() {
  return (
    <>
      <PageHeader
        num="IV"
        kicker="История коллегии"
        title="От Главной военной прокуратуры —"
        italic="к Московской коллегии адвокатов."
        lede="Коллегия носит имя генерал-майора юстиции А. С. Кудряшова — участника боевых действий в Афганистане и Чеченской Республике, многолетнего руководителя кадров Главной военной прокуратуры России, основателя коллегии."
      />

      <section className="py-24 md:py-32">
        <Container width="narrow">
          <Reveal as="article" className="space-y-8 text-cream/85 text-lg leading-[1.85]">
            <p className="drop-cap">
              Московская коллегия адвокатов имени генерал-майора юстиции А. С.
              Кудряшова окончательно сформирована 25 января 2003 года в
              соответствии с Федеральным законом «Об адвокатской деятельности и
              адвокатуре в Российской Федерации». Основателем коллегии является
              генерал-майор юстиции А. С. Кудряшов.
            </p>
            <p>
              Становление коллегии продолжили дети Александра Сергеевича
              Кудряшова: дочь — Марина Александровна Ярош — и сын — Дмитрий
              Александрович Кудряшов, которые впоследствии, после трагической
              гибели отца, назвали коллегию его именем.
            </p>
            <p>
              Генерал-майор юстиции А. С. Кудряшов родился в 1943 году, в селе
              Верхняя Маза Ульяновской области. В 1981 году был переведён в
              Москву в Главную военную прокуратуру Российской Федерации, где
              работал в течение долгих лет и стал начальником управления кадров
              — заместителем главного военного прокурора РФ.
            </p>
            <p>
              А. С. Кудряшов — участник боевых действий в Демократической
              Республике Афганистан и Чеченской Республике, в ходе которых им
              было получено огнестрельное ранение. Награждён многочисленными
              государственными наградами, в числе которых ордена и медали.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="py-24 md:py-32 bg-ink-deep border-y border-gold/15">
        <Container>
          <div className="label mb-14 text-center">Хронология</div>
          <div className="relative max-w-4xl mx-auto">
            <div
              className="absolute left-[70px] md:left-1/2 top-0 bottom-0 w-px bg-gold/25"
              aria-hidden
            />
            <RevealStagger gap={0.12}>
              <ol className="space-y-20">
                {historyTimeline.map((item, i) => (
                  <StaggerItem
                    as="li"
                    key={item.title}
                    className={`relative grid md:grid-cols-2 gap-10 items-start ${
                      i % 2 === 1
                        ? "md:text-right md:[&>*:first-child]:col-start-1"
                        : ""
                    }`}
                  >
                  <div
                    className={
                      i % 2 === 0
                        ? "md:pr-16 pl-24 md:pl-0"
                        : "md:pl-16 md:col-start-2 pl-24 md:pl-16"
                    }
                  >
                    <div className="roman text-2xl mb-3">{item.year}</div>
                    <h3 className="font-display text-3xl md:text-4xl text-parchment leading-tight">
                      {item.title}
                    </h3>
                    <p className="mt-4 text-cream/70 leading-relaxed">
                      {item.body}
                    </p>
                  </div>
                    <span
                      className="absolute left-[63px] md:left-1/2 top-2 -translate-x-1/2 w-4 h-4 rotate-45 bg-gold"
                      aria-hidden
                    />
                  </StaggerItem>
                ))}
              </ol>
            </RevealStagger>
          </div>
        </Container>
      </section>

      <ConsultationCTA />
    </>
  );
}
