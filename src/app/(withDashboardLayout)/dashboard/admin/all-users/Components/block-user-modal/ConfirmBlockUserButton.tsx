import LoaderButton from "@/components/ui/buttons/LoaderButton";
import useBlockUser from "@/hooks/useBlockUser";

interface BlockUserButtonProps {
  userId: string;
  onClose: () => void;
}

const ConfirmBlockUserButton = ({ userId, onClose }: BlockUserButtonProps) => {
  const { handleFunc, isLoading } = useBlockUser();

  const handleBlockUser = async () => {
    await handleFunc(userId);
    onClose();
  };
  return (
    <LoaderButton
      loadingText="Blocking..."
      isLoading={isLoading}
      disabled={isLoading}
      onClick={handleBlockUser}
    >
      Block User
    </LoaderButton>
  );
};

export default ConfirmBlockUserButton;
