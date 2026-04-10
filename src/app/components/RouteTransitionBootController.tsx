"use client";

import { useEffect } from "react";
import {
  DEFAULT_HOME_COLOR_PALETTE_ID,
  HOME_COLOR_PALETTE_STORAGE_KEY,
  HOME_COLOR_PALETTES,
} from "../home/colorPalettes";
import { waitForPageReady } from "../lib/pageReady";
import { ROUTE_TRANSITION_STORAGE_KEY } from "../lib/routeTransition";

export function RouteTransitionBootController() {
  useEffect(() => {
    const hasTransition = window.sessionStorage.getItem(ROUTE_TRANSITION_STORAGE_KEY);

    if (!hasTransition) {
      document.documentElement.setAttribute("data-route-transition-loading", "false");
      return;
    }

    let isMounted = true;

    const releaseTransition = async () => {
      await waitForPageReady();

      if (!isMounted) {
        return;
      }

      document.documentElement.setAttribute("data-route-transition-loading", "false");
      window.sessionStorage.removeItem(ROUTE_TRANSITION_STORAGE_KEY);
    };

    releaseTransition();

    return () => {
      isMounted = false;
    };
  }, []);

  useEffect(() => {
    const paletteId =
      window.sessionStorage.getItem(HOME_COLOR_PALETTE_STORAGE_KEY) ?? DEFAULT_HOME_COLOR_PALETTE_ID;
    const palette =
      HOME_COLOR_PALETTES.find((item) => item.id === paletteId) ?? HOME_COLOR_PALETTES[0];

    document.documentElement.style.setProperty("--theme-bg", palette.colors.bg);
    document.documentElement.style.setProperty("--theme-line", palette.colors.line);
    document.documentElement.style.setProperty("--theme-dark", palette.colors.dark);
    document.documentElement.style.setProperty("--theme-light", palette.colors.light);
  }, []);

  return null;
}
