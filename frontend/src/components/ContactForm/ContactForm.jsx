import { Formik, ErrorMessage } from "formik";
import { FormStyled, InputStyled } from "./ContactForm.styled";

const ContactForm = () => {
  return (
    <div>
      <h1>Enter your contact information</h1>
      <Formik
        initialValues={{ email: "", name: "", address: "", phone: "" }}
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
        onSubmit={(values) => {
          setTimeout(() => {
            console.log(JSON.stringify(values, null, 2));
          }, 400);
        }}
      >
        {() => (
          <FormStyled>
            <InputStyled
              type="text"
              name="name"
              placeholder="Enter your name"
            />
            <ErrorMessage name="name" component="div" />
            <InputStyled
              type="email"
              name="email"
              placeholder="Enter your email"
            />
            <ErrorMessage name="email" component="div" />
            <InputStyled
              type="text"
              name="phone"
              placeholder="Enter your phone"
            />
            <ErrorMessage name="phone" component="div" />
            <InputStyled
              type="text"
              name="address"
              placeholder="Enter your address"
            />
            <ErrorMessage name="address" component="div" />
          </FormStyled>
        )}
      </Formik>
    </div>
  );
};

export default ContactForm;
