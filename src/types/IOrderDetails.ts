interface ProductInfo {
  name: string;
  price: string;
  quantity: number;
  thumbnail: string;
}

interface PaymentInfo {
  method: string;
  transactionId: string;
  amount: string;
  status: string;
}

interface UserInfo {
  name: string;
  email: string;
  address: string;
}

export interface IModifiedOrderData {
  orderId: string;
  status: string;
  createdAt: string;
  shiftingAddress: string;
  contact: string;
  payment: PaymentInfo;
  user: UserInfo;
  product: ProductInfo;
}

export interface IOrderInvoicePDF {
  orderDetails: {
    quantity: number | undefined;
    totalAmount: number | undefined;
    orderPrice: number | undefined;
    originalPrice: number | undefined;
    customerName: string | undefined;
    email: string | undefined;
    id: string | undefined;
    shippingAddress: string | undefined;
    orderDate: string | undefined;
    productName: string | undefined;
    status: string | undefined;
    image: string;
  };
}
