"use client";
import { useGetAllManufactureQuery } from "@/redux/api";
import { IManufacturer } from "@/types/Imanufacturer.type";
import { useMemo } from "react";

export default function useSelectManufacture() {
  const { data } = useGetAllManufactureQuery(undefined);

  const items = useMemo(
    () =>
      data?.result?.map((item: IManufacturer) => ({
        id: item._id,
        title: item.name,
        value: item._id,
      })) ?? [],
    [data]
  );

  return { items };
}
