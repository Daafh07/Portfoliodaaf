"use client";

import { useEffect } from "react";
import type { TrackName } from "../config";

const PASSION_MOTION_START =
  typeof window !== "undefined" ? window.performance.now() : Date.now();

export function usePassionIconIdleMotion(selectedTrack: TrackName) {
  useEffect(() => {
    let isMounted = true;
    let stopProximityEffect: (() => void) | undefined;
    let frameId = 0;

    async function enablePassionIdleMotion() {
      const { gsap } = await import("gsap/all");

      if (!isMounted) {
        return;
      }

      const icons = gsap
        .utils.toArray<HTMLElement>(".passion-flair")
        .filter((icon) => icon.getBoundingClientRect().width > 0 && icon.getBoundingClientRect().height > 0);

      if (!icons.length) {
        return;
      }

      const iconCenters = icons.map((icon) => {
        const rect = icon.getBoundingClientRect();

        return {
          x: rect.left + rect.width / 2,
          y: rect.top + rect.height / 2,
        };
      });

      const groupCenter = iconCenters.reduce(
        (center, point) => ({
          x: center.x + point.x / iconCenters.length,
          y: center.y + point.y / iconCenters.length,
        }),
        { x: 0, y: 0 },
      );

      const movers = icons.map((icon, index) => {
        const baseAngle = (index / Math.max(icons.length, 1)) * Math.PI * 2;
        const outwardX = iconCenters[index].x - groupCenter.x || Math.cos(baseAngle);
        const outwardY = iconCenters[index].y - groupCenter.y || Math.sin(baseAngle);
        const outwardLength = Math.hypot(outwardX, outwardY) || 1;
        const driftX = (outwardX / outwardLength) * 26;
        const driftY = (outwardY / outwardLength) * 28;
        const rotateRange = (index % 2 === 0 ? 1 : -1) * (12 + (index % 3) * 2);
        const speed = 0.5 + index * 0.016;
        const phase = index * 0.72;
        const state = {
          repelX: 0,
          repelY: 0,
          targetRepelX: 0,
          targetRepelY: 0,
        };
        const setX = gsap.quickSetter(icon, "x", "px");
        const setY = gsap.quickSetter(icon, "y", "px");
        const setRotation = gsap.quickSetter(icon, "rotation", "deg");

        gsap.set(icon, { x: 0, y: 0, rotation: 0, transformOrigin: "50% 50%" });

        return { icon, state, setX, setY, setRotation, driftX, driftY, rotateRange, speed, phase };
      });

      const radius = 210;
      const maxOffset = 34;

      const handlePointerMove = (event: PointerEvent) => {
        movers.forEach(({ icon, state }) => {
          const rect = icon.getBoundingClientRect();
          const centerX = rect.left + rect.width / 2;
          const centerY = rect.top + rect.height / 2;
          const deltaX = centerX - event.clientX;
          const deltaY = centerY - event.clientY;
          const distance = Math.hypot(deltaX, deltaY);

          if (distance >= radius || distance === 0) {
            state.targetRepelX = 0;
            state.targetRepelY = 0;
            return;
          }

          const force = (1 - distance / radius) * maxOffset;
          state.targetRepelX = (deltaX / distance) * force;
          state.targetRepelY = (deltaY / distance) * force;
        });
      };

      const resetIcons = () => {
        movers.forEach(({ state }) => {
          state.targetRepelX = 0;
          state.targetRepelY = 0;
        });
      };

      const render = () => {
        const elapsed = (window.performance.now() - PASSION_MOTION_START) / 1000;

        movers.forEach(({ state, setX, setY, setRotation, driftX, driftY, rotateRange, speed, phase }) => {
          state.repelX += (state.targetRepelX - state.repelX) * 0.14;
          state.repelY += (state.targetRepelY - state.repelY) * 0.14;

          const wave = Math.sin(elapsed * speed + phase);
          const sway = Math.cos(elapsed * (speed * 0.92) + phase);
          const x = wave * driftX + state.repelX;
          const y = sway * driftY + state.repelY;
          const rotation = Math.sin(elapsed * (speed * 0.88) + phase) * rotateRange;

          setX(x);
          setY(y);
          setRotation(rotation);
        });

        if (isMounted) {
          frameId = window.requestAnimationFrame(render);
        }
      };

      window.addEventListener("pointermove", handlePointerMove);
      window.addEventListener("pointerleave", resetIcons);
      frameId = window.requestAnimationFrame(render);

      stopProximityEffect = () => {
        window.removeEventListener("pointermove", handlePointerMove);
        window.removeEventListener("pointerleave", resetIcons);
        resetIcons();
        window.cancelAnimationFrame(frameId);
      };
    }

    enablePassionIdleMotion();

    return () => {
      isMounted = false;
      stopProximityEffect?.();
      window.cancelAnimationFrame(frameId);
    };
  }, [selectedTrack]);
}
