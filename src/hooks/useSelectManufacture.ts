"use client";
import { useGetAllManufactureQuery } from "@/redux/api";
import { IManufacturer } from "@/types/Imanufacturer.type";
import { useMemo } from "react";

export default function useSelectManufacture() {
  const { data, isLoading } = useGetAllManufactureQuery(undefined);

  const items = useMemo(
    () =>
      data?.map((item: IManufacturer) => ({
        id: item._id,
        title: item.name,
        value: item._id,
      })) ?? [],
    [data]
  );

  return { items };
}
