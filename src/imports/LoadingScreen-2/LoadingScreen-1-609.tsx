import svgPaths from "./svg-zidyazfnjb";

export default function LoadingScreen() {
  return (
    <div className="bg-[#0779ff] relative size-full overflow-hidden" data-name="LoadingScreen">
      {/* Background decorative curves - centered and scaled */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vw] h-[120vh] max-w-[1920px] max-h-[1080px]">
        <div className="absolute inset-0">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1678 1524">
            <path d={svgPaths.pe8ca800} id="Vector 1" stroke="var(--stroke-0, #0066DF)" strokeLinecap="round" strokeWidth="26" />
          </svg>
        </div>
      </div>
      
      {/* Main DAAF text - centered */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center font-['Futura_Now_Headline:Cn_XBold',sans-serif] not-italic text-[#b7f9ff] text-center">
        <p className="text-[20vw] md:text-[15vw] lg:text-[12vw] xl:text-[180px] leading-none whitespace-nowrap">DAAF</p>
      </div>
      
      {/* Decorative element 1 - top right of text */}
      <div className="absolute left-[calc(50%+15vw)] top-[calc(50%-12vh)] w-[3vw] h-[8vh] min-w-[30px] min-h-[80px] max-w-[50px] max-h-[100px]">
        <div className="absolute inset-[-6.93%_-24.58%_-0.96%_-23.29%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 70.2411 106.275">
            <path d={svgPaths.p23509800} id="Vector 3" stroke="var(--stroke-0, #0066DF)" strokeWidth="26" />
          </svg>
        </div>
      </div>
      
      {/* Decorative element 2 - bottom right of text */}
      <div className="absolute left-[calc(50%+5vw)] top-[calc(50%+8vh)] w-[10vw] h-[12vh] min-w-[100px] min-h-[120px] max-w-[210px] max-h-[155px]">
        <div className="absolute inset-[-7.31%_-5.62%_-1.47%_-5.73%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 230.486 165.888">
            <path d={svgPaths.p2058eb00} id="Vector 4" stroke="var(--stroke-0, #0066DF)" strokeWidth="26" />
          </svg>
        </div>
      </div>
      
      {/* Decorative element 3 - left of text */}
      <div className="absolute left-[calc(50%-12vw)] top-[calc(50%-5vh)] w-[7vw] h-[10vh] min-w-[80px] min-h-[100px] max-w-[115px] max-h-[120px]">
        <div className="absolute inset-[-10.88%_-1.01%_-10.25%_-7.92%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 124.721 144.142">
            <path d={svgPaths.p8d48080} id="Vector 5" stroke="var(--stroke-0, #0066DF)" strokeWidth="26" />
          </svg>
        </div>
      </div>
      
      {/* Decorative element 4 - far left of text */}
      <div className="absolute left-[calc(50%-20vw)] top-[calc(50%-12vh)] w-[8vw] h-[6vh] min-w-[100px] min-h-[60px] max-w-[140px] max-h-[80px]">
        <div className="absolute inset-[-6.95%_-2.24%_-15.11%_-8.55%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 153.992 92.7639">
            <path d={svgPaths.p25627d80} id="Vector 6" stroke="var(--stroke-0, #0066DF)" strokeWidth="26" />
          </svg>
        </div>
      </div>
    </div>
  );
}