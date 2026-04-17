export function Ornament({ className = "" }: { className?: string }) {
  return <div className={`hairline ${className}`} aria-hidden />;
}

export function SectionLabel({
  num,
  children,
}: {
  num?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-center gap-4 mb-8">
      {num && <span className="kicker">{num}</span>}
      <span className="kicker">{children}</span>
      <span className="h-px flex-1 bg-line" />
    </div>
  );
}
