import type { CSSProperties } from "react";

export type HomeColorPalette = {
  id: string;
  label: string;
  colors: {
    bg: string;
    line: string;
    dark: string;
    light: string;
  };
};

export const HOME_COLOR_PALETTES: HomeColorPalette[] = [
  {
    id: "default",
    label: "Default",
    colors: {
      bg: "#0779ff",
      line: "#0066df",
      dark: "#01207d",
      light: "#b7f9ff",
    },
  },
  {
    id: "template-1",
    label: "Template 1",
    colors: {
      bg: "#f1f1f1",
      line: "#dfdfdf",
      dark: "#858585ff",
      light: "#525252ff",
    },
  },
  {
    id: "template-2",
    label: "Template 2",
    colors: {
      bg: "#14a06f",
      line: "#0d8a60",
      dark: "#08332c",
      light: "#d6fff0",
    },
  },
  {
    id: "template-3",
    label: "Template 3",
    colors: {
      bg: "#ff8c42",
      line: "#ef7420",
      dark: "#5a2200",
      light: "#fff0cf",
    },
  },
];

export const DEFAULT_HOME_COLOR_PALETTE_ID = "default";
export const HOME_COLOR_PALETTE_STORAGE_KEY = "home-color-palette-id";

export function getHomeColorPalette(paletteId: string) {
  return HOME_COLOR_PALETTES.find((palette) => palette.id === paletteId) ?? HOME_COLOR_PALETTES[0];
}

export function getHomeColorThemeStyle(paletteId: string) {
  const activePalette = getHomeColorPalette(paletteId);

  return {
    "--theme-bg": activePalette.colors.bg,
    "--theme-line": activePalette.colors.line,
    "--theme-dark": activePalette.colors.dark,
    "--theme-light": activePalette.colors.light,
  } as CSSProperties;
}

export function getStoredHomeColorPaletteId() {
  if (typeof window === "undefined") {
    return DEFAULT_HOME_COLOR_PALETTE_ID;
  }

  return (
    window.sessionStorage.getItem(HOME_COLOR_PALETTE_STORAGE_KEY) ??
    DEFAULT_HOME_COLOR_PALETTE_ID
  );
}
