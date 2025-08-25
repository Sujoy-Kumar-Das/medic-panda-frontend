"use client";

import { ProductLayoutContext } from "@/context/ProductLayoutContext";
import { ReactNode, useState } from "react";

export default function ProductLayoutContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [layout, setLayout] = useState<"grid" | "row">("grid");

  const handleChangeLayout = () => {
    setLayout((prev) => (prev === "grid" ? "row" : "grid"));
  };
  return (
    <ProductLayoutContext.Provider
      value={{ value: layout, onChangeLayout: handleChangeLayout }}
    >
      {children}
    </ProductLayoutContext.Provider>
  );
}
