import { useEffect, useState } from "react";
import { getOrders } from "../../api";
import HistoryOrders from "../../components/HistoryOrders";
import SearchBar from "../../components/SearchBar";
import { Container } from "../../components/shared/Container.styled";
import OrderById from "../../components/OrderById/OrderById";

const History = () => {
  const [orders, setOrders] = useState([]);
  const [order, setOrder] = useState(null);

  useEffect(() => {
    getOrders(setOrders);
  }, []);

  return (
    <Container>
      <SearchBar setOrder={setOrder} />
      {order && <OrderById order={order} />}
      <h2>All orders</h2>
      <HistoryOrders orders={orders} />
    </Container>
  );
};

export default History;
