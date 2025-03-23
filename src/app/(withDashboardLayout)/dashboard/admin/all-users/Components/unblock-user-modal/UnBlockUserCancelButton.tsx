import CancelButton from "@/components/ui/buttons/CancelButton";

interface UnBlockUserCancelButtonProps {
  onClose: () => void;
}

export default function UnBlockUserCancelButton({
  onClose,
}: UnBlockUserCancelButtonProps) {
  return (
    <CancelButton onClose={onClose} cancelMessage="Unblock action canceled.">
      Cancel
    </CancelButton>
  );
}
