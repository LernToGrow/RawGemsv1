import { ReactNode } from "react";

export function Badge({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-border bg-surface px-3.5 py-1.5 text-sm text-muted shadow-sm">
      {children}
    </span>
  );
}
