import PandaForm from "@/components/form/PandaForm";
import PandaInputField from "@/components/form/PandaInputField";
import CancelButton from "@/components/ui/buttons/CancelButton";
import useEditReply from "@/hooks/useEditReply";
import { replyValidationSchema } from "@/schemas/reply.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoadingButton } from "@mui/lab";
import { Stack } from "@mui/material";

export default function EditReplyForm({
  replyId,
  onClose,
  defaultValues,
}: {
  replyId: string;
  onClose: () => void;
  defaultValues: { reply: string };
}) {
  const { handlerFunc, isLoading } = useEditReply(replyId, onClose);

  return (
    <PandaForm
      onSubmit={handlerFunc}
      resolver={zodResolver(replyValidationSchema)}
      defaultValues={defaultValues}
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
          loadingIndicator={"Updating Reply..."}
          sx={{
            fontWeight: "bold",
          }}
          loading={isLoading}
        >
          Update Reply
        </LoadingButton>
      </Stack>
    </PandaForm>
  );
}
