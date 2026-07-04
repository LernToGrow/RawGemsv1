import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { ProcessLine } from "@/components/sections/ProcessLine";
import { process } from "@/lib/content";
import {
  Search,
  ClipboardList,
  PenTool,
  Code2,
  Bug,
  Rocket,
  LifeBuoy,
} from "lucide-react";

const icons = [Search, ClipboardList, PenTool, Code2, Bug, Rocket, LifeBuoy];

export function Process() {
  return (
    <Section id="process">
      <Reveal>
        <SectionHeading
          eyebrow="Our Process"
          align="center"
          title="Our Proven Development Process"
        />
      </Reveal>
      <RevealGroup className="relative grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-4 lg:grid-cols-7">
        <ProcessLine />
        {process.map((p, i) => {
          const Icon = icons[i % icons.length];
          return (
            <RevealItem key={p.step} className="group relative flex flex-col items-center text-center">
              <span className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-border bg-surface text-primary shadow-sm transition-all group-hover:-translate-y-1 group-hover:border-primary group-hover:bg-primary group-hover:text-white">
                <Icon className="h-5 w-5" />
              </span>
              <p className="mt-3 text-xs font-semibold text-muted">{p.step}</p>
              <h3 className="mt-1 text-sm font-bold text-foreground">{p.title}</h3>
              <p className="mt-1 text-xs text-muted leading-relaxed">{p.desc}</p>
            </RevealItem>
          );
        })}
      </RevealGroup>
    </Section>
  );
}
