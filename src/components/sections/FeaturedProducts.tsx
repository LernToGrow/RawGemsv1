import { Section, SectionHeading } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { products } from "@/lib/content";
import {
  Users,
  Contact,
  Bot,
  BookOpen,
  Boxes,
  ClipboardCheck,
  ListChecks,
  FileText,
  Workflow,
  ArrowUpRight,
} from "lucide-react";

const icons = [
  Users,
  Contact,
  Bot,
  BookOpen,
  Boxes,
  ClipboardCheck,
  ListChecks,
  FileText,
  Workflow,
];
const iconBg = [
  "bg-primary",
  "bg-accent-teal",
  "bg-accent-violet",
  "bg-accent-amber",
];

export function FeaturedProducts() {
  return (
    <Section id="products" className="bg-surface-2/60">
      <Reveal>
        <SectionHeading
          eyebrow="Featured Products"
          align="center"
          title="Our In-House Products"
          description="Every product is built, maintained, and continuously improved in-house by RawGems."
        />
      </Reveal>
      <RevealGroup className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {products.slice(0, 8).map((p, i) => {
          const Icon = icons[i % icons.length];
          return (
            <RevealItem key={p.name}>
              <Card className="group h-full">
                <span
                  className={`flex h-11 w-11 items-center justify-center rounded-xl text-white transition-transform group-hover:scale-110 ${iconBg[i % iconBg.length]}`}
                >
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 font-bold text-foreground">{p.name}</h3>
                <p className="mt-2 text-sm text-muted">{p.desc}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary">
                  Learn More
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                </span>
              </Card>
            </RevealItem>
          );
        })}
      </RevealGroup>
      <div className="mt-10 text-center">
        <Button href="#products">View All Products →</Button>
      </div>
    </Section>
  );
}
