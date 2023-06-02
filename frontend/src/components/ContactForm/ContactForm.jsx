import { Formik } from "formik";
import * as Yup from "yup";
import { useEffect, useMemo, useState } from "react";
import { FormStyled } from "./ContactForm.styled";
import { addOrder } from "../../api";
import { Container } from "../shared/Container.styled";
import calculateTotalValue from "../../helpers/calculateTotalValue";
import ContactFormInfo from "./ContactFormInfo";
import OrderInfo from "./OrderInfo";

const ContactInfoSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("The name is required"),
  phone: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("The phone is required"),
  email: Yup.string().email("Invalid email").required("The email is required"),
  address: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("The address is required"),
});

const ContactForm = () => {
  const orders = useMemo(
    () => JSON.parse(localStorage.getItem("orders")) || [],
    []
  );

  const shop = localStorage.getItem("shop");
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setTotal(calculateTotalValue(orders));
  }, [orders]);

  const onFormSubmit = (values, resetForm) => {
    const orders = JSON.parse(localStorage.getItem("orders"));
    const newOrder = {
      orders,
      customer: values,
      shop,
      date: new Date(),
      total,
    };

    addOrder(newOrder);

    resetForm();
    localStorage.setItem("orders", JSON.stringify([]));
    setTotal(0);
  };

  return (
    <Formik
      initialValues={{ name: "", email: "", phone: "", address: "" }}
      onSubmit={(values, { resetForm }) => {
        onFormSubmit(values, resetForm);
      }}
      validationSchema={ContactInfoSchema}
    >
      {() => (
        <Container>
          <FormStyled>
            <ContactFormInfo />
            {orders.length !== 0 && (
              <OrderInfo orders={orders} total={total} setTotal={setTotal} />
            )}
          </FormStyled>
        </Container>
      )}
    </Formik>
  );
};

export default ContactForm;
