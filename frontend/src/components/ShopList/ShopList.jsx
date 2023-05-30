import { useState } from "react";
import {
  ShopListContainer,
  ShopListElement,
  ShopListTitle,
  StyledShopList,
} from "./ShopList.styled";

const mockShops = ["Sagittari", "Nivara", "Yeni", "Isis", "Celestea"];

const ShopList = () => {
  const [selectedIndex, setIndex] = useState(0);
  const onShopClick = (idx) => {
    localStorage.setItem("shop", mockShops[idx]);
    setIndex(idx);
  };
  return (
    <ShopListContainer>
      <ShopListTitle>Shops</ShopListTitle>
      <StyledShopList>
        {mockShops.map((el, idx) => (
          <ShopListElement
            onClick={() => onShopClick(idx)}
            key={el}
            style={{
              backgroundColor: idx === selectedIndex ? "teal" : "white",
              color: idx === selectedIndex ? "white" : "black",
            }}
          >
            {el}
          </ShopListElement>
        ))}
      </StyledShopList>
    </ShopListContainer>
  );
};

export default ShopList;
