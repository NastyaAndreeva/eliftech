import styled from "styled-components";

export const ProductItemStyled = styled.li`
  width: 250px;
  margin-right: 30px;
`;

export const StyledButton = styled.button`
  cursor: pointer;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border: 1px solid #ffffff;
  border-radius: 5px;
  width: 146px;
  height: 54px;
  color: #fff;
  background-color: #28a745;
  &:hover {
    background-color: #fff;
    border: 1px solid #28a745;
    color: #28a745;
    transition: color 0.35s, background-color 0.35s;
  }
`;

export const ProductDetail = styled.p`
  margin-bottom: 10px;
  font-size: 18px;
  line-height: 22px;
`;
