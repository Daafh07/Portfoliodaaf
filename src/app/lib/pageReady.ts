export const GLOBAL_LOADING_MIN_DURATION_MS = 3000;
const PAGE_READY_TIMEOUT_MS = 15000;

function waitForWindowLoad() {
  if (typeof window === "undefined") {
    return Promise.resolve();
  }

  if (document.readyState === "complete") {
    return Promise.resolve();
  }

  return new Promise<void>((resolve) => {
    const handleLoad = () => {
      window.removeEventListener("load", handleLoad);
      resolve();
    };

    window.addEventListener("load", handleLoad, { once: true });
  });
}

function waitForImage(image: HTMLImageElement) {
  if (image.complete && image.naturalWidth > 0) {
    if (typeof image.decode === "function") {
      return image.decode().catch(() => undefined);
    }

    return Promise.resolve();
  }

  return new Promise<void>((resolve) => {
    const finalize = () => {
      image.removeEventListener("load", finalize);
      image.removeEventListener("error", finalize);
      resolve();
    };

    image.addEventListener("load", finalize, { once: true });
    image.addEventListener("error", finalize, { once: true });
  });
}

async function waitForImages() {
  if (typeof document === "undefined") {
    return;
  }

  const images = Array.from(document.images);
  await Promise.all(images.map((image) => waitForImage(image)));
}

function waitForMinimumDuration(minDurationMs: number) {
  return new Promise<void>((resolve) => {
    window.setTimeout(resolve, minDurationMs);
  });
}

function withTimeout<T>(promise: Promise<T>, timeoutMs: number) {
  return Promise.race([
    promise,
    new Promise<T>((resolve) => {
      window.setTimeout(() => resolve(undefined as T), timeoutMs);
    }),
  ]);
}

export async function waitForPageReady(minDurationMs = GLOBAL_LOADING_MIN_DURATION_MS) {
  if (typeof window === "undefined") {
    return;
  }

  await Promise.all([
    waitForMinimumDuration(minDurationMs),
    withTimeout(
      (async () => {
        await waitForWindowLoad();
        await waitForImages();
      })(),
      PAGE_READY_TIMEOUT_MS,
    ),
  ]);
}
