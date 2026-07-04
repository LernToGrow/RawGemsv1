import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { industries } from "@/lib/content";
import {
  HeartPulse,
  Landmark,
  ShoppingBag,
  GraduationCap,
  Factory,
  Truck,
  Building2,
  Plane,
  Hotel,
  Building,
} from "lucide-react";

const icons = [
  HeartPulse,
  Landmark,
  ShoppingBag,
  GraduationCap,
  Factory,
  Truck,
  Building2,
  Plane,
  Hotel,
  Building,
];

export function Industries() {
  return (
    <Section id="industries">
      <Reveal>
        <SectionHeading eyebrow="Industries We Serve" align="center" title="Domain Experience Across Sectors" />
      </Reveal>
      <RevealGroup className="grid grid-cols-2 gap-4 sm:grid-cols-5">
        {industries.map((industry, i) => {
          const Icon = icons[i % icons.length];
          return (
            <RevealItem
              key={industry}
              className="group flex flex-col items-center gap-3 rounded-2xl border border-border bg-surface p-6 text-center shadow-sm transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-md"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-surface-2 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                <Icon className="h-5 w-5" />
              </span>
              <span className="text-sm font-medium text-foreground">
                {industry}
              </span>
            </RevealItem>
          );
        })}
      </RevealGroup>
    </Section>
  );
}
