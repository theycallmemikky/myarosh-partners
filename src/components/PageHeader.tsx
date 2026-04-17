import { Container } from "./Container";
import { RevealStagger, StaggerItem } from "./Reveal";

export function PageHeader({
  kicker,
  title,
  italic,
  lede,
}: {
  num?: string;
  kicker: string;
  title: string;
  italic?: string;
  lede?: string;
}) {
  return (
    <section className="relative border-b border-line">
      <Container className="py-20 md:py-32">
        <RevealStagger gap={0.1}>
          <StaggerItem className="kicker mb-8">{kicker}</StaggerItem>
          <StaggerItem>
            <h1 className="font-display display-tight text-[2.5rem] sm:text-[3.5rem] md:text-[5rem] text-ink max-w-5xl">
              {title}
              {italic && (
                <>
                  {" "}
                  <span className="italic text-muted">{italic}</span>
                </>
              )}
            </h1>
          </StaggerItem>
          {lede && (
            <StaggerItem>
              <p className="mt-8 max-w-2xl text-[1.05rem] md:text-[1.15rem] text-muted leading-relaxed">
                {lede}
              </p>
            </StaggerItem>
          )}
        </RevealStagger>
      </Container>
    </section>
  );
}
