import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { Package, Code2, Sparkles, Cloud } from "lucide-react";

const quickLinks = [
  {
    Icon: Package,
    title: "In-House Products",
    desc: "Ready to go software built for your business.",
    href: "#products",
    iconBg: "bg-primary",
  },
  {
    Icon: Code2,
    title: "Custom Development",
    desc: "Tailored web and mobile apps built for scale.",
    href: "#services",
    iconBg: "bg-accent-teal",
  },
  {
    Icon: Sparkles,
    title: "AI-Powered Solutions",
    desc: "Intelligent automation and LLM-driven products.",
    href: "#ai",
    iconBg: "bg-accent-violet",
  },
  {
    Icon: Cloud,
    title: "Cloud & DevOps",
    desc: "Reliable, scalable infrastructure and delivery.",
    href: "#tech-stack",
    iconBg: "bg-accent-amber",
  },
];

export function HeroQuickLinks() {
  return (
    <RevealGroup className="mx-auto mt-16 grid max-w-7xl gap-4 px-6 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
      {quickLinks.map(({ Icon, title, desc, href, iconBg }) => (
        <RevealItem key={title}>
          <a
            href={href}
            className="group flex h-full flex-col gap-3 rounded-2xl border border-border bg-surface p-5 shadow-sm transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-md"
          >
            <span
              className={`flex h-10 w-10 items-center justify-center rounded-lg text-white transition-transform group-hover:scale-110 ${iconBg}`}
            >
              <Icon className="h-5 w-5" />
            </span>
            <div>
              <p className="font-semibold text-foreground">{title}</p>
              <p className="mt-1 text-sm text-muted">{desc}</p>
            </div>
          </a>
        </RevealItem>
      ))}
    </RevealGroup>
  );
}
