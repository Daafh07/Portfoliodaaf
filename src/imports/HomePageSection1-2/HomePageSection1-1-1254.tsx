import svgPaths from "./svg-tm0bmkprwr";
const imgDaafNotion1 = "/assets/images/59b214f6f87477565a8984858d28c7b0ae87d4e5.png";

function DhHeader() {
  return (
    <div className="absolute contents font-['Futura_Now_Headline',sans-serif] left-[-14px] not-italic text-center top-[3px]" data-name="DH-Header">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col h-[318px] justify-center leading-[0] left-[850px] text-[#b7f9ff] text-[224px] top-[162px] w-[1728px]">
        <p className="leading-[80px]">DAAF</p>
      </div>
      <p className="-translate-x-1/2 absolute h-[103px] leading-[16.8px] left-[850px] text-[#01207d] text-[52px] top-[298px] uppercase w-[1728px]">HEIJNEKAMP</p>
    </div>
  );
}

function Group1() {
  return (
    <div className="relative size-full" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 113.535 34.5541">
        <g id="Group">
          <path clipRule="evenodd" d={svgPaths.p39869e80} fill="var(--fill-0, #B7F9FF)" fillRule="evenodd" id="a_1_" />
        </g>
      </svg>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents inset-[44.23%_59.94%_50.62%_33.22%]" data-name="Group">
      <div className="absolute flex inset-[44.23%_59.94%_50.62%_33.22%] items-center justify-center">
        <div className="flex-none h-[34.554px] rotate-[-12.08deg] w-[113.535px]">
          <Group1 />
        </div>
      </div>
    </div>
  );
}

function Figma1() {
  return (
    <div className="absolute bottom-[12.5%] left-1/4 right-1/4 top-[12.5%]" data-name="figma">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32.8551 49.2826">
        <g id="figma">
          <path clipRule="evenodd" d={svgPaths.p2fc9b340} fill="var(--fill-0, #B7F9FF)" fillRule="evenodd" id="vector" />
          <path clipRule="evenodd" d={svgPaths.p35c81800} fill="var(--fill-0, #B7F9FF)" fillRule="evenodd" id="vector_2" />
          <path clipRule="evenodd" d={svgPaths.pb66cb80} fill="var(--fill-0, #B7F9FF)" fillRule="evenodd" id="vector_3" />
          <path clipRule="evenodd" d={svgPaths.p33fcdfc0} fill="var(--fill-0, #B7F9FF)" fillRule="evenodd" id="vector_4" />
          <path clipRule="evenodd" d={svgPaths.p366aad00} fill="var(--fill-0, #B7F9FF)" fillRule="evenodd" id="vector_5" />
        </g>
      </svg>
    </div>
  );
}

function Figma({ className }: { className?: string }) {
  return (
    <div className={className || "overflow-clip relative size-[65.71px]"} data-name="figma">
      <Figma1 />
    </div>
  );
}

function VsCode1() {
  return (
    <div className="absolute contents inset-[6.25%_12.5%_6.25%_0]" data-name="vs_code">
      <div className="absolute inset-[6.25%_12.5%_6.25%_61.19%]" data-name="vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.8395 56">
          <path d={svgPaths.p368d9f00} fill="url(#paint0_linear_1_414)" id="vector" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_414" x1="8.41975" x2="8.41975" y1="-8.09664e-09" y2="56">
              <stop offset="1" stopColor="#B7F9FF" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="absolute inset-[7.18%_34.37%_26.88%_0]" data-name="vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 42.0035 42.2043">
          <path d={svgPaths.pcc30480} fill="url(#paint0_linear_1_431)" id="vector" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_431" x1="42.0035" x2="2.04341" y1="6.47225" y2="40.0145">
              <stop offset="1" stopColor="#B7F9FF" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="absolute inset-[27.04%_34.37%_7.09%_0]" data-name="vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 42.0035 42.1588">
          <path d={svgPaths.pb6f2d00} fill="url(#paint0_linear_1_408)" id="vector" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_408" x1="2.31043" x2="42.1583" y1="2.66113" y2="35.655">
              <stop offset="1" stopColor="#B7F9FF" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function VsCode({ className }: { className?: string }) {
  return (
    <div className={className || "overflow-clip relative size-full"} data-name="vs_code">
      <VsCode1 />
    </div>
  );
}

function Apple({ className }: { className?: string }) {
  return (
    <div className={className || "overflow-clip relative size-full"} data-name="apple">
      <div className="absolute inset-[21.88%_28.12%_28.12%_28.13%]" data-name="apple">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40.2265 45.9731">
          <path d={svgPaths.p2ed61fc0} fill="var(--fill-0, #B7F9FF)" id="apple" />
        </svg>
      </div>
    </div>
  );
}

function Playstation({ className }: { className?: string }) {
  return (
    <div className={className || "overflow-clip relative size-full"} data-name="playstation">
      <div className="absolute inset-[9.38%_0]" data-name="playstation">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 72 58.5">
          <path d={svgPaths.p6669e00} fill="var(--fill-0, #B7F9FF)" id="playstation" />
        </svg>
      </div>
    </div>
  );
}

export default function HomePageSection() {
  return (
    <div className="bg-[#0779ff] relative size-full" data-name="HomePage-Section1">
      <DhHeader />
      <div className="absolute h-[1256.5px] left-[50.5px] top-[-65px] w-[1629px]">
        <div className="absolute inset-[-1.03%_0_-1.03%_-0.8%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1643.33 1282.5">
            <path d={svgPaths.p1967fa00} id="Vector 7" stroke="var(--stroke-0, #0066DF)" strokeLinecap="round" strokeWidth="26" />
          </svg>
        </div>
      </div>
      <div className="absolute left-[554px] opacity-82 rounded-[354px] size-[591px] top-[407px]" data-name="DaafNotion 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[354px] size-full" src={imgDaafNotion1} />
      </div>
      <Group />
      <div className="absolute flex items-center justify-center left-[818px] size-[79.7px] top-[391px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="flex-none rotate-[-14.05deg]">
          <Figma />
        </div>
      </div>
      <div className="-translate-y-1/2 absolute aspect-[74.8786268234253/74.8786268234253] flex items-center justify-center left-[40.28%] right-[55.39%] top-[calc(50%-112.06px)]">
        <div className="flex-none rotate-[10.82deg] size-[64px]">
          <VsCode />
        </div>
      </div>
      <div className="-translate-y-1/2 absolute aspect-[115.09209534729916/115.09209534729916] flex items-center justify-center left-[53.13%] right-[40.21%] top-[calc(50%-107.95px)]">
        <div className="flex-none rotate-[17.26deg] size-[91.946px]">
          <Apple />
        </div>
      </div>
      <div className="-translate-y-1/2 absolute aspect-[84.27330887317657/84.27330887317657] flex items-center justify-center left-[61.75%] right-[33.38%] top-[calc(50%+62.64px)]">
        <div className="flex-none rotate-[10.86deg] size-[72px]">
          <Playstation />
        </div>
      </div>
      <div className="-translate-y-1/2 absolute aspect-[77.31213122606277/77.31213122606277] flex items-center justify-center left-[59.48%] right-[36.04%] top-[calc(50%-39px)]">
        <div className="flex-none rotate-[-141.3deg] size-[55px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 55 55">
              <path d={svgPaths.p2e5ea700} fill="var(--fill-0, #B7F9FF)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute left-[546px] size-[70px] top-[586px]" data-name="bg">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 70 70">
          <circle cx="35" cy="35" fill="var(--fill-0, #B7F9FF)" id="bg" r="35" />
        </svg>
      </div>
      <div className="-translate-y-1/2 absolute flex h-[42.718px] items-center justify-center left-[32.29%] right-[64.95%] top-[calc(50%+63.86px)]">
        <div className="flex-none h-[36px] rotate-[9.95deg] w-[42px]">
          <div className="relative size-full" data-name="spotify">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 42 36">
              <path d={svgPaths.p2cd02b00} fill="var(--fill-0, #0779FF)" id="spotify" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}