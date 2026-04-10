export function LoadingStatus() {
  return (
    <div className="pointer-events-none absolute bottom-[34px] left-1/2 z-[20] flex -translate-x-1/2 items-center gap-[12px] whitespace-nowrap px-[18px] py-[10px]">
      <div className="loading-status__dots" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
      <p className="m-0 font-['Inter',sans-serif] text-[16px] font-medium leading-none text-[var(--theme-light)]">
        Loading Daaf
      </p>
    </div>
  );
}
