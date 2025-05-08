"use client";
import { useMemo } from "react";
import { useAuth } from "./useAuth";

export default function useUserDefaultValue() {
  // get the user from auth
  const { user } = useAuth();

  const defaultValues = useMemo(() => {
    if (user) {
      return {
        name: user?.name || "",
        email: user?.email || "",
        contact: user?.contact || "",
        address: {
          street: user?.address?.street || "",
          city: user?.address?.city || "",
          postalCode: String(user?.address?.postalCode) || "",
          country: user?.address?.country || "",
        },
      };
    }
  }, [user]);

  return { defaultValues };
}
