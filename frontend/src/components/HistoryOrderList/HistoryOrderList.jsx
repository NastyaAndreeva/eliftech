import {
  HistoryOrderItem,
  OrderDetail,
  OrderDetailTitle,
} from "./HistoryOrderList.styled";

const HistoryOrderList = ({ orders }) => {
  return (
    <ul>
      {orders.map(({ name, image, quantity, price }) => (
        <HistoryOrderItem key={name}>
          <img src={image} alt={name} width="100px" height="100px" />
          <OrderDetail>
            <OrderDetailTitle>Title</OrderDetailTitle> <span>{name}</span>
          </OrderDetail>
          <OrderDetail>
            <OrderDetailTitle>Quantity</OrderDetailTitle>
            <span>{quantity}</span>
          </OrderDetail>
          <OrderDetail>
            <OrderDetailTitle>Price</OrderDetailTitle> <span>{price} ₴</span>
          </OrderDetail>
          <OrderDetail>
            <OrderDetailTitle>Total</OrderDetailTitle>{" "}
            <span>{price * quantity} ₴</span>
          </OrderDetail>
        </HistoryOrderItem>
      ))}
    </ul>
  );
};

export default HistoryOrderList;
