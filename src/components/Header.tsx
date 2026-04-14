import Link from "next/link";
import { nav, firm } from "@/lib/content";

export function Header() {
  return (
    <header className="relative z-40 border-b border-gold/15 bg-ink/80 backdrop-blur-sm">
      {/* utility bar */}
      <div className="hidden md:block border-b border-gold/10">
        <div className="mx-auto max-w-7xl px-6 md:px-10 flex items-center justify-between py-2 text-[0.72rem] tracking-[0.18em] uppercase text-cream/60">
          <span>Est. MMIII · Москва</span>
          <div className="flex items-center gap-6">
            <a
              href={`tel:${firm.phones[0].replace(/\D/g, "")}`}
              className="link-gold"
            >
              {firm.phones[0]}
            </a>
            <a href={`mailto:${firm.email}`} className="link-gold">
              {firm.email}
            </a>
          </div>
        </div>
      </div>
      {/* main row */}
      <div className="mx-auto max-w-7xl px-6 md:px-10 flex items-center justify-between py-6">
        <Link href="/" className="group">
          <div className="flex items-center gap-4">
            <Monogram />
            <div className="leading-tight">
              <div className="font-display text-2xl md:text-[1.7rem] font-medium tracking-tight text-parchment">
                Ярош <span className="text-gold italic">&</span> Партнёры
              </div>
              <div className="text-[0.65rem] tracking-[0.25em] uppercase text-cream/50">
                Московская коллегия адвокатов
              </div>
            </div>
          </div>
        </Link>
        <nav className="hidden lg:flex items-center gap-8 text-[0.78rem] tracking-[0.18em] uppercase">
          {nav.slice(1).map((item) => (
            <Link key={item.href} href={item.href} className="link-gold">
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/contacts#form"
          className="hidden md:inline-flex items-center gap-3 border border-gold/50 px-5 py-3 text-[0.72rem] tracking-[0.22em] uppercase text-gold hover:bg-gold hover:text-ink transition-colors"
        >
          Записаться <span>→</span>
        </Link>
      </div>
    </header>
  );
}

function Monogram() {
  return (
    <svg
      width="44"
      height="52"
      viewBox="0 0 44 52"
      fill="none"
      className="text-gold"
      aria-hidden
    >
      <path
        d="M22 2 L40 10 V26 C40 38 32 46 22 50 C12 46 4 38 4 26 V10 Z"
        stroke="currentColor"
        strokeWidth="1.2"
        fill="none"
      />
      <path
        d="M22 8 L34 13 V26 C34 35 28 41 22 44 C16 41 10 35 10 26 V13 Z"
        stroke="currentColor"
        strokeWidth="0.6"
        fill="none"
        opacity="0.5"
      />
      <text
        x="22"
        y="31"
        textAnchor="middle"
        fill="currentColor"
        fontFamily="Cormorant Garamond, Georgia, serif"
        fontSize="18"
        fontStyle="italic"
        fontWeight="500"
      >
        Я
      </text>
    </svg>
  );
}
