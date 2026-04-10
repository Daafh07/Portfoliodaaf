import type { Metadata } from "next";
import Script from "next/script";
import { RouteTransitionBootController } from "./components/RouteTransitionBootController";
import { RouteTransitionBootOverlay } from "./components/RouteTransitionBootOverlay";
import { ScrambleTextEffect } from "./components/ScrambleTextEffect";
import { TextHoverEffect } from "./components/TextHoverEffect";
import "../styles/index.css";

export const metadata: Metadata = {
  title: "Daaf Portfolio",
  description: "Portfolio van Daaf",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl" suppressHydrationWarning>
      <body>
        <Script
          id="route-transition-boot-script"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function () {
                try {
                  var target = window.sessionStorage.getItem('route-transition-target');
                  if (!target) {
                    document.documentElement.setAttribute('data-route-transition-loading', 'false');
                    return;
                  }

                  document.documentElement.setAttribute('data-route-transition-loading', 'true');

                  var palettes = {
                    "default": { bg: "#0779ff", line: "#0066df", dark: "#01207d", light: "#b7f9ff" },
                    "template-1": { bg: "#f1f1f1", line: "#dfdfdf", dark: "#858585ff", light: "#525252ff" },
                    "template-2": { bg: "#14a06f", line: "#0d8a60", dark: "#08332c", light: "#d6fff0" },
                    "template-3": { bg: "#ff8c42", line: "#ef7420", dark: "#5a2200", light: "#fff0cf" }
                  };
                  var paletteId = window.sessionStorage.getItem('home-color-palette-id') || 'default';
                  var palette = palettes[paletteId] || palettes["default"];
                  document.documentElement.style.setProperty('--theme-bg', palette.bg);
                  document.documentElement.style.setProperty('--theme-line', palette.line);
                  document.documentElement.style.setProperty('--theme-dark', palette.dark);
                  document.documentElement.style.setProperty('--theme-light', palette.light);
                } catch (error) {}
              })();
            `,
          }}
        />
        <RouteTransitionBootOverlay />
        <RouteTransitionBootController />
        <ScrambleTextEffect />
        <TextHoverEffect />
        {children}
      </body>
    </html>
  );
}
