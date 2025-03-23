import { useUpdateUserInfoMutation } from "@/redux/api/user.api";
import { imageUploader } from "@/utils/imageUploader";
import React, { useState } from "react";
import { toast } from "sonner";
import { useApiMutationResponseHandler } from "./useApiMutationResponseHandler";

export default function useUploadImage() {
  // update user redux hook
  const [updateCustomerImage, apiResponse] = useUpdateUserInfoMutation();
  const [loading, setLoading] = useState(false);

  // Change image handler
  const handlerFunc = async (event: React.ChangeEvent<HTMLInputElement>) => {
    try {
      setLoading(true);
      const file = event.target.files?.[0];

      if (!file) {
        toast.error("No file selected. Please choose an image.");
        return;
      }

      const imageURL = await imageUploader(file);

      if (!imageURL) {
        toast.error("Image upload failed. Please try again.");
        return;
      }

      await updateCustomerImage({ photo: imageURL });
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  useApiMutationResponseHandler({
    apiResponse,
    successMessage: "Profile image uploaded successfully.",
  });

  return {
    handlerFunc,
    isLoading: loading || apiResponse.isLoading,
  };
}
