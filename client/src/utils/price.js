export const calculatePrice = (items) => {
  const subtotal = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );
  const shipping = subtotal > 50 || subtotal === 0 ? 0 : 5;
  const tax = subtotal * 0.1;
  const total = subtotal + shipping + tax;

  return { subtotal, shipping, tax, total };
};

export const formatUSD = (amount) => {
  return `$${Number(amount).toFixed(2)}`;
};
