import { Box } from "@mui/material";
import ProductDetailsCard from "./ProductDetailsCard";
import ProductDetailsModalSkeleton from "./ProductDetailsModalSkeleton";
import { useGetSingleProductQuery } from "@/redux/api";

export default function ProductDetailsCompo({
  productId,
}: {
  productId: string;
}) {
  const { data: product, isLoading } = useGetSingleProductQuery(productId);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <>
        {isLoading ? (
          <ProductDetailsModalSkeleton />
        ) : (
          <ProductDetailsCard product={product?.product} />
        )}
      </>
    </Box>
  );
}
