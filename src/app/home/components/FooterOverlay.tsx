"use client";

import { FOOTER_SOCIAL_LINKS, type HomeSectionName } from "../config";

type FooterOverlayProps = {
  onNavigateSection: (sectionName: HomeSectionName) => void;
};

const footerButtonClassName = `-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Futura_Now_Headline',sans-serif]
  justify-center not-italic text-[45px] text-center whitespace-nowrap
  pointer-events-auto cursor-pointer transition-colors leading-[80px]`;
const footerHoverTiming = {
  "data-text-hover-duration": "0.6",
  "data-text-hover-stagger": "0.02",
} as const;

export function FooterOverlay({ onNavigateSection }: FooterOverlayProps) {
  return (
    <div id="contact-section" className="absolute left-0 top-[4454px] h-[1117px] w-[1728px] pointer-events-none">
      <div
        id="footer-object-anchor"
        className="absolute left-[40px] top-[334px] h-[760px] w-[1647px] pointer-events-none"
      />

      <button
        onClick={() => onNavigateSection("SOME WORK")}
        className={`${footerButtonClassName} left-[calc(50%-478px)] top-[705.5px] border-none bg-transparent p-0 text-[#b7f9ff] hover:text-[#01207d]`}
        data-anim="text-hover"
        split-text="chars"
        {...footerHoverTiming}
      >
        SOME WORK
      </button>

      <button
        onClick={() => onNavigateSection("SHORT ABOUT")}
        className={`${footerButtonClassName} left-[calc(50%-478px)] top-[767.5px] border-none bg-transparent p-0 text-[#b7f9ff] hover:text-[#01207d]`}
        data-anim="text-hover"
        split-text="chars"
        {...footerHoverTiming}
      >
        SHORT ABOUT
      </button>

      <button
        onClick={() => onNavigateSection("PASSION")}
        className={`${footerButtonClassName} left-[calc(50%-478px)] top-[830.5px] border-none bg-transparent p-0 text-[#b7f9ff] hover:text-[#01207d]`}
        data-anim="text-hover"
        split-text="chars"
        {...footerHoverTiming}
      >
        PASSION
      </button>

      <a
        href={FOOTER_SOCIAL_LINKS.tiktok}
        target="_blank"
        rel="noreferrer"
        className={`${footerButtonClassName} left-[calc(50%+477px)] top-[705.5px] text-[#b7f9ff] hover:text-[#01207d] no-underline`}
        data-anim="text-hover"
        split-text="chars"
        {...footerHoverTiming}
      >
        TIKTOK
      </a>

      <a
        href={FOOTER_SOCIAL_LINKS.instagram}
        target="_blank"
        rel="noreferrer"
        className={`${footerButtonClassName} left-[calc(50%+477px)] top-[767.5px] text-[#b7f9ff] hover:text-[#01207d] no-underline`}
        data-anim="text-hover"
        split-text="chars"
        {...footerHoverTiming}
      >
        INSTAGRAM
      </a>

      <a
        href={FOOTER_SOCIAL_LINKS.linkedin}
        target="_blank"
        rel="noreferrer"
        className={`${footerButtonClassName} left-[calc(50%+477px)] top-[830.5px] text-[#b7f9ff] hover:text-[#01207d] no-underline`}
        data-anim="text-hover"
        split-text="chars"
        {...footerHoverTiming}
      >
        LINKEDIN
      </a>
    </div>
  );
}
