import { useGetSingleOrderForAdminQuery } from "@/redux/api/order.api";
import { IModifiedOrderData } from "@/types/IOrderDetails";
import formatOrderDate from "@/utils/format.order.date";
import { useEffect, useState } from "react";

export default function useOrderDataByAdmin(id: string) {
  const { data, isLoading } = useGetSingleOrderForAdminQuery(id);
  const [orderData, setOrderData] = useState<IModifiedOrderData | null>(null);

  useEffect(() => {
    if (data?.order) {
      console.log(data.order.product.name);

      setOrderData({
        orderId: data.order._id ?? "N/A",
        status: data.order.status ?? "N/A",
        createdAt: formatOrderDate(data.order.createdAt) ?? "N/A",
        shiftingAddress:
          `${data.order.shippingAddress?.street ?? ""} ${
            data.order.shippingAddress?.postalCode ?? ""
          } ${data.order.shippingAddress?.city ?? ""} ${
            data.order.shippingAddress?.country ?? ""
          }`.trim() || "N/A",
        contact: data.order.shippingAddress?.contact ?? "N/A",

        payment: {
          method: data.paymentInfo?.method ?? "N/A",
          transactionId: data.paymentInfo?.transactionId ?? "N/A",
          amount: data.order.total ? `$${data.order.total}` : "N/A",
          status: data.paymentInfo ? "PAID" : "NOT PAID",
        },

        user: {
          name: data.userInfo?.name ?? "N/A",
          email: data.userInfo?.user?.email ?? "N/A",
          address:
            `${data.userInfo?.shippingAddress?.street ?? ""} ${
              data.userInfo?.shippingAddress?.postalCode ?? ""
            } ${data.userInfo?.shippingAddress?.city ?? ""} ${
              data.userInfo?.shippingAddress?.country ?? ""
            }`.trim() || "N/A",
        },

        product: {
          name: data.order.product.name,
          price: data?.order?.product.price ?? "N/A",
          quantity: data?.order?.quantity ?? 0,
          thumbnail: data?.order?.product.thumbnail ?? "",
        },
      });
    }
  }, [data]);

  return { orderData, isLoading };
}
