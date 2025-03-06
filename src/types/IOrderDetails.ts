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
