"use client";

import LoadingScreen from "../../imports/LoadingScreen-3-1/LoadingScreen-9-99";
import { getHomeColorPalette, getHomeColorThemeStyle } from "../home/colorPalettes";
import { LoadingStatus } from "./LoadingStatus";

const LOADING_WIDTH = 1728;
const LOADING_HEIGHT = 1117;

type TransitionLoadingOverlayProps = {
  paletteId: string;
};

export function TransitionLoadingOverlay({ paletteId }: TransitionLoadingOverlayProps) {
  const activePalette = getHomeColorPalette(paletteId);
  const themeStyle = getHomeColorThemeStyle(paletteId);

  return (
    <div
      suppressHydrationWarning
      className="theme-skin fixed inset-0 z-[200] flex items-center justify-center overflow-hidden"
      style={{ ...themeStyle, backgroundColor: activePalette.colors.bg }}
    >
      <div
        className="absolute"
        style={{
          width: `${LOADING_WIDTH}px`,
          height: `${LOADING_HEIGHT}px`,
          left: "50%",
          top: "50%",
          transform: `translate(-50%, -50%) scale(max(calc(100vw / ${LOADING_WIDTH}px), calc(100vh / ${LOADING_HEIGHT}px)))`,
          transformOrigin: "center center",
        }}
      >
        <LoadingScreen />
      </div>
      <LoadingStatus />
    </div>
  );
}
