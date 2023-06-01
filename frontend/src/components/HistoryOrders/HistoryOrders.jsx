import HistoryItem from "./HistoryItem";
import { HistoryItemHeadStyled, HistoryTable } from "./HistoryOrders.styled";

const HistoryOrders = ({ orders }) => {
  return (
    <HistoryTable>
      <thead>
        <tr>
          <HistoryItemHeadStyled>Order ID</HistoryItemHeadStyled>
          <HistoryItemHeadStyled>Date</HistoryItemHeadStyled>
          <HistoryItemHeadStyled>Customer name</HistoryItemHeadStyled>
          <HistoryItemHeadStyled>Total</HistoryItemHeadStyled>
        </tr>
      </thead>
      <tbody>
        {orders.map((order) => (
          <HistoryItem item={order} key={order._id} />
        ))}
      </tbody>
    </HistoryTable>
  );
};

export default HistoryOrders;
