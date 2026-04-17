import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { RevealStagger, StaggerItem } from "@/components/Reveal";
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
    title:
      "Участие экспертов коллегии в XIII Форуме инновационных технологий InfoSpace",
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
        kicker="Новости и публикации"
        title="Коллегия"
        italic="в правовой повестке."
        lede="Участие в федеральных форумах, публикации в авторитетных изданиях, комментарии по резонансным делам."
      />

      <section className="py-20 md:py-28">
        <Container width="narrow">
          <RevealStagger gap={0.06}>
            <ol className="border-t border-line">
              {news.map((n) => (
                <StaggerItem
                  as="li"
                  key={n.title}
                  className="py-10 md:py-14 border-b border-line group"
                >
                  <div className="flex flex-wrap items-center gap-4 mb-5 text-[0.82rem]">
                    <span className="kicker">{n.category}</span>
                    <span className="text-muted">· {n.date}</span>
                  </div>
                  <h2 className="font-display text-[1.65rem] md:text-[2.15rem] text-ink leading-[1.15]">
                    {n.title}
                  </h2>
                  <p className="mt-5 text-muted text-[1.02rem] leading-relaxed">
                    {n.excerpt}
                  </p>
                </StaggerItem>
              ))}
            </ol>
          </RevealStagger>
        </Container>
      </section>

      <section className="py-20 md:py-28 bg-surface border-y border-line">
        <Container>
          <div className="kicker mb-6">Архив упоминаний</div>
          <h2 className="font-display display-tight text-[2rem] md:text-[3rem] text-ink mb-14 max-w-3xl">
            Избранные публичные выступления коллегии
          </h2>
          <RevealStagger
            gap={0.06}
            className="grid md:grid-cols-2 border-t border-line"
          >
            {pressMentions.map((m) => (
              <StaggerItem
                as="li"
                key={m.title}
                className="p-8 md:p-10 border-b border-line md:border-r md:[&:nth-child(2n)]:border-r-0"
              >
                <div className="flex items-baseline justify-between mb-4">
                  <span className="font-display text-[1.5rem] text-ink tabular-nums">
                    {m.year}
                  </span>
                  <span className="kicker">{m.outlet}</span>
                </div>
                <div className="font-display text-[1.3rem] md:text-[1.45rem] text-ink leading-snug">
                  {m.title}
                </div>
                <div className="mt-3 text-muted text-[0.9rem]">— {m.person}</div>
              </StaggerItem>
            ))}
          </RevealStagger>
        </Container>
      </section>

      <ConsultationCTA />
    </>
  );
}
