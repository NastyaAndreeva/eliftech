import { Form, Field } from "formik";
import styled from "styled-components";

export const FormStyled = styled(Form)`
  display: flex;
  flex-direction: column;
  width: 700px;
  padding: 30px;
`;

export const InputStyled = styled(Field)`
  border-radius: 10px;
  color: #000111;
  margin-bottom: 15px;
  height: 50px;
  padding: 10px;
`;
