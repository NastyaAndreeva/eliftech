import { useState } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import {
  ChangeQuantityBtn,
  OrderItemStyled,
  OrderItemTitle,
  QuantityContainer,
  ValueBox,
} from "./OrderList. styled";

const OrderItem = ({ order, setTotal }) => {
  const [value, setValue] = useState(order.quantity);
  const handleButtonClick = (isAdd) => {
    setValue((s) => (isAdd ? s + 1 : s - 1));
    const orders = JSON.parse(localStorage.getItem("orders"));
    const updatedOrders = orders.map((el) =>
      el.name === order.name
        ? { ...el, quantity: isAdd ? el.quantity + 1 : el.quantity - 1 }
        : el
    );

    const totalValue = updatedOrders.reduce(
      (acc, el) => acc + el.price * el.quantity,
      0
    );
    setTotal(totalValue);
    localStorage.setItem("orders", JSON.stringify(updatedOrders));
  };

  const onDeleteBtn = (name) => {
    const orders = JSON.parse(localStorage.getItem("orders"));
    const updatedOrders = orders.filter((el) => el.name !== name);

    localStorage.setItem("orders", JSON.stringify(updatedOrders));
  };
  return (
    <OrderItemStyled key={order.name}>
      <img src={order.image} alt={order.name} width="150px" height="150px" />
      <OrderItemTitle>{order.name}</OrderItemTitle>
      <QuantityContainer>
        <ChangeQuantityBtn
          type="button"
          onClick={() => handleButtonClick(false)}
          disabled={value === 1}
        >
          <AiOutlineMinus />
        </ChangeQuantityBtn>
        <ValueBox>{value}</ValueBox>
        <ChangeQuantityBtn
          type="button"
          onClick={() => handleButtonClick(true)}
        >
          <AiOutlinePlus />
        </ChangeQuantityBtn>
        <ChangeQuantityBtn
          onClick={() => onDeleteBtn(order.name)}
          style={{ marginLeft: "15px" }}
        >
          <MdDelete />
        </ChangeQuantityBtn>
      </QuantityContainer>
    </OrderItemStyled>
  );
};

export default OrderItem;
