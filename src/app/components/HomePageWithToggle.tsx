"use client";

import { useState } from "react";
import HomePageSection16918 from "../../imports/HomePageSection1-5/HomePageSection1-6-918";
import { ProjectCarousel } from "./ProjectCarousel";
import Link from "next/link";
import ZandvoortTrack from "../../imports/HomepageSection41/HomepageSection41-9-196";
import RBRingTrack from "../../imports/HomepageSection41-2/HomepageSection41-1-1279";

export function HomePageWithToggle() {
  const [selectedTrack, setSelectedTrack] = useState<"zandvoort" | "rb-ring">("zandvoort");
  const [showWorkOverlay, setShowWorkOverlay] = useState(false);

  // Section positions in the 1728x5571 design
  const DESIGN_WIDTH = 1728;
  const SECTION_POSITIONS = {
    "SOME WORK": 1000,      // Section 2 - scroll a bit higher
    "SHORT ABOUT": 2100,     // Section 3 - scroll a bit higher
    "PASSION": 3200,         // Section 4 - scroll a bit higher
  };

  const scrollToSection = (sectionName: keyof typeof SECTION_POSITIONS) => {
    // Calculate the scale factor
    const scale = window.innerWidth / DESIGN_WIDTH;
    // Calculate the actual scroll position accounting for scale
    const scrollPosition = SECTION_POSITIONS[sectionName] * scale;
    
    window.scrollTo({
      top: scrollPosition,
      behavior: "smooth"
    });
  };

  return (
    <div className="relative w-full h-full">
      {/* Main homepage sections */}
      <HomePageSection16918 />
      
      {/* Replace the static section 2 with carousel */}
      <div id="work-section">
        <ProjectCarousel />
      </div>
      
      {/* Clickable overlay for SUPERMARKET TEAMLEADER in SHORT ABOUT section */}
      <div className="absolute left-0 top-[2234px] w-[1728px] h-[1117px] pointer-events-none">
        <Link
          href="/work"
          className="block -translate-x-1/2 -translate-y-1/2 absolute font-['Futura_Now_Headline',sans-serif] 
                     leading-[0] left-[871px] not-italic text-[95px] text-center top-[555px] w-[1728px] 
                     pointer-events-auto cursor-pointer text-[#01207d] hover:text-[#0779ff] 
                     transition-colors bg-transparent border-none px-4 no-underline"
          style={{ height: "116px", lineHeight: "116px" }}
        >
          SUPERMARKET TEAMLEADER,
        </Link>
        
        {/* Clickable overlay for TRAVEL & FOOD ADDICT */}
        <Link
          href="/travel"
          className="block -translate-x-1/2 -translate-y-1/2 absolute font-['Futura_Now_Headline',sans-serif] 
                     leading-[0] left-[871px] not-italic text-[95px] text-center top-[671px] w-[1728px] 
                     pointer-events-auto cursor-pointer text-[#01207d] hover:text-[#0779ff] 
                     transition-colors bg-transparent border-none px-4 no-underline"
          style={{ height: "116px", lineHeight: "116px" }}
        >
          TRAVEL & FOOD ADDICT,
        </Link>
      </div>
      
      {/* Clickable overlay buttons for footer navigation - positioned exactly where the original text is */}
      <div id="contact-section" className="absolute left-0 top-[4454px] w-[1728px] h-[1117px] pointer-events-none">
        {/* SOME WORK button overlay - exact position matching the original */}
        <button
          onClick={() => scrollToSection("SOME WORK")}
          className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Futura_Now_Headline',sans-serif] 
                     h-[125px] justify-center leading-[0] left-[calc(50%-478px)] not-italic text-[45px] 
                     text-center top-[705.5px] w-[418px] pointer-events-auto cursor-pointer
                     text-[#b7f9ff] hover:text-[#01207d] transition-colors bg-transparent border-none"
        >
          <p className="leading-[80px]">SOME WORK</p>
        </button>

        {/* SHORT ABOUT button overlay - exact position matching the original */}
        <button
          onClick={() => scrollToSection("SHORT ABOUT")}
          className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Futura_Now_Headline',sans-serif] 
                     h-[125px] justify-center leading-[0] left-[calc(50%-478px)] not-italic text-[45px] 
                     text-center top-[767.5px] w-[418px] pointer-events-auto cursor-pointer
                     text-[#b7f9ff] hover:text-[#01207d] transition-colors bg-transparent border-none"
        >
          <p className="leading-[80px]">SHORT ABOUT</p>
        </button>

        {/* PASSION button overlay - exact position matching the original */}
        <button
          onClick={() => scrollToSection("PASSION")}
          className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Futura_Now_Headline',sans-serif] 
                     h-[125px] justify-center leading-[0] left-[calc(50%-478px)] not-italic text-[45px] 
                     text-center top-[830.5px] w-[418px] pointer-events-auto cursor-pointer
                     text-[#b7f9ff] hover:text-[#01207d] transition-colors bg-transparent border-none"
        >
          <p className="leading-[80px]">PASSION</p>
        </button>
      </div>
      
      {/* Overlay for the Passion section with toggle functionality */}
      <div className="absolute left-0 top-[3351px] w-[1728px] h-[1117px] pointer-events-none">
        {/* Toggle buttons - make these interactive */}
        <div className="absolute left-[716px] top-[281px] z-20 flex gap-[16px] pointer-events-auto">
          {/* Zandvoort button */}
          <button
            onClick={() => {
              console.log("Zandvoort clicked");
              setSelectedTrack("zandvoort");
            }}
            className={`h-[57px] w-[140px] rounded-[21px] font-['Futura_Now_Headline',sans-serif] text-[21px] uppercase leading-[16.8px] transition-all cursor-pointer ${
              selectedTrack === "zandvoort"
                ? "bg-[#b7f9ff] text-[#01207d]"
                : "bg-[#01207d] text-[#b7f9ff]"
            }`}
          >
            Zandvoort
          </button>

          {/* RB-Ring button */}
          <button
            onClick={() => {
              console.log("RB-Ring clicked");
              setSelectedTrack("rb-ring");
            }}
            className={`h-[57px] w-[140px] rounded-[21px] font-['Futura_Now_Headline',sans-serif] text-[21px] uppercase leading-[16.8px] transition-all cursor-pointer ${
              selectedTrack === "rb-ring"
                ? "bg-[#b7f9ff] text-[#01207d]"
                : "bg-[#01207d] text-[#b7f9ff]"
            }`}
          >
            RB-RING
          </button>
        </div>

        {/* Track display - full size container */}
        <div className="absolute inset-0 w-[1728px] h-[1117px] bg-[#0779ff] overflow-hidden">
          {selectedTrack === "zandvoort" ? <ZandvoortTrack /> : <RBRingTrack />}
        </div>
      </div>
    </div>
  );
}
