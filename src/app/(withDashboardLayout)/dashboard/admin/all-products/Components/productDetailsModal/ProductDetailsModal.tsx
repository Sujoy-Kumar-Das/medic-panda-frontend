import CustomModal from "@/components/customModal/CustomModal";
import { useGetSingleProductQuery } from "@/redux/api/product.api";
import { Box } from "@mui/material";
import ProductDetails from "./productDetailsModal/ProductDetails";
import ProductDetailsModalSkeleton from "./productDetailsModal/ProductDetailsModalSkeleton";

export default function ProductDetailsModal({ open, setOpen, productId }) {
  const { data: product, isLoading } = useGetSingleProductQuery(productId);

  return (
    <CustomModal open={open} setOpen={setOpen}>
      <Box
        sx={{
          p: 4,
          display: "flex",
          justifyContent: "center",
          bgcolor: "background.default",
        }}
      >
        <Box>
          <CustomModal.CloseButton />
          {isLoading ? (
            <ProductDetailsModalSkeleton />
          ) : (
            <ProductDetails product={product?.product} />
          )}
        </Box>
      </Box>
    </CustomModal>
  );
}
