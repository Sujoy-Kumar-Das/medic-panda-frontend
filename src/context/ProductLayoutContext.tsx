import { createContext } from "react";

interface ProductLayoutContextProps {
  value: "grid" | "row";
  onChangeLayout: () => void;
}

export const ProductLayoutContext =
  createContext<ProductLayoutContextProps | null>(null);
