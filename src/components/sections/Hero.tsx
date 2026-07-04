import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { HeroVisual } from "@/components/sections/HeroVisual";
import { HeroQuickLinks } from "@/components/sections/HeroQuickLinks";
import { Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-20 sm:pt-40">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[600px]"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 30% 0%, color-mix(in srgb, var(--primary) 12%, transparent), transparent)",
        }}
      />
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2 lg:px-8">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary">
            <Sparkles className="h-3.5 w-3.5" />
            Empowering Businesses with Technology
          </span>
          <h1 className="mt-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Raw problems, cut into{" "}
            <span className="text-primary">working software.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
            RawGems develops innovative in-house products and delivers custom
            software solutions that help businesses automate, scale, and
            succeed in a digital-first world.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Button href="#products">Explore Products →</Button>
            <Button href="#services" variant="secondary">
              Our Services
            </Button>
          </div>
          <div className="mt-10 flex items-center gap-3">
            <div className="flex -space-x-3">
              {["A", "S", "M", "J"].map((letter) => (
                <span
                  key={letter}
                  className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-surface bg-surface-2 text-xs font-semibold text-foreground"
                >
                  {letter}
                </span>
              ))}
            </div>
            <div>
              {/* TODO: replace with real client count */}
              <p className="text-sm font-semibold text-foreground">50+ Clients</p>
              <p className="text-xs text-muted">Growing together</p>
            </div>
          </div>
        </Reveal>

        <HeroVisual />
      </div>

      <HeroQuickLinks />
    </section>
  );
}
