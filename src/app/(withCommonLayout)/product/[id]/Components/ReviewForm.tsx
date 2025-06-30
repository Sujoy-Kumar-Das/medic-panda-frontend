import PandaForm from "@/components/form/PandaForm";
import PandaInputField from "@/components/form/PandaInputField";
import PandaRatingField from "@/components/form/PandaReview";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoadingButton } from "@mui/lab";
import { Box, Button, Typography } from "@mui/material";
import { FieldValues } from "react-hook-form";
import { AnyZodObject } from "zod";

interface ReviewFormProps {
  defaultValues: object;
  onSubmit: (values: FieldValues) => Promise<void>;
  validationSchema: AnyZodObject;
  isLoading: boolean;
  isReply?: boolean;
  loadingIndicator: string;
  btnText: string;
  onClose?: () => void;
}

export default function ReviewForm({
  onSubmit,
  validationSchema,
  defaultValues,
  isLoading,
  loadingIndicator,
  btnText,
  isReply = false,
  onClose,
}: ReviewFormProps) {
  return (
    <PandaForm
      onSubmit={onSubmit}
      resolver={zodResolver(validationSchema)}
      defaultValues={defaultValues}
    >
      <PandaInputField
        name="comment"
        label="Your Review"
        type="text"
        multiline
        fullWidth
        rows={5}
        sx={{
          mb: 2,
          "& .MuiInputBase-root": {
            borderRadius: 2,
            backgroundColor: "background.default",
          },
        }}
      />

      {!isReply && (
        <Box sx={{ display: "flex", justifyContent: "flex-start", mb: 3 }}>
          <Typography
            component="legend"
            sx={{ mr: 2, color: "text.secondary" }}
          >
            Rating:
          </Typography>
          <PandaRatingField name="rating" />
        </Box>
      )}

      <Box sx={{ display: "flex", gap: 2 }}>
        <Button onClick={onClose && onClose}>Close</Button>
        <LoadingButton
          type="submit"
          variant="contained"
          disabled={isLoading}
          loadingIndicator={loadingIndicator}
          sx={{
            fontWeight: "bold",
          }}
          loading={isLoading}
        >
          {btnText}
        </LoadingButton>
      </Box>
    </PandaForm>
  );
}
