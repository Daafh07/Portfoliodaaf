import HomepageSection3Overlaycv from "../../imports/HomepageSection3Overlaycv-3/HomepageSection3Overlaycv-27-1178";

interface WorkOverlayProps {
  onClose: () => void;
}

export function WorkOverlay({ onClose }: WorkOverlayProps) {
  // Figma design dimensions
  const DESIGN_WIDTH = 1728;
  const DESIGN_HEIGHT = 2983;

  return (
    <div className="fixed inset-0 z-50 bg-[#0779ff]">
      {/* Close button */}
      <button
        onClick={onClose}
        className="fixed top-8 right-8 z-[60] bg-[#01207d] text-[#b7f9ff] w-[60px] h-[60px] rounded-full flex items-center justify-center font-['Futura_Now_Headline',sans-serif] text-[32px] hover:bg-[#b7f9ff] hover:text-[#01207d] transition-colors cursor-pointer"
      >
        ×
      </button>

      {/* Scrollable container */}
      <div className="w-full h-full overflow-y-auto overflow-x-hidden">
        {/* Wrapper that creates scroll space */}
        <div 
          style={{ 
            width: "100%",
            minWidth: "100vw",
            height: `calc(${DESIGN_HEIGHT}px * max(100vw / ${DESIGN_WIDTH}px, 1))`,
          }}
        >
          {/* Scaled design container */}
          <div 
            style={{ 
              width: `${DESIGN_WIDTH}px`,
              height: `${DESIGN_HEIGHT}px`,
              transformOrigin: "top center",
              transform: "scale(var(--scale))",
              margin: "0 auto",
              position: "relative",
              left: "50%",
              translate: "-50% 0",
              "--scale": `max(calc(100vw / ${DESIGN_WIDTH}), 1)`,
              overflow: "hidden",
            } as React.CSSProperties}
          >
            <HomepageSection3Overlaycv />
          </div>
        </div>
      </div>
    </div>
  );
}