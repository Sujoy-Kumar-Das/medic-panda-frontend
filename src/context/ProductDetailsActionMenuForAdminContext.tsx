import { createContext } from "react";

interface IProductDetailsActionMenuForAdminContext {
  openModal: () => void;
  closeModal: () => void;
}

const ProductDetailsActionMenuForAdminContext =
  createContext<IProductDetailsActionMenuForAdminContext | null>(null);

export default ProductDetailsActionMenuForAdminContext;
