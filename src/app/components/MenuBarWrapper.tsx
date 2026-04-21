"use client";

import { DESIGN_WIDTH, HOME_SECTION_POSITIONS, type HomeSectionName } from "../home/config";
import {
  type HomeColorPalette,
} from "../home/colorPalettes";
import MenuBar from "../../imports/menu-bar/MenuBar";
import { useMemo, useState } from "react";

const contactButtonInset = "inset-[15.05%_4.94%_13.98%_52.23%]";
const middleIconInset = "inset-[15.05%_51.93%_13.98%_28.49%]";
const leftIconInset = "inset-[15.05%_75.67%_13.98%_4.75%]";

type MenuBarWrapperProps = {
  colorPalettes: HomeColorPalette[];
  selectedPaletteId: string;
  onSelectPalette: (paletteId: string) => void;
};

const menuButtonClassName = "border-none bg-transparent p-0 text-left text-[#b7f9ff] transition-colors hover:text-[#b7f9ff]/70";

export default function MenuBarWrapper({
  colorPalettes,
  selectedPaletteId,
  onSelectPalette,
}: MenuBarWrapperProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [palettePickerOpen, setPalettePickerOpen] = useState(false);

  const menuSections = useMemo(
    () => Object.keys(HOME_SECTION_POSITIONS) as HomeSectionName[],
    [],
  );
  const selectablePalettes = useMemo(
    () => colorPalettes.filter((palette) => palette.id !== selectedPaletteId),
    [colorPalettes, selectedPaletteId],
  );

  const scrollToSection = (sectionName: HomeSectionName) => {
    const scale = window.innerWidth / DESIGN_WIDTH;
    const scrollPosition = HOME_SECTION_POSITIONS[sectionName] * scale;

    window.scrollTo({
      top: scrollPosition,
      behavior: "smooth",
    });

    setMenuOpen(false);
  };

  const openMail = () => {
    window.location.href = "mailto:daafheijnekamp@gmail.com";
  };

  return (
    <>
      {menuOpen ? (
        <div className="fixed inset-0 z-[70] bg-[rgba(1,32,125,0.22)] backdrop-blur-[18px]">
          <div className="absolute inset-x-[24px] bottom-[132px] mx-auto w-[min(360px,calc(100vw-48px))] rounded-[34px] bg-[rgba(1,32,125,0.82)] p-[24px] shadow-[0_20px_60px_rgba(1,32,125,0.28)]">
            <div className="mb-[18px] flex items-center justify-between">
              <p className="font-['Inter',sans-serif] text-[16px] font-medium text-[#b7f9ff]">Navigate</p>
              <button
                aria-label="Sluit menu"
                className="border-none bg-transparent p-0 font-['Futura_Now_Headline',sans-serif] text-[22px] leading-none text-[#b7f9ff]"
                onClick={() => setMenuOpen(false)}
                type="button"
              >
                CLOSE
              </button>
            </div>

            <div className="flex flex-col gap-[14px]">
              {menuSections.map((sectionName) => (
                <button
                  key={sectionName}
                  className={`${menuButtonClassName} font-['Futura_Now_Headline',sans-serif] text-[32px] leading-none uppercase`}
                  onClick={() => scrollToSection(sectionName)}
                  type="button"
                >
                  {sectionName}
                </button>
              ))}

              <button
                className={`${menuButtonClassName} mt-[6px] font-['Inter',sans-serif] text-[18px] font-medium`}
                onClick={openMail}
                type="button"
              >
                daafheijnekamp@gmail.com
              </button>
            </div>
          </div>

          <button
            aria-label="Sluit overlay"
            className="absolute inset-0 -z-10 border-none bg-transparent p-0"
            onClick={() => setMenuOpen(false)}
            type="button"
          />
        </div>
      ) : null}

      <div className="relative size-full">
      {palettePickerOpen ? (
        <div className="absolute -top-[52px] left-1/2 z-[80] flex -translate-x-1/2 items-center gap-[12px] pointer-events-none">
          {selectablePalettes.map((palette, index) => {
            return (
              <button
                key={palette.id}
                aria-label={`Kies ${palette.label}`}
                className="pointer-events-auto relative size-[18px] rounded-full border-none p-0 transition-transform duration-300 ease-out hover:scale-110"
                onClick={() => {
                  onSelectPalette(palette.id);
                }}
                style={{
                  background: palette.colors.light,
                  boxShadow: `0 0 0 2px ${palette.colors.dark}, 0 8px 18px ${palette.colors.dark}33`,
                  transform: `translateY(${Math.sin((index + 1) * 1.4) * 4}px) scale(1)`,
                }}
                type="button"
              />
            );
          })}
        </div>
      ) : null}

      <MenuBar />

      <button
        aria-label="Mail naar Daaf"
        className={`absolute ${contactButtonInset} cursor-pointer rounded-[25px] border-none bg-transparent p-0`}
        onClick={openMail}
        type="button"
      />

      <button
        aria-label="Open kleurkeuze"
        className={`absolute ${middleIconInset} cursor-pointer rounded-[25px] border-none bg-transparent p-0`}
        onClick={() => setPalettePickerOpen((current) => !current)}
        type="button"
      />

      <button
        aria-label="Open menu"
        className={`absolute ${leftIconInset} cursor-pointer rounded-[25px] border-none bg-transparent p-0`}
        onClick={() => setMenuOpen(true)}
        type="button"
      />
      </div>
    </>
  );
}
