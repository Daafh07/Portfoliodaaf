"use client";

import { useEffect } from "react";

export function useFlairIconMotion() {
  useEffect(() => {
    let draggables: Array<{ kill: () => void }> = [];
    let idleTweens: Array<{ kill: () => void }> = [];
    let stopProximityEffect: (() => void) | undefined;
    let isMounted = true;

    async function enableIconRotation() {
      const { gsap, Draggable, InertiaPlugin } = await import("gsap/all");

      if (!isMounted) {
        return;
      }

      gsap.registerPlugin(Draggable, InertiaPlugin);
      gsap.set(".flair--3b", { transformOrigin: "50% 50%" });

      draggables = Draggable.create(".flair--3b", {
        type: "rotation",
        inertia: true,
      }) as Array<{ kill: () => void }>;

      const icons = gsap.utils.toArray<HTMLElement>(".flair--3b");
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
        const idleTargetX = (outwardX / outwardLength) * 18;
        const idleTargetY = (outwardY / outwardLength) * 20;
        const state = {
          idleX: 0,
          idleY: 0,
          repelX: 0,
          repelY: 0,
        };
        const xTo = gsap.quickTo(icon, "x", { duration: 0.45, ease: "power3.out" });
        const yTo = gsap.quickTo(icon, "y", { duration: 0.45, ease: "power3.out" });

        const updatePosition = () => {
          xTo(state.idleX + state.repelX);
          yTo(state.idleY + state.repelY);
        };

        idleTweens.push(
          gsap.to(state, {
            idleX: idleTargetX,
            idleY: idleTargetY,
            duration: 3.8 + index * 0.2,
            delay: index * 0.18,
            ease: "sine.inOut",
            repeat: -1,
            yoyo: true,
            onUpdate: updatePosition,
          }),
        );

        return {
          icon,
          state,
          updatePosition,
        };
      });

      const radius = 180;
      const maxOffset = 42;

      const handlePointerMove = (event: PointerEvent) => {
        movers.forEach(({ icon, state, updatePosition }) => {
          const rect = icon.getBoundingClientRect();
          const centerX = rect.left + rect.width / 2;
          const centerY = rect.top + rect.height / 2;
          const deltaX = centerX - event.clientX;
          const deltaY = centerY - event.clientY;
          const distance = Math.hypot(deltaX, deltaY);

          if (distance >= radius || distance === 0) {
            state.repelX = 0;
            state.repelY = 0;
            updatePosition();
            return;
          }

          const force = (1 - distance / radius) * maxOffset;
          state.repelX = (deltaX / distance) * force;
          state.repelY = (deltaY / distance) * force;
          updatePosition();
        });
      };

      const resetIcons = () => {
        movers.forEach(({ state, updatePosition }) => {
          state.repelX = 0;
          state.repelY = 0;
          updatePosition();
        });
      };

      window.addEventListener("pointermove", handlePointerMove);
      window.addEventListener("pointerleave", resetIcons);

      stopProximityEffect = () => {
        window.removeEventListener("pointermove", handlePointerMove);
        window.removeEventListener("pointerleave", resetIcons);
        idleTweens.forEach((tween) => tween.kill());
        idleTweens = [];
        resetIcons();
      };
    }

    enableIconRotation();

    return () => {
      isMounted = false;
      stopProximityEffect?.();
      idleTweens.forEach((tween) => tween.kill());
      draggables.forEach((draggable) => draggable.kill());
    };
  }, []);
}
