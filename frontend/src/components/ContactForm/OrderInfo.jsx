import OrderList from "../OrderList/OrderList";
import { StyledButton } from "../ProductItem/ProductItem.styled";
import { FooterContactForm, RightSideContactForm } from "./ContactForm.styled";

const OrderInfo = ({ total, setTotal }) => {
  return (
    <RightSideContactForm>
      <OrderList setTotal={setTotal} />
      <FooterContactForm>
        <p>
          <b>Total: </b>
          {total}
        </p>
        <StyledButton type="submit">Send</StyledButton>
      </FooterContactForm>
    </RightSideContactForm>
  );
};

export default OrderInfo;
