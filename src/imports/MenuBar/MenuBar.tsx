import svgPaths from "./svg-6w2d5fe5hx";

function Contact() {
  return (
    <div className="absolute contents inset-[15.05%_4.94%_13.98%_52.23%]" data-name="Contact">
      <div className="absolute bg-[#b7f9ff] inset-[15.05%_4.94%_13.98%_52.23%] rounded-[25px]" />
      <div className="absolute flex flex-col font-['Futura_Now_Headline:Cn_XBold',sans-serif] inset-[39.78%_12.39%_41.94%_59.64%] justify-center leading-[0] not-italic text-[#01207d] text-[23px] text-center uppercase">
        <p className="leading-[16.8px]">Contact</p>
      </div>
    </div>
  );
}

function Contact1() {
  return (
    <div className="absolute inset-[15.05%_51.93%_13.98%_28.49%]" data-name="Contact">
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
    <div className="absolute inset-[15.05%_75.67%_13.98%_4.75%]" data-name="Contact">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 66 66">
        <g id="Contact">
          <rect fill="var(--fill-0, #01207D)" height="66" id="Rectangle 3" rx="25" width="66" />
          <path d={svgPaths.p324d9000} id="Vector" stroke="var(--stroke-0, #B7F9FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
        </g>
      </svg>
    </div>
  );
}

export default function MenuBar() {
  return (
    <div className="relative size-full" data-name="MenuBar">
      <div className="absolute backdrop-blur-[32px] bg-[rgba(1,32,125,0.42)] inset-0 rounded-[34px]" data-name="MenuBackground" />
      <Contact />
      <Contact1 />
      <Contact2 />
    </div>
  );
}