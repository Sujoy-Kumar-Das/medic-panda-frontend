import CustomModal from "@/components/modal/customModal/CustomModal";
import { useGetSingleProductQuery } from "@/redux/api/product.api";
import { Box } from "@mui/material";
import ProductDetailsCard from "./ProductDetailsCard";
import ProductDetailsModalSkeleton from "./ProductDetailsModalSkeleton";

export default function ProductDetailsCompo({
  productId,
  onClose,
}: {
  productId: string;
  onClose: () => void;
}) {
  const { data: product, isLoading } = useGetSingleProductQuery(productId);
  return (
    <Box
      sx={{
        py: 4,
        display: "flex",
        justifyContent: "center",
        bgcolor: "background.default",
      }}
    >
      <Box>
        <CustomModal.TitleWithCloseButton onClose={onClose}>
          Product Details
        </CustomModal.TitleWithCloseButton>
        {isLoading ? (
          <ProductDetailsModalSkeleton />
        ) : (
          <ProductDetailsCard product={product?.product} />
        )}
      </Box>
    </Box>
  );
}
