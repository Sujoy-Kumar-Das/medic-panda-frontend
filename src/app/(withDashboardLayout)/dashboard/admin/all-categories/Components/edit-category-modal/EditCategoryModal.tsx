import CustomModal from "@/components/modal/customModal/CustomModal";
import { Box, Typography } from "@mui/material";
import { Dispatch, SetStateAction } from "react";
import EditCategoryForm from "./EditCategoryForm";

interface EditCategoryModalProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  onClose: () => void;
  category: { id: string; name: string };
}

export default function EditCategoryModal({
  open,
  setOpen,
  onClose,
  category,
}: EditCategoryModalProps) {
  const handleCloseModal = () => {
    setOpen((prev) => !prev);
    onClose();
  };
  return (
    <CustomModal open={open} setOpen={setOpen}>
      <Box sx={{ p: 4, maxWidth: 500, width: "100%", mx: "auto" }}>
        {/* Modal Title */}
        <Typography
          variant="h6"
          align="center"
          sx={{ mb: 2, fontWeight: "bold" }}
        >
          Edit Category
        </Typography>

        <EditCategoryForm category={category} onClose={handleCloseModal} />
      </Box>
    </CustomModal>
  );
}
