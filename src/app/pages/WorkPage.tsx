import HomepageSection3Overlaycv from "../../imports/HomepageSection3Overlaycv-4/HomepageSection3Overlaycv-27-1491";
import Link from "next/link";

export function WorkPage() {
  // Figma design dimensions
  const DESIGN_WIDTH = 1728;
  const DESIGN_HEIGHT = 2983;

  return (
    <div className="w-full min-h-screen bg-[#0779ff] overflow-y-auto overflow-x-hidden">
      {/* Close button */}
      <Link
        href="/"
        className="fixed top-8 right-8 z-[60] bg-[#01207d] text-[#b7f9ff] w-[60px] h-[60px] rounded-full flex items-center justify-center font-['Futura_Now_Headline',sans-serif] text-[32px] hover:bg-[#b7f9ff] hover:text-[#01207d] transition-colors"
      >
        ×
      </Link>

      {/* Wrapper that centers and creates scroll space */}
      <div 
        className="mx-auto"
        style={{ 
          width: "100vw",
          height: `calc(${DESIGN_HEIGHT}px * (100vw / ${DESIGN_WIDTH}px))`
        }}
      >
        {/* Scaled design container - centered */}
        <div 
          className="mx-auto"
          style={{ 
            width: `${DESIGN_WIDTH}px`,
            height: `${DESIGN_HEIGHT}px`,
            transformOrigin: "top center",
            transform: `scale(calc(100vw / ${DESIGN_WIDTH}px))`,
            marginLeft: "50%",
            marginRight: "50%",
            translate: "-50% 0"
          }}
        >
          <HomepageSection3Overlaycv />
        </div>
      </div>
    </div>
  );
}