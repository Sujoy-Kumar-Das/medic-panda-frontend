import CancelButton from "@/components/ui/buttons/CancelButton";

interface DeleteUserCancelButtonProps {
  onClose: () => void;
}

export default function DeleteUserCancelButton({
  onClose,
}: DeleteUserCancelButtonProps) {
  return (
    <CancelButton
      onClose={onClose}
      cancelMessage={`You Canceled Deleting the user`}
      label="Cancel"
    />
  );
}
