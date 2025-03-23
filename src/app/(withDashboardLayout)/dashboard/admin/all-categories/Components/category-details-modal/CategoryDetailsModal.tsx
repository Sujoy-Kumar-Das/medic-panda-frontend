import CustomModal from "@/components/modal/customModal/CustomModal";
import { ICategory } from "@/types";
import { Avatar, Box, Chip, Divider, Typography } from "@mui/material";
import Image from "next/image";

interface CategoryDetailsModalProps {
  open: boolean;
  onModalClose: () => void;
  onClose: () => void;
  category: ICategory;
}

export default function CategoryDetailsModal({
  open,
  onModalClose,
  onClose,
  category,
}: CategoryDetailsModalProps) {
  const handleCloseModal = () => {
    onModalClose();
    onClose();
  };

  return (
    <CustomModal open={open} onClose={handleCloseModal}>
      {/* Centered Box */}
      <Box
        sx={{
          padding: 3,
          textAlign: "center",
        }}
      >
        {/* Flex Container for Title and Close Button */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            marginBottom: 2,
          }}
        >
          {/* Modal Title */}
          <Typography
            variant="h6"
            fontWeight="bold"
            gutterBottom
            sx={{ flex: 1, textAlign: "center" }}
          >
            Category Details
          </Typography>

          {/* Close Button */}
          <CustomModal.CloseButton
            onClose={handleCloseModal}
            sxProps={{ marginLeft: "auto" }}
          />
        </Box>

        {/* Divider below the title */}
        <Divider sx={{ marginBottom: 2 }} />

        {/* Category Image */}

        <Avatar
          sx={{
            width: 120,
            height: 120,
            margin: "0 auto 16px",
            border: "2px solid #e0e0e0",
          }}
        >
          <Image
            width={120}
            height={120}
            alt={category?.name}
            src={category?.thumbnail}
            layout="responsive"
          />
        </Avatar>

        {/* Category Name */}
        <Typography variant="h6" fontWeight="medium" gutterBottom>
          {category?.name}
        </Typography>

        {/* Popularity */}
        <Chip
          label={category.popularity ? "Popular" : "Unpopular"}
          color={category.popularity ? "success" : "default"}
          variant="outlined"
          sx={{ marginBottom: 2, borderRadius: 2 }}
        />
      </Box>
    </CustomModal>
  );
}
