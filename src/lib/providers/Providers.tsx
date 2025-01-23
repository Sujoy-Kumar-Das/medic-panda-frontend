"use client";
import { ThemeProvider } from "@emotion/react";
import { ReactNode } from "react";
import theme from "../theme/theme";
import AuthContextProvider from "./AuthContextProvider";
import PersistWrapper from "./PersistWrapper";
import ReduxProvider from "./ReduxProvider";

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <ReduxProvider>
      <PersistWrapper>
        <AuthContextProvider>
          <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </AuthContextProvider>
      </PersistWrapper>
    </ReduxProvider>
  );
}
