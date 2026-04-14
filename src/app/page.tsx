import Link from "next/link";
import { Container } from "@/components/Container";
import { SectionLabel } from "@/components/Ornament";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { Reveal, RevealStagger, StaggerItem } from "@/components/Reveal";
import { ParallaxBackground } from "@/components/Parallax";
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
    <section className="relative overflow-hidden border-b border-gold/15 min-h-[85vh] flex items-center">
      <ParallaxBackground
        speed={-120}
        className="absolute inset-0 -top-20 -bottom-20 opacity-[0.07] pointer-events-none"
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(to right, #ba8b4c 1px, transparent 1px), linear-gradient(to bottom, #ba8b4c 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </ParallaxBackground>

      <ParallaxBackground
        speed={80}
        className="absolute inset-0 -top-40 -bottom-40 pointer-events-none"
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at center top, rgba(186,139,76,0.14), transparent 60%)",
          }}
        />
      </ParallaxBackground>

      <Container className="relative py-28 md:py-40 w-full">
        <RevealStagger gap={0.15}>
          <StaggerItem className="flex items-center gap-6 mb-14">
            <span className="roman text-base">Est. MMIII</span>
            <span className="h-px flex-1 max-w-[200px] bg-rule" />
            <span className="label">Московская коллегия адвокатов</span>
          </StaggerItem>

          <StaggerItem>
            <h1 className="font-display text-[2.75rem] sm:text-6xl md:text-[5.5rem] leading-[0.95] text-parchment max-w-5xl">
              Справедливость
              <br />
              <span className="italic text-gold">как профессия.</span>
              <br />
              Двадцать пять лет
              <br />
              на стороне доверителей.
            </h1>
          </StaggerItem>

          <StaggerItem className="mt-14 grid gap-10 md:grid-cols-12 items-end">
            <p className="md:col-span-6 text-lg md:text-xl text-cream/75 max-w-xl leading-relaxed">
              Коллегия имени генерал-майора юстиции{" "}
              <span className="text-parchment">А. С. Кудряшова</span> —
              объединение адвокатов, прошедших школу прокуратуры и научной
              юриспруденции. Ведём дела в судах общей юрисдикции, арбитражах,
              Верховном и Конституционном судах Российской Федерации.
            </p>

            <div className="md:col-span-6 md:col-start-8 flex md:justify-end">
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contacts#form"
                  className="group inline-flex items-center gap-4 bg-gold text-ink px-8 py-5 text-[0.72rem] tracking-[0.25em] uppercase font-medium hover:bg-gold-light transition-colors"
                >
                  Записаться
                  <span className="transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </Link>
                <Link
                  href="/specialization"
                  className="inline-flex items-center justify-center gap-3 border border-gold/40 px-8 py-5 text-[0.72rem] tracking-[0.25em] uppercase text-gold hover:bg-gold/5 transition-colors"
                >
                  Сфера деятельности
                </Link>
              </div>
            </div>
          </StaggerItem>

          <StaggerItem className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 border-t border-gold/20 pt-10">
            {[
              { k: "25+", v: "Лет в адвокатуре" },
              { k: "14", v: "Действующих адвокатов" },
              { k: "10", v: "Практик и направлений" },
              { k: "24/7", v: "График работы" },
            ].map((s) => (
              <div key={s.v}>
                <div className="font-display text-5xl md:text-6xl text-gold leading-none">
                  {s.k}
                </div>
                <div className="label mt-3">{s.v}</div>
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
    <section className="py-28 md:py-40 border-b border-gold/15">
      <Container>
        <div className="grid gap-16 md:grid-cols-12">
          <Reveal as="div" className="md:col-span-4" dir="left">
            <SectionLabel num="I">О коллегии</SectionLabel>
            <div className="font-display italic text-3xl text-gold/80 leading-snug">
              «В поисках справедливости к нам обращается большинство
              наших&nbsp;клиентов».
            </div>
          </Reveal>
          <Reveal
            as="div"
            className="md:col-span-8 space-y-6 text-cream/80 text-lg leading-[1.75]"
            delay={0.15}
          >
            <p className="drop-cap">
              Московская коллегия адвокатов имени генерал-майора юстиции А. С.
              Кудряшова создана в 2003 году в соответствии с Федеральным законом
              «Об адвокатской деятельности и адвокатуре в Российской Федерации».
              В переводе с латинского языка <em>justitia</em> означает
              справедливость — именно в её поисках к нам обращается большинство
              наших доверителей.
            </p>
            <p>
              Учредители коллегии, как и её основатель — генерал-майор юстиции
              А. С. Кудряшов, имеют богатый опыт работы в органах прокуратуры.
              Нашими постоянными клиентами являются не только физические и
              юридические лица, но и государственные организации, действующие
              госслужащие, сотрудники правоохранительных органов.
            </p>
            <p>
              Главная задача коллегии — защищать нарушенные права и интересы как
              государства, так и частных лиц. Вот почему отличительные черты
              нашей работы — <span className="text-gold">свобода</span>,{" "}
              <span className="text-gold">независимость</span> и{" "}
              <span className="text-gold">профессионализм</span>.
            </p>
            <div className="pt-6">
              <Link
                href="/history"
                className="link-gold text-[0.78rem] tracking-[0.22em] uppercase"
              >
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
    <section className="py-28 md:py-40 bg-ink-deep border-b border-gold/15">
      <Container>
        <Reveal>
          <SectionLabel num="II">Сфера деятельности</SectionLabel>
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8 mb-16">
            <h2 className="font-display text-5xl md:text-7xl leading-[0.95] text-parchment max-w-3xl">
              Десять направлений,
              <br />
              <span className="italic text-gold">одна коллегия.</span>
            </h2>
            <Link
              href="/specialization"
              className="link-gold text-[0.78rem] tracking-[0.22em] uppercase whitespace-nowrap"
            >
              Все практики →
            </Link>
          </div>
        </Reveal>

        <RevealStagger gap={0.05}>
          <ol className="divide-y divide-gold/15 border-y border-gold/15">
            {services.map((s) => (
              <StaggerItem
                as="li"
                key={s.num}
                className="group grid grid-cols-12 gap-6 py-8 md:py-10 hover:bg-gold/[0.03] transition-colors"
              >
                <div className="col-span-2 md:col-span-1">
                  <span className="roman text-xl">{s.num}</span>
                </div>
                <div className="col-span-10 md:col-span-5">
                  <h3 className="font-display text-2xl md:text-3xl text-parchment leading-tight group-hover:text-gold-light transition-colors">
                    {s.title}
                  </h3>
                </div>
                <div className="col-span-12 md:col-span-6 text-cream/65 text-base leading-relaxed">
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
    <section className="py-28 md:py-40 border-b border-gold/15">
      <Container>
        <Reveal>
          <SectionLabel num="III">Принципы работы</SectionLabel>
          <h2 className="font-display text-5xl md:text-7xl text-parchment leading-[0.95] mb-16 max-w-4xl">
            Почему доверители возвращаются{" "}
            <span className="italic text-gold">из поколения в поколение.</span>
          </h2>
        </Reveal>
        <RevealStagger
          gap={0.1}
          className="grid md:grid-cols-2 gap-px bg-gold/15 border border-gold/15"
        >
          {principles.map((p, i) => (
            <StaggerItem
              as="article"
              key={p.title}
              className="relative bg-ink p-10 md:p-14 min-h-[280px]"
            >
              <div className="absolute top-6 right-8 roman text-lg opacity-40">
                {["I", "II", "III", "IV"][i]}
              </div>
              <h3 className="font-display text-3xl md:text-4xl text-parchment leading-tight max-w-sm">
                {p.title}
              </h3>
              <p className="mt-6 text-cream/70 leading-relaxed max-w-md">
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
    <section className="py-28 md:py-40 bg-ink-deep border-b border-gold/15">
      <Container>
        <Reveal>
          <SectionLabel num="IV">Команда</SectionLabel>
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8 mb-16">
            <h2 className="font-display text-5xl md:text-7xl text-parchment leading-[0.95]">
              Четырнадцать имён.
              <br />
              <span className="italic text-gold">Одна школа.</span>
            </h2>
            <Link
              href="/komanda"
              className="link-gold text-[0.78rem] tracking-[0.22em] uppercase whitespace-nowrap"
            >
              Вся команда →
            </Link>
          </div>
        </Reveal>
        <RevealStagger
          gap={0.08}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-gold/15 border border-gold/15"
        >
          {featured.map((t) => (
            <StaggerItem
              as="article"
              key={t.name}
              className="group bg-ink p-8 md:p-10 transition-colors hover:bg-ink-soft"
            >
              <div className="label mb-5">{t.role}</div>
              <h3 className="font-display text-2xl md:text-[1.7rem] text-parchment leading-tight group-hover:text-gold-light transition-colors">
                {t.name}
              </h3>
              <p className="mt-6 italic font-display text-gold/80 text-lg leading-snug border-l-2 border-gold/50 pl-4">
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
    <section className="py-28 md:py-40 border-b border-gold/15">
      <Container>
        <Reveal>
          <SectionLabel num="V">В публичном поле</SectionLabel>
          <h2 className="font-display text-5xl md:text-7xl text-parchment leading-[0.95] mb-16 max-w-4xl">
            Упоминания и участие —{" "}
            <span className="italic text-gold">
              на передовой правовой повестки.
            </span>
          </h2>
        </Reveal>
        <RevealStagger gap={0.08}>
          <ol className="divide-y divide-gold/15 border-y border-gold/15">
            {pressMentions.map((m) => (
              <StaggerItem
                as="li"
                key={m.title}
                className="grid grid-cols-12 gap-6 py-8 md:py-10 items-start"
              >
                <div className="col-span-3 md:col-span-2 roman text-2xl">
                  {m.year}
                </div>
                <div className="col-span-9 md:col-span-10">
                  <div className="label mb-2">{m.outlet}</div>
                  <div className="font-display text-2xl md:text-3xl text-parchment leading-snug">
                    {m.title}
                  </div>
                  <div className="mt-2 text-cream/50 text-sm">— {m.person}</div>
                </div>
              </StaggerItem>
            ))}
          </ol>
        </RevealStagger>
        <div className="mt-12 text-center">
          <Link
            href="/news"
            className="link-gold text-[0.78rem] tracking-[0.22em] uppercase"
          >
            Все новости и публикации →
          </Link>
        </div>
      </Container>
    </section>
  );
}
