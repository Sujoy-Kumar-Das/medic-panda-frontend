import PandaForm from "@/components/form/PandaForm";
import PandaInputField from "@/components/form/PandaInputField";
import CustomModal from "@/components/modal/customModal/CustomModal";
import useUpdateUserInfo from "@/hooks/useUpdateUserInfo";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoadingButton } from "@mui/lab";
import { Button, Stack, Typography } from "@mui/material";
import { AnyZodObject } from "zod";

interface UpdateUserInfoModalProps {
  open: boolean;
  onClose: () => void;
  label: string;
  name: string;
  schema: AnyZodObject;
  type: string;
  defaultValue: Object;
}

export default function UpdateUserInfoModal({
  open,
  onClose,
  label,
  name,
  schema,
  type,
  defaultValue,
}: UpdateUserInfoModalProps) {
  const { handlerFunc, isLoading } = useUpdateUserInfo(onClose);

  return (
    <CustomModal open={open} onClose={onClose}>
      <Typography
        variant="h6"
        textAlign="center"
        mb={2}
        sx={{ fontWeight: "bold", color: "text.primary" }}
      >
        Update Your {label}
      </Typography>

      <PandaForm
        onSubmit={handlerFunc}
        resolver={zodResolver(schema)}
        defaultValues={defaultValue}
      >
        <PandaInputField
          type={type}
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

        <Stack direction={"row"} justifyContent={"flex-end"} gap={1}>
          <Button variant="outlined" onClick={onClose}>
            Cancel
          </Button>
          <LoadingButton
            loading={isLoading}
            loadingIndicator={`Updating ${label}...`}
            type="submit"
          >{`Update ${label} info`}</LoadingButton>
        </Stack>
      </PandaForm>
    </CustomModal>
  );
}
