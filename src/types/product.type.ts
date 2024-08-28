export interface IDiscount {
  percentage: number;
  discountStatus?: boolean;
  discountPrice?: number;
  startDate: string;
  endDate: string;
  startTime: string;
  endTime: string;
}

export interface IProductDetail {
  category: string;
  manufacture: string;
  description: string;
  stock: number;
  images?: string[];
}

export interface IProduct {
  _id: string;
  name: string;
  thumbnail: string;
  price: number;
  discount?: IDiscount;
}

export interface IProductData {
  product: IProduct;
  productDetail: IProductDetail;
}
