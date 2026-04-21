"use client";

import { HTMLAttributes, PointerEvent, useRef, useState } from "react";
import svgPaths from "../../imports/project-carousel/svgPaths";

const imgLivewall = "/assets/images/300c6d13ef3faa37b179257e77259f2d6542ab87.png";
const imgEduCheck = "/assets/images/8e34e3de2f726cfa1f125c98a6613c41306d2d96.png";
const imgRacingGame = "/assets/images/fd6072eff9e340359dfd223c2fd38b132518622f.png";
const imgHeartbeatSense = "/assets/images/3fc7896ff9160daebc80ba451690187b27ac7d3d.png";
const imgMoofPlanner = "/assets/images/37bc163016030fa308ca75945901495676409f04.png";
const imgMelding = "/assets/images/eb0919ffe90352a6802afe0f7db704fc437cb0d4.png";

const projects = [
  { id: 1, name: "LIVEWALL", image: imgLivewall },
  { id: 2, name: "EDU CHECK", image: imgEduCheck },
  { id: 3, name: "APEXION GP", image: imgRacingGame },
  { id: 4, name: "HEARTBEAT SENSE", image: imgHeartbeatSense },
  { id: 5, name: "MOOFPLANNER", image: imgMoofPlanner },
  { id: 6, name: "BUURTKOMPAS", image: imgMelding },
];

const SLIDE_WIDTH = 785;
const VISUAL_OFFSET_Y = -36;
const SNAP_THRESHOLD = 18;

function HeaderText() {
  return (
    <div className="absolute contents leading-[0] left-[-192px] not-italic text-[#b7f9ff] text-center top-[42px]" data-name="HeaderText">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Futura_Now_Headline',sans-serif] h-[166px] justify-center left-[863.5px] text-[107px] top-[125px] w-[2111px]">
        <p className="leading-[80px]" data-scramble-text="SOME WORK">SOME WORK</p>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter',sans-serif] font-medium justify-center left-[863.5px] text-[21px] top-[208px] whitespace-nowrap">
        <p className="leading-[80px]" data-scramble-chars="lowerCase" data-scramble-text="Press to expand my work">Press to expand my work</p>
      </div>
    </div>
  );
}

interface ProjectCardProps {
  index: number;
  project: { id: number; name: string; image: string };
  offset: number;
  isDragging: boolean;
  dragHandlers: HTMLAttributes<HTMLDivElement>;
  onSelect: (index: number) => void;
}

