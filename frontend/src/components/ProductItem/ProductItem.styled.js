import styled from "styled-components";

export const ProductItemStyled = styled.li`
  width: 300px;
  margin-right: 30px;
`;

export const AddButton = styled.button`
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
  margin-top: 24px;
  background-color: #28a745;
  &:hover {
    background-color: #fff;
    border: 1px solid #28a745;
    color: #28a745;
    transition: color 0.35s, background-color 0.35s;
  }
`;
