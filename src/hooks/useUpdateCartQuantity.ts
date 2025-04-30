import { ChangeEvent, useState } from "react";

interface useUpdateCartQuantityProps {
  initialValue: number;
}

export default function useUpdateCartQuantity({
  initialValue,
}: useUpdateCartQuantityProps) {
  const [quantity, setQuantity] = useState(0);

  const handleDecrease = () => {
    if (quantity > 0) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  const handleIncrease = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newQuantity = parseInt(event.target.value, 10);
    setQuantity(isNaN(newQuantity) ? 0 : newQuantity);
  };

  return { quantity, handleIncrease, handleDecrease, handleInputChange };
}
