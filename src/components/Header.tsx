"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { nav, firm } from "@/lib/content";

export function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-40 bg-bg/85 backdrop-blur-md border-b border-line">
      <div className="mx-auto max-w-[1240px] px-5 md:px-10 flex items-center justify-between h-16 md:h-20">
        <Link href="/" className="flex items-center gap-3 group">
          <span className="w-7 h-7 rounded-full bg-ink text-bg flex items-center justify-center text-[0.72rem] font-medium tracking-wider">
            ЯП
          </span>
          <span className="font-display text-[1.15rem] md:text-[1.3rem] leading-none">
            Ярош <span className="italic text-muted">&</span> Партнёры
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8 text-[0.88rem] text-ink/80">
          {nav.slice(1).map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="link-underline hover:text-ink"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-5">
          <a
            href={`tel:${firm.phones[0].replace(/\D/g, "")}`}
            className="text-[0.88rem] text-muted hover:text-ink transition-colors"
          >
            {firm.phones[0]}
          </a>
          <Link
            href="/contacts#form"
            className="inline-flex items-center gap-2 bg-ink text-bg px-4 py-2 text-[0.82rem] hover:bg-ink-2 transition-colors rounded-full"
          >
            Записаться
          </Link>
        </div>

        <button
          type="button"
          aria-label="Открыть меню"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-[5px] -mr-2"
        >
          <span
            className={`block h-px w-5 bg-ink transition-transform ${open ? "translate-y-[3px] rotate-45" : ""}`}
          />
          <span
            className={`block h-px w-5 bg-ink transition-transform ${open ? "-translate-y-[3px] -rotate-45" : ""}`}
          />
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-line bg-bg">
          <nav className="px-5 py-6 flex flex-col gap-1">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="py-3 text-[1.05rem] border-b border-line-2"
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-5 flex flex-col gap-2">
              <a
                href={`tel:${firm.phones[0].replace(/\D/g, "")}`}
                className="text-muted text-[0.9rem]"
              >
                {firm.phones[0]}
              </a>
              <Link
                href="/contacts#form"
                onClick={() => setOpen(false)}
                className="inline-flex items-center justify-center bg-ink text-bg px-5 py-3 text-[0.9rem] rounded-full mt-2"
              >
                Записаться на консультацию
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
