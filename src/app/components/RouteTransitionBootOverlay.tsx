import LoadingScreen from "../../imports/LoadingScreen-3-1/LoadingScreen-9-99";
import { LoadingStatus } from "./LoadingStatus";

const LOADING_WIDTH = 1728;
const LOADING_HEIGHT = 1117;

export function RouteTransitionBootOverlay() {
  return (
    <div
      id="route-transition-boot-overlay"
      suppressHydrationWarning
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        backgroundColor: "var(--theme-bg, #0779ff)",
      }}
    >
      <div
        style={{
          position: "absolute",
          width: `${LOADING_WIDTH}px`,
          height: `${LOADING_HEIGHT}px`,
          left: "50%",
          top: "50%",
          transform: `translate(-50%, -50%) scale(max(calc(100vw / ${LOADING_WIDTH}px), calc(100vh / ${LOADING_HEIGHT}px)))`,
          transformOrigin: "center center",
        }}
      >
        <LoadingScreen />
      </div>
      <LoadingStatus />
    </div>
  );
}
