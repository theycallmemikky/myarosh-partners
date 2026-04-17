import Link from "next/link";
import { Container } from "@/components/Container";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { Reveal, RevealStagger, StaggerItem } from "@/components/Reveal";
import { services, principles, team, pressMentions } from "@/lib/content";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Principles />
      <TeamPreview />
      <Press />
      <ConsultationCTA />
    </>
  );
}

function Hero() {
  return (
    <section className="relative border-b border-line">
      <Container className="pt-20 md:pt-32 pb-20 md:pb-28">
        <RevealStagger gap={0.12}>
          <StaggerItem className="kicker mb-10">
            Московская коллегия адвокатов · с 2003
          </StaggerItem>

          <StaggerItem>
            <h1 className="font-display display-tight text-[3rem] sm:text-[4.5rem] md:text-[7rem] text-ink max-w-[1100px]">
              Справедливость —{" "}
              <span className="italic text-muted">как профессия.</span>
            </h1>
          </StaggerItem>

          <StaggerItem className="mt-12 md:mt-16 grid gap-10 md:grid-cols-12 items-end">
            <p className="md:col-span-6 text-[1.1rem] md:text-[1.2rem] text-ink/80 max-w-xl leading-relaxed">
              Коллегия имени генерал-майора юстиции А. С. Кудряшова — объединение
              адвокатов, прошедших школу прокуратуры и научной юриспруденции.
              Ведём дела в судах общей юрисдикции, арбитражах, Верховном и
              Конституционном судах Российской Федерации.
            </p>

            <div className="md:col-span-6 md:col-start-8 flex md:justify-end">
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/contacts#form"
                  className="group inline-flex items-center gap-3 bg-ink text-bg px-6 py-3.5 text-[0.95rem] rounded-full hover:bg-ink-2 transition-colors"
                >
                  Записаться
                  <span className="transition-transform group-hover:translate-x-0.5">
                    →
                  </span>
                </Link>
                <Link
                  href="/specialization"
                  className="inline-flex items-center justify-center gap-2 border border-ink/20 px-6 py-3.5 text-[0.95rem] rounded-full hover:border-ink transition-colors"
                >
                  Сфера деятельности
                </Link>
              </div>
            </div>
          </StaggerItem>

          <StaggerItem className="mt-20 md:mt-28 grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-10 border-t border-line pt-10">
            {[
              { k: "25+", v: "лет в адвокатуре" },
              { k: "14", v: "действующих адвокатов" },
              { k: "10", v: "практик и направлений" },
              { k: "24/7", v: "график работы" },
            ].map((s) => (
              <div key={s.v}>
                <div className="font-display text-[3rem] md:text-[4rem] text-ink leading-none">
                  {s.k}
                </div>
                <div className="mt-3 text-[0.88rem] text-muted">{s.v}</div>
              </div>
            ))}
          </StaggerItem>
        </RevealStagger>
      </Container>
    </section>
  );
}

