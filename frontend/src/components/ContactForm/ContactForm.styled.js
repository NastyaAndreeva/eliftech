import { Form, Field } from "formik";
import styled from "styled-components";

export const FormStyled = styled(Form)`
  display: flex;
  flex-direction: column;
  width: 800px;
  position: relative;
`;

export const InputStyled = styled(Field)`
  border-radius: 10px;
  color: #000111;
  margin-bottom: 30px;
  height: 50px;
  padding: 10px;
  width: 400px;
`;

export const ContactBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px;
  margin-right: 50px;
`;

export const LabelStyled = styled.label`
  font-size: 20px;
  margin-bottom: 15px;
  font-weight: 500;
`;

export const ContactFormTitle = styled.h3`
  font-size: 20px;
  font-weight: 500;
  margin-left: 30px;
`;

export const FooterContactForm = styled.div`
  display: flex;
  align-items: center;
  width: 300px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`;
