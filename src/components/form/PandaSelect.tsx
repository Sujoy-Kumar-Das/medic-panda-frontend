import { MenuItem, SxProps, TextField } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

interface IItem {
  id: string;
  title: string;
  value: string;
}

interface ITextField {
  name: string;
  size?: "small" | "medium";
  placeholder?: string;
  label?: string;
  required?: boolean;
  fullWidth?: boolean;
  sx?: SxProps;
  items: IItem[];
}

const PandaSelect = ({
  items,
  name,
  label,
  size = "small",
  required,
  fullWidth = true,
  sx,
}: ITextField) => {
  const { control, formState } = useFormContext();
  const isError = formState.errors[name] !== undefined;

  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <TextField
          {...field}
          sx={{
            ...sx,
          }}
          size={size}
          select
          label={label}
          required={required}
          fullWidth={fullWidth}
          error={isError}
          helperText={
            isError ? (formState.errors[name]?.message as string) : ""
          }
        >
          {items?.map((item) => (
            <MenuItem key={item.id} value={item.value}>
              {item.title}
            </MenuItem>
          ))}
        </TextField>
      )}
    />
  );
};

export default PandaSelect;
