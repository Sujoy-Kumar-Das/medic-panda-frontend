import NextPersistWrapper from "next-persist/lib/NextPersistWrapper";
import { ReactNode } from "react";

export default function PersistWrapper({ children }: { children: ReactNode }) {
  const npConfig = {
    method: "localStorage",
    allowList: {
      cart: ["carts"],
    },
  };
  return (
    <NextPersistWrapper wrapperConfig={npConfig}>{children}</NextPersistWrapper>
  );
}
