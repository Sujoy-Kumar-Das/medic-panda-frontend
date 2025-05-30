import { FieldValues } from "react-hook-form";
import { ICategory } from "./ICategory.type";
import { IManufacturer } from "./Imanufacturer.type";
import { AnyZodObject } from "zod";

export interface IDiscount {
  percentage: number;
  discountStatus?: boolean;
  discountPrice?: number;
  startDate: string;
  endDate: string;
  startTime: string;
  endTime: string;
}

export interface IProduct {
  _id: string;
  name: string;
  thumbnail: string;
  price: number;
  discount: IDiscount;
  stockStatus: boolean;
  category: ICategory;
  manufacturer: IManufacturer;
  rating: number;
}

export interface IProductDetail {
  _id: string;
  product: IProduct;
  images: string[];
  description: string;
  stock: number;
  status: string;
}

export interface IProductData {
  product: IProduct;
  productDetail: IProductDetail;
}

interface ISelectItem {
  id: string;
  title: string;
  value: string;
}

export interface IProductFormProps {
  onSubmit: (data: FieldValues) => Promise<void>;
  onClose: () => void;
  validationSchema: AnyZodObject;
  isLoading: boolean;
  type: "create" | "edit";
  defaultValues: object;
  manufacturer: ISelectItem[];
  categories: ISelectItem[];
  isDiscountAvailable: boolean;
}
