import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { whyChooseUs } from "@/lib/content";
import {
  Users,
  TrendingUp,
  Sparkles,
  Rocket,
  LifeBuoy,
  ShieldCheck,
} from "lucide-react";

const icons = [Users, TrendingUp, Sparkles, Rocket, LifeBuoy, ShieldCheck];

export function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-navy py-20 sm:py-24">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-0 h-[400px]"
        style={{
          background:
            "radial-gradient(ellipse 60% 60% at 50% 0%, color-mix(in srgb, var(--primary) 20%, transparent), transparent)",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-accent-magenta">
            Why Choose RawGems
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            We Build Solutions That Build Your Business
          </h2>
        </Reveal>
        <RevealGroup className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {whyChooseUs.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <RevealItem key={item.title} className="group flex flex-col items-center text-center">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 transition-colors group-hover:bg-accent-magenta">
                  <Icon className="h-5 w-5 text-accent-magenta transition-colors group-hover:text-white" />
                </span>
                <h3 className="mt-4 font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm text-white/60 leading-relaxed">
                  {item.desc}
                </p>
              </RevealItem>
            );
          })}
        </RevealGroup>
      </div>
    </section>
  );
}
