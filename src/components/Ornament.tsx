export function Ornament({ className = "" }: { className?: string }) {
  return (
    <div
      className={`flex items-center justify-center gap-3 text-gold ${className}`}
      aria-hidden
    >
      <span className="h-px w-12 bg-gold/40" />
      <span className="text-[0.7rem] tracking-[0.2em]">◆</span>
      <span className="h-px w-12 bg-gold/40" />
    </div>
  );
}

export function SectionLabel({
  num,
  children,
}: {
  num: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-baseline gap-4 mb-6">
      <span className="roman text-lg">{num}</span>
      <span className="h-px flex-1 bg-rule" />
      <span className="label">{children}</span>
    </div>
  );
}
