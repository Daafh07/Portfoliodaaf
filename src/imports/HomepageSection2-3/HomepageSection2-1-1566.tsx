import svgPaths from "./svg-rr3lfxg6do";
const imgCases = "/assets/images/300c6d13ef3faa37b179257e77259f2d6542ab87.png";
const imgSchermAfbeelding20260331Om1610031 = "/assets/images/8e34e3de2f726cfa1f125c98a6613c41306d2d96.png";
const imgSchermAfbeelding20260331Om1610032 = "/assets/images/fd6072eff9e340359dfd223c2fd38b132518622f.png";

function HeaderText() {
  return (
    <div className="absolute contents leading-[0] left-[-192px] not-italic text-[#b7f9ff] text-center top-[42px]" data-name="HeaderText">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Futura_Now_Headline',sans-serif] h-[166px] justify-center left-[863.5px] text-[107px] top-[125px] w-[2111px]">
        <p className="leading-[80px]">SOME WORK</p>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter',sans-serif] font-medium justify-center left-[863.5px] text-[21px] top-[208px] whitespace-nowrap">
        <p className="leading-[80px]">Press to expand my work</p>
      </div>
    </div>
  );
}

function CasesName() {
  return (
    <div className="absolute contents left-[814px] top-[803px]" data-name="CASES-NAME">
      <div className="absolute bg-[#01207d] h-[57px] left-[814px] rounded-[21px] top-[803px] w-[114px]" />
      <div className="absolute flex flex-col font-['Futura_Now_Headline',sans-serif] inset-[73.59%_47.05%_25.25%_48.03%] justify-center leading-[0] not-italic text-[#b7f9ff] text-[21px] text-center uppercase">
        <p className="leading-[16.8px]">LIVEWALL</p>
      </div>
    </div>
  );
}

export default function HomepageSection() {
  return (
    <div className="bg-[#0779ff] relative size-full" data-name="Homepage-Section2">
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
      <div className="absolute flex items-center justify-center left-[669px] size-[404.128px] top-[376px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="flex-none rotate-[0.57deg]">
          <div className="relative rounded-[55px] size-[400.159px]" data-name="CASES">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[55px] size-full" src={imgCases} />
          </div>
        </div>
      </div>
      <HeaderText />
      <CasesName />
      <div className="absolute flex items-center justify-center left-[-172px] size-[460.388px] top-[408px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="flex-none rotate-[-9.47deg]">
          <div className="relative rounded-[55px] size-[400px]" data-name="Scherm­afbeelding 2026-03-31 om 16.10.03 1">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[55px] size-full" src={imgSchermAfbeelding20260331Om1610031} />
          </div>
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[1454px] size-[460.361px] top-[408px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="flex-none rotate-[9.47deg]">
          <div className="relative rounded-[55px] size-[400px]" data-name="Scherm­afbeelding 2026-03-31 om 16.10.03 2">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[55px] size-full" src={imgSchermAfbeelding20260331Om1610032} />
          </div>
        </div>
      </div>
    </div>
  );
}