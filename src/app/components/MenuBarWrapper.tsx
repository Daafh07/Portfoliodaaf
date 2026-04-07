import svgPaths from "../../imports/MenuBar/svg-6w2d5fe5hx";

function ContactButton() {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact-section');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="absolute contents inset-[15.05%_4.94%_13.98%_52.23%]" data-name="Contact">
      <button 
        onClick={scrollToContact}
        className="absolute bg-[#b7f9ff] inset-[15.05%_4.94%_13.98%_52.23%] rounded-[25px] hover:bg-[#01207d] transition-colors cursor-pointer border-none"
      />
      <button 
        onClick={scrollToContact}
        className="absolute flex flex-col font-['Futura_Now_Headline:Cn_XBold',sans-serif] inset-[39.78%_12.39%_41.94%_59.64%] justify-center leading-[0] not-italic text-[#01207d] text-[23px] text-center uppercase hover:text-[#b7f9ff] transition-colors cursor-pointer border-none bg-transparent"
      >
        <p className="leading-[16.8px]">Contact</p>
      </button>
    </div>
  );
}

function WorkButton() {
  const scrollToWork = () => {
    const workSection = document.getElementById('work-section');
    if (workSection) {
      workSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <button
      onClick={scrollToWork}
      className="absolute inset-[15.05%_51.93%_13.98%_28.49%] cursor-pointer border-none bg-transparent p-0 hover:opacity-80 transition-opacity"
      data-name="Work"
    >
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 66 66">
        <g id="Contact">
          <rect fill="var(--fill-0, #01207D)" height="66" id="Rectangle 3" rx="25" width="66" />
          <path d={svgPaths.p1daacf80} id="Vector" stroke="var(--stroke-0, #B7F9FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
        </g>
      </svg>
    </button>
  );
}

function MenuToggleButton() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      onClick={scrollToTop}
      className="absolute inset-[15.05%_75.67%_13.98%_4.75%] cursor-pointer border-none bg-transparent p-0 hover:opacity-80 transition-opacity"
      data-name="Menu"
    >
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 66 66">
        <g id="Contact">
          <rect fill="var(--fill-0, #01207D)" height="66" id="Rectangle 3" rx="25" width="66" />
          <path d={svgPaths.p324d9000} id="Vector" stroke="var(--stroke-0, #B7F9FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
        </g>
      </svg>
    </button>
  );
}

export default function MenuBarWrapper() {
  return (
    <div className="relative size-full" data-name="MenuBar">
      <div className="absolute backdrop-blur-[32px] bg-[rgba(1,32,125,0.42)] inset-0 rounded-[34px]" data-name="MenuBackground" />
      <ContactButton />
      <WorkButton />
      <MenuToggleButton />
    </div>
  );
}
