"use client";
import { ThemeProvider as NextThemes } from "next-themes";

export function ThemeProvider({ children }) {
  return (
    <NextThemes
      attribute="class"
      enableSystem={false}
      enableColorScheme={false}
    >
      {children}
    </NextThemes>
  );
}