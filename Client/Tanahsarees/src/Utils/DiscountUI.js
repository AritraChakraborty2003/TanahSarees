export const DiscountUI = (price, discount) => {
  const value = price / (1 - discount / 100);
  return `₹ ${value.toFixed(2)}`;
};
