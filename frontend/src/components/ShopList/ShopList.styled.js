import styled from "styled-components";

export const ShopListContainer = styled.div`
  width: 500px;
  padding: 30px;
`;

export const StyledShopList = styled.ul`
  list-style: none;
  font-size: 30px;
  margin-right: 50px;
`;

export const ShopListTitle = styled.h2`
  font-size: 40px;
  font-weight: 600;
  margin-bottom: 30px;
`;

export const ShopListElement = styled.li`
  margin-bottom: 30px;
  border: 2px solid black;
  padding: 5px;
  cursor: pointer;
  border-radius: 15px;
  &:hover {
    border: 2px solid black;
  }
`;
