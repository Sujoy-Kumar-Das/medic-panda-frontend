"use client";

import { ProductLayoutContext } from "@/context/ProductLayoutContext";
import { useContext } from "react";

export default function useProductLayoutContext() {
  const context = useContext(ProductLayoutContext);

  if (!context) {
    throw new Error("Try to access value outside of product context ");
  }

  return context;
}
