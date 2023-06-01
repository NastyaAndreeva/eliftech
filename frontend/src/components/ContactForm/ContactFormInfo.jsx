import { ErrorMessage } from "formik";
import { ContactBox, InputStyled, LabelStyled } from "./ContactForm.styled";

const ContactFormInfo = () => {
  return (
    <ContactBox>
      <LabelStyled htmlFor="name">Name: </LabelStyled>
      <InputStyled type="text" name="name" placeholder="Enter your name" />
      <ErrorMessage name="name" component="div" />
      <LabelStyled htmlFor="email">Email: </LabelStyled>
      <InputStyled type="email" name="email" placeholder="Enter your email" />
      <ErrorMessage name="email" component="div" />
      <LabelStyled htmlFor="phone">Phone: </LabelStyled>
      <InputStyled type="text" name="phone" placeholder="Enter your phone" />
      <ErrorMessage name="phone" component="div" />
      <LabelStyled htmlFor="address">Address: </LabelStyled>
      <InputStyled
        type="text"
        name="address"
        placeholder="Enter your address"
      />
      <ErrorMessage name="address" component="div" />
    </ContactBox>
  );
};

export default ContactFormInfo;
