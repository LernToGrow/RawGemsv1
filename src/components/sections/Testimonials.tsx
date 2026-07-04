import { Section, SectionHeading } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { testimonials } from "@/lib/content";
import { Star } from "lucide-react";

export function Testimonials() {
  return (
    <Section id="testimonials" className="bg-surface-2/60">
      <Reveal>
        <SectionHeading
          eyebrow="Clients Love Us"
          align="center"
          title="What Our Clients Say"
        />
      </Reveal>
      {/* TODO: replace with real client testimonials */}
      <RevealGroup className="grid gap-6 lg:grid-cols-3">
        {testimonials.map((t) => (
          <RevealItem key={t.name + t.role}>
            <Card className="h-full">
              <div className="flex gap-0.5 text-accent-amber">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="mt-4 text-foreground leading-relaxed">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="mt-6 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
                  {t.name.charAt(0)}
                </span>
                <div>
                  <p className="font-semibold text-foreground">{t.name}</p>
                  <p className="text-sm text-muted">{t.role}</p>
                </div>
              </div>
            </Card>
          </RevealItem>
        ))}
      </RevealGroup>
    </Section>
  );
}
