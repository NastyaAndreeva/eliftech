import {
  ShopListContainer,
  ShopListTitle,
  StyledShopList,
} from "./ShopList.styled";

const mockShops = ["Sagittari", "Nivara", "Yeni", "Isis", "Celestea"];

const ShopList = () => {
  return (
    <ShopListContainer>
      <ShopListTitle>Shops</ShopListTitle>
      <StyledShopList>
        {mockShops.map((el) => (
          <li key={el}>{el}</li>
        ))}
      </StyledShopList>
    </ShopListContainer>
  );
};

export default ShopList;
