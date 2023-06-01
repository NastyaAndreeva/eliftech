import { HistoryItemStyled } from "./HistoryOrders.styled";

const HistoryItem = ({ item }) => {
  const {
    date,
    _id,
    customer: { name },
    total,
  } = item;
  return (
    <tr key={_id}>
      <HistoryItemStyled>{_id}</HistoryItemStyled>
      <HistoryItemStyled>{date.slice(0, 10)}</HistoryItemStyled>
      <HistoryItemStyled>{name}</HistoryItemStyled>
      <HistoryItemStyled>{total}</HistoryItemStyled>
    </tr>
  );
};

export default HistoryItem;
