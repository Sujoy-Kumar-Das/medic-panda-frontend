"use client";
import CustomModalContext from "@/context/CustomModalContext";
import { Dispatch, ReactNode, SetStateAction } from "react";

export default function CustomModalProvider({
  children,
  open,
  setOpen,
}: {
  children: ReactNode;
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}) {
  const openModal = () => setOpen(true);
  const closeModal = () => setOpen(false);

  const modalValue = { isOpen: open, openModal, closeModal };

  return (
    <CustomModalContext.Provider value={modalValue}>
      {children}
    </CustomModalContext.Provider>
  );
}
