import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";
import { ConsultationForm } from "@/components/ConsultationForm";
import { Reveal } from "@/components/Reveal";
import { firm } from "@/lib/content";

export const metadata: Metadata = {
  title: "Контакты",
};

export default function ContactsPage() {
  return (
    <>
      <PageHeader
        kicker="Контактная информация"
        title="Приёмная коллегии"
        italic="открыта круглосуточно."
        lede="Первичная консультация по существу дела назначается по телефону или через форму обращения. Все обращения рассматриваются с соблюдением адвокатской тайны."
      />

      <section className="py-20 md:py-28">
        <Container>
          <div className="grid md:grid-cols-12 gap-12 md:gap-16">
            <Reveal as="div" className="md:col-span-5 space-y-10" dir="left">
              <div>
                <div className="kicker mb-3">Офис коллегии</div>
                <address className="not-italic font-display text-[1.5rem] md:text-[1.85rem] text-ink leading-[1.3]">
                  {firm.address}
                </address>
              </div>

              <div className="hairline" />

              <div>
                <div className="kicker mb-3">Приёмная</div>
                <div className="space-y-1.5">
                  {firm.phones.map((p) => (
                    <div key={p}>
                      <a
                        href={`tel:${p.replace(/\D/g, "")}`}
                        className="font-display text-[1.35rem] md:text-[1.5rem] text-ink link-underline"
                      >
                        {p}
                      </a>
                    </div>
                  ))}
                </div>
                <div className="mt-3 text-muted">
                  График работы: {firm.schedule}
                </div>
              </div>

              <div className="hairline" />

              <div>
                <div className="kicker mb-3">Электронная почта</div>
                <a
                  href={`mailto:${firm.email}`}
                  className="font-display text-[1.35rem] md:text-[1.5rem] text-ink link-underline"
                >
                  {firm.email}
                </a>
              </div>

              <div className="hairline" />

              <div>
                <div className="kicker mb-3">Социальные сети</div>
                <div className="flex flex-wrap gap-6 text-[0.95rem]">
                  <a href={firm.social.instagram} className="link-underline">
                    Instagram
                  </a>
                  <a href={firm.social.facebook} className="link-underline">
                    Facebook
                  </a>
                  <a href={firm.social.youtube} className="link-underline">
                    YouTube
                  </a>
                  <a href={firm.social.twitter} className="link-underline">
                    Twitter
                  </a>
                </div>
              </div>
            </Reveal>

            <Reveal as="div" className="md:col-span-7" dir="right" delay={0.1}>
              <div className="border border-line bg-surface p-8 md:p-12 rounded-md">
                <div className="kicker mb-4">Форма обращения</div>
                <h2 className="font-display display-tight text-[1.85rem] md:text-[2.5rem] text-ink mb-10">
                  Расскажите о деле —{" "}
                  <span className="italic">мы перезвоним.</span>
                </h2>
                <ConsultationForm />
              </div>
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  );
}
