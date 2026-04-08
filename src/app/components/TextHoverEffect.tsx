"use client";

import { useEffect } from "react";

type HoverElement = HTMLElement & {
  dataset: DOMStringMap & {
    textHoverDuration?: string;
    textHoverReady?: string;
    textHoverBound?: string;
    textHoverStagger?: string;
    textOriginal?: string;
  };
};

export function TextHoverEffect() {
  useEffect(() => {
    let isMounted = true;
    let mutationObserver: MutationObserver | undefined;
    const cleanupFns: Array<() => void> = [];

    async function setupTextHover() {
      const { gsap } = await import("gsap/all");

      if (!isMounted) {
        return;
      }

      const splitChars = (element: HoverElement) => {
        if (element.dataset.textHoverReady === "true") {
          return;
        }

        const text = (element.dataset.textOriginal || element.textContent || "").trim();

        if (!text) {
          return;
        }

        element.dataset.textOriginal = text;
        element.dataset.textHoverReady = "true";
        element.setAttribute("aria-label", text);
        element.innerHTML = "";

        const wrapper = document.createElement("span");
        wrapper.className = "text-inner";
        wrapper.setAttribute("aria-hidden", "true");

        const top = document.createElement("span");
        top.className = "text-top";

        const bottom = document.createElement("span");
        bottom.className = "text-bottom";

        [...text].forEach((char) => {
          const displayChar = char === " " ? "\u00A0" : char;
          const className = char === " " ? "char space" : "char";

          const topChar = document.createElement("span");
          topChar.className = className;
          topChar.textContent = displayChar;

          const bottomChar = document.createElement("span");
          bottomChar.className = className;
          bottomChar.textContent = displayChar;

          top.appendChild(topChar);
          bottom.appendChild(bottomChar);
        });

        wrapper.appendChild(top);
        wrapper.appendChild(bottom);
        element.appendChild(wrapper);
      };

      const bindHover = (element: HoverElement) => {
        if (element.dataset.textHoverBound === "true") {
          return;
        }

        const triggerElement =
          element.closest<HTMLElement>("[data-text-hover-trigger]") ?? element;

        const topChars = element.querySelectorAll<HTMLElement>(".text-top .char");
        const bottomChars = element.querySelectorAll<HTMLElement>(".text-bottom .char");

        if (!topChars.length || !bottomChars.length) {
          return;
        }

        const topOffset = () => {
          if (element.classList.contains("nav-menu-link-w")) {
            return window.innerWidth < 480 ? "-4.3rem" : "-5.25rem";
          }

          return "-100%";
        };

        const bottomOffset = () => "-100%";
        const duration = Number(element.dataset.textHoverDuration || "0.6");
        const stagger = Number(element.dataset.textHoverStagger || "0.02");

        const handleMouseEnter = () => {
          gsap.to(topChars, {
            y: topOffset(),
            duration,
            stagger,
            ease: "power3.out",
            overwrite: true,
          });

          gsap.to(bottomChars, {
            y: bottomOffset(),
            duration,
            stagger,
            ease: "power3.out",
            overwrite: true,
          });
        };

        const handleMouseLeave = () => {
          gsap.to(topChars, {
            y: 0,
            duration,
            stagger,
            ease: "power3.out",
            overwrite: true,
          });

          gsap.to(bottomChars, {
            y: 0,
            duration,
            stagger,
            ease: "power3.out",
            overwrite: true,
          });
        };

        const handlePointerDown = () => {
          handleMouseEnter();
        };

        const handlePointerEnd = () => {
          handleMouseLeave();
        };

        element.dataset.textHoverBound = "true";
        triggerElement.addEventListener("mouseenter", handleMouseEnter);
        triggerElement.addEventListener("mouseleave", handleMouseLeave);
        triggerElement.addEventListener("pointerdown", handlePointerDown);
        triggerElement.addEventListener("pointerup", handlePointerEnd);
        triggerElement.addEventListener("pointercancel", handlePointerEnd);

        cleanupFns.push(() => {
          triggerElement.removeEventListener("mouseenter", handleMouseEnter);
          triggerElement.removeEventListener("mouseleave", handleMouseLeave);
          triggerElement.removeEventListener("pointerdown", handlePointerDown);
          triggerElement.removeEventListener("pointerup", handlePointerEnd);
          triggerElement.removeEventListener("pointercancel", handlePointerEnd);
        });
      };

      const enhanceHoverText = () => {
        const elements = Array.from(
          document.querySelectorAll<HoverElement>("[data-anim='text-hover'][split-text='chars']"),
        );

        elements.forEach((element) => {
          splitChars(element);
          bindHover(element);
        });
      };

      enhanceHoverText();

      mutationObserver = new MutationObserver(() => {
        window.requestAnimationFrame(enhanceHoverText);
      });

      mutationObserver.observe(document.body, {
        childList: true,
        subtree: true,
      });
    }

    setupTextHover();

    return () => {
      isMounted = false;
      mutationObserver?.disconnect();
      cleanupFns.forEach((cleanup) => cleanup());
    };
  }, []);

  return null;
}
