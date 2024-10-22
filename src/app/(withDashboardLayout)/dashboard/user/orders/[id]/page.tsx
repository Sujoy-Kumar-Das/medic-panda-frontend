"use client";
import Loader from "@/components/shared/loader/Loader";
import { useGetSingleOrderQuery } from "@/redux/api/order.api";
import { IGenericErrorResponse, IOrderDetails } from "@/types";
import formatOrderDate from "@/utils/format.order.date";
import { useEffect, useState } from "react";
import OrderDetailsWithHOC from "./Components/OrderDetailsHOC";

export default function OrderDetailsPage({
  params,
}: {
  params: { id: string };
}) {
  const [orderDetails, setOrderDetails] = useState<IOrderDetails | null>(null);

  // Redux hook for fetching single order data
  const { data, isLoading, error } = useGetSingleOrderQuery(params.id);

  // Modify the data and set to the state
  useEffect(() => {
    if (data) {
      const orderDetailsData: IOrderDetails = {
        id: data.order?._id,
        customerName: data.userInfo?.name,
        status: data.order?.status,
        shippingAddress: `${data.order?.shippingAddress?.street}, ${data.order?.shippingAddress?.postalCode}, ${data.order?.shippingAddress?.city}, ${data.order?.shippingAddress?.country}`,
        totalAmount: Number(data.order?.total),
        orderDate: formatOrderDate(data.order?.createdAt),
        product: {
          name: data.order?.product?.name,
          quantity: data.order?.quantity,
          price: Number(data.order?.total) / Number(data.order?.quantity),
        },
      };
      setOrderDetails(orderDetailsData);
    }
  }, [params.id, data]);

  if (!orderDetails) {
    return <Loader />;
  }

  return (
    <OrderDetailsWithHOC
      data={{ orderDetails, id: params.id }}
      isLoading={isLoading}
      error={error as IGenericErrorResponse}
      noDataLink="/shop"
      noDataText="Shop"
      noDataMessage="You don't have any order now."
    />
  );
}
