import CustomModal from "@/components/customModal/CustomModal";
import { useGetSingleProductQuery } from "@/redux/api/product.api";
import { Box } from "@mui/material";
import ProductDetailsCard from "./ProductDetailsCard";
import ProductDetailsModalSkeleton from "./ProductDetailsModalSkeleton";

export default function ProductDetailsCompo({
  productId,
  onCloseMenu,
}: {
  productId: string;
  onCloseMenu: () => void;
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
        <CustomModal.TitleWithCloseButton onClose={onCloseMenu}>
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
