import svgPaths from "./svg-eym2wscs04";

function HeaderText() {
  return (
    <div className="absolute contents leading-[0] left-[-192px] not-italic text-[#b7f9ff] text-center top-[42px]" data-name="HeaderText">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Futura_Now_Headline',sans-serif] h-[166px] justify-center left-[863.5px] text-[107px] top-[125px] w-[2111px]">
        <p className="leading-[80px]">SHORT ABOUT</p>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter',sans-serif] font-medium justify-center left-[863px] text-[21px] top-[208px] whitespace-nowrap">
        <p className="leading-[80px]">Get to know me fast</p>
      </div>
    </div>
  );
}

function Contact() {
  return (
    <div className="absolute contents inset-[90.33%_41.24%_3.76%_50.41%]" data-name="Contact">
      <div className="absolute bg-[#b7f9ff] inset-[90.33%_41.24%_3.76%_50.41%] rounded-[25px]" />
      <div className="absolute flex flex-col font-['Futura_Now_Headline',sans-serif] inset-[92.39%_42.69%_6.09%_51.85%] justify-center leading-[0] not-italic text-[#01207d] text-[23px] text-center uppercase">
        <p className="leading-[16.8px]">Contact</p>
      </div>
    </div>
  );
}

function Contact1() {
  return (
    <div className="absolute inset-[90.33%_50.41%_3.76%_45.78%]" data-name="Contact">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 66 66">
        <g id="Contact">
          <rect fill="var(--fill-0, #01207D)" height="66" id="Rectangle 3" rx="25" width="66" />
          <path d={svgPaths.p1daacf80} id="Vector" stroke="var(--stroke-0, #B7F9FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
        </g>
      </svg>
    </div>
  );
}

function Contact2() {
  return (
    <div className="absolute inset-[90.33%_55.03%_3.76%_41.15%]" data-name="Contact">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 66 66">
        <g id="Contact">
          <rect fill="var(--fill-0, #01207D)" height="66" id="Rectangle 3" rx="25" width="66" />
          <path d={svgPaths.p324d9000} id="Vector" stroke="var(--stroke-0, #B7F9FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
        </g>
      </svg>
    </div>
  );
}

function MenuBar() {
  return (
    <div className="absolute contents left-[40.22%] right-[40.28%] top-[995px]" data-name="MenuBar">
      <div className="absolute backdrop-blur-[32px] bg-[rgba(1,32,125,0.42)] inset-[89.08%_40.28%_2.6%_40.22%] rounded-[34px]" data-name="MenuBackground" />
      <Contact />
      <Contact1 />
      <Contact2 />
    </div>
  );
}

export default function HomepageSection() {
  return (
    <div className="bg-[#0779ff] relative size-full" data-name="Homepage-Section3">
      <HeaderText />
      <MenuBar />
      <div className="absolute h-[1152px] left-[75.5px] top-[-9.5px] w-[1611px]">
        <div className="absolute inset-[-1.13%_0.93%_-1.13%_-0.81%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1608.94 1178.01">
            <path d={svgPaths.p35074b00} id="Vector 10" stroke="var(--stroke-0, #0066DF)" strokeLinecap="round" strokeWidth="26" />
          </svg>
        </div>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Futura_Now_Headline',sans-serif] h-[544px] justify-center leading-[0] left-[871px] not-italic text-[#01207d] text-[95px] text-center top-[555px] w-[1728px]">
        <p className="leading-[116px] mb-0">INTERACTIVE DESIGN STUDENT,</p>
        <p className="leading-[116px] mb-0">SUPERMARKET TEAMLEADER,</p>
        <p className="leading-[116px] mb-0">{`TRAVEL & FOOD ADDICT,`}</p>
        <p className="leading-[116px]">PROACTIVE</p>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter',sans-serif] font-medium justify-center leading-[0] left-[863.5px] not-italic text-[#b7f9ff] text-[21px] text-center top-[895px] whitespace-nowrap">
        <p className="leading-[80px]">“Be the change you wish to see in the world.”</p>
      </div>
    </div>
  );
}