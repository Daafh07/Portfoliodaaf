"use client";

import type { ReactNode } from "react";
import { useState } from "react";
import { beginRouteTransition } from "../lib/routeTransition";
import { getHomeColorPalette, getStoredHomeColorPaletteId } from "../home/colorPalettes";

type TransitionRouteLinkProps = {
  href: string;
  className?: string;
  children: ReactNode;
};

export function TransitionRouteLink({ href, className, children }: TransitionRouteLinkProps) {
  const [loading, setLoading] = useState(false);
  const paletteId = getStoredHomeColorPaletteId();

  const handleNavigate = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();

    if (loading) {
      return;
    }

    setLoading(true);
    beginRouteTransition(href);
    const palette = getHomeColorPalette(paletteId);

    document.documentElement.setAttribute("data-route-transition-loading", "true");
    document.documentElement.style.setProperty("--theme-bg", palette.colors.bg);
    document.documentElement.style.setProperty("--theme-line", palette.colors.line);
    document.documentElement.style.setProperty("--theme-dark", palette.colors.dark);
    document.documentElement.style.setProperty("--theme-light", palette.colors.light);

    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => {
        window.setTimeout(() => {
          window.location.assign(href);
        }, 120);
      });
    });
  };

  return (
    <a aria-busy={loading} href={href} className={className} onClick={handleNavigate}>
      {children}
    </a>
  );
}
