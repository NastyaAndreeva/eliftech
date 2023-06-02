import {
  ContactBox,
  ContactDetailBox,
  ErrorMessageStyled,
  InputStyled,
  LabelStyled,
} from "./ContactForm.styled";

const ContactFormInfo = () => {
  return (
    <ContactBox>
      <ContactDetailBox>
        <LabelStyled htmlFor="name">Name: </LabelStyled>
        <InputStyled type="text" name="name" placeholder="Enter your name" />
        <ErrorMessageStyled name="name" component="div" />
      </ContactDetailBox>
      <ContactDetailBox>
        <LabelStyled htmlFor="email">Email: </LabelStyled>
        <InputStyled type="email" name="email" placeholder="Enter your email" />
        <ErrorMessageStyled name="email" component="div" />
      </ContactDetailBox>
      <ContactDetailBox>
        <LabelStyled htmlFor="phone">Phone: </LabelStyled>
        <InputStyled type="text" name="phone" placeholder="Enter your phone" />
        <ErrorMessageStyled name="phone" component="div" />
      </ContactDetailBox>
      <ContactDetailBox>
        <LabelStyled htmlFor="address">Address: </LabelStyled>
        <InputStyled
          type="text"
          name="address"
          placeholder="Enter your address"
        />
        <ErrorMessageStyled name="address" component="div" />
      </ContactDetailBox>
    </ContactBox>
  );
};

export default ContactFormInfo;
