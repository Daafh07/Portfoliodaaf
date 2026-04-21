import svgPaths from "./svgPaths";

function Contact({ label = "Contact" }: { label?: string }) {
  return (
    <div className="absolute contents inset-[15.05%_4.94%_13.98%_52.23%]" data-name="Contact">
      <div
        className="absolute inset-[15.05%_4.94%_13.98%_52.23%] rounded-[25px]"
        style={{ backgroundColor: "var(--theme-light)" }}
      />
      <div
        className="absolute flex flex-col font-['Futura_Now_Headline',sans-serif] inset-[39.78%_12.39%_41.94%_59.64%] justify-center leading-[0] not-italic text-[23px] text-center uppercase"
        style={{ color: "var(--theme-dark)" }}
      >
        <p className="leading-[16.8px]">{label}</p>
      </div>
    </div>
  );
}

function Contact1() {
  return (
    <div className="absolute inset-[15.05%_51.93%_13.98%_28.49%]" data-name="Contact">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 66 66">
        <g id="Contact">
          <rect fill="var(--theme-dark)" height="66" id="Rectangle 3" rx="25" width="66" />
          <path d={svgPaths.p1daacf80} id="Vector" stroke="var(--theme-light)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
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
          <rect fill="var(--theme-dark)" height="66" id="Rectangle 3" rx="25" width="66" />
          <path d={svgPaths.p324d9000} id="Vector" stroke="var(--theme-light)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
        </g>
      </svg>
    </div>
  );
}

export default function MenuBar({ contactLabel = "Contact" }: { contactLabel?: string }) {
  return (
    <div className="relative size-full" data-name="MenuBar">
      <div
        className="absolute inset-0 rounded-[34px] backdrop-blur-[32px]"
        data-name="MenuBackground"
        style={{ backgroundColor: "color-mix(in srgb, var(--theme-dark) 42%, transparent)" }}
      />
      <Contact label={contactLabel} />
      <Contact1 />
      <Contact2 />
    </div>
  );
}
