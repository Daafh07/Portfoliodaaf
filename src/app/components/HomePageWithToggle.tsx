"use client";

import { useState } from "react";
import HomePageSection16918 from "../../imports/HomePageSection1-5/HomePageSection1-6-918";
import { ProjectCarousel } from "./ProjectCarousel";
import { FooterOverlay } from "../home/components/FooterOverlay";
import { PassionTrackOverlay } from "../home/components/PassionTrackOverlay";
import { DESIGN_WIDTH, HOME_SECTION_POSITIONS, type HomeSectionName, type TrackName } from "../home/config";
import { useFlairIconMotion } from "../home/hooks/useFlairIconMotion";

export function HomePageWithToggle() {
  const [selectedTrack, setSelectedTrack] = useState<TrackName>("zandvoort");

  useFlairIconMotion();

  const scrollToSection = (sectionName: HomeSectionName) => {
    const scale = window.innerWidth / DESIGN_WIDTH;
    const scrollPosition = HOME_SECTION_POSITIONS[sectionName] * scale;

    window.scrollTo({
      top: scrollPosition,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative w-full h-full">
      <HomePageSection16918 />

      <div id="work-section">
        <ProjectCarousel />
      </div>

      <FooterOverlay onNavigateSection={scrollToSection} />
      <PassionTrackOverlay selectedTrack={selectedTrack} onSelectTrack={setSelectedTrack} />
    </div>
  );
}
