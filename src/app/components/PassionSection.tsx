"use client";

import { useState } from "react";
import ZandvoortTrack from "../../imports/HomepageSection41/HomepageSection41-9-196";
import RBRingTrack from "../../imports/HomepageSection41-2/HomepageSection41-1-1279";

export function PassionSection() {
  const [selectedTrack, setSelectedTrack] = useState<"zandvoort" | "rb-ring">("zandvoort");

  return (
    <div className="relative w-full h-full">
      {/* Track toggle buttons */}
      <div className="absolute left-[716px] top-[281px] z-10 flex gap-[16px]">
        {/* Zandvoort button */}
        <button
          onClick={() => setSelectedTrack("zandvoort")}
          className={`h-[57px] w-[140px] rounded-[21px] font-['Futura_Now_Headline',sans-serif] text-[21px] uppercase leading-[16.8px] transition-colors ${
            selectedTrack === "zandvoort"
              ? "bg-[#01207d] text-[#b7f9ff]"
              : "bg-[#b7f9ff] text-[#01207d]"
          }`}
        >
          Zandvoort
        </button>

        {/* RB-Ring button */}
        <button
          onClick={() => setSelectedTrack("rb-ring")}
          className={`h-[57px] w-[140px] rounded-[21px] font-['Futura_Now_Headline',sans-serif] text-[21px] uppercase leading-[16.8px] transition-colors ${
            selectedTrack === "rb-ring"
              ? "bg-[#01207d] text-[#b7f9ff]"
              : "bg-[#b7f9ff] text-[#01207d]"
          }`}
        >
          RB-RING
        </button>
      </div>

      {/* Track display */}
      {selectedTrack === "zandvoort" ? <ZandvoortTrack /> : <RBRingTrack />}
    </div>
  );
}
