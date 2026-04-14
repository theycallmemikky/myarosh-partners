import { Container } from "./Container";
import { ParallaxBackground } from "./Parallax";
import { RevealStagger, StaggerItem } from "./Reveal";

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
    <section className="relative overflow-hidden border-b border-gold/15 min-h-[65vh] flex items-center">
      <ParallaxBackground
        speed={-100}
        className="absolute inset-0 -top-20 -bottom-20 opacity-[0.06] pointer-events-none"
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(to right, #ba8b4c 1px, transparent 1px)",
            backgroundSize: "120px 120px",
          }}
        />
      </ParallaxBackground>
      <ParallaxBackground
        speed={70}
        className="absolute inset-0 -top-40 -bottom-40 pointer-events-none"
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 50% at center top, rgba(186,139,76,0.13), transparent 70%)",
          }}
        />
      </ParallaxBackground>

      <Container className="relative py-24 md:py-36 w-full">
        <RevealStagger gap={0.12}>
          <StaggerItem className="flex items-center gap-6 mb-10">
            <span className="roman text-base">{num}</span>
            <span className="h-px flex-1 max-w-[180px] bg-rule" />
            <span className="label">{kicker}</span>
          </StaggerItem>
          <StaggerItem>
            <h1 className="font-display text-[2.75rem] sm:text-6xl md:text-[5.5rem] leading-[0.95] text-parchment max-w-5xl">
              {title}
              {italic && (
                <>
                  <br />
                  <span className="italic text-gold">{italic}</span>
                </>
              )}
            </h1>
          </StaggerItem>
          {lede && (
            <StaggerItem>
              <p className="mt-10 max-w-2xl text-lg md:text-xl text-cream/75 leading-relaxed">
                {lede}
              </p>
            </StaggerItem>
          )}
        </RevealStagger>
      </Container>
    </section>
  );
}
