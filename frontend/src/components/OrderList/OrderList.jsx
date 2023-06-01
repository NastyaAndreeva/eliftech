import OrderItem from "./OrderItem";
import { OrderListStyled } from "./OrderList. styled";

const OrderList = ({ setTotal }) => {
  const orders = JSON.parse(localStorage.getItem("orders")) || [];
  return (
    <OrderListStyled>
      {orders.map((order) => (
        <OrderItem order={order} setTotal={setTotal} key={order.name} />
      ))}
    </OrderListStyled>
  );
};

export default OrderList;
