import styled from "styled-components";

export const OrderItemStyled = styled.li`
  list-style: none;
  display: flex;
  align-items: center;
`;

export const OrderItemTitle = styled.p`
  width: 100px;
  margin-left: 10px;
  margin-right: 10px;
`;

export const QuantityContainer = styled.div`
  display: flex;
`;

export const OrderListStyled = styled.ul`
  /* height: 532px; */
`;

export const ValueBox = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 20px;
  margin-right: 20px;
`;

export const ChangeQuantityBtn = styled.button`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  width: 40px;
  height: 40px;
  background-color: #fff;
  border-radius: 10px;
`;
