"use client";

import type { CSSProperties } from "react";
import ZandvoortTrack from "../../../imports/HomepageSection4/HomepageSection4-9-427";
import RBRingTrack from "../../../imports/HomepageSection41-2/HomepageSection41-1-1279";
import type { TrackName } from "../config";
import { usePassionIconIdleMotion } from "../hooks/usePassionIconIdleMotion";

type PassionTrackOverlayProps = {
  selectedTrack: TrackName;
  onSelectTrack: (track: TrackName) => void;
};

export function PassionTrackOverlay({
  selectedTrack,
  onSelectTrack,
}: PassionTrackOverlayProps) {
  const zandvoortSelected = selectedTrack === "zandvoort";
  const rbRingSelected = selectedTrack === "rb-ring";

  usePassionIconIdleMotion(selectedTrack);

  return (
    <div className="absolute left-0 top-[3351px] h-[1117px] w-[1728px] pointer-events-none">
      <div className="absolute left-[716px] top-[281px] z-20 flex gap-[16px] pointer-events-auto">
        <svg aria-hidden="true" className="pointer-events-none absolute size-0">
          <defs>
            <filter id="track-switch-goo">
              <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="6" />
              <feColorMatrix
                in="blur"
                mode="matrix"
                result="goo"
                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
              />
              <feBlend in="SourceGraphic" in2="goo" />
            </filter>
          </defs>
        </svg>

        <button
          onClick={() => onSelectTrack("zandvoort")}
          className="track-switch-btn h-[57px] w-[140px] rounded-[21px] font-['Futura_Now_Headline',sans-serif] text-[21px] uppercase leading-[16.8px] cursor-pointer"
          data-selected={zandvoortSelected ? "true" : "false"}
          data-text-hover-trigger={!zandvoortSelected ? "" : undefined}
          style={
            {
              "--track-bg": zandvoortSelected ? "#b7f9ff" : "#01207d",
              "--track-fg": zandvoortSelected ? "#01207d" : "#b7f9ff",
              "--track-hover-bg": zandvoortSelected ? "#01207d" : "#b7f9ff",
              "--track-hover-fg": zandvoortSelected ? "#b7f9ff" : "#01207d",
            } as CSSProperties
          }
        >
          <span className="track-switch-btn__inner" aria-hidden="true">
            <span className="track-switch-btn__blobs">
              <span className="track-switch-btn__blob" />
              <span className="track-switch-btn__blob" />
              <span className="track-switch-btn__blob" />
              <span className="track-switch-btn__blob" />
            </span>
          </span>
          <span
            key={`zandvoort-${zandvoortSelected ? "selected" : "idle"}`}
            className="track-switch-btn__label inline-block leading-none"
            data-anim="text-hover"
            split-text="chars"
          >
            Zandvoort
          </span>
        </button>

        <button
          onClick={() => onSelectTrack("rb-ring")}
          className="track-switch-btn h-[57px] w-[140px] rounded-[21px] font-['Futura_Now_Headline',sans-serif] text-[21px] uppercase leading-[16.8px] cursor-pointer"
          data-selected={rbRingSelected ? "true" : "false"}
          data-text-hover-trigger={!rbRingSelected ? "" : undefined}
          style={
            {
              "--track-bg": rbRingSelected ? "#b7f9ff" : "#01207d",
              "--track-fg": rbRingSelected ? "#01207d" : "#b7f9ff",
              "--track-hover-bg": rbRingSelected ? "#01207d" : "#b7f9ff",
              "--track-hover-fg": rbRingSelected ? "#b7f9ff" : "#01207d",
            } as CSSProperties
          }
        >
          <span className="track-switch-btn__inner" aria-hidden="true">
            <span className="track-switch-btn__blobs">
              <span className="track-switch-btn__blob" />
              <span className="track-switch-btn__blob" />
              <span className="track-switch-btn__blob" />
              <span className="track-switch-btn__blob" />
            </span>
          </span>
          <span
            key={`rb-ring-${rbRingSelected ? "selected" : "idle"}`}
            className="track-switch-btn__label inline-block leading-none"
            data-anim="text-hover"
            split-text="chars"
          >
            RB-RING
          </span>
        </button>
      </div>

      <div className="absolute inset-0 h-[1117px] w-[1728px] overflow-hidden bg-[#0779ff]">
        {selectedTrack === "zandvoort" ? <ZandvoortTrack /> : <RBRingTrack />}
      </div>
    </div>
  );
}
