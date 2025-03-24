import CancelButton from "@/components/ui/buttons/CancelButton";

export default function ProductDeleteCancelButton({
  onClose,
}: {
  onClose: () => void;
}) {
  return (
    <CancelButton
      cancelMessage="You Canceled the deletion operation"
      onClose={onClose}
    >
      Cancel
    </CancelButton>
  );
}
