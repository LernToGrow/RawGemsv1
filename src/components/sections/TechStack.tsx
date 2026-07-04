import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { techStack } from "@/lib/content";

export function TechStack() {
  return (
    <Section id="tech-stack" className="bg-surface-2/60">
      <Reveal>
        <SectionHeading
          eyebrow="Technology Stack"
          align="center"
          title="Technologies We Work With"
        />
      </Reveal>
      <RevealGroup className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {techStack.map((group) => (
          <RevealItem
            key={group.group}
            className="rounded-2xl border border-border bg-surface p-6 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-md"
          >
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-primary">
              {group.group}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-lg border border-border bg-surface-2 px-3 py-1.5 text-sm text-foreground"
                >
                  {item}
                </span>
              ))}
            </div>
          </RevealItem>
        ))}
      </RevealGroup>
    </Section>
  );
}