function ProjectCard({
  index,
  project,
  offset,
  isDragging,
  dragHandlers,
  onSelect,
}: ProjectCardProps) {
  const basePositions: Record<number, { x: number; rotate: number; size: number; innerSize: number; opacity: number; scale: number }> = {
    [-3]: { x: -1040, rotate: -15, size: 460, innerSize: 400, opacity: 0, scale: 0.94 },
    [-2]: { x: -720, rotate: -13, size: 460, innerSize: 400, opacity: 0, scale: 0.96 },
    [-1]: { x: -172, rotate: -9.47, size: 460.388, innerSize: 400, opacity: 1, scale: 1 },
    0: { x: 654, rotate: 0.57, size: 434.128, innerSize: 430.159, opacity: 1, scale: 1 },
    1: { x: 1454, rotate: 9.47, size: 460.361, innerSize: 400, opacity: 1, scale: 1 },
    2: { x: 1996, rotate: 13, size: 460, innerSize: 400, opacity: 0, scale: 0.96 },
    3: { x: 2450, rotate: 15, size: 460, innerSize: 400, opacity: 0, scale: 0.94 },
  };

  const clampedOffset = Math.max(-3, Math.min(3, offset));
  const lowerOffset = Math.floor(clampedOffset);
  const upperOffset = Math.ceil(clampedOffset);
  const progress = clampedOffset - lowerOffset;
  const lower = basePositions[lowerOffset];
  const upper = basePositions[upperOffset];
  const lerp = (from: number, to: number) => from + (to - from) * progress;
  const pos =
    lowerOffset === upperOffset
      ? lower
      : {
          x: lerp(lower.x, upper.x),
          rotate: lerp(lower.rotate, upper.rotate),
          size: lerp(lower.size, upper.size),
          innerSize: lerp(lower.innerSize, upper.innerSize),
          opacity: lerp(lower.opacity, upper.opacity),
          scale: lerp(lower.scale, upper.scale),
        };

  const distanceFromCenter = Math.abs(offset);
  const labelProgress = Math.max(0, Math.min(1, 1 - (distanceFromCenter - 0.18) / 0.72));

  return (
    <div
      {...dragHandlers}
      className={`absolute flex items-start justify-center top-[408px] cursor-grab touch-pan-y select-none active:cursor-grabbing will-change-transform ${isDragging ? "" : "transition-[left,opacity,transform] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"}`}
      onClick={() => onSelect(index)}
      style={
        {
          left: `${pos.x}px`,
          width: `${pos.size}px`,
          height: `${pos.size + 96}px`,
          opacity: pos.opacity,
          transform: `translateY(${VISUAL_OFFSET_Y + (1 - Math.min(Math.abs(offset), 1)) * -80}px) scale(${pos.scale})`,
          "--transform-inner-width": "1200",
          "--transform-inner-height": "19",
        } as React.CSSProperties
      }
    >
      <div
        className={`flex flex-none flex-col items-center gap-[24px] select-none will-change-transform ${isDragging ? "" : "transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"}`}
        style={{ transform: `rotate(${pos.rotate}deg)` }}
      >
        <div
          className={`relative rounded-[55px] shadow-[0_24px_70px_rgba(1,32,125,0.18)] will-change-transform ${isDragging ? "" : "transition-[width,height,transform,box-shadow] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"}`}
          style={{
            width: `${pos.innerSize}px`,
            height: `${pos.innerSize}px`,
          }}
        >
          <img
            alt=""
            className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[55px] size-full select-none"
            draggable={false}
            src={project.image}
          />
        </div>
        <div
          className={`flex justify-center select-none transition-[opacity,transform] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${isDragging ? "!duration-0" : ""}`}
          data-name="CASES-NAME"
          style={{
            opacity: labelProgress,
            transform: `translateY(${(1 - labelProgress) * -18}px) scale(${0.96 + labelProgress * 0.04})`,
            pointerEvents: labelProgress > 0.4 ? "auto" : "none",
          }}
        >
          <div className="bg-[#01207d] h-[57px] rounded-[21px] px-[24px] flex items-center justify-center select-none">
            <p className="font-['Futura_Now_Headline',sans-serif] leading-[16.8px] not-italic select-none text-[#b7f9ff] text-[21px] text-center uppercase whitespace-nowrap">
              {project.name}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function ProjectCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [dragStartX, setDragStartX] = useState<number | null>(null);
  const [dragOffset, setDragOffset] = useState(0);
  const suppressClickRef = useRef(false);
  const isDragging = dragStartX !== null;

  const goToSlide = (direction: 1 | -1) => {
    setCurrentSlide((slide) => (slide + direction + projects.length) % projects.length);
  };

  const getProjectOffset = (projectIndex: number) => {
    let offset = projectIndex - currentSlide;
    const midpoint = projects.length / 2;

    if (offset > midpoint) {
      offset -= projects.length;
    }

    if (offset < -midpoint) {
      offset += projects.length;
    }

    return offset;
  };

  const handlePointerDown = (event: PointerEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.currentTarget.setPointerCapture(event.pointerId);
    setDragStartX(event.clientX);
    setDragOffset(0);
  };

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (dragStartX === null) {
      return;
    }

    const nextOffset = event.clientX - dragStartX;

    if (nextOffset <= -SLIDE_WIDTH) {
      goToSlide(1);
      setDragStartX(dragStartX - SLIDE_WIDTH);
      setDragOffset(nextOffset + SLIDE_WIDTH);
      suppressClickRef.current = true;
      return;
    }

    if (nextOffset >= SLIDE_WIDTH) {
      goToSlide(-1);
      setDragStartX(dragStartX + SLIDE_WIDTH);
      setDragOffset(nextOffset - SLIDE_WIDTH);
      suppressClickRef.current = true;
      return;
    }

    setDragOffset(nextOffset);
  };

  const finishDrag = () => {
    if (dragStartX === null) {
      return;
    }

    suppressClickRef.current = Math.abs(dragOffset) > 8;

    if (dragOffset < -SNAP_THRESHOLD) {
      goToSlide(1);
    } else if (dragOffset > SNAP_THRESHOLD) {
      goToSlide(-1);
    }

    setDragStartX(null);
    setDragOffset(0);

    window.setTimeout(() => {
      suppressClickRef.current = false;
    }, 0);
  };

  const dragHandlers = {
    onPointerDown: handlePointerDown,
    onPointerMove: handlePointerMove,
    onPointerUp: finishDrag,
    onPointerCancel: finishDrag,
  };

  const handleSelectProject = (index: number) => {
    if (suppressClickRef.current || index === currentSlide) {
      return;
    }

    setCurrentSlide(index);
  };

  return (
    <div className="absolute bg-[#0779ff] h-[1117px] left-px overflow-clip top-[1117px] w-[1728px]" data-name="Homepage-Section2">
      <div>
        <div
          {...dragHandlers}
          className="absolute h-[1426.5px] left-[-97px] top-[-11.5px] w-[1941.5px] cursor-grab touch-pan-y select-none active:cursor-grabbing"
        >
          <div className="absolute inset-[-0.91%_-0.67%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1967.5 1452.5">
              <path d={svgPaths.p13ef7600} id="Vector 8" stroke="var(--stroke-0, #0066DF)" strokeLinecap="round" strokeWidth="26" />
            </svg>
          </div>
        </div>
        <div
          {...dragHandlers}
          className="absolute h-[1412.5px] left-[1395px] top-[-4.5px] w-[431.5px] cursor-grab touch-pan-y select-none active:cursor-grabbing"
        >
          <div className="absolute inset-[-0.92%_-3.01%_-0.92%_20.35%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 356.675 1438.5">
              <path d={svgPaths.p4ebb400} id="Vector 9" stroke="var(--stroke-0, #0066DF)" strokeLinecap="round" strokeWidth="26" />
            </svg>
          </div>
        </div>
      </div>

      <HeaderText />

      {projects.map((project, index) => {
        const offset = getProjectOffset(index) + dragOffset / SLIDE_WIDTH;

        if (offset < -3.2 || offset > 3.2) {
          return null;
        }

        return (
          <ProjectCard
            key={project.id}
            index={index}
            project={project}
            offset={offset}
            isDragging={isDragging}
            dragHandlers={dragHandlers}
            onSelect={handleSelectProject}
          />
        );
      })}
    </div>
  );
}
