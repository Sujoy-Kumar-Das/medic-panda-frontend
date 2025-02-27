import { createContext } from "react";

interface CustomModalContextType {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

const CustomModalContext = createContext<CustomModalContextType | null>(null);

export default CustomModalContext;
