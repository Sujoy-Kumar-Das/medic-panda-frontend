"use client";
import { store } from "@/redux/store";
import { ThemeProvider } from "@emotion/react";
import PersistWrapper from "next-persist/lib/NextPersistWrapper";
import { ReactNode } from "react";
import { Provider } from "react-redux";
import theme from "../theme/theme";

export default function Providers({ children }: { children: ReactNode }) {
  const npConfig = {
    method: "localStorage",
    allowList: {
      cart: ["carts"],
    },
  };

  return (
    <Provider store={store}>
      <PersistWrapper wrapperConfig={npConfig}>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </PersistWrapper>
    </Provider>
  );
}
