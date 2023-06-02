import { Form, Field, ErrorMessage } from "formik";
import styled from "styled-components";

export const FormStyled = styled(Form)`
  display: flex;
  justify-content: space-between;
`;

export const InputStyled = styled(Field)`
  border-radius: 10px;
  color: #000111;
  margin-bottom: 15px;
  height: 50px;
  padding: 10px;
  width: 400px;
`;

export const ContactBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px;
  margin-right: 50px;
`;

export const LabelStyled = styled.label`
  font-size: 20px;
  margin-bottom: 5px;
  font-weight: 500;
`;

export const FooterContactForm = styled.div`
  display: flex;
  align-items: center;
  width: 300px;
  justify-content: space-between;
`;

export const RightSideContactForm = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ErrorMessageStyled = styled(ErrorMessage)`
  color: red;
  position: absolute;
  bottom: 0;
`;

export const ContactDetailBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 10px;
`;
