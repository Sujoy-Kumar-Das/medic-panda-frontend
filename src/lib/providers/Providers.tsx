"use client";
import { ThemeProvider } from "@emotion/react";
import { ReactNode } from "react";
import theme from "../theme/theme";

export default function Providers({ children }: { children: ReactNode }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
