import CancelButton from "@/components/ui/buttons/CancelButton";

interface BlockUserCancelButtonProps {
  onClose: () => void;
}

export default function BlockUserCancelButton({
  onClose,
}: BlockUserCancelButtonProps) {
  return (
    <CancelButton
      onClose={onClose}
      label="Cancel"
      cancelMessage="You Canceled blocking the user."
    />
  );
}
