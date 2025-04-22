"use client";
import { useApiMutationResponseHandler } from "@/hooks/useApiMutationResponseHandler";
import { useCreateProductMutation } from "@/redux/api";
import { imageUploader } from "@/utils/imageUploader";
import { useState } from "react";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

export default function useCreateProductHook(onClose: () => void) {
  const [uploading, setUploading] = useState(false);
  const [createProduct, apiResponse] = useCreateProductMutation();

  const handlerFunc = async (data: FieldValues) => {
    setUploading(true);
    try {
      const thumbnailURL = await imageUploader(data.product.thumbnail);
      data.product.thumbnail = thumbnailURL;
      await createProduct(data);
    } catch (error) {
      toast.message("Failed to create product.");
    } finally {
      setUploading(false);
    }
  };

  useApiMutationResponseHandler({
    apiResponse,
    successMessage: "Product created successfully.",
    onClose,
  });

  return {
    handlerFunc,
    ...apiResponse,
    isLoading: uploading || apiResponse.isLoading,
  };
}
