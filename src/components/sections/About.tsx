import { Button } from "@/components/ui/Button";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { stats } from "@/lib/content";

export function About() {
  return (
    <section className="border-y border-border bg-surface py-16">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 lg:grid-cols-2 lg:px-8">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">
            Who We Are
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground">
            About RawGems
          </h2>
          <p className="mt-4 max-w-lg text-muted leading-relaxed">
            RawGems is a technology company focused on creating impactful
            digital products and delivering custom software solutions. We
            combine product thinking, engineering excellence, AI innovation,
            and modern technologies to build scalable and future-ready
            solutions.
          </p>
          <Button href="#contact" variant="secondary" className="mt-6">
            Learn More About Us →
          </Button>
        </Reveal>
        <RevealGroup className="grid grid-cols-3 gap-4">
          {/* TODO: replace with real company stats */}
          {stats.map((s) => (
            <RevealItem
              key={s.label}
              className="rounded-2xl border border-border bg-surface-2 p-6 text-center transition-transform hover:-translate-y-1"
            >
              <p className="text-3xl font-bold text-primary">{s.value}</p>
              <p className="mt-2 text-sm text-muted">{s.label}</p>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
