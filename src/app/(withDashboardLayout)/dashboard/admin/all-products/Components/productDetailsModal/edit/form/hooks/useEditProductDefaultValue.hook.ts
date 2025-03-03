import { useGetSingleProductQuery } from "@/redux/api/product.api";
import dayjs from "dayjs";

// todo fetch data with cancel and modal close button problem

export default function useEditProductDefaultValue({ id }: { id: string }) {
  const { data, ...apiResponse } = useGetSingleProductQuery(id);

  const discount = {
    percentage: data?.product?.discount?.percentage,
    startDate: data?.product?.discount?.startDate,
    endDate: data?.product?.discount?.endDate,
    startTime: data?.product?.discount?.startTime
      ? dayjs(data.product.discount.startTime, "HH:mm")
      : null,
    endTime: data?.product?.discount?.endTime
      ? dayjs(data.product.discount.endTime, "HH:mm")
      : null,
  };

  const productDetail = {
    description: data?.description,
    stock: data?.stock,
  };

  const product = {
    name: data?.product?.name,
    thumbnail: data?.product?.thumbnail,
    category: data?.product?.category?._id,
    manufacturer: data?.product?.manufacturer?._id,
    price: data?.product?.price,
    discount,
  };

  const defaultValues = { product, productDetail };

  return { defaultValues, ...apiResponse };
}
