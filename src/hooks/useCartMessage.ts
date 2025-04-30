import { useMemo } from "react";

export default function useCartMessage({
  isLoading,
  length,
}: {
  isLoading: boolean;
  length: number;
}) {
  const message = useMemo(() => {
    if (isLoading) {
      return "Loading Carts...";
    } else if (!length) {
      return "Your Cart Is Empty.";
    } else {
      return "";
    }
  }, [isLoading, length]);

  return { message };
}
