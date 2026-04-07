"use client";

import { useState, useEffect } from "react";
import LoadingScreen from "../../imports/LoadingScreen-3-1/LoadingScreen-9-99";
import { HomePageWithToggle } from "./HomePageWithToggle";
import MenuBarWrapper from "./MenuBarWrapper";

export function PortfolioLayout() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Show loading screen for 3 seconds
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  // Loading screen dimensions (matches Figma design)
  const LOADING_WIDTH = 1728;
  const LOADING_HEIGHT = 1117;

  if (loading) {
    return (
      <div className="fixed inset-0 z-50 bg-[#0779ff] flex items-center justify-center overflow-hidden">
        {/* Scaled loading screen - fills entire viewport and stays centered */}
        <div 
          className="absolute"
          style={{ 
            width: `${LOADING_WIDTH}px`,
            height: `${LOADING_HEIGHT}px`,
            left: "50%",
            top: "50%",
            transform: `translate(-50%, -50%) scale(max(calc(100vw / ${LOADING_WIDTH}px), calc(100vh / ${LOADING_HEIGHT}px)))`,
            transformOrigin: "center center"
          }}
        >
          <LoadingScreen />
        </div>
      </div>
    );
  }

  // Figma design dimensions
  const DESIGN_WIDTH = 1728;
  const DESIGN_HEIGHT = 5571;

  return (
    <div className="w-full min-h-screen bg-[#0779ff] overflow-y-auto overflow-x-hidden">
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
          <HomePageWithToggle />
        </div>
      </div>

      {/* Fixed MenuBar at bottom of viewport */}
      <div 
        className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50"
        style={{
          width: "336px",
          height: "93px",
          maxWidth: "calc(100vw - 32px)"
        }}
      >
        <MenuBarWrapper />
      </div>
    </div>
  );
}
