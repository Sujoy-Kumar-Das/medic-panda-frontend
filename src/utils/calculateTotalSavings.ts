const calculateTotalSavings = (
  originalPrice: string | number,
  orderPrice: string | number,
  quantity: string | number
) => {
  const savings = Number(originalPrice) - Number(orderPrice);
  const hasSavings = savings > 0;
  const totalSavings = savings * Number(quantity);

  return { savings, totalSavings, hasSavings };
};

export default calculateTotalSavings;
