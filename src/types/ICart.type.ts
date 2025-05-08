import { IProduct } from "./product.type";

export interface ICart {
  _id: string;
  user: string;
  product: IProduct;
  quantity?: number;
  totalPrice?: number;
}

export interface IModifiedCartData {
  id: string;
  name: string;
  thumbnail: string;
  price: string;
}
