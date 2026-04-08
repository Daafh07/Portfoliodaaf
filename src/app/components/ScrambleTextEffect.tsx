"use client";

import { useEffect, useRef } from "react";

export function ScrambleTextEffect() {
  const animatedElements = useRef(new WeakSet<HTMLElement>());
  const observedElements = useRef(new WeakSet<HTMLElement>());
  const persistedAnimations = useRef(new Set<string>());

  useEffect(() => {
    let mutationObserver: MutationObserver | undefined;
    let intersectionObserver: IntersectionObserver | undefined;
    let isMounted = true;
    const tweens: Array<{ kill: () => void }> = [];

    async function setupScrambleText() {
      const { gsap, ScrambleTextPlugin } = await import("gsap/all");

      if (!isMounted) {
        return;
      }

      gsap.registerPlugin(ScrambleTextPlugin);

      const animateHeader = (header: HTMLElement) => {
        if (animatedElements.current.has(header)) {
          return;
        }

        if (document.querySelector("[data-loading-screen]")) {
          window.setTimeout(() => animateHeader(header), 150);
          return;
        }

        const text = header.dataset.scrambleText || header.textContent || "";
        const chars = header.dataset.scrambleChars || "upperCase";
        const persistKey = header.dataset.scramblePersistKey;

        animatedElements.current.add(header);
        header.textContent = "";
        header.dataset.scrambleVisible = "true";

        if (persistKey) {
          persistedAnimations.current.add(persistKey);
        }

        tweens.push(
          gsap.to(header, {
            duration: Math.min(2.6, Math.max(1.05, text.length * 0.055)),
            ease: "none",
            scrambleText: {
              text,
              chars,
              speed: 0.24,
            },
          }),
        );
      };

      intersectionObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) {
              return;
            }

            const header = entry.target as HTMLElement;
            intersectionObserver?.unobserve(header);
            animateHeader(header);
          });
        },
        {
          root: null,
          rootMargin: "0px 0px -18% 0px",
          threshold: 0.35,
        },
      );

      const observeHeaders = () => {
        const headers = Array.from(
          document.querySelectorAll<HTMLElement>("[data-scramble-text]"),
        );

        headers.forEach((header) => {
          if (observedElements.current.has(header)) {
            return;
          }

          const persistKey = header.dataset.scramblePersistKey;
          const text = header.dataset.scrambleText || header.textContent || "";

          if (persistKey && persistedAnimations.current.has(persistKey)) {
            observedElements.current.add(header);
            animatedElements.current.add(header);
            header.textContent = text;
            header.dataset.scrambleVisible = "true";
            return;
          }

          observedElements.current.add(header);
          intersectionObserver?.observe(header);
        });
      };

      observeHeaders();

      mutationObserver = new MutationObserver(() => {
        window.requestAnimationFrame(observeHeaders);
      });
      mutationObserver.observe(document.body, { childList: true, subtree: true });
    }

    setupScrambleText();

    return () => {
      isMounted = false;
      mutationObserver?.disconnect();
      intersectionObserver?.disconnect();
      tweens.forEach((tween) => tween.kill());
    };
  }, []);

  return null;
}
