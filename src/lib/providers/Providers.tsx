"use client";
import { store } from "@/redux/store";
import { ThemeProvider } from "@emotion/react";
import { ReactNode } from "react";
import { Provider } from "react-redux";
import theme from "../theme/theme";
export default function Providers({ children }: { children: ReactNode }) {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </Provider>
  );
}
