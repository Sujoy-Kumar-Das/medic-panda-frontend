import ProductDetailsActionMenuForAdminContext from "@/context/ProductDetailsActionMenuForAdminContext";
import { Dispatch, ReactNode, SetStateAction } from "react";

export default function ProductDetailsActionMenuForAdminContextProvider({
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
  const values = { openModal, closeModal };
  return (
    <ProductDetailsActionMenuForAdminContext.Provider value={values}>
      {children}
    </ProductDetailsActionMenuForAdminContext.Provider>
  );
}
