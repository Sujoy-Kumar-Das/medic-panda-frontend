import { onErrorMessageToast } from "./onErrorMessageToast";
import { onSuccessMessageToast } from "./onSuccessMessageToast";

interface IApiResponse {
  data?: any;
  error?: any;
  isError: boolean;
  isSuccess: boolean;
  isLoading: boolean;
  status: string;
}

interface IShowNotification {
  apiResponse: IApiResponse;
  successMessage: string;
}

export default function showNotification({
  apiResponse,
  successMessage,
}: IShowNotification) {
  const { isError, isSuccess, error } = apiResponse;
  if (!isError && !isSuccess) return;

  if (isError) {
    onErrorMessageToast(error);
  }

  if (isSuccess) {
    onSuccessMessageToast(successMessage);
  }
}
