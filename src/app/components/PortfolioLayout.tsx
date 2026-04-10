"use client";

import { useState, useEffect, useRef } from "react";
import LoadingScreen from "../../imports/LoadingScreen-3-1/LoadingScreen-9-99";
import { HomePageWithToggle } from "./HomePageWithToggle";
import { LoadingStatus } from "./LoadingStatus";
import MenuBarWrapper from "./MenuBarWrapper";
import {
  DEFAULT_HOME_COLOR_PALETTE_ID,
  getHomeColorPalette,
  getHomeColorThemeStyle,
  HOME_COLOR_PALETTES,
  HOME_COLOR_PALETTE_STORAGE_KEY,
  getStoredHomeColorPaletteId,
} from "../home/colorPalettes";
import { waitForPageReady } from "../lib/pageReady";

export function PortfolioLayout() {
  const [loading, setLoading] = useState(true);
  const [selectedPaletteId, setSelectedPaletteId] = useState(DEFAULT_HOME_COLOR_PALETTE_ID);
  const [paletteReady, setPaletteReady] = useState(false);
  const menuBarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setSelectedPaletteId(getStoredHomeColorPaletteId());
    setPaletteReady(true);
  }, []);

  useEffect(() => {
    if (!paletteReady) {
      return;
    }

    window.sessionStorage.setItem(HOME_COLOR_PALETTE_STORAGE_KEY, selectedPaletteId);
  }, [paletteReady, selectedPaletteId]);

  useEffect(() => {
    let isMounted = true;

    const releaseLoading = async () => {
      await waitForPageReady();

      if (isMounted) {
        setLoading(false);
      }
    };

    releaseLoading();

    return () => {
      isMounted = false;
    };
  }, []);

  useEffect(() => {
    if (loading) {
      return;
    }

    let isMounted = true;
    let cleanupScrollSync: (() => void) | undefined;

    async function setupMenuReveal() {
      const menuBar = menuBarRef.current;

      if (!menuBar) {
        return;
      }

      const { gsap } = await import("gsap/all");

      if (!isMounted) {
        return;
      }

      const DESIGN_WIDTH = 1728;
      const SOME_WORK_TOP_Y = 1000;
      const MENU_BAR_BOTTOM_BASE = 32;
      const FOOTER_PIN_GAP = 40;
      let currentMode: "hidden" | "fixed" | "pinned" = "hidden";

      gsap.set(menuBar, {
        autoAlpha: 0,
        bottom: MENU_BAR_BOTTOM_BASE,
        position: "fixed",
        top: "auto",
        y: 28,
        scale: 0.94,
        pointerEvents: "none",
      });

      const animateMenu = (shouldShowMenu: boolean) => {
        gsap.killTweensOf(menuBar);
        gsap.to(menuBar, {
          autoAlpha: shouldShowMenu ? 1 : 0,
          duration: shouldShowMenu ? 0.65 : 0.4,
          ease: shouldShowMenu ? "power3.out" : "power2.inOut",
          pointerEvents: shouldShowMenu ? "auto" : "none",
          scale: shouldShowMenu ? 1 : 0.94,
          y: shouldShowMenu ? 0 : 28,
        });
      };

      const syncMenuVisibility = () => {
        const scale = window.innerWidth / DESIGN_WIDTH;
        const viewportDesignHeight = window.innerHeight / scale;
        const revealShow = Math.max(0, (SOME_WORK_TOP_Y - viewportDesignHeight * 0.92) * scale);
        const revealHide = Math.max(0, (SOME_WORK_TOP_Y - viewportDesignHeight * 1.12) * scale);
        const footerObjectAnchor = document.getElementById("footer-object-anchor");
        const footerRect = footerObjectAnchor?.getBoundingClientRect();
        const footerTopInViewport = footerRect?.top ?? Number.POSITIVE_INFINITY;
        const menuRect = menuBar.getBoundingClientRect();
        const fixedMenuBottom = window.innerHeight - MENU_BAR_BOTTOM_BASE;
        const shouldPin = footerTopInViewport <= fixedMenuBottom + FOOTER_PIN_GAP;

        let nextMode = currentMode;

        if (window.scrollY <= revealHide) {
          nextMode = "hidden";
        } else if (shouldPin && footerRect) {
          nextMode = "pinned";
        } else if (window.scrollY >= revealShow) {
          nextMode = "fixed";
        }

        if (nextMode === currentMode && nextMode !== "pinned") {
          return;
        }

        if (nextMode === "hidden") {
          animateMenu(false);
        } else if (nextMode === "fixed") {
          gsap.set(menuBar, {
            position: "fixed",
            top: "auto",
            bottom: MENU_BAR_BOTTOM_BASE,
            y: 0,
            scale: 1,
            pointerEvents: "auto",
          });
          if (currentMode === "hidden") {
            animateMenu(true);
          }
        } else if (nextMode === "pinned" && footerRect) {
          const pinnedTop = window.scrollY + footerTopInViewport - menuRect.height - FOOTER_PIN_GAP;

          gsap.set(menuBar, {
            position: "absolute",
            top: pinnedTop,
            bottom: "auto",
            pointerEvents: "auto",
            y: 0,
            scale: 1,
          });
          if (currentMode === "hidden") {
            animateMenu(true);
          }
        }

        currentMode = nextMode;
      };

      syncMenuVisibility();

      const handleScrollOrResize = () => {
        window.requestAnimationFrame(syncMenuVisibility);
      };

      window.addEventListener("scroll", handleScrollOrResize, { passive: true });
      window.addEventListener("resize", handleScrollOrResize);

      cleanupScrollSync = () => {
        window.removeEventListener("scroll", handleScrollOrResize);
        window.removeEventListener("resize", handleScrollOrResize);
      };
    }

    setupMenuReveal();

    return () => {
      isMounted = false;
      cleanupScrollSync?.();
    };
  }, [loading]);

  // Loading screen dimensions (matches Figma design)
  const LOADING_WIDTH = 1728;
  const LOADING_HEIGHT = 1117;

  // Figma design dimensions
  const DESIGN_WIDTH = 1728;
  const DESIGN_HEIGHT = 5571;
  const activePalette = getHomeColorPalette(selectedPaletteId);
  const themeStyle = getHomeColorThemeStyle(selectedPaletteId);

  if (loading) {
    return (
      <div
        suppressHydrationWarning
        className="theme-skin fixed inset-0 z-50 flex items-center justify-center overflow-hidden"
        data-loading-screen
        style={{ ...themeStyle, backgroundColor: activePalette.colors.bg }}
      >
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
        <LoadingStatus />
      </div>
    );
  }

  return (
    <div
      suppressHydrationWarning
      className="theme-skin relative w-full min-h-screen bg-[#0779ff] overflow-y-auto overflow-x-hidden"
      style={{
        ...themeStyle,
        backgroundColor: activePalette.colors.bg,
      }}
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
          <HomePageWithToggle />
        </div>
      </div>

      {/* Fixed MenuBar at bottom of viewport */}
      <div 
        ref={menuBarRef}
        className="left-1/2 -translate-x-1/2 z-50"
        style={{
          width: "292px",
          height: "81px",
          maxWidth: "calc(100vw - 32px)",
          pointerEvents: "none",
        }}
        >
        <MenuBarWrapper
          colorPalettes={HOME_COLOR_PALETTES}
          onSelectPalette={setSelectedPaletteId}
          selectedPaletteId={selectedPaletteId}
        />
      </div>
    </div>
  );
}
