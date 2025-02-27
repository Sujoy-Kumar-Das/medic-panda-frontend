import CustomModalContext from "@/context/CustomModalContext";
import { useContext } from "react";

export default function useModal() {
  const context = useContext(CustomModalContext);
  if (!context) {
    throw new Error("useModal must be used within a CustomModalProvider");
  }
  return context;
}
