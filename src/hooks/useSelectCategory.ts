"use client";
import { useGetAllCategoriesQuery } from "@/redux/api";
import { ICategory } from "@/types";
import { useMemo } from "react";

export default function useSelectCategory() {
  const { data } = useGetAllCategoriesQuery(undefined);

  const items = useMemo(
    () =>
      data?.result?.map((item: ICategory) => ({
        id: item._id,
        title: item.name,
        value: item._id,
      })) ?? [],
    [data]
  );

  return { items };
}
