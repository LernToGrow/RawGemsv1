import { Section, SectionHeading } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { products, serviceGroups } from "@/lib/content";
import { Package, Wrench, Check, Gem } from "lucide-react";

export function WhatWeBuild() {
  const serviceCategories = serviceGroups.map((g) => g.title);

  return (
    <Section id="what-we-build">
      <Reveal>
        <SectionHeading
          eyebrow="What We Do"
          align="center"
          title={
            "Products We Build. Services We Deliver."
          }
        />
      </Reveal>
      <RevealGroup className="relative grid gap-6 lg:grid-cols-2">
        <div className="hidden lg:absolute lg:left-1/2 lg:top-1/2 lg:z-10 lg:flex lg:h-14 lg:w-14 lg:-translate-x-1/2 lg:-translate-y-1/2 lg:items-center lg:justify-center lg:rounded-full lg:border lg:border-border lg:bg-surface lg:shadow-lg">
          <Gem className="h-6 w-6 text-primary" />
        </div>

        <RevealItem className="rounded-2xl border border-primary/15 bg-primary/5 p-8 transition-transform hover:-translate-y-1">
          <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary text-white">
            <Package className="h-5 w-5" />
          </span>
          <h3 className="mt-4 text-xl font-bold text-foreground">
            Our Products
          </h3>
          <p className="mt-2 text-muted">
            Innovative in-house software products designed to simplify
            operations and boost productivity.
          </p>
          <ul className="mt-6 space-y-2">
            {products.slice(0, 5).map((p) => (
              <li key={p.name} className="flex items-center gap-2 text-sm text-foreground">
                <Check className="h-4 w-4 shrink-0 text-primary" />
                {p.name}
              </li>
            ))}
          </ul>
          <Button href="#products" className="mt-6">
            View All Products →
          </Button>
        </RevealItem>

        <RevealItem className="rounded-2xl border border-accent-teal/20 bg-accent-teal/5 p-8 transition-transform hover:-translate-y-1">
          <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-teal text-white">
            <Wrench className="h-5 w-5" />
          </span>
          <h3 className="mt-4 text-xl font-bold text-foreground">
            Our Services
          </h3>
          <p className="mt-2 text-muted">
            End-to-end software development services customized to your
            business needs.
          </p>
          <ul className="mt-6 space-y-2">
            {serviceCategories.slice(0, 6).map((c) => (
              <li key={c} className="flex items-center gap-2 text-sm text-foreground">
                <Check className="h-4 w-4 shrink-0 text-accent-teal" />
                {c}
              </li>
            ))}
          </ul>
          <Button href="#services" variant="teal" className="mt-6">
            Explore Services →
          </Button>
        </RevealItem>
      </RevealGroup>
    </Section>
  );
}
