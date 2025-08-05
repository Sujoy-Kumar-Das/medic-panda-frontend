import { ICategory } from "@/types";
import ProductCategoryCard from "./ProductCategoryCard";

interface ProductCategoryListProps {
  onClose?: () => void;
  categories: ICategory[];
}

export default function ProductCategoryList({
  categories,
  onClose,
}: ProductCategoryListProps) {
  return (
    <>
      {categories?.map((item: ICategory) => (
        <ProductCategoryCard key={item._id} category={item} />
      ))}
    </>
  );
}
