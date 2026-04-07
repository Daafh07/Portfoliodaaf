import svgPaths from "./svg-p5jf6aspib";
import imgDaafSawLight1 from "./32a7a2ea47f0184fc773a6607e771960462a056e.png";

function FooterBackstripes() {
  return (
    <div className="absolute h-[1427.5px] left-[-75px] top-0 w-[1877px]" data-name="Footer-Backstripes">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1877 1427.5">
        <g id="Footer-Backstripes">
          <mask height="1455" id="mask0_1_450" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="1905" x="-14" y="-14">
            <path d={svgPaths.p6273f80} id="Stripes-background" stroke="var(--stroke-0, #DFDFDF)" strokeLinecap="round" strokeWidth="26" />
          </mask>
          <g mask="url(#mask0_1_450)">
            <path d={svgPaths.p2d6816b0} fill="var(--fill-0, #0779FF)" id="Rectangle 6" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Footer() {
  return (
    <div className="absolute contents left-[-75px] top-0" data-name="Footer">
      <div className="absolute h-[760px] left-[40px] top-[334px] w-[1647px]" data-name="FooterObject">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1647 760">
          <path d={svgPaths.p1dff4380} fill="var(--fill-0, #0066DF)" id="FooterObject" />
        </svg>
      </div>
      <FooterBackstripes />
      <div className="absolute h-[548px] left-[595px] top-[546px] w-[537px]" data-name="DaafSawLight 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[147.05%] left-0 max-w-none top-0 w-full" src={imgDaafSawLight1} />
        </div>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Futura_Now_Headline:Cn_XBold',sans-serif] h-[125px] justify-center leading-[0] left-[calc(50%-14px)] not-italic text-[#b7f9ff] text-[120px] text-center top-[406.5px] w-[418px]">
        <p className="leading-[80px]">DAAF</p>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Futura_Now_Headline:Cn_XBold',sans-serif] h-[125px] justify-center leading-[0] left-[calc(50%+477px)] not-italic text-[#b7f9ff] text-[45px] text-center top-[705.5px] w-[418px]">
        <p className="leading-[80px]">TIKTOK</p>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Futura_Now_Headline:Cn_XBold',sans-serif] h-[125px] justify-center leading-[0] left-[calc(50%-478px)] not-italic text-[#b7f9ff] text-[45px] text-center top-[705.5px] w-[418px]">
        <p className="leading-[80px]">SOME WORK</p>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Futura_Now_Headline:Cn_XBold',sans-serif] h-[125px] justify-center leading-[0] left-[calc(50%+477px)] not-italic text-[#b7f9ff] text-[45px] text-center top-[767.5px] w-[418px]">
        <p className="leading-[80px]">INSTAGRAM</p>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Futura_Now_Headline:Cn_XBold',sans-serif] h-[125px] justify-center leading-[0] left-[calc(50%-478px)] not-italic text-[#b7f9ff] text-[45px] text-center top-[767.5px] w-[418px]">
        <p className="leading-[80px]">SHORT ABOUT</p>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Futura_Now_Headline:Cn_XBold',sans-serif] h-[125px] justify-center leading-[0] left-[calc(50%+477px)] not-italic text-[#b7f9ff] text-[45px] text-center top-[830.5px] w-[418px]">
        <p className="leading-[80px]">LINKEDIN</p>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Futura_Now_Headline:Cn_XBold',sans-serif] h-[125px] justify-center leading-[0] left-[calc(50%-478px)] not-italic text-[#b7f9ff] text-[45px] text-center top-[830.5px] w-[418px]">
        <p className="leading-[80px]">PASSION</p>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] left-[1341px] not-italic text-[#b7f9ff] text-[21px] text-center top-[643px] whitespace-nowrap">
        <p className="leading-[80px]">Follow me on</p>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] left-[386px] not-italic text-[#b7f9ff] text-[21px] text-center top-[643px] whitespace-nowrap">
        <p className="leading-[80px]">Sections</p>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Futura_Now_Headline:Cn_XBold',sans-serif] justify-center leading-[0] left-[176px] not-italic text-[#01207d] text-[29px] text-center top-[1068px] whitespace-nowrap">
        <p className="leading-[80px]">DAAF</p>
      </div>
    </div>
  );
}

export default function HomePageFooter() {
  return (
    <div className="bg-[#0779ff] relative size-full" data-name="HomePage-Footer">
      <Footer />
      <div className="absolute h-[389.5px] left-[-23.5px] top-[-4px] w-[177.5px]">
        <div className="absolute inset-[-1.75%_-6.24%_-2.79%_-4.03%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 195.73 407.16">
            <path d={svgPaths.p2a60b300} id="Vector 13" stroke="var(--stroke-0, #0066DF)" strokeWidth="26" />
          </svg>
        </div>
      </div>
      <div className="absolute h-[535px] left-[1233px] top-[-25.5px] w-[538px]">
        <div className="absolute inset-[-0.71%_-2.24%_-0.91%_-1.93%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 560.458 543.687">
            <path d={svgPaths.p19466780} id="Vector 14" stroke="var(--stroke-0, #0066DF)" strokeWidth="26" />
          </svg>
        </div>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Futura_Now_Headline:Cn_XBold',sans-serif] justify-center leading-[0] left-[1549px] not-italic text-[#01207d] text-[29px] text-center top-[1068px] whitespace-nowrap">
        <p className="leading-[80px]">HEIJNEKAMP</p>
      </div>
    </div>
  );
}