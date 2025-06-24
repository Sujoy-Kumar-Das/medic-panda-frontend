import CustomModal from "@/components/modal/customModal/CustomModal";
import { ICategory } from "@/types";
import { Close } from "@mui/icons-material";
import { Box, IconButton } from "@mui/material";
import ProductCategory from "./ProductCategory";

interface ICategoryModalProps {
  onClose: () => void;
  categories: ICategory[];
}

export default function CategoryModal({
  onClose,
  categories,
}: ICategoryModalProps) {
  return (
    <CustomModal open onClose={onClose} sxProps={{ textAlign: "center" }}>
      <Box sx={{ display: { xs: "block", md: "none" } }}>
        <IconButton
          onClick={onClose}
          sx={{ position: "absolute", top: 8, right: 8 }}
        >
          <Close />
        </IconButton>
        <ProductCategory categories={categories} onClose={onClose} />
      </Box>
    </CustomModal>
  );
}
