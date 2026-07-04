import { Section } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Badge";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { aiCapabilities } from "@/lib/content";
import { Sparkles } from "lucide-react";

export function AICapabilities() {
  return (
    <Section id="ai" className="bg-surface-2/60">
      <Reveal className="mx-auto max-w-3xl text-center">
        <div className="mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-accent-violet/10">
          <Sparkles className="h-5 w-5 text-accent-violet" />
        </div>
        <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-accent-violet">
          AI Solutions
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
          AI Isn&apos;t a Feature We Bolt On — It&apos;s How We Build
        </h2>
        <p className="mt-4 text-lg text-muted leading-relaxed">
          From RAG applications to autonomous agents, we help businesses put
          large language models to work in production.
        </p>
      </Reveal>
      <RevealGroup className="mt-12 flex flex-wrap items-center justify-center gap-3" stagger={0.03}>
        {aiCapabilities.map((cap) => (
          <RevealItem key={cap}>
            <Badge>{cap}</Badge>
          </RevealItem>
        ))}
      </RevealGroup>
    </Section>
  );
}
