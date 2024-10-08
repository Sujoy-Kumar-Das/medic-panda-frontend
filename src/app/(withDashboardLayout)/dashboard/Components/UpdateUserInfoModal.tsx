import CustomModal from "@/components/customModal/CustomModal";
import PandaForm from "@/components/form/PandaForm";
import PandaInputField from "@/components/form/PandaInputField";
import { useUpdateCustomerInfoMutation } from "@/redux/api/customer.api";
import { IGenericErrorMessage } from "@/types";
import { Box, Button, CircularProgress, Typography } from "@mui/material";
import { Dispatch, SetStateAction } from "react";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

interface IUpdateUserInfo {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  label: string;
  name: string;
}

export default function UpdateUserInfoModal({
  open,
  setOpen,
  label,
  name,
}: IUpdateUserInfo) {
  const [updateCustomerInfo, { isLoading, error }] =
    useUpdateCustomerInfoMutation();

  const handleUpdateInfo = async (value: FieldValues) => {
    const res = await updateCustomerInfo(value).unwrap();

    if (res._id) {
      toast.success(`${res.name}'s information updated successfully.`);
      setOpen((prev) => !prev);
    }

    if (error) {
      const errorDetails = error as IGenericErrorMessage;
      toast.error(errorDetails.message);
    }
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
            name={name}
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
            disabled={isLoading}
          >
            {isLoading ? (
              <CircularProgress size={24} sx={{ color: "#fff" }} />
            ) : (
              "Update"
            )}
          </Button>
        </PandaForm>
      </Box>
    </CustomModal>
  );
}
