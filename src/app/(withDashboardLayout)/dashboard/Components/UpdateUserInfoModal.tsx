import CustomModal from "@/components/customModal/CustomModal";
import PandaForm from "@/components/form/PandaForm";
import PandaInputField from "@/components/form/PandaInputField";
import { Box, Button, Typography } from "@mui/material";

export default function UpdateUserInfoModal({ open, setOpen, label, value }) {
  const handleUpdateInfo = (value) => {
    console.log(value);
  };

  return (
    <CustomModal open={open} setOpen={setOpen} closeBtn={false}>
      <Box>
        <Typography
          variant="h6"
          textAlign="center"
          mb={2}
          sx={{ fontWeight: "bold", color: "text.primary" }}
        >
          Update Your {label}
        </Typography>

        <PandaForm onSubmit={handleUpdateInfo}>
          <PandaInputField
            type="text"
            name={label}
            fullWidth
            sx={{
              mb: 3,
              "& input": {
                borderColor: "primary.main",
                transition: "border-color 0.3s ease",
                "&:hover": {
                  borderColor: "primary.dark",
                },
              },
            }}
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{
              mt: 2,
              py: 1.5,
              fontSize: "16px",
              bgcolor: "primary.main",
              color: "#fff",
              borderRadius: 2,
              boxShadow: "0px 6px 20px rgba(0, 123, 255, 0.2)",
              transition: "all 0.3s ease-in-out",
              "&:hover": {
                bgcolor: "primary.dark",
                boxShadow: "0px 8px 25px rgba(0, 123, 255, 0.3)",
              },
            }}
          >
            Update
          </Button>
        </PandaForm>
      </Box>
    </CustomModal>
  );
}
