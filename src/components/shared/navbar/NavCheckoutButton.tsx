import { useAuth } from "@/hooks/useAuth";
import { Button } from "@mui/material";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

interface NavCheckoutButtonProps {
  id: string;
  onClose: () => void;
}

export default function NavCheckoutButton({
  id,
  onClose,
}: NavCheckoutButtonProps) {
  const { user } = useAuth();
  const router = useRouter();

  const handleCheckout = () => {
    const userId = user?.id;
    if (!user && !userId) {
      toast.error("Please login for checkout.");
      router.push(`/dashboard/user/check-out/${id}`);
      onClose();
      return;
    }

    router.push(`/dashboard/user/check-out/${id}`);
  };
  return (
    <Button
      onClick={handleCheckout}
      variant="contained"
      color="primary"
      size="small"
      sx={{ px: 1 }}
    >
      Checkout
    </Button>
  );
}
