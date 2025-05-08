"use client";

import { ChangeEvent } from "react";
import { useFormContext } from "react-hook-form";

interface useUpdateFieldQuantityValueProps {
  fieldName: string;
}

export default function useUpdateFieldQuantityValue({
  fieldName,
}: useUpdateFieldQuantityValueProps) {
  const { getValues, setValue, watch } = useFormContext();

  const value = watch(fieldName);

  const handleIncrease = () => {
    const current = Number(getValues(fieldName)) || 1;
    setValue(fieldName, current + 1);
  };

  const handleDecrease = () => {
    const current = Number(getValues(fieldName)) || 1;
    if (current > 1) {
      setValue(fieldName, current - 1);
    }
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const value = Number(e.target.value);
    setValue(fieldName, value > 0 ? value : 1);
  };

  return {
    value,
    handleIncrease,
    handleDecrease,
    handleChange,
  };
}
