import { Box, Rating, SxProps, Typography } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

type TRatingInputProps = {
  name: string;
  label?: string;
  size?: "small" | "medium" | "large";
  sx?: SxProps;
  required?: boolean;
};

const PandaRatingField = ({
  name,
  label,
  size = "medium",
  sx,
  required = false,
}: TRatingInputProps) => {
  const { control } = useFormContext();
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <Box sx={{ ...sx }}>
          {label && (
            <Typography
              variant="body1"
              sx={{ mb: 1, fontWeight: "bold", color: "text.primary" }}
            >
              {label}
            </Typography>
          )}
          <Rating
            {...field}
            value={field.value || 0}
            onChange={(_, value) => field.onChange(value)}
            size={size}
          />
          {error && (
            <Typography variant="caption" color="error">
              {error.message}
            </Typography>
          )}
        </Box>
      )}
    />
  );
};

export default PandaRatingField;
