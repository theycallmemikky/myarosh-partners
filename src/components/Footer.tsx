import Link from "next/link";
import { firm, nav } from "@/lib/content";

export function Footer() {
  return (
    <footer className="mt-32 border-t border-line bg-bg">
      <div className="mx-auto max-w-[1240px] px-5 md:px-10 pt-20 pb-10">
        <div className="grid gap-14 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="font-display display-tight text-[2.5rem] md:text-[3.25rem] text-ink">
              Свобода. Независимость.{" "}
              <span className="italic text-muted">Профессионализм.</span>
            </div>
            <p className="mt-6 max-w-md text-muted text-[0.95rem] leading-relaxed">
              {firm.fullName} работает с 2003 года и объединяет адвокатов,
              прошедших школу прокуратуры, следствия и научной юриспруденции.
            </p>
          </div>

          <div className="md:col-span-3">
            <div className="kicker mb-5">Навигация</div>
            <ul className="space-y-2.5 text-[0.95rem]">
              {nav.map((n) => (
                <li key={n.href}>
                  <Link href={n.href} className="link-underline">
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <div className="kicker mb-5">Приёмная</div>
            <address className="not-italic space-y-1.5 text-[0.95rem] text-ink/85">
              <div>{firm.address}</div>
              <div className="text-muted">График: {firm.schedule}</div>
            </address>
            <div className="mt-5 space-y-1 text-[0.95rem]">
              {firm.phones.map((p) => (
                <div key={p}>
                  <a
                    href={`tel:${p.replace(/\D/g, "")}`}
                    className="link-underline"
                  >
                    {p}
                  </a>
                </div>
              ))}
              <div className="pt-1">
                <a
                  href={`mailto:${firm.email}`}
                  className="link-underline"
                >
                  {firm.email}
                </a>
              </div>
            </div>
            <div className="mt-6 flex gap-5 text-[0.82rem] text-muted">
              <a href={firm.social.instagram} className="hover:text-ink">
                Instagram
              </a>
              <a href={firm.social.facebook} className="hover:text-ink">
                Facebook
              </a>
              <a href={firm.social.youtube} className="hover:text-ink">
                YouTube
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-6 border-t border-line-2 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 text-[0.8rem] text-muted">
          <div>© 2003 — 2026 · {firm.shortName}. Все права защищены.</div>
          <div>Адвокатская палата г. Москвы · ФЗ № 63-ФЗ</div>
        </div>
      </div>
    </footer>
  );
}
