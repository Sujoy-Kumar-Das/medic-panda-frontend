export const createProductDefaultValue = {
  product: {
    name: "",
    price: 0,
    category: "",
    manufacturer: "",
    thumbnail: null as File | null,
  },
  productDetail: {
    stock: 0,
    shortDescription: "",
    detailedDescription: "",
  },
  discount: {
    percentage: 0,
    discountStatus: false,
    discountPrice: 0,
    startDate: "",
    endDate: "",
    startTime: "",
    endTime: "",
  },
};
