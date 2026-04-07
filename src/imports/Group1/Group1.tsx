import { Link } from "react-router";

function BackNext() {
  return (
    <div className="absolute contents left-[18px] top-1/2 -translate-y-1/2" data-name="BACK?NEXT">
      <div className="absolute bg-[#01207d] left-[18px] top-1/2 -translate-y-1/2 rounded-[21px] size-[57px]" />
    </div>
  );
}

function BackNext1() {
  return (
    <div className="h-[57px] relative w-[103px]" data-name="BACK?NEXT">
      <div className="absolute inset-[0_-1.94%_0_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 105 57">
          <g id="BACK?NEXT">
            <rect fill="var(--fill-0, #01207D)" height="57" id="Rectangle 49" rx="21" width="57" />
            <path d="M33 39L22 28L33 17" id="Vector" stroke="var(--stroke-0, #B7F9FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
            <path d="M92 17L103 28L92 39" id="Vector_2" stroke="var(--stroke-0, #B7F9FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Contact() {
  return (
    <div className="absolute bottom-[13.98%] contents left-1/2 right-[4.89%] top-[15.05%]" data-name="Contact">
      <Link to="/" className="absolute bg-[#b7f9ff] bottom-[13.98%] left-1/2 right-[4.89%] rounded-[25px] top-[15.05%] hover:bg-[#01207d] transition-colors" />
      <Link to="/" className="absolute flex flex-col font-['Futura_Now_Headline:Cn_XBold',sans-serif] inset-[39.78%_12.74%_41.94%_57.81%] justify-center leading-[0] not-italic text-[#01207d] text-[23px] text-center uppercase hover:text-[#b7f9ff] transition-colors no-underline pointer-events-auto">
        <p className="leading-[16.8px]">HOME</p>
      </Link>
    </div>
  );
}

export default function Group() {
  return (
    <div className="relative size-full">
      <div className="absolute backdrop-blur-[32px] bg-[rgba(1,32,125,0.42)] inset-0 rounded-[34px]" data-name="MenuBackground" />
      <BackNext />
      <div className="absolute flex h-[57px] items-center justify-center left-[40px] top-1/2 -translate-y-1/2 w-[103px]">
        <div className="flex-none rotate-180">
          <BackNext1 />
        </div>
      </div>
      <Contact />
    </div>
  );
}