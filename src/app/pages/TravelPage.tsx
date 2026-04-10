"use client";

import { useState } from "react";
import HomepageSection3Overlaytravel from "../../imports/HomepageSection3Overlaytravel-1/HomepageSection3Overlaytravel";
import {
  getHomeColorPalette,
  getStoredHomeColorPaletteId,
  getHomeColorThemeStyle,
} from "../home/colorPalettes";

export function TravelPage() {
  const [selectedPaletteId] = useState(getStoredHomeColorPaletteId);

  // Figma design dimensions
  const DESIGN_WIDTH = 1728;
  const DESIGN_HEIGHT = 3412;
  const activePalette = getHomeColorPalette(selectedPaletteId);
  const themeStyle = getHomeColorThemeStyle(selectedPaletteId);

  return (
    <div
      suppressHydrationWarning
      className="theme-skin w-full min-h-screen bg-[#0779ff] overflow-y-auto overflow-x-hidden"
      style={{ ...themeStyle, backgroundColor: activePalette.colors.bg }}
    >
      {/* Wrapper that centers and creates scroll space */}
      <div 
        className="mx-auto"
        style={{ 
          width: "100vw",
          height: `calc(${DESIGN_HEIGHT}px * (100vw / ${DESIGN_WIDTH}px))`
        }}
      >
        {/* Scaled design container - centered */}
        <div 
          className="mx-auto"
          style={{ 
            width: `${DESIGN_WIDTH}px`,
            height: `${DESIGN_HEIGHT}px`,
            transformOrigin: "top center",
            transform: `scale(calc(100vw / ${DESIGN_WIDTH}px))`,
            marginLeft: "50%",
            marginRight: "50%",
            translate: "-50% 0"
          }}
        >
          <HomepageSection3Overlaytravel />
        </div>
      </div>

    </div>
  );
}
