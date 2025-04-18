export default function useUserDefaultValue(userInfo: any) {
  const defaultValues = {
    name: userInfo?.name || "",
    email: userInfo?.email || "",
    contact: userInfo?.contact || "",
    address: {
      street: userInfo?.address?.street || "",
      city: userInfo?.address?.city || "",
      postalCode: userInfo?.address?.postalCode || "",
      country: userInfo?.address?.country || "",
    },
  };

  return { defaultValues };
}
