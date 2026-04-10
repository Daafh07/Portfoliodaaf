export const ROUTE_TRANSITION_STORAGE_KEY = "route-transition-target";

export function beginRouteTransition(href: string) {
  if (typeof window === "undefined") {
    return;
  }

  window.sessionStorage.setItem(ROUTE_TRANSITION_STORAGE_KEY, href);
}

export function consumeRouteTransition(href: string) {
  if (typeof window === "undefined") {
    return false;
  }

  const target = window.sessionStorage.getItem(ROUTE_TRANSITION_STORAGE_KEY);

  if (target !== href) {
    return false;
  }

  window.sessionStorage.removeItem(ROUTE_TRANSITION_STORAGE_KEY);
  return true;
}
