import { useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import svgPaths from "../../imports/HomePageSection1-1-2/svg-ku65gtjwxc";

// Import all project images
import imgLivewall from "figma:asset/300c6d13ef3faa37b179257e77259f2d6542ab87.png";
import imgEduCheck from "figma:asset/8e34e3de2f726cfa1f125c98a6613c41306d2d96.png";
import imgRacingGame from "figma:asset/fd6072eff9e340359dfd223c2fd38b132518622f.png";
import imgHeartbeatSense from "figma:asset/3fc7896ff9160daebc80ba451690187b27ac7d3d.png";
import imgMoofPlanner from "figma:asset/37bc163016030fa308ca75945901495676409f04.png";
import imgMelding from "figma:asset/eb0919ffe90352a6802afe0f7db704fc437cb0d4.png";

const projects = [
  { id: 1, name: "LIVEWALL", image: imgLivewall },
  { id: 2, name: "EDU CHECK", image: imgEduCheck },
  { id: 3, name: "RACING GAME", image: imgRacingGame },
  { id: 4, name: "HEARTBEAT SENSE", image: imgHeartbeatSense },
  { id: 5, name: "MOOFPLANNER", image: imgMoofPlanner },
  { id: 6, name: "MELDING", image: imgMelding },
];

function HeaderText() {
  return (
    <div className="absolute contents leading-[0] left-[-192px] not-italic text-[#b7f9ff] text-center top-[42px]" data-name="HeaderText">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Futura_Now_Headline:Cn_XBold',sans-serif] h-[166px] justify-center left-[863.5px] text-[107px] top-[125px] w-[2111px]">
        <p className="leading-[80px]">SOME WORK</p>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center left-[863.5px] text-[21px] top-[208px] whitespace-nowrap">
        <p className="leading-[80px]">Press to expand my work</p>
      </div>
    </div>
  );
}

function CasesName({ projectName }: { projectName: string }) {
  return (
    <div className="absolute left-1/2 -translate-x-1/2 top-[803px] flex justify-center items-center" data-name="CASES-NAME">
      <div className="bg-[#01207d] h-[57px] rounded-[21px] px-[24px] flex items-center justify-center transition-all duration-500 ease-in-out">
        <p className="font-['Futura_Now_Headline:Cn_XBold',sans-serif] leading-[16.8px] not-italic text-[#b7f9ff] text-[21px] text-center uppercase whitespace-nowrap transition-opacity duration-500 ease-in-out">
          {projectName}
        </p>
      </div>
    </div>
  );
}

interface ProjectCardProps {
  project: { id: number; name: string; image: string };
  position: 'left' | 'center' | 'right';
}

function ProjectCard({ project, position }: ProjectCardProps) {
  const positions = {
    left: { x: -172, rotate: -9.47, size: 460.388, innerSize: 400 },
    center: { x: 669, rotate: 0.57, size: 404.128, innerSize: 400.159 },
    right: { x: 1454, rotate: 9.47, size: 460.361, innerSize: 400 },
  };

  const pos = positions[position];

  return (
    <div 
      className="absolute flex items-center justify-center top-[408px] transition-all duration-500 ease-in-out"
      style={{ 
        left: `${pos.x}px`,
        width: `${pos.size}px`,
        height: `${pos.size}px`,
        "--transform-inner-width": "1200",
        "--transform-inner-height": "19"
      } as React.CSSProperties}
    >
      <div className="flex-none transition-transform duration-500 ease-in-out" style={{ transform: `rotate(${pos.rotate}deg)` }}>
        <div 
          className="relative rounded-[55px] transition-all duration-500 ease-in-out" 
          style={{ 
            width: `${pos.innerSize}px`,
            height: `${pos.innerSize}px`
          }}
        >
          <img 
            alt="" 
            className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[55px] size-full transition-all duration-500 ease-in-out" 
            src={project.image} 
          />
        </div>
      </div>
    </div>
  );
}

export function ProjectCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef<Slider>(null);

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "0px",
    slidesToShow: 3,
    speed: 500,
    beforeChange: (_current: number, next: number) => setCurrentSlide(next),
    focusOnSelect: true,
    swipeToSlide: true,
    draggable: true,
    arrows: false,
  };

  // Calculate which projects to show based on current slide
  const getProjectIndex = (offset: number) => {
    const index = currentSlide + offset;
    return ((index % projects.length) + projects.length) % projects.length;
  };

  const leftProject = projects[getProjectIndex(-1)];
  const centerProject = projects[getProjectIndex(0)];
  const rightProject = projects[getProjectIndex(1)];

  return (
    <div className="absolute bg-[#0779ff] h-[1117px] left-px overflow-clip top-[1117px] w-[1728px]" data-name="Homepage-Section2">
      {/* Background curves - exact from Figma */}
      <div className="absolute h-[1426.5px] left-[-97px] top-[-11.5px] w-[1941.5px]">
        <div className="absolute inset-[-0.91%_-0.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1967.5 1452.5">
            <path d={svgPaths.p13ef7600} id="Vector 8" stroke="var(--stroke-0, #0066DF)" strokeLinecap="round" strokeWidth="26" />
          </svg>
        </div>
      </div>
      <div className="absolute h-[1412.5px] left-[1395px] top-[-4.5px] w-[431.5px]">
        <div className="absolute inset-[-0.92%_-3.01%_-0.92%_20.35%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 356.675 1438.5">
            <path d={svgPaths.p4ebb400} id="Vector 9" stroke="var(--stroke-0, #0066DF)" strokeLinecap="round" strokeWidth="26" />
          </svg>
        </div>
      </div>

      {/* Invisible carousel for swipe detection */}
      <div className="absolute inset-0 cursor-grab active:cursor-grabbing opacity-0 z-10">
        <Slider ref={sliderRef} {...settings}>
          {projects.map((project) => (
            <div key={project.id} className="outline-none h-[1117px]">
              {/* Empty slide - actual cards are rendered with absolute positioning */}
            </div>
          ))}
        </Slider>
      </div>

      {/* Header - exact from Figma */}
      <HeaderText />

      {/* Project Cards with smooth transitions */}
      <ProjectCard project={leftProject} position="left" />
      <ProjectCard project={centerProject} position="center" />
      <ProjectCard project={rightProject} position="right" />

      {/* CasesName with dynamic width and smooth transition */}
      <CasesName projectName={centerProject.name} />
    </div>
  );
}