import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { Input } from "@mui/material";
import Button from "@mui/material/Button";
import { SxProps } from "@mui/material/styles";
import { Controller, useFormContext } from "react-hook-form";

type TProps = {
  name: string;
  label?: string;
  sx?: SxProps;
};

export default function PandaFileUploader({ name, label, sx }: TProps) {
  const { control } = useFormContext();
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value, ...field } }) => (
        <Button
          component="label"
          variant="contained"
          startIcon={<CloudUploadIcon />}
          sx={{ ...sx }}
          fullWidth
        >
          {label || "Upload file"}
          <Input
            {...field}
            type="file"
            onChange={(e) =>
              onChange((e?.target as HTMLInputElement).files?.[0])
            }
            style={{ display: "none" }}
          />
        </Button>
      )}
    />
  );
}
