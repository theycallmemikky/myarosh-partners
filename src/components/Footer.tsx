import Link from "next/link";
import { firm, nav } from "@/lib/content";
import { Ornament } from "./Ornament";

export function Footer() {
  return (
    <footer className="relative mt-32 border-t border-gold/20 bg-ink-deep">
      <div className="mx-auto max-w-7xl px-6 md:px-10 py-20">
        <Ornament className="mb-10" />
        <div className="grid gap-14 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="font-display text-4xl md:text-5xl leading-[0.95] text-parchment">
              Свобода.
              <br />
              <span className="italic text-gold">Независимость.</span>
              <br />
              Профессионализм.
            </div>
            <p className="mt-8 max-w-md text-cream/60 text-[0.95rem]">
              {firm.fullName} работает с 2003 года и объединяет адвокатов,
              прошедших школу прокуратуры, следствия и научной юриспруденции.
            </p>
          </div>

          <div className="md:col-span-3">
            <div className="label mb-5">Навигация</div>
            <ul className="space-y-3 text-cream/80 text-[0.95rem]">
              {nav.map((n) => (
                <li key={n.href}>
                  <Link href={n.href} className="link-gold">
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <div className="label mb-5">Приёмная</div>
            <address className="not-italic space-y-2 text-cream/80 text-[0.95rem]">
              <div>{firm.address}</div>
              <div className="text-cream/50">График: {firm.schedule}</div>
              <div className="pt-3 space-y-1">
                {firm.phones.map((p) => (
                  <div key={p}>
                    <a
                      href={`tel:${p.replace(/\D/g, "")}`}
                      className="link-gold"
                    >
                      {p}
                    </a>
                  </div>
                ))}
                <div>
                  <a href={`mailto:${firm.email}`} className="link-gold">
                    {firm.email}
                  </a>
                </div>
              </div>
            </address>
            <div className="mt-6 flex gap-4 text-cream/60">
              <a
                href={firm.social.instagram}
                aria-label="Instagram"
                className="link-gold text-[0.72rem] tracking-[0.2em] uppercase"
              >
                Instagram
              </a>
              <a
                href={firm.social.facebook}
                aria-label="Facebook"
                className="link-gold text-[0.72rem] tracking-[0.2em] uppercase"
              >
                Facebook
              </a>
              <a
                href={firm.social.youtube}
                aria-label="YouTube"
                className="link-gold text-[0.72rem] tracking-[0.2em] uppercase"
              >
                YouTube
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-gold/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-[0.72rem] tracking-[0.15em] uppercase text-cream/40">
          <div>
            © MMIII – MMXXVI · {firm.shortName}. Все права защищены.
          </div>
          <div>
            Адвокатская палата г. Москвы · Федеральный закон № 63-ФЗ
          </div>
        </div>
      </div>
    </footer>
  );
}
