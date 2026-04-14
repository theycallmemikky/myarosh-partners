import { cn } from "@/lib/cn";

export function Container({
  children,
  className,
  width = "default",
}: {
  children: React.ReactNode;
  className?: string;
  width?: "default" | "narrow" | "wide";
}) {
  const max =
    width === "narrow"
      ? "max-w-3xl"
      : width === "wide"
        ? "max-w-7xl"
        : "max-w-6xl";
  return (
    <div className={cn("mx-auto w-full px-6 md:px-10", max, className)}>
      {children}
    </div>
  );
}
