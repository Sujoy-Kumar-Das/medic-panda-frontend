export interface IProduct {
  _id: string;
  name: string;
  slug: string;
  thumbnail: string;
  price: number;
  discountPrice?: number;
  discountPercentage: number;
  stockStatus: boolean;
}
