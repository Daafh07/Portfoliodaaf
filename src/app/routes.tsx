import { createBrowserRouter } from "react-router";
import { PortfolioLayout } from "./components/PortfolioLayout";
import { WorkPage } from "./pages/WorkPage";
import { TravelPage } from "./pages/TravelPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: PortfolioLayout,
  },
  {
    path: "/work",
    Component: WorkPage,
  },
  {
    path: "/travel",
    Component: TravelPage,
  },
]);