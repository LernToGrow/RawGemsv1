"use client";

import { useEffect, useRef, useState } from "react";
import { Check, ChevronDown, Palette } from "lucide-react";

const THEMES = [
  { id: "gold", name: "Gold & Cream", swatch: "#c08829" },
  { id: "purple", name: "Purple & Magenta", swatch: "#7c3aed" },
  { id: "coral", name: "Sunset Coral", swatch: "#f2542d" },
] as const;

type ThemeId = (typeof THEMES)[number]["id"];

const STORAGE_KEY = "rawgems-theme";

export function ThemeSwitcher() {
  const [theme, setTheme] = useState<ThemeId>("gold");
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY) as ThemeId | null;
    if (stored && THEMES.some((t) => t.id === stored)) {
      setTheme(stored);
      document.documentElement.setAttribute("data-theme", stored);
    }
  }, []);

  useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  function selectTheme(id: ThemeId) {
    setTheme(id);
    setOpen(false);
    document.documentElement.setAttribute("data-theme", id);
    window.localStorage.setItem(STORAGE_KEY, id);
  }

  const current = THEMES.find((t) => t.id === theme) ?? THEMES[0];

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-2 rounded-lg border border-border bg-surface px-3.5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-primary/40"
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <Palette className="h-4 w-4 text-muted" />
        <span
          className="h-2.5 w-2.5 rounded-full"
          style={{ background: current.swatch }}
        />
        <span className="sr-only">{current.name}</span>
        <ChevronDown className={`h-3.5 w-3.5 text-muted transition-transform ${open ? "rotate-180" : ""}`} />
      </button>

      {open && (
        <div
          role="listbox"
          className="absolute right-0 z-50 mt-2 w-28 overflow-hidden rounded-xl border border-border bg-surface shadow-lg"
        >
          <p className="border-b border-border px-4 py-2 text-xs font-semibold uppercase tracking-wide text-muted">
            Preview a theme
          </p>
          {THEMES.map((t) => (
            <button
              key={t.id}
              type="button"
              role="option"
              aria-selected={t.id === theme}
              onClick={() => selectTheme(t.id)}
              className="flex w-full items-center gap-3 px-4 py-2.5 text-left text-sm text-foreground transition-colors hover:bg-surface-2"
            >
              <span
                className="h-3 w-3 shrink-0 rounded-full"
                style={{ background: t.swatch }}
              />
              <span className="flex-1 sr-only">{t.name}</span>
              {t.id === theme && <Check className="h-4 w-4 text-primary" />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
