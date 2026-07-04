import { Section, SectionHeading } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { serviceGroups } from "@/lib/content";
import {
  Code2,
  Globe,
  Smartphone,
  Sparkles,
  Cloud,
  BarChart3,
  PenTool,
  Users,
} from "lucide-react";

const icons = [Code2, Globe, Smartphone, Sparkles, Cloud, BarChart3, PenTool, Users];
const iconBg = [
  "bg-primary",
  "bg-accent-teal",
  "bg-accent-violet",
  "bg-accent-amber",
];

export function Services() {
  return (
    <Section id="services">
      <Reveal>
        <SectionHeading
          eyebrow="Services"
          align="center"
          title="Full-Stack Engineering, From Idea to Scale"
          description="Whatever stage your product is at, RawGems has a team that can take it further."
        />
      </Reveal>
      <RevealGroup className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {serviceGroups.map((group, i) => {
          const Icon = icons[i % icons.length];
          return (
            <RevealItem key={group.title}>
              <Card className="group h-full">
                <span
                  className={`flex h-11 w-11 items-center justify-center rounded-xl text-white transition-transform group-hover:scale-110 ${iconBg[i % iconBg.length]}`}
                >
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 font-bold text-foreground">{group.title}</h3>
                <ul className="mt-3 space-y-1">
                  {group.items.map((item) => (
                    <li key={item} className="text-sm text-muted">
                      {item}
                    </li>
                  ))}
                </ul>
              </Card>
            </RevealItem>
          );
        })}
      </RevealGroup>
    </Section>
  );
}
