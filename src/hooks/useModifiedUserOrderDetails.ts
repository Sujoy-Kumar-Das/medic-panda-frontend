import { IModifiedOrderDetailsData } from "@/types";
import formatOrderDate from "@/utils/format.order.date";
import { useMemo } from "react";

export default function useModifiedUserOrderDetails({
  orderDetails,
}: {
  orderDetails: any;
}) {
  const modifiedOrderData = useMemo<IModifiedOrderDetailsData | null>(() => {
    if (!orderDetails) return null;

    const shippingAddress = `${orderDetails.order?.shippingInfo?.address?.street}-${orderDetails.order?.shippingInfo?.address?.city}-${orderDetails.order?.shippingInfo?.address?.postalCode}-${orderDetails.order?.shippingInfo?.address?.country}`;

    return {
      orderInfo: {
        orderId: orderDetails.order?._id,
        shippingInfo: {
          name: orderDetails.order?.shippingInfo?.name,
          email: orderDetails.order?.shippingInfo?.email,
          contact: orderDetails.order?.shippingInfo?.contact,
          address: shippingAddress,
        },
        quantity: Number(orderDetails?.order?.quantity),
        totalAmount: Number(orderDetails.order?.total).toFixed(2),
        orderDate: formatOrderDate(orderDetails.order?.createdAt),
        status: orderDetails.order?.status,
      },

      productInfo: {
        name: orderDetails.order?.product?.name,
        image: orderDetails.order?.product?.thumbnail,
        quantity: orderDetails.order?.quantity,
        originalPrice: orderDetails?.order?.product?.price,
        orderPrice: (
          Number(orderDetails.order?.total) /
          Number(orderDetails.order?.quantity)
        ).toFixed(2),
      },

      userInfo: {
        name: orderDetails.userInfo?.name,
        email: orderDetails.userInfo?.user?.email,
        contact: orderDetails.userInfo?.contact,
        address: `${orderDetails.userInfo?.address?.street}-${orderDetails.userInfo?.address?.postalCode}-${orderDetails.userInfo?.address?.city}-${orderDetails.userInfo?.address?.country}`,
      },
    };
  }, [orderDetails]);

  return { modifiedOrderData };
}
