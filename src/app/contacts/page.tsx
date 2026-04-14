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
        num="VII"
        kicker="Контактная информация"
        title="Приёмная коллегии"
        italic="открыта круглосуточно."
        lede="Первичная консультация по существу дела назначается по телефону или через форму обращения. Все обращения рассматриваются с соблюдением адвокатской тайны."
      />

      <section className="py-24 md:py-32">
        <Container>
          <div className="grid md:grid-cols-12 gap-16">
            {/* Contact info */}
            <Reveal as="div" className="md:col-span-5 space-y-12" dir="left">
              <div>
                <div className="label mb-4">Офис коллегии</div>
                <address className="not-italic font-display text-3xl text-parchment leading-snug">
                  {firm.address}
                </address>
              </div>

              <div className="rule-gold" />

              <div>
                <div className="label mb-4">Приёмная</div>
                <div className="space-y-2">
                  {firm.phones.map((p) => (
                    <div key={p}>
                      <a
                        href={`tel:${p.replace(/\D/g, "")}`}
                        className="link-gold font-display text-2xl"
                      >
                        {p}
                      </a>
                    </div>
                  ))}
                </div>
                <div className="mt-4 text-cream/60">
                  График работы: {firm.schedule}
                </div>
              </div>

              <div className="rule-gold" />

              <div>
                <div className="label mb-4">Электронная почта</div>
                <a
                  href={`mailto:${firm.email}`}
                  className="link-gold font-display text-2xl"
                >
                  {firm.email}
                </a>
              </div>

              <div className="rule-gold" />

              <div>
                <div className="label mb-4">Социальные сети</div>
                <div className="flex flex-wrap gap-6">
                  <a href={firm.social.instagram} className="link-gold">
                    Instagram
                  </a>
                  <a href={firm.social.facebook} className="link-gold">
                    Facebook
                  </a>
                  <a href={firm.social.youtube} className="link-gold">
                    YouTube
                  </a>
                  <a href={firm.social.twitter} className="link-gold">
                    Twitter
                  </a>
                </div>
              </div>
            </Reveal>

            {/* Form */}
            <Reveal as="div" className="md:col-span-7" dir="right" delay={0.15}>
              <div className="border border-gold/30 p-10 md:p-14 bg-ink-deep">
                <div className="label mb-4">Форма обращения</div>
                <h2 className="font-display text-4xl md:text-5xl text-parchment leading-[1.05] mb-10">
                  Расскажите о деле —<br />
                  <span className="italic text-gold">мы перезвоним.</span>
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
