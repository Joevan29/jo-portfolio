"use client";

import "./globals.css";
import SmoothScroll from "../components/ui/SmoothScroll";
import CustomCursor from "../components/ui/CustomCursor";
import Grain from "../components/ui/Grain";
import SoundManager from "../components/utils/SoundManager";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-slate-950 overflow-x-hidden cursor-none">
        <SmoothScroll>
          <CustomCursor />
          <Grain />
          <SoundManager />

          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
