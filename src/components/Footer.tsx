import Link from "next/link";
import { Gem, Globe, AtSign, Share2 } from "lucide-react";
import { products, serviceGroups } from "@/lib/content";

const columns = [
  {
    title: "Products",
    links: products.slice(0, 4).map((p) => ({ label: p.name, href: "#products" })),
  },
  {
    title: "Services",
    links: serviceGroups.slice(0, 4).map((s) => ({ label: s.title, href: "#services" })),
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "#top" },
      { label: "Industries", href: "#industries" },
      { label: "Process", href: "#process" },
      { label: "Testimonials", href: "#testimonials" },
    ],
  },
];


export function Footer() {
  return (
    <footer className="bg-navy">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                <Gem className="h-4.5 w-4.5 text-white" />
              </span>
              <span className="text-lg font-bold tracking-tight text-white">
                Raw<span className="text-primary">Gems</span>
              </span>
            </div>
            <p className="mt-3 max-w-sm text-sm text-white/60 leading-relaxed">
              Building digital products and delivering custom software
              solutions that help businesses grow and succeed.
            </p>
            {/* TODO: add real social links */}
            <div className="mt-5 flex gap-3">
              {[Globe, AtSign, Share2].map((Icon, i) => (
                <span
                  key={i}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white/70 transition-colors hover:bg-primary hover:text-white"
                >
                  <Icon className="h-4 w-4" />
                </span>
              ))}
            </div>
          </div>
          {columns.map((col) => (
            <div key={col.title}>
              <p className="text-sm font-semibold text-white">{col.title}</p>
              <ul className="mt-4 space-y-2">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/60 transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-sm text-white/50">
            © {new Date().getFullYear()} RawGems. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-white/60">
            <span>+91 7709 985032</span>
            <span>+91 7709 832167</span>
            <Link href="mailto:rawgems.in@gamil.com" className="hover:text-white">
              rawgems.in@gamil.com
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
