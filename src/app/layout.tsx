import type { Metadata } from "next";
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
    <html lang="nl">
      <body>
        <ScrambleTextEffect />
        <TextHoverEffect />
        {children}
      </body>
    </html>
  );
}
