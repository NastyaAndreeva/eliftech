const calculateTotalValue = (orders) => {
  return orders.reduce((acc, el) => acc + el.price * el.quantity, 0);
};

export default calculateTotalValue;
