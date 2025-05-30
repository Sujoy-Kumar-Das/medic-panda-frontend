import PandaForm from "@/components/form/PandaForm";
import PandaInputField from "@/components/form/PandaInputField";
import CancelButton from "@/components/ui/buttons/CancelButton";
import useAddReply from "@/hooks/useAddReply";
import { replyValidationSchema } from "@/schemas/reply.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoadingButton } from "@mui/lab";
import { Stack } from "@mui/material";

interface AddReplyFormProps {
  reviewId: string;
  onClose: () => void;
}

export default function AddReplyForm({ reviewId, onClose }: AddReplyFormProps) {
  const { handlerFunc, isLoading } = useAddReply(reviewId, onClose);
  return (
    <PandaForm
      onSubmit={handlerFunc}
      resolver={zodResolver(replyValidationSchema)}
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
        <CancelButton
          cancelMessage="You Canceled Add Review."
          onClose={onClose}
        >
          Cancel
        </CancelButton>
        <LoadingButton
          type="submit"
          variant="contained"
          disabled={isLoading}
          loadingIndicator={"Updating Reply..."}
          sx={{
            fontWeight: "bold",
          }}
          loading={isLoading}
        >
          Reply
        </LoadingButton>
      </Stack>
    </PandaForm>
  );
}
