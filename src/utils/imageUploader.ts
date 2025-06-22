export const imageUploader = async (
  file: File
): Promise<string | undefined> => {
  if (!file) {
    return undefined;
  }

  const formData = new FormData();
  formData.append("image", file);

  try {
    const res = await fetch(
      `https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMAGE_UPLOAD_API_KEY}`,
      {
        method: "POST",
        body: formData,
      }
    );
    const data = await res.json();

    if (data.success) {
      return data.data.display_url;
    } else {
      throw new Error("Something went wrong");
    }
  } catch (error) {
    throw new Error("Something went wrong.");
  }
};
