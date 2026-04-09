"use client";

import { useState } from "react";
import HomepageSection3Overlaycv from "../../imports/HomepageSection3Overlaycv-4/HomepageSection3Overlaycv-27-1491";
import Link from "next/link";
import {
  getHomeColorPalette,
  getStoredHomeColorPaletteId,
  getHomeColorThemeStyle,
} from "../home/colorPalettes";

export function WorkPage() {
  const [selectedPaletteId] = useState(getStoredHomeColorPaletteId);

  const DESIGN_WIDTH = 1728;
  const DESIGN_HEIGHT = 2983;
  const activePalette = getHomeColorPalette(selectedPaletteId);
  const themeStyle = getHomeColorThemeStyle(selectedPaletteId);

  return (
    <div
      suppressHydrationWarning
      className="theme-skin relative w-full min-h-screen bg-[#0779ff] overflow-x-hidden"
      style={{ ...themeStyle, backgroundColor: activePalette.colors.bg }}
    >
      <Link
        href="/"
        className="fixed top-8 right-8 z-[60] bg-[#01207d] text-[#b7f9ff] w-[60px] h-[60px] rounded-full flex items-center justify-center font-['Futura_Now_Headline',sans-serif] text-[32px] hover:bg-[#b7f9ff] hover:text-[#01207d] transition-colors"
      >
        ×
      </Link>

      <div
        className="mx-auto"
        style={{
          isolation: "isolate",
          touchAction: "pan-y",
          width: "100vw",
          height: `calc(${DESIGN_HEIGHT}px * (100vw / ${DESIGN_WIDTH}px))`,
        }}
      >
        <div
          className="mx-auto"
          style={{
            backfaceVisibility: "hidden",
            contain: "layout paint style",
            width: `${DESIGN_WIDTH}px`,
            height: `${DESIGN_HEIGHT}px`,
            transformOrigin: "top center",
            transform: `translate3d(-50%, 0, 0) scale(calc(100vw / ${DESIGN_WIDTH}px))`,
            marginLeft: "50%",
            marginRight: "50%",
            willChange: "transform",
          }}
        >
          <HomepageSection3Overlaycv />
        </div>
      </div>
    </div>
  );
}
