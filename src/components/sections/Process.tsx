import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { ProcessLine } from "@/components/sections/ProcessLine";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { ProcessStepIcon } from "@/components/sections/ProcessStepIcon";
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
      <ProcessTimeline total={process.length}>
        <RevealGroup className="relative grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-4 lg:grid-cols-7">
          <ProcessLine total={process.length} />
          {process.map((p, i) => {
            const Icon = icons[i % icons.length];
            return (
              <RevealItem key={p.step} className="group relative flex flex-col items-center text-center">
                <ProcessStepIcon index={i} icon={<Icon className="h-5 w-5" />} />
                <p className="mt-3 text-xs font-semibold text-muted">{p.step}</p>
                <h3 className="mt-1 text-sm font-bold text-foreground">{p.title}</h3>
                <p className="mt-1 text-xs text-muted leading-relaxed">{p.desc}</p>
              </RevealItem>
            );
          })}
        </RevealGroup>
      </ProcessTimeline>
    </Section>
  );
}
