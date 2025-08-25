"use client";
import { useGetSingleProductQuery } from "@/redux/api";
import { skipToken } from "@reduxjs/toolkit/query";
import dayjs from "dayjs";

export default function useProductDefaultValue({ id }: { id: string | null }) {
  const { data, ...apiResponse } = useGetSingleProductQuery(id ?? skipToken);

  const productData = data?.product ?? {};

  // const discount = {
  //   percentage: productData.discount?.percentage ?? 0,
  //   startDate: productData.discount?.startDate ?? "",
  //   endDate: productData.discount?.endDate ?? "",
  //   startTime: productData.discount?.startTime
  //     ? dayjs(productData.discount.startTime, "HH:mm")
  //     : null,
  //   endTime: productData.discount?.endTime
  //     ? dayjs(productData.discount.endTime, "HH:mm")
  //     : null,
  // };

  const discount = productData.discount
    ? {
        percentage: productData.discount.percentage ?? 0,
        startDate: productData.discount.startDate
          ? dayjs(productData.discount.startDate).format("YYYY-MM-DD")
          : "",
        endDate: productData.discount.endDate
          ? dayjs(productData.discount.endDate).format("YYYY-MM-DD")
          : "",
        startTime: productData.discount.startTime
          ? dayjs(productData.discount.startTime, "HH:mm").format("HH:mm")
          : "",
        endTime: productData.discount.endTime
          ? dayjs(productData.discount.endTime, "HH:mm").format("HH:mm")
          : "",
      }
    : undefined;

  const productDetail = {
    shortDescription: data?.shortDescription ?? "",
    detailedDescription: data?.detailedDescription ?? "",
    stock: data?.stock ?? 0,
  };

  const product = {
    name: productData.name ?? "",
    category: productData.category?._id ?? "",
    manufacturer: productData.manufacturer?._id ?? "",
    price: productData.price ?? 0,
    discount,
  };

  const defaultValues = { product, productDetail };

  return { defaultValues, ...apiResponse };
}
