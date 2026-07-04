import Link from "next/link";
import { Gem } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";

const navLinks = [
  { href: "#top", label: "Home" },
  { href: "#products", label: "Products" },
  { href: "#services", label: "Services" },
  { href: "#industries", label: "Industries" },
];

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-surface/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
            <Gem className="h-4.5 w-4.5 text-white" />
          </span>
          <span className="text-lg font-bold tracking-tight text-foreground">
            Raw<span className="text-primary">Gems</span>
          </span>
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group relative text-sm font-medium text-muted transition-colors hover:text-primary"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-primary transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Button href="#contact" className="hidden sm:inline-flex">
            Contact Us
          </Button>
          <ThemeSwitcher />
        </div>
      </div>
    </header>
  );
}
