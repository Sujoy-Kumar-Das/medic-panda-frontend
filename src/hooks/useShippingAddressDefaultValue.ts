export default function useShippingAddressDefaultValue(userInfo: any) {
  const defaultValues = {
    name: userInfo?.name || "",
    email: userInfo?.user?.email || "",
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
