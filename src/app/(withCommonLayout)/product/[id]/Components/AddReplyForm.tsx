import PandaForm from "@/components/form/PandaForm";
import PandaInputField from "@/components/form/PandaInputField";
import CancelButton from "@/components/ui/buttons/CancelButton";
import useAddReply from "@/hooks/useAddReply";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoadingButton } from "@mui/lab";
import { Stack } from "@mui/material";
import { z } from "zod";

const validateSchema = z.object({
  reply: z
    .string({
      required_error: "Reply is required.",
      invalid_type_error: "Reply must be string.",
    })
    .min(3, { message: "Reply is required." }),
});

export default function AddReplyForm({
  reviewId,
  onClose,
}: {
  reviewId: string;
  onClose: () => void;
}) {
  const { handlerFunc, isLoading } = useAddReply(reviewId, onClose);
  return (
    <PandaForm
      onSubmit={handlerFunc}
      resolver={zodResolver(validateSchema)}
      defaultValues={{ reply: "" }}
    >
      <PandaInputField
        name="reply"
        label="Your Reply"
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

      <Stack
        direction={"row"}
        justifyContent={"flex-end"}
        alignItems={"center"}
        gap={1}
      >
        <CancelButton onClose={onClose}>Cancel</CancelButton>
        <LoadingButton
          type="submit"
          variant="contained"
          disabled={isLoading}
          loadingIndicator={"Updating Review..."}
          sx={{
            fontWeight: "bold",
          }}
          loading={isLoading}
        >
          Update Review
        </LoadingButton>
      </Stack>
    </PandaForm>
  );
}
