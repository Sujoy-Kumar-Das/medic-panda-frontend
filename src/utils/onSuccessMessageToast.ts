import { toast } from "sonner";

export const onSuccessMessageToast = (message: string) => {
  toast.success(message || "Operation was successful.");
};
