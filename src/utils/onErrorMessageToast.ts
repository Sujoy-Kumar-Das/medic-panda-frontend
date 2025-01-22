import { IGenericErrorResponse } from "@/types";
import { toast } from "sonner";

export const onErrorMessageToast = (error: IGenericErrorResponse) => {
  const errorMessage = error?.message || "An unexpected error occurred.";
  toast.error(errorMessage);
};
