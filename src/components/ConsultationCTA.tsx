import Link from "next/link";
import { Ornament } from "./Ornament";

export function ConsultationCTA() {
  return (
    <section className="relative mt-32 mb-10">
      <div className="mx-auto max-w-4xl px-6 md:px-10 text-center">
        <Ornament className="mb-8" />
        <div className="label mb-4">Первый шаг</div>
        <h2 className="font-display text-4xl md:text-6xl leading-[1.05] text-parchment">
          Расскажите о деле —<br />
          <span className="italic text-gold">получите оценку перспектив</span>
        </h2>
        <p className="mt-8 text-cream/70 text-lg max-w-2xl mx-auto">
          Каждое сотрудничество начинается с тщательного анализа ситуации и её
          правовой оценки. Конфиденциально. Без обязательств.
        </p>
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/contacts#form"
            className="group inline-flex items-center gap-4 bg-gold text-ink px-10 py-5 text-[0.78rem] tracking-[0.25em] uppercase font-medium hover:bg-gold-light transition-colors"
          >
            Записаться на консультацию
            <span className="transition-transform group-hover:translate-x-1">
              →
            </span>
          </Link>
          <a
            href="tel:+74956268920"
            className="inline-flex items-center gap-3 border border-gold/40 px-10 py-5 text-[0.78rem] tracking-[0.25em] uppercase text-gold hover:bg-gold/5 transition-colors"
          >
            +7 (495) 626-89-20
          </a>
        </div>
      </div>
    </section>
  );
}
