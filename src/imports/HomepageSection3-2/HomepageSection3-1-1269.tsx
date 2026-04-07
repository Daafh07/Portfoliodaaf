import svgPaths from "./svg-q532t6nnlv";

function HeaderText() {
  return (
    <div className="absolute contents leading-[0] left-[-192px] not-italic text-[#b7f9ff] text-center top-[42px]" data-name="HeaderText">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Futura_Now_Headline:Cn_XBold',sans-serif] h-[166px] justify-center left-[863.5px] text-[107px] top-[125px] w-[2111px]">
        <p className="leading-[80px]">SHORT ABOUT</p>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center left-[863px] text-[21px] top-[208px] whitespace-nowrap">
        <p className="leading-[80px]">Get to know me fast</p>
      </div>
    </div>
  );
}

export default function HomepageSection() {
  return (
    <div className="bg-[#0779ff] relative size-full" data-name="Homepage-Section3">
      <HeaderText />
      <div className="absolute h-[1152px] left-[75.5px] top-[-9.5px] w-[1611px]">
        <div className="absolute inset-[-1.13%_0.93%_-1.13%_-0.81%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1608.94 1178.01">
            <path d={svgPaths.p35074b00} id="Vector 10" stroke="var(--stroke-0, #0066DF)" strokeLinecap="round" strokeWidth="26" />
          </svg>
        </div>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Futura_Now_Headline:Cn_XBold',sans-serif] h-[544px] justify-center leading-[0] left-[871px] not-italic text-[#01207d] text-[95px] text-center top-[555px] w-[1728px]">
        <p className="leading-[116px] mb-0">INTERACTIVE DESIGN STUDENT,</p>
        <p className="leading-[116px] mb-0">SUPERMARKET TEAMLEADER,</p>
        <p className="leading-[116px] mb-0">{`TRAVEL & FOOD ADDICT,`}</p>
        <p className="leading-[116px]">PROACTIVE</p>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] left-[863.5px] not-italic text-[#b7f9ff] text-[21px] text-center top-[895px] whitespace-nowrap">
        <p className="leading-[80px]">“Be the change you wish to see in the world.”</p>
      </div>
    </div>
  );
}