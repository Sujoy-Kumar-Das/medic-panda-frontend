"use client";
import { ThemeProvider } from "@emotion/react";
import { ReactNode } from "react";
import theme from "../theme/theme";
import AuthContextProvider from "./AuthContextProvider";
import PersistWrapper from "./PersistWrapper";
import ReduxProvider from "./ReduxProvider";
import SocketProvider from "./SocketProvider";

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <ReduxProvider>
      <PersistWrapper>
        <AuthContextProvider>
          <SocketProvider>
            <ThemeProvider theme={theme}>{children}</ThemeProvider>
          </SocketProvider>
        </AuthContextProvider>
      </PersistWrapper>
    </ReduxProvider>
  );
}
