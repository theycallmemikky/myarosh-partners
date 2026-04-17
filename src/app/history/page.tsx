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
        kicker="История коллегии"
        title="От Главной военной прокуратуры —"
        italic="к Московской коллегии адвокатов."
        lede="Коллегия носит имя генерал-майора юстиции А. С. Кудряшова — участника боевых действий в Афганистане и Чеченской Республике, многолетнего руководителя кадров Главной военной прокуратуры России, основателя коллегии."
      />

      <section className="py-20 md:py-28 border-b border-line">
        <Container width="narrow">
          <Reveal
            as="article"
            className="space-y-6 text-ink/85 text-[1.05rem] leading-[1.85]"
          >
            <p>
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

      <section className="py-20 md:py-28 bg-surface border-b border-line">
        <Container>
          <div className="kicker mb-12">Хронология</div>
          <RevealStagger gap={0.08}>
            <ol className="border-t border-line">
              {historyTimeline.map((item) => (
                <StaggerItem
                  as="li"
                  key={item.title}
                  className="grid grid-cols-12 gap-6 py-10 md:py-12 border-b border-line items-start"
                >
                  <div className="col-span-12 md:col-span-3">
                    <div className="font-display text-[1.75rem] md:text-[2rem] text-ink leading-none">
                      {item.year}
                    </div>
                  </div>
                  <div className="col-span-12 md:col-span-9 max-w-3xl">
                    <h3 className="font-display text-[1.5rem] md:text-[1.85rem] text-ink leading-[1.2]">
                      {item.title}
                    </h3>
                    <p className="mt-4 text-muted leading-relaxed">
                      {item.body}
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </ol>
          </RevealStagger>
        </Container>
      </section>

      <ConsultationCTA />
    </>
  );
}
