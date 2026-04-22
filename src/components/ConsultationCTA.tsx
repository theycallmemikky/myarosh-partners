import Link from "next/link";
import { Container } from "./Container";
import { Reveal } from "./Reveal";

export function ConsultationCTA() {
  return (
    <section className="py-24 md:py-32 border-t border-line">
      <Container>
        <Reveal className="max-w-4xl">
          <div className="kicker mb-6">Первый шаг</div>
          <h2 className="font-display display-tight text-[2.25rem] md:text-[3.75rem] text-ink">
            Расскажите о деле —{" "}
            <span className="italic">получите оценку перспектив.</span>
          </h2>
          <p className="mt-8 max-w-xl text-muted text-[1.05rem] leading-relaxed">
            Каждое сотрудничество начинается с анализа ситуации и её правовой
            оценки. Конфиденциально. Без обязательств.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-3">
            <Link
              href="/contacts#form"
              className="group inline-flex items-center gap-3 bg-ink text-bg px-6 py-3.5 text-[0.95rem] rounded-full hover:bg-ink-2 transition-colors"
            >
              Записаться на консультацию
              <span className="transition-transform group-hover:translate-x-0.5">
                →
              </span>
            </Link>
            <a
              href="tel:+74956268920"
              className="inline-flex items-center justify-center gap-3 border border-ink/20 px-6 py-3.5 text-[0.95rem] rounded-full hover:border-ink transition-colors"
            >
              +7 (495) 626-89-20
            </a>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
