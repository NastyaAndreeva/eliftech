import HistoryOrderList from "../HistoryOrderList/";

const OrderById = ({ order }) => {
  return (
    <div>
      <p>
        <b>Date:</b> {order?.date.slice(0, 10)}
      </p>
      <p>
        <b>Name:</b> {order?.customer?.name}
      </p>
      <p>
        <b>Total amount:</b> {order?.total} ₴
      </p>
      <p>
        <b>Products:</b>
        <HistoryOrderList orders={order?.orders} />
      </p>
    </div>
  );
};

export default OrderById;
