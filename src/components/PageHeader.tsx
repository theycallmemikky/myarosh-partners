import { Container } from "./Container";

export function PageHeader({
  num,
  kicker,
  title,
  italic,
  lede,
}: {
  num: string;
  kicker: string;
  title: string;
  italic?: string;
  lede?: string;
}) {
  return (
    <section className="relative overflow-hidden border-b border-gold/15">
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        aria-hidden
        style={{
          backgroundImage:
            "linear-gradient(to right, #ba8b4c 1px, transparent 1px)",
          backgroundSize: "120px 120px",
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at center top, rgba(186,139,76,0.1), transparent 70%)",
        }}
      />
      <Container className="relative py-24 md:py-36">
        <div className="flex items-center gap-6 mb-10">
          <span className="roman text-base">{num}</span>
          <span className="h-px flex-1 max-w-[180px] bg-rule" />
          <span className="label">{kicker}</span>
        </div>
        <h1 className="font-display text-[2.75rem] sm:text-6xl md:text-[5.5rem] leading-[0.95] text-parchment max-w-5xl">
          {title}
          {italic && (
            <>
              <br />
              <span className="italic text-gold">{italic}</span>
            </>
          )}
        </h1>
        {lede && (
          <p className="mt-10 max-w-2xl text-lg md:text-xl text-cream/75 leading-relaxed">
            {lede}
          </p>
        )}
      </Container>
    </section>
  );
}
