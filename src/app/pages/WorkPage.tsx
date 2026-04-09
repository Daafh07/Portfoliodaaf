"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import HomepageSection3Overlaycv from "../../imports/HomepageSection3Overlaycv-4/HomepageSection3Overlaycv-27-1491";
import Link from "next/link";
import MenuBar from "../../imports/MenuBar/MenuBar";
import {
  HOME_COLOR_PALETTES,
  HOME_COLOR_PALETTE_STORAGE_KEY,
  getHomeColorPalette,
  getStoredHomeColorPaletteId,
  getHomeColorThemeStyle,
} from "../home/colorPalettes";

export function WorkPage() {
  const [selectedPaletteId, setSelectedPaletteId] = useState(getStoredHomeColorPaletteId);
  const [palettePickerOpen, setPalettePickerOpen] = useState(false);
  const workSectionRef = useRef<HTMLDivElement | null>(null);
  const finishTriggeredRef = useRef(false);

  const DESIGN_WIDTH = 1728;
  const DESIGN_HEIGHT = 2983;
  const WORK_FINAL_STAGE_TRAVEL = 1782;
  const activePalette = getHomeColorPalette(selectedPaletteId);
  const themeStyle = getHomeColorThemeStyle(selectedPaletteId);
  const selectablePalettes = useMemo(
    () => HOME_COLOR_PALETTES.filter((palette) => palette.id !== selectedPaletteId),
    [selectedPaletteId],
  );

  useEffect(() => {
    if (typeof window === "undefined") return;
    window.sessionStorage.setItem(HOME_COLOR_PALETTE_STORAGE_KEY, selectedPaletteId);
  }, [selectedPaletteId]);

  useEffect(() => {
    let cleanup: (() => void) | undefined;
    let resizeFrame = 0;
    let removeResizeListeners: (() => void) | undefined;

    const init = async () => {
      const section = workSectionRef.current;
      if (!section) return;

      const { gsap, ScrollTrigger } = await import("gsap/all");
      gsap.registerPlugin(ScrollTrigger);

      const buildTimeline = () => {
        const introCopy = section.querySelector("[data-work-intro-copy]");
        const car = section.querySelector("[data-work-car]");
        const stageContent = section.querySelector('[data-name="Homepage-Section3OVERLAYCV"]') as HTMLElement | null;
        const stepIds = ["2022", "2024", "2025", "2026"] as const;
        const stepMap = new Map<string, HTMLElement[]>();
        const stepAnchorMap = new Map<string, HTMLElement | null>();

        stepIds.forEach((stepId) => {
          stepMap.set(
            stepId,
            Array.from(section.querySelectorAll(`[data-work-step="${stepId}"]`)) as HTMLElement[],
          );
          stepAnchorMap.set(stepId, section.querySelector(`[data-work-step-anchor="${stepId}"]`) as HTMLElement | null);
        });

        if (!introCopy || !car || !stageContent || (stepMap.get("2022")?.length ?? 0) === 0 || !stepAnchorMap.get("2022")) {
          return () => {};
        }

        const ctx = gsap.context(() => {
          const baseAnchor = stepAnchorMap.get("2022")!;
          const lastAnchor = stepAnchorMap.get("2026");
          const baseTop = baseAnchor.offsetTop;
          const totalOffset = (lastAnchor?.offsetTop ?? baseTop) - baseTop;
          const INITIAL_STAGE_OFFSET_Y = -110;
          const CAR_CENTER_X = 6;
          const CAR_CENTER_Y = 304;
          const CAR_END_Y = 1940;
          const getScale = () => section.getBoundingClientRect().width / DESIGN_WIDTH;
          const clamp01 = (value: number) => Math.max(0, Math.min(1, value));
          const lerp = (from: number, to: number, progress: number) => from + (to - from) * progress;

          const stepProgressMap = new Map<string, number>();

          stepIds.forEach((stepId, index) => {
            const nodes = stepMap.get(stepId) ?? [];
            const anchor = stepAnchorMap.get(stepId);
            const progress = index === 0 || !anchor || totalOffset <= 0 ? 0 : (anchor.offsetTop - baseTop) / totalOffset;
            stepProgressMap.set(stepId, clamp01(progress));
            gsap.set(nodes, {
              opacity: index === 0 ? 1 : 0,
            });
          });

          gsap.set(car, { scale: 0.9, transformOrigin: "50% 50%" });
          gsap.set(stageContent, { x: 0, y: 0 });

          const setCarY = gsap.quickSetter(car, "y", "px");
          const setCarX = gsap.quickSetter(car, "x", "px");
          const setStageY = gsap.quickSetter(stageContent, "y", "px");
          const setIntroY = gsap.quickSetter(introCopy, "y", "px");
          const setIntroOpacity = gsap.quickSetter(introCopy, "opacity");
          const stepSetters = stepIds.map((stepId) => {
            const nodes = stepMap.get(stepId) ?? [];
            return nodes.map((node) => gsap.quickSetter(node, "opacity"));
          });

          ScrollTrigger.create({
            trigger: baseAnchor,
            start: "top 28%",
            end: () => `+=${Math.round((totalOffset + 900) * getScale())}`,
            pin: section,
            scrub: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
            onUpdate: async (self: { progress: number }) => {
              const p = clamp01(self.progress);
              const introFade = clamp01(p / 0.12);
              const pickupProgress = 0.08;
              const finishProgress = 0.82;
              const pickupTravelProgress = clamp01(p / Math.max(0.001, pickupProgress));
              const midTravelProgress = clamp01((p - pickupProgress) / Math.max(0.001, finishProgress - pickupProgress));
              const finishTravelProgress = clamp01((p - finishProgress) / Math.max(0.001, 1 - finishProgress));
              const fadeWindow = 0.14;

              setIntroOpacity(1 - introFade);
              setIntroY(-34 * introFade);
              setStageY(lerp(0, INITIAL_STAGE_OFFSET_Y - totalOffset, p));
              const finishStartY = lerp(CAR_CENTER_Y, CAR_END_Y, 0.74);
              const carX = lerp(0, CAR_CENTER_X, pickupTravelProgress);
              const carY =
                p < pickupProgress
                  ? lerp(0, CAR_CENTER_Y, pickupTravelProgress)
                  : p < finishProgress
                    ? lerp(CAR_CENTER_Y, finishStartY, midTravelProgress)
                    : lerp(finishStartY, CAR_END_Y, finishTravelProgress);
              setCarX(carX);
              setCarY(carY);

              stepIds.forEach((stepId, index) => {
                const center = stepProgressMap.get(stepId) ?? 0;
                const opacity =
                  index === 0
                    ? 1 - clamp01(p / Math.max(0.001, center + fadeWindow))
                    : 1 - clamp01(Math.abs(p - center) / fadeWindow);

                stepSetters[index].forEach((setAlpha) => {
                  setAlpha(clamp01(opacity));
                });
              });

              if (p >= 0.94 && !finishTriggeredRef.current) {
                finishTriggeredRef.current = true;
                const confetti = (await import("canvas-confetti")).default;
                const colors = [activePalette.colors.light, activePalette.colors.dark, activePalette.colors.line];
                const bursts = [
                  { particleCount: 80, angle: 90, spread: 140, origin: { x: 0.5, y: 0 } },
                  { particleCount: 80, angle: 270, spread: 140, origin: { x: 0.5, y: 1 } },
                  { particleCount: 80, angle: 0, spread: 140, origin: { x: 0, y: 0.5 } },
                  { particleCount: 80, angle: 180, spread: 140, origin: { x: 1, y: 0.5 } },
                  { particleCount: 56, angle: 45, spread: 110, origin: { x: 0, y: 0 } },
                  { particleCount: 56, angle: 135, spread: 110, origin: { x: 1, y: 0 } },
                  { particleCount: 56, angle: 315, spread: 110, origin: { x: 0, y: 1 } },
                  { particleCount: 56, angle: 225, spread: 110, origin: { x: 1, y: 1 } },
                ];

                bursts.forEach((burst) => {
                  confetti({
                    ...burst,
                    startVelocity: 28,
                    scalar: 0.9,
                    colors,
                  });
                });
              } else if (p < 0.88) {
                finishTriggeredRef.current = false;
              }
            },
          });
        }, section);

        return () => ctx.revert();
      };

      cleanup = buildTimeline();

      const rebuild = () => {
        cleanup?.();
        cleanup = buildTimeline();
        ScrollTrigger.refresh();
      };

      const handleResize = () => {
        window.cancelAnimationFrame(resizeFrame);
        resizeFrame = window.requestAnimationFrame(rebuild);
      };

      window.addEventListener("resize", handleResize);
      window.addEventListener("orientationchange", handleResize);

      removeResizeListeners = () => {
        window.cancelAnimationFrame(resizeFrame);
        window.removeEventListener("resize", handleResize);
        window.removeEventListener("orientationchange", handleResize);
      };
    };

    init();

    return () => {
      removeResizeListeners?.();
      cleanup?.();
    };
  }, []);

  return (
    <div
      suppressHydrationWarning
      className="theme-skin relative w-full min-h-screen bg-[#0779ff] overflow-x-hidden"
      style={{ ...themeStyle, backgroundColor: activePalette.colors.bg }}
    >
      <div className="fixed bottom-8 left-1/2 z-[60] h-[81px] w-[292px] -translate-x-1/2">
        <div className="relative size-full">
          {palettePickerOpen ? (
            <div className="pointer-events-none absolute -top-[52px] left-1/2 z-[80] flex -translate-x-1/2 items-center gap-[12px]">
              {selectablePalettes.map((palette, index) => (
                <button
                  key={palette.id}
                  aria-label={`Kies ${palette.label}`}
                  className="pointer-events-auto relative size-[18px] rounded-full border-none p-0 transition-transform duration-300 ease-out hover:scale-110"
                  onClick={() => {
                    setSelectedPaletteId(palette.id);
                    setPalettePickerOpen(false);
                  }}
                  style={{
                    background: palette.colors.light,
                    boxShadow: `0 0 0 2px ${palette.colors.dark}, 0 8px 18px ${palette.colors.dark}33`,
                    transform: `translateY(${Math.sin((index + 1) * 1.4) * 4}px) scale(1)`,
                  }}
                  type="button"
                />
              ))}
            </div>
          ) : null}

          <MenuBar contactLabel="Home" />

          <Link
            aria-label="Ga naar home"
            className="absolute inset-[15.05%_4.94%_13.98%_52.23%] rounded-[25px]"
            href="/"
          />

          <button
            aria-label="Open kleurkeuze"
            className="absolute inset-[15.05%_51.93%_13.98%_28.49%] rounded-[25px] border-none bg-transparent p-0"
            onClick={() => setPalettePickerOpen((current) => !current)}
            type="button"
          />

          <button
            aria-label="Inactieve knop"
            className="absolute inset-[15.05%_75.67%_13.98%_4.75%] rounded-[25px] border-none bg-transparent p-0"
            type="button"
          />
        </div>
      </div>

      <div
        ref={workSectionRef}
        className="mx-auto"
        style={{
          isolation: "isolate",
          overflow: "hidden",
          touchAction: "pan-y",
          width: "100vw",
          height: `calc(${DESIGN_HEIGHT - WORK_FINAL_STAGE_TRAVEL}px * (100vw / ${DESIGN_WIDTH}px))`,
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
