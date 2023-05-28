import { useState } from "react";
import { OrderItem } from "./OrderList. styled";

const OrderList = ({ orders }) => {
  const [quantity, setQuanity] = useState(0);
  console.log("quantity: ", quantity);
  return (
    <ul>
      {orders.map((order) => (
        <OrderItem key={order.name}>
          <p>{order.name}</p>
          <input
            type="number"
            value={order.quantity}
            onChange={(e) => setQuanity(e.target.value)}
          />
        </OrderItem>
      ))}
    </ul>
  );
};

export default OrderList;
