import CustomModal from "@/components/modal/customModal/CustomModal";
import { ICategory } from "@/types";
import { Close } from "@mui/icons-material";
import { Box, IconButton } from "@mui/material";
import PriceRangeFilter from "./PriceRangeFilter";
import ProductCategory from "./ProductCategory";
import SortProduct from "./SortProduct";
import StockAvailabilityFilter from "./StockAvailabilityFilter";

interface ICategoryModalProps {
  onClose: () => void;
  categories: ICategory[];
}

export default function CategoryModal({
  onClose,
  categories,
}: ICategoryModalProps) {
  return (
    <CustomModal
      open
      onClose={onClose}
      sxProps={{
        textAlign: "center",
        maxWidth: "90%",
        mx: "auto",
        borderRadius: 3,
      }}
    >
      <Box sx={{ display: { xs: "block", md: "none" } }}>
        <IconButton
          onClick={onClose}
          sx={{ position: "absolute", top: 8, right: 8 }}
        >
          <Close />
        </IconButton>
        <ProductCategory categories={categories} onClose={onClose} />
        <PriceRangeFilter />
        <StockAvailabilityFilter />
        <SortProduct />
      </Box>
    </CustomModal>
  );
}