function About() {
  return (
    <section className="py-24 md:py-36 border-b border-line">
      <Container>
        <div className="grid gap-12 md:gap-20 md:grid-cols-12">
          <Reveal as="div" className="md:col-span-4" dir="left">
            <div className="kicker mb-6">О коллегии</div>
            <div className="font-display italic text-[1.75rem] md:text-[2.25rem] text-ink leading-[1.15]">
              «В поисках справедливости к нам обращается большинство наших
              клиентов».
            </div>
          </Reveal>
          <Reveal
            as="div"
            className="md:col-span-7 md:col-start-6 space-y-6 text-ink/80 text-[1.05rem] leading-[1.75]"
            delay={0.1}
          >
            <p>
              Московская коллегия адвокатов имени генерал-майора юстиции А. С.
              Кудряшова создана в 2003 году в соответствии с Федеральным законом
              «Об адвокатской деятельности и адвокатуре в Российской Федерации».
              В переводе с латинского языка <em>justitia</em> означает
              справедливость — именно в её поисках к нам обращается большинство
              наших доверителей.
            </p>
            <p>
              Учредители коллегии, как и её основатель — генерал-майор юстиции А.
              С. Кудряшов, имеют богатый опыт работы в органах прокуратуры.
              Нашими постоянными клиентами являются физические и юридические
              лица, государственные организации, действующие госслужащие,
              сотрудники правоохранительных органов.
            </p>
            <p>
              Главная задача коллегии — защищать нарушенные права и интересы как
              государства, так и частных лиц. Отличительные черты нашей работы —
              свобода, независимость и профессионализм.
            </p>
            <div className="pt-4">
              <Link href="/history" className="link-quiet text-[0.95rem]">
                Читать историю коллегии →
              </Link>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

function Services() {
  return (
    <section className="py-24 md:py-36 border-b border-line">
      <Container>
        <Reveal>
          <div className="kicker mb-6">Сфера деятельности</div>
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-14">
            <h2 className="font-display display-tight text-[2.5rem] md:text-[4.5rem] text-ink max-w-3xl">
              Десять направлений,{" "}
              <span className="italic text-muted">одна коллегия.</span>
            </h2>
            <Link
              href="/specialization"
              className="link-quiet text-[0.95rem] whitespace-nowrap"
            >
              Все практики →
            </Link>
          </div>
        </Reveal>

        <RevealStagger gap={0.04}>
          <ol className="border-t border-line">
            {services.map((s, i) => (
              <StaggerItem
                as="li"
                key={s.num}
                className="group grid grid-cols-12 gap-6 py-7 md:py-8 border-b border-line hover:bg-surface transition-colors"
              >
                <div className="col-span-2 md:col-span-1 text-muted text-[0.9rem] tabular-nums pt-1">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div className="col-span-10 md:col-span-5">
                  <h3 className="font-display text-[1.35rem] md:text-[1.75rem] text-ink leading-tight">
                    {s.title}
                  </h3>
                </div>
                <div className="col-span-12 md:col-span-6 text-muted text-[0.98rem] leading-relaxed">
                  {s.blurb}
                </div>
              </StaggerItem>
            ))}
          </ol>
        </RevealStagger>
      </Container>
    </section>
  );
}

function Principles() {
  return (
    <section className="py-24 md:py-36 border-b border-line bg-surface">
      <Container>
        <Reveal>
          <div className="kicker mb-6">Принципы работы</div>
          <h2 className="font-display display-tight text-[2.5rem] md:text-[4.5rem] text-ink mb-14 max-w-4xl">
            Почему доверители возвращаются{" "}
            <span className="italic text-muted">из поколения в поколение.</span>
          </h2>
        </Reveal>
        <RevealStagger gap={0.08} className="grid md:grid-cols-2 gap-10 md:gap-12">
          {principles.map((p, i) => (
            <StaggerItem
              as="article"
              key={p.title}
              className="border-t border-line pt-8"
            >
              <div className="text-muted text-[0.88rem] tabular-nums mb-4">
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="font-display text-[1.5rem] md:text-[1.85rem] text-ink leading-[1.2] max-w-sm">
                {p.title}
              </h3>
              <p className="mt-4 text-muted leading-relaxed max-w-md">
                {p.body}
              </p>
            </StaggerItem>
          ))}
        </RevealStagger>
      </Container>
    </section>
  );
}

function TeamPreview() {
  const featured = team.slice(0, 6);
  return (
    <section className="py-24 md:py-36 border-b border-line">
      <Container>
        <Reveal>
          <div className="kicker mb-6">Команда</div>
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-14">
            <h2 className="font-display display-tight text-[2.5rem] md:text-[4.5rem] text-ink">
              Четырнадцать имён.{" "}
              <span className="italic text-muted">Одна школа.</span>
            </h2>
            <Link
              href="/komanda"
              className="link-quiet text-[0.95rem] whitespace-nowrap"
            >
              Вся команда →
            </Link>
          </div>
        </Reveal>
        <RevealStagger
          gap={0.06}
          className="grid md:grid-cols-2 lg:grid-cols-3 border-t border-line"
        >
          {featured.map((t) => (
            <StaggerItem
              as="article"
              key={t.name}
              className="group p-8 md:p-10 border-b border-line md:border-r last:border-r-0 md:[&:nth-child(2n)]:border-r-0 lg:[&:nth-child(2n)]:border-r lg:[&:nth-child(3n)]:border-r-0 hover:bg-surface transition-colors"
            >
              <div className="kicker mb-5">{t.role}</div>
              <h3 className="font-display text-[1.4rem] md:text-[1.6rem] text-ink leading-tight">
                {t.name}
              </h3>
              <p className="mt-5 italic font-display text-muted text-[1.05rem] leading-snug">
                «{t.principle}»
              </p>
            </StaggerItem>
          ))}
        </RevealStagger>
      </Container>
    </section>
  );
}

function Press() {
  return (
    <section className="py-24 md:py-36 border-b border-line">
      <Container>
        <Reveal>
          <div className="kicker mb-6">В публичном поле</div>
          <h2 className="font-display display-tight text-[2.5rem] md:text-[4.5rem] text-ink mb-14 max-w-4xl">
            Упоминания и участие —{" "}
            <span className="italic text-muted">
              на передовой правовой повестки.
            </span>
          </h2>
        </Reveal>
        <RevealStagger gap={0.06}>
          <ol className="border-t border-line">
            {pressMentions.map((m) => (
              <StaggerItem
                as="li"
                key={m.title}
                className="grid grid-cols-12 gap-6 py-7 md:py-9 border-b border-line items-start"
              >
                <div className="col-span-3 md:col-span-2 font-display text-[1.75rem] text-ink tabular-nums">
                  {m.year}
                </div>
                <div className="col-span-9 md:col-span-10">
                  <div className="kicker mb-2">{m.outlet}</div>
                  <div className="font-display text-[1.35rem] md:text-[1.65rem] text-ink leading-snug">
                    {m.title}
                  </div>
                  <div className="mt-2 text-muted text-[0.9rem]">— {m.person}</div>
                </div>
              </StaggerItem>
            ))}
          </ol>
        </RevealStagger>
        <div className="mt-10">
          <Link href="/news" className="link-quiet text-[0.95rem]">
            Все новости и публикации →
          </Link>
        </div>
      </Container>
    </section>
  );
}
