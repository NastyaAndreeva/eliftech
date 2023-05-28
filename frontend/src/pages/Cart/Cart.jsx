import { useContext } from "react";
import ContactForm from "../../components/ContactForm";
import OrderList from "../../components/OrderList/OrderList";
import { ProductsContext } from "../../productsContext";
import { StyledButton } from "../../components/ProductItem/ProductItem.styled";

const Cart = () => {
  const orders = useContext(ProductsContext);
  return (
    <>
      <div style={{ display: "flex" }}>
        <ContactForm />
        <OrderList orders={orders} />
      </div>
      <StyledButton type="submit">Submit</StyledButton>
    </>
  );
};

export default Cart;
