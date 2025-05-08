import { SxProps, TextField } from "@mui/material";
import { ChangeEvent } from "react";
import { Controller, useFormContext } from "react-hook-form";

type TInputProps = {
  name: string;
  label?: string;
  type?: string;
  size?: "small" | "medium";
  fullWidth?: boolean;
  sx?: SxProps;
  placeholder?: string;
  required?: boolean;
  multiline?: boolean;
  rows?: number;
  onChange?: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  value?: string;
};

const PandaInputField = ({
  name,
  label,
  type = "text",
  size = "small",
  fullWidth,
  sx,
  required,
  placeholder,
  multiline = false,
  rows = 1,
  onChange,
  value,
}: TInputProps) => {
  const { control } = useFormContext();
  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState: { error } }) => {
        const handleChange = (
          e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
        ) => {
          field.onChange(e);
          onChange?.(e);
        };

        return (
          <TextField
            {...field}
            onChange={handleChange}
            value={value ?? field.value}
            sx={{ ...sx }}
            label={label}
            type={type}
            variant="outlined"
            size={size}
            fullWidth={fullWidth}
            placeholder={placeholder}
            required={required}
            error={!!error?.message}
            helperText={error?.message}
            multiline={multiline}
            rows={rows}
          />
        );
      }}
    />
  );
};

export default PandaInputField;
