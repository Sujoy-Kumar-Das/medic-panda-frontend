import CustomModal from "@/components/modal/customModal/CustomModal";
import { Box } from "@mui/material";
import { Dispatch, SetStateAction } from "react";
import ProductCategory from "./ProductCategory";

interface ICategoryModalProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

export default function CategoryModal({ open, setOpen }: ICategoryModalProps) {
  const handleCloseCategoryModal = () => {
    setOpen((prev) => !prev);
  };
  return (
    <CustomModal open={open} setOpen={setOpen} closeBtn={false}>
      <Box
        sx={{
          display: { xs: "flex", md: "none" },
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
      >
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          <ProductCategory
            handleCloseCategoryModal={handleCloseCategoryModal}
          />
        </Box>
      </Box>
    </CustomModal>
  );
}
