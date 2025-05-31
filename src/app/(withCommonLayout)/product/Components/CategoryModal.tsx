import CustomModal from "@/components/modal/customModal/CustomModal";
import { useGetAllCategoriesQuery } from "@/redux/api";
import { Close } from "@mui/icons-material";
import { Box, IconButton } from "@mui/material";
import ProductCategory from "./ProductCategory";

interface ICategoryModalProps {
  onClose: () => void;
}

export default function CategoryModal({ onClose }: ICategoryModalProps) {
  const { data, isLoading } = useGetAllCategoriesQuery(undefined);
  return (
    <CustomModal open onClose={onClose} sxProps={{ textAlign: "center" }}>
      <Box sx={{ display: { xs: "block", md: "none" } }}>
        <IconButton
          onClick={onClose}
          sx={{ position: "absolute", top: 8, right: 8 }}
        >
          <Close />
        </IconButton>
        <ProductCategory
          categories={data?.result}
          isLoading={isLoading}
          onClose={onClose}
        />
      </Box>
    </CustomModal>
  );
}
