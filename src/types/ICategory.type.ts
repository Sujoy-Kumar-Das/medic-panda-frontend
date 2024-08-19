export interface ICategory {
  variantId: string;
  _id: string;
  name: string;
  slug: string;
  categoryType: "primary" | "secondary" | "tertiary";
  thumbnail: string;
}
