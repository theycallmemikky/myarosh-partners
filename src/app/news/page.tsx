import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { Reveal, RevealStagger, StaggerItem } from "@/components/Reveal";
import { pressMentions } from "@/lib/content";

export const metadata: Metadata = {
  title: "Новости",
};

const news = [
  {
    date: "25.11.2025",
    category: "Профессиональная повестка",
    title:
      "Ярош Марина Александровна приняла участие в X Петербургском Международном юридическом форуме",
    excerpt:
      "На панельной дискуссии «Право на самооборону и защиту жилища: теория и правоприменение» руководитель коллегии представила позицию по актуальным вопросам правоприменения.",
  },
  {
    date: "14.08.2024",
    category: "Публикация в СМИ",
    title:
      "Комментарий коллегии по делу пациентов Европейского медицинского центра — в «Новых Известиях»",
    excerpt:
      "Адвокаты коллегии дали развёрнутый правовой комментарий по резонансному делу, связанному с защитой прав пациентов клиники EMC.",
  },
  {
    date: "05.04.2023",
    category: "Форум",
    title: "Участие экспертов коллегии в XIII Форуме инновационных технологий InfoSpace",
    excerpt:
      "Обсуждение правового регулирования цифровых технологий, блокчейна и защиты интеллектуальной собственности в условиях новой экономики.",
  },
  {
    date: "12.10.2022",
    category: "Арбитраж",
    title:
      "Дело АО «Новосибирский завод Экран» / «РАТМ Холдинг»: публичное обращение в Генеральную прокуратуру РФ",
    excerpt:
      "Коллегия направила обращение в Генеральную прокуратуру в рамках защиты интересов доверителей по корпоративному спору.",
  },
];

export default function NewsPage() {
  return (
    <>
      <PageHeader
        num="VI"
        kicker="Новости и публикации"
        title="Коллегия"
        italic="в правовой повестке."
        lede="Участие в федеральных форумах, публикации в авторитетных изданиях, комментарии по резонансным делам."
      />

      <section className="py-24 md:py-32">
        <Container width="narrow">
          <RevealStagger gap={0.1}>
            <ol className="divide-y divide-gold/15 border-y border-gold/15">
              {news.map((n, i) => (
                <StaggerItem as="li" key={n.title} className="py-12 md:py-16 group">
                <div className="flex flex-wrap items-center gap-5 mb-6">
                  <span className="roman text-xl">
                    {["I", "II", "III", "IV", "V"][i]}
                  </span>
                  <span className="label">{n.category}</span>
                  <span className="text-cream/40 text-sm tracking-wider">
                    · {n.date}
                  </span>
                </div>
                <h2 className="font-display text-3xl md:text-4xl text-parchment leading-[1.15] group-hover:text-gold-light transition-colors">
                  {n.title}
                </h2>
                  <p className="mt-6 text-cream/70 text-lg leading-relaxed">
                    {n.excerpt}
                  </p>
                </StaggerItem>
              ))}
            </ol>
          </RevealStagger>
        </Container>
      </section>

      <section className="py-24 md:py-32 bg-ink-deep border-y border-gold/15">
        <Container>
          <div className="label mb-8">Архив упоминаний</div>
          <h2 className="font-display text-4xl md:text-5xl text-parchment mb-14 leading-tight">
            Избранные публичные выступления коллегии
          </h2>
          <RevealStagger
            gap={0.08}
            className="grid md:grid-cols-2 gap-px bg-gold/15 border border-gold/15"
          >
            {pressMentions.map((m) => (
              <StaggerItem as="li" key={m.title} className="bg-ink p-8 md:p-10">
                <div className="flex items-baseline justify-between mb-4">
                  <span className="roman text-2xl">{m.year}</span>
                  <span className="label opacity-60">{m.outlet}</span>
                </div>
                <div className="font-display text-2xl text-parchment leading-snug">
                  {m.title}
                </div>
                <div className="mt-3 text-cream/50 text-sm">— {m.person}</div>
              </StaggerItem>
            ))}
          </RevealStagger>
        </Container>
      </section>

      <ConsultationCTA />
    </>
  );
}
