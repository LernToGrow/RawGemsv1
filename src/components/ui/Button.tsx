import { ReactNode } from "react";
import Link from "next/link";

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline-light" | "teal";
  className?: string;
}) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold transition-all duration-200 hover:scale-[1.03] active:scale-[0.98]";
  const styles = {
    primary: "bg-primary text-white hover:bg-primary-dark",
    secondary:
      "border border-border bg-surface text-foreground hover:border-primary hover:text-primary",
    "outline-light":
      "border border-white/30 text-white hover:bg-white/10",
    teal: "bg-accent-teal text-white hover:opacity-90",
  }[variant];

  return (
    <Link href={href} className={`${base} ${styles} ${className}`}>
      {children}
    </Link>
  );
}
