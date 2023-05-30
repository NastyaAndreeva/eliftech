import { Formik, ErrorMessage } from "formik";
import { useEffect, useState } from "react";

import {
  ContactBox,
  ContactFormTitle,
  FooterContactForm,
  FormStyled,
  InputStyled,
  LabelStyled,
} from "./ContactForm.styled";
import OrderList from "../OrderList/OrderList";
import { StyledButton } from "../ProductItem/ProductItem.styled";
import { addOrder } from "../../api";
import { Container } from "../shared/Container.styled";

const ContactForm = () => {
  const orders = JSON.parse(localStorage.getItem("orders"));
  const shop = localStorage.getItem("shop");
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const totalValue = orders.reduce(
      (acc, el) => acc + el.price * el.quantity,
      0
    );
    setTotal(totalValue);
  }, [orders]);

  return (
    <div>
      <Formik
        initialValues={{ name: "", email: "", phone: "", address: "" }}
        validate={(values) => {
          const errors = {};
          if (!values.email) {
            errors.email = "Required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          }
          return errors;
        }}
        onSubmit={(values, { resetForm }) => {
          const orders = JSON.parse(localStorage.getItem("orders"));
          const newOrder = {
            orders,
            customer: values,
            shop,
            date: new Date(),
            total,
          };
          console.log("newOrder: ", newOrder);
          addOrder(newOrder);

          resetForm();
          localStorage.setItem("orders", JSON.stringify([]));
          setTotal(0);
        }}
      >
        {() => (
          <Container>
            <FormStyled>
              <ContactFormTitle>
                Enter your contact information
              </ContactFormTitle>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <ContactBox>
                  <LabelStyled htmlFor="name">Name: </LabelStyled>
                  <InputStyled
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                  />
                  <ErrorMessage name="name" component="div" />
                  <LabelStyled htmlFor="email">Email: </LabelStyled>
                  <InputStyled
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                  />
                  <ErrorMessage name="email" component="div" />
                  <LabelStyled htmlFor="phone">Phone: </LabelStyled>
                  <InputStyled
                    type="text"
                    name="phone"
                    placeholder="Enter your phone"
                  />
                  <ErrorMessage name="phone" component="div" />
                  <LabelStyled htmlFor="address">Address: </LabelStyled>
                  <InputStyled
                    type="text"
                    name="address"
                    placeholder="Enter your address"
                  />
                  <ErrorMessage name="address" component="div" />
                </ContactBox>
                <OrderList setTotal={setTotal} />
              </div>
              <FooterContactForm>
                {total !== 0 && <p>Total: {total}</p>}
                {orders.length !== 0 && (
                  <StyledButton type="submit">Send</StyledButton>
                )}
              </FooterContactForm>
            </FormStyled>
          </Container>
        )}
      </Formik>
    </div>
  );
};

export default ContactForm;
